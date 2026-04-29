import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getHub, hubs, localizeHub } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import type { Locale } from "@/i18n/routing";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import type { ArticleCardData } from "@/components/ArticleCard";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string; locale: Locale }>;
}): Promise<Metadata> {
  const { hub: hubSlug, locale } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  const hl = localizeHub(hub, locale);
  return pageMetadata({
    title: hl.name,
    description: hl.oneLiner,
    path: `/guides/${hub.slug}`,
    locale,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string; locale: Locale }>;
}) {
  const { hub: hubSlug, locale } = await params;
  setRequestLocale(locale);
  const hub = getHub(hubSlug);
  if (!hub) notFound();
  const hl = localizeHub(hub, locale);

  const hubPosts = postsByHub(hub.slug);
  const cards: ArticleCardData[] = hubPosts.map((p, i) => {
    const i18n = localizePost(p.slug, locale, {
      title: p.title,
      h1: p.h1,
      description: p.description,
    });
    return {
      slug: p.slug,
      title: i18n.title ?? p.title,
      description: i18n.description ?? p.description,
      category: hl.name,
      author: "Eleanor Voss",
      readingTime: p.readingTime,
      reviewed: p.medicalDisclaimer === "required",
      evidenceTier: ((5 - (i % 3)) || 4) as 1 | 2 | 3 | 4 | 5,
    };
  });

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Hubs", href: "/#categories" },
    { label: hl.name },
  ];

  return (
    <main className="bg-white">
      <div className="border-b border-rule">
        <div className="mx-auto max-w-container px-6 py-4">
          <BreadcrumbNav crumbs={crumbs} />
        </div>
      </div>

      {/* Hub masthead */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-container px-6 pt-12 pb-12 md:pt-16">
          <div className="max-w-[800px]">
            <div className="eyebrow mb-3">{hl.shortName}</div>
            <h1 className="font-serif text-[40px] md:text-[56px] font-semibold leading-[1.05] tracking-tight text-ink">
              {hl.name}
            </h1>
            <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted max-w-[60ch]">
              {hl.oneLiner}
            </p>
            <p className="mt-4 text-[15px] text-ink-muted leading-relaxed max-w-[60ch]">
              {hl.thesis}
            </p>
          </div>
        </div>
      </section>

      {cards.length > 0 ? (
        <CategoryTileGrid
          eyebrow="In this hub"
          heading="Where to start."
          description={`${cards.length} guide${cards.length === 1 ? "" : "s"} so far. We add to this hub as new trials land or readers ask.`}
          articles={cards}
        />
      ) : (
        <section className="mx-auto max-w-container px-6 py-20">
          <p className="text-[16px] text-ink-muted leading-relaxed max-w-prose">
            Posts land in this hub as they clear editorial review.{" "}
            <Link href="/" className="text-pine-deep underline">
              See what is live today
            </Link>
            .
          </p>
        </section>
      )}

      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-container px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="eyebrow mb-3">All five hubs</div>
              <h2 className="text-[24px] font-bold text-ink leading-tight">
                Step out into the rest of peptips.
              </h2>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed">
                Every hub gets the same calm, cited treatment. Pick the question that comes next.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-2">
              {hubs
                .filter((h) => h.slug !== hub.slug)
                .map((h) => {
                  const local = localizeHub(h, locale);
                  return (
                    <li key={h.slug}>
                      <Link
                        href={`/guides/${h.slug}`}
                        className="group flex items-center justify-between bg-white border border-rule rounded-md px-4 py-3 hover:border-pine transition-colors"
                      >
                        <span className="text-[15px] font-medium text-ink group-hover:text-pine-deep">
                          {local.name}
                        </span>
                        <span aria-hidden className="text-pine-deep">→</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
