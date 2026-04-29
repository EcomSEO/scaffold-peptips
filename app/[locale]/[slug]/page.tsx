import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getPost, posts } from "@/lib/content/posts";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { pageMetadata } from "@/lib/seo";
import { localizePost } from "@/lib/content/posts-i18n";
import { type Locale, defaultLocale } from "@/i18n/routing";
import {
  isRestrictedInSweden,
  SE_RESTRICTED_NOTICE,
} from "@/lib/compliance/sweden-restrictions";

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
  // Sweden compound stub: noindex + Läkemedelsverket reference.
  if (locale === "sv" && isRestrictedInSweden(slug)) {
    return pageMetadata({
      title: "Innehållet är inte tillgängligt i Sverige",
      description: SE_RESTRICTED_NOTICE,
      path: `/${post.slug}`,
      locale,
      noindex: true,
    });
  }
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

  // Sweden compound stub render: noindex + Läkemedelsverket reference,
  // no substantive article body. Aligned with compliance-gap-fill §5.
  if (locale === "sv" && isRestrictedInSweden(slug)) {
    return (
      <main className="bg-white">
        <article className="mx-auto max-w-prose px-6 py-16 prose">
          <h1>Innehållet är inte tillgängligt i Sverige</h1>
          <p>
            Den här artikeln behandlar ett ämne som är reglerat i Sverige
            enligt Läkemedelsverkets riktlinjer för apoteksberedning och
            förskrivning. Vi serverar inte den fullständiga artikeln på
            svenska för att undvika råd som inte är tillämpliga i
            Sverige.
          </p>
          <p>
            För information om vad som gäller i Sverige, se{" "}
            <a
              href="https://www.lakemedelsverket.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Läkemedelsverket
            </a>
            .
          </p>
        </article>
      </main>
    );
  }

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
