import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getPost, posts } from "@/lib/content/posts";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { pageMetadata } from "@/lib/seo";
import { localizePost } from "@/lib/content/posts-i18n";
import { type Locale, defaultLocale } from "@/i18n/routing";

// Avoid colliding with /about, /contact, etc — static pages take precedence.
const RESERVED = new Set([
  "about",
  "contact",
  "privacy",
  "terms",
  "affiliate-disclosure",
  "editorial-standards",
  "newsletter",
  "medical-disclaimer",
  "methodology",
  "pipeline",
  "guides",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
]);

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  if (RESERVED.has(slug)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const li = localizePost(slug, locale, {
    title: post.title,
    h1: post.h1,
    description: post.description,
  });
  const suffix =
    post.postType === "comparison"
      ? ` (${new Date(post.updatedAt).getFullYear()})`
      : "";
  return pageMetadata({
    title: `${li.title}${suffix}`,
    description: li.description,
    path: `/${post.slug}`,
    locale,
    ogType: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  if (RESERVED.has(slug)) notFound();
  const post = getPost(slug);
  if (!post) notFound();

  const li = localizePost(slug, locale, {
    title: post.title,
    h1: post.h1,
    description: post.description,
  });
  const localizedPost = { ...post, title: li.title, h1: li.h1, description: li.description };

  const banner =
    locale !== defaultLocale ? <TranslationPendingBanner /> : null;

  return (
    <>
      {banner}
      <ArticleTemplate post={localizedPost} />
    </>
  );
}
