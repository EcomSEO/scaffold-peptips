import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { latestPosts, posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import { HeroLite } from "@/components/home/HeroLite";
import { CategoryGrid, type CategoryTile } from "@/components/home/CategoryGrid";
import { GuidesGrid, type GuideTile } from "@/components/home/GuidesGrid";
import { ScrollRow, type ScrollRowCard } from "@/components/home/ScrollRow";
import { TestingProcess } from "@/components/home/TestingProcess";
import { PressBar } from "@/components/home/PressBar";
import type { Locale } from "@/i18n/routing";

// NOTE: SearchHero / UtilityTiles / TeaserCards are intentionally NOT
// imported. The home page now follows the runrepeat image-grid structure;
// those components remain on disk for re-use elsewhere later.

const PRESS_OUTLETS = [
  "PUBMED",
  "CLINICALTRIALS.GOV",
  "FDA",
  "EUROPEAN MEDICINES AGENCY",
  "BMJ",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tRR = await getTranslations("homeRR");

  // ───────────────────────────────────────────── Category tiles (8)
  // 5 existing hubs + 3 expansion categories (placeholders for now).
  const hubTiles: CategoryTile[] = hubs.map((hub) => {
    const hl = localizeHub(hub, locale);
    return {
      href: `/guides/${hub.slug}`,
      label: hl.shortName,
    };
  });
  const expansionTiles: CategoryTile[] = [
    { href: "/guides", label: tRR("catDrugProfiles") },
    { href: "/guides", label: tRR("catPregnancy") },
    { href: "/guides", label: tRR("catMentalHealth") },
  ];
  const categoryTiles: CategoryTile[] = [...hubTiles, ...expansionTiles].slice(0, 8);

  // ───────────────────────────────────────────── In-depth guides (8)
  // Pull pillar + comparison posts. There are fewer than 8 in the launch
  // dataset, so pad with cluster posts to keep the 4×2 grid full.
  const indepth = [
    ...posts.filter((p) => p.postType === "pillar"),
    ...posts.filter((p) => p.postType === "comparison"),
    ...posts.filter((p) => p.postType === "cluster"),
    ...posts.filter((p) => p.postType === "listicle"),
  ];
  const indepthTiles: GuideTile[] = indepth.slice(0, 8).map((p) => {
    const i18n = localizePost(p.slug, locale, {
      title: p.title,
      h1: p.h1,
      description: p.description,
    });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      caption: i18n.description ?? p.description,
    };
  });

  // ───────────────────────────────────────────── Latest field notes (7)
  const latest = latestPosts(7);
  const latestCards: ScrollRowCard[] = latest.map((p) => {
    const i18n = localizePost(p.slug, locale, { title: p.title, h1: p.h1, description: p.description });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      meta: new Date(p.publishedAt).toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
  });

  // ───────────────────────────────────────────── Popular guides (7)
  // Featured first, then by reading-time desc as a stand-in for popularity.
  const popular = [...posts]
    .sort((a, b) => {
      const af = a.featured ? 1 : 0;
      const bf = b.featured ? 1 : 0;
      if (af !== bf) return bf - af;
      return b.readingTime - a.readingTime;
    })
    .slice(0, 7);
  const popularCards: ScrollRowCard[] = popular.map((p) => {
    const i18n = localizePost(p.slug, locale, { title: p.title, h1: p.h1, description: p.description });
    return {
      href: `/${p.slug}`,
      title: i18n.title ?? p.title,
      meta: new Date(p.publishedAt).toLocaleDateString(locale, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
  });

  return (
    <main>
      {/* Hero — H1 + pipeline meta line + image-slot */}
      <HeroLite
        h1={tRR("h1")}
        metaLine={tRR("pipelineMeta")}
      />

      {/* Guides — 8 hub/category tiles in a 4×2 grid */}
      <CategoryGrid heading={tRR("guides")} tiles={categoryTiles} />

      {/* In-depth guides — 8 pillar/comparison thumbnails in a 4×2 grid */}
      <GuidesGrid heading={tRR("inDepth")} tiles={indepthTiles} />

      {/* Latest field notes — 7-card horizontal scroll row */}
      <ScrollRow heading={tRR("latest")} cards={latestCards} />

      {/* Popular guides — 7-card horizontal scroll row */}
      <ScrollRow heading={tRR("popular")} cards={popularCards} />

      {/* How we research — 3-photo strip with numbered captions */}
      <TestingProcess
        heading={tRR("testing")}
        steps={[tRR("testingStep1"), tRR("testingStep2"), tRR("testingStep3")]}
      />

      {/* Editorial standards — minimal 3-link row */}
      <section className="border-b border-[#D6D6D6]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/methodology" className="group block">
              <div className="caps-meta group-hover:text-ink transition-colors">
                {tRR("methodologyLink")}
              </div>
              <p className="mt-2 text-[13px] text-ink-soft leading-snug">
                {tRR("editorialMethodology")}
              </p>
            </Link>
            <Link href="/editorial-standards" className="group block">
              <div className="caps-meta group-hover:text-ink transition-colors">
                {tRR("editorialLink")}
              </div>
              <p className="mt-2 text-[13px] text-ink-soft leading-snug">
                {tRR("editorialStandardsBlurb")}
              </p>
            </Link>
            <Link href="/medical-disclaimer" className="group block">
              <div className="caps-meta group-hover:text-ink transition-colors">
                {tRR("disclaimerLink")}
              </div>
              <p className="mt-2 text-[13px] text-ink-soft leading-snug">
                {tRR("editorialDisclaimer")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* As referenced in — text-only press bar */}
      <PressBar heading={tRR("pressLabel")} outlets={PRESS_OUTLETS} />
    </main>
  );
}
