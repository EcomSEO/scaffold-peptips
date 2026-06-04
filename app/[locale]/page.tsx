import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/Hero";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { FeaturedArticleCarousel } from "@/components/FeaturedArticleCarousel";
import { EmailCapture } from "@/components/EmailCapture";
import type { ArticleCardData } from "@/components/ArticleCard";

/** On-brand cover image per hub (see public/editorial/<hub>.jpg). */
const hubImage = (hubSlug: string) => `/editorial/${hubSlug}.jpg`;

/**
 * Homepage copy per locale. English is the base; locales without an entry
 * fall back to English. German (de) is fully translated; other locales will
 * be added as they are localized.
 */
type HomeCopy = Record<string, string>;
const HOME_COPY: Partial<Record<Locale, HomeCopy>> = {
  en: {
    heroEyebrow: "Calm, cited GLP-1 guidance",
    heroHeadline: "Real answers about life on a GLP-1, without the hype.",
    heroDek:
      "Side effects, food and muscle, dosing decisions, and the questions your doctor did not have time to answer, written for the people already on these medications, checked against the FDA labels and the trials, scored on the evidence.",
    ctaPrimary: "Browse the library",
    ctaSecondary: "How we score evidence",
    trustA: "Evidence-based, independently scored",
    trustB: "Cited to FDA labels & the trials themselves",
    badge: "Evidence-based",
    evidence: "Evidence",
    heroTrending: "Most-asked this week",
    by: "By",
    read: "min read",
    buyEyebrow: "Buying guides",
    buyHeading: "Our top product picks for GLP-1 users.",
    buyDesc:
      "Independent, evidence-based comparisons of the products that actually help on a GLP-1, scored on the evidence with our top pick called out. We may earn a commission, which never changes our rankings.",
    productsCompared: "products compared",
    ourPick: "Our pick:",
    seePicks: "See our picks",
    catEyebrow: "Start here",
    catHeading: "Start where you are.",
    catDesc:
      "Foundational guides across the five hubs, from the first 0.25 mg dose to year-two plateau questions.",
    carEyebrow: "Most-read this week",
    carHeading: "What the readers came for.",
    byTopic: "By topic",
    hubsHeading: "The five hubs.",
    hubsDesc:
      "Every post on peptips lives in one of five hubs. Pick the one that matches the question you woke up with.",
    workEyebrow: "How we work",
    workHeading: "Two independent sources before a sentence ships.",
    workDesc:
      "Every guide on peptips is written from FDA prescribing information, peer-reviewed trial data, and the published clinical literature. Two independent sources must agree before a claim ships, and every figure is checked against the original FDA label or trial before it goes live. Our Evidence Score is on every article so you can see the strength of the evidence at a glance.",
    methodologyCta: "Read methodology v1.2",
    stopEyebrow: "Stop & call your prescriber",
    stopHeading: "When this site is the wrong source.",
    stopDesc:
      "Nothing on peptips is a substitute for the prescription your clinician wrote, the Instructions for Use that came with your medication, or the judgment of the healthcare professional who knows your case. If a symptom does not match what you read here, treat what you read as out of date and call your prescriber.",
    disclaimerCta: "Read the full disclaimer",
  },
  de: {
    heroEyebrow: "Ruhige, belegte GLP-1-Informationen",
    heroHeadline: "Echte Antworten zum Leben mit einem GLP-1, ohne den Hype.",
    heroDek:
      "Nebenwirkungen, Ernährung und Muskeln, Dosisentscheidungen und die Fragen, für die in der Praxis keine Zeit blieb, geschrieben für Menschen, die diese Medikamente bereits nehmen, geprüft an den FDA-Fachinformationen und den Studien, nach der Evidenz bewertet.",
    ctaPrimary: "Zur Bibliothek",
    ctaSecondary: "Wie wir Evidenz bewerten",
    trustA: "Evidenzbasiert, unabhängig bewertet",
    trustB: "Belegt mit FDA-Fachinformationen und den Studien selbst",
    badge: "Evidenzbasiert",
    evidence: "Evidenz",
    heroTrending: "Diese Woche am häufigsten gefragt",
    by: "Von",
    read: "Min. Lesezeit",
    buyEyebrow: "Kaufberatung",
    buyHeading: "Unsere besten Produktempfehlungen für GLP-1-Nutzerinnen und -Nutzer.",
    buyDesc:
      "Unabhängige, evidenzbasierte Vergleiche der Produkte, die auf einem GLP-1 wirklich helfen, nach der Evidenz bewertet, mit klar genannter Top-Empfehlung. Wir erhalten möglicherweise eine Provision, was unsere Rangfolge nie beeinflusst.",
    productsCompared: "Produkte im Vergleich",
    ourPick: "Unsere Wahl:",
    seePicks: "Zu unseren Empfehlungen",
    catEyebrow: "Hier anfangen",
    catHeading: "Fangen Sie dort an, wo Sie stehen.",
    catDesc:
      "Grundlegende Leitfäden über alle fünf Themenbereiche, von der ersten 0,25-mg-Dosis bis zu den Plateau-Fragen im zweiten Jahr.",
    carEyebrow: "Diese Woche am meisten gelesen",
    carHeading: "Wonach unsere Leserinnen und Leser gesucht haben.",
    byTopic: "Nach Thema",
    hubsHeading: "Die fünf Themenbereiche.",
    hubsDesc:
      "Jeder Beitrag auf peptips gehört zu einem von fünf Themenbereichen. Wählen Sie den, der zu Ihrer Frage von heute passt.",
    workEyebrow: "Wie wir arbeiten",
    workHeading: "Zwei unabhängige Quellen, bevor ein Satz erscheint.",
    workDesc:
      "Jeder Leitfaden auf peptips entsteht aus den FDA-Fachinformationen, aus per Peer-Review geprüften Studiendaten und aus der veröffentlichten klinischen Literatur. Zwei unabhängige Quellen müssen übereinstimmen, bevor eine Aussage erscheint, und jede Zahl wird gegen die ursprüngliche FDA-Fachinformation oder Studie geprüft, bevor sie online geht. Unser Evidenz-Score steht an jedem Artikel, damit Sie die Stärke der Belege auf einen Blick sehen.",
    methodologyCta: "Methodik v1.2 lesen",
    stopEyebrow: "Stopp und rufen Sie Ihre Praxis an",
    stopHeading: "Wann diese Seite die falsche Quelle ist.",
    stopDesc:
      "Nichts auf peptips ersetzt das Rezept, das Ihre Ärztin oder Ihr Arzt ausgestellt hat, die Gebrauchsanweisung, die Ihrem Medikament beilag, oder das Urteil der medizinischen Fachperson, die Ihren Fall kennt. Wenn ein Symptom nicht zu dem passt, was Sie hier lesen, behandeln Sie das Gelesene als veraltet und rufen Sie Ihre Praxis an.",
    disclaimerCta: "Den vollständigen Haftungsausschluss lesen",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = HOME_COPY[locale] ?? HOME_COPY.en!;

  const hubName = (hubSlug: string) =>
    localizeHub(hubs.find((h) => h.slug === hubSlug)!, locale).name;

  const li = (slug: string) => {
    const p = posts.find((x) => x.slug === slug)!;
    return localizePost(p.slug, locale, {
      title: p.title,
      h1: p.h1,
      description: p.description,
    });
  };

  // Pick the featured pillar, flagged or first published.
  const featuredPost =
    posts.find((p) => p.featured) ??
    posts.find((p) => p.status === "published") ??
    posts[0];

  const featuredI18n = li(featuredPost.slug);
  const featured: ArticleCardData & { authorCredentials?: string } = {
    slug: featuredPost.slug,
    title: featuredI18n.title ?? featuredPost.title,
    description: featuredI18n.description ?? featuredPost.description,
    category: hubName(featuredPost.hub),
    author: "The Peptips Editorial Team",
    readingTime: featuredPost.readingTime,
    reviewed: true,
    evidenceTier: 5,
    image: `/heroes/${featuredPost.slug}.jpg`,
  };

  // Affiliate buying guides — the comparison/money pages, led up top.
  const buyingGuides = posts
    .filter((p) => p.postType === "comparison" && (p.products?.length ?? 0) > 0)
    .map((p) => {
      const i18n = li(p.slug);
      return {
        slug: p.slug,
        title: i18n.title ?? p.title,
        category: hubName(p.hub),
        image: `/heroes/${p.slug}.jpg`,
        count: (p.products ?? []).length,
        pick: p.ourPick?.name,
      };
    });

  const trending = posts
    .filter((p) => p.slug !== featuredPost.slug)
    .slice(0, 3)
    .map((p) => ({
      category: hubName(p.hub),
      title: li(p.slug).title ?? p.title,
      href: `/${p.slug}`,
    }));

  const toCard = (p: (typeof posts)[number]): ArticleCardData => {
    const i18n = li(p.slug);
    return {
      slug: p.slug,
      title: i18n.title ?? p.title,
      description: i18n.description ?? p.description,
      category: hubName(p.hub),
      author: "The Peptips Editorial Team",
      readingTime: p.readingTime,
      reviewed: p.medicalDisclaimer === "required",
      evidenceTier: (p.featured ? 5 : 4) as 1 | 2 | 3 | 4 | 5,
      image: `/heroes/${p.slug}.jpg`,
    };
  };

  const tileCards = posts
    .filter((p) => p.slug !== featuredPost.slug)
    .slice(0, 8)
    .map(toCard);

  const carouselCards = posts.slice(0, 8).map(toCard);

  return (
    <main>
      <Hero
        eyebrow={c.heroEyebrow}
        headline={c.heroHeadline}
        dek={c.heroDek}
        featured={featured}
        trending={trending}
        labels={{
          ctaPrimary: c.ctaPrimary,
          ctaSecondary: c.ctaSecondary,
          trustA: c.trustA,
          trustB: c.trustB,
          badge: c.badge,
          evidence: c.evidence,
          trending: c.heroTrending,
          by: c.by,
          read: c.read,
        }}
      />

      {/* Buying guides — affiliate-forward, led up top */}
      {buyingGuides.length > 0 && (
        <section id="buying-guides" className="border-b border-rule bg-surface-alt">
          <div className="mx-auto max-w-container px-6 py-16 md:py-20">
            <div className="max-w-2xl mb-10">
              <div className="eyebrow mb-3">{c.buyEyebrow}</div>
              <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-ink tracking-tight">
                {c.buyHeading}
              </h2>
              <p className="mt-3 text-[16px] text-ink-muted leading-relaxed">
                {c.buyDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {buyingGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${g.slug}`}
                  className="group block rounded-lg overflow-hidden bg-white border border-rule hover:shadow-cardHover hover:border-rule-strong transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-alt">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={g.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-pill bg-pine text-cream text-[11px] font-semibold">
                      {g.count} {c.productsCompared}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="eyebrow mb-2">{g.category}</div>
                    <h3 className="text-[18px] font-semibold text-ink leading-snug group-hover:text-pine-deep transition-colors">
                      {g.title}
                    </h3>
                    {g.pick && (
                      <p className="mt-2 text-[14px] text-ink-muted leading-relaxed">
                        {c.ourPick}{" "}
                        <span className="text-ink font-medium">{g.pick}</span>
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-pine-deep">
                      {c.seePicks}{" "}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CategoryTileGrid
        id="categories"
        eyebrow={c.catEyebrow}
        heading={c.catHeading}
        description={c.catDesc}
        articles={tileCards}
      />

      <FeaturedArticleCarousel
        eyebrow={c.carEyebrow}
        heading={c.carHeading}
        articles={carouselCards}
      />

      {/* Hubs strip — now with cover images */}
      <section className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-container px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow mb-2">{c.byTopic}</div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-ink leading-tight">
              {c.hubsHeading}
            </h2>
            <p className="mt-3 text-[16px] text-ink-muted leading-relaxed">
              {c.hubsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hubs.map((hub) => {
              const hl = localizeHub(hub, locale);
              return (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}`}
                  className="group block bg-white rounded-md border border-rule overflow-hidden hover:border-pine hover:shadow-card transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hubImage(hub.slug)}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="eyebrow mb-2">{hl.shortName}</div>
                    <h3 className="text-[17px] font-semibold text-ink group-hover:text-pine-deep transition-colors leading-snug">
                      {hl.name}
                    </h3>
                    <p className="mt-2 text-[13px] text-ink-muted leading-relaxed line-clamp-3">
                      {hl.oneLiner}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust + methodology strip */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-container px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-3">{c.workEyebrow}</div>
            <h2 className="text-[28px] font-bold text-ink leading-tight">
              {c.workHeading}
            </h2>
            <p className="mt-4 text-[16px] text-ink-muted leading-relaxed">
              {c.workDesc}
            </p>
            <Link
              href="/methodology"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-pine-deep hover:text-pine"
            >
              {c.methodologyCta} <span aria-hidden>→</span>
            </Link>
          </div>
          <div>
            <div className="eyebrow eyebrow-danger mb-3">
              {c.stopEyebrow}
            </div>
            <h2 className="text-[24px] font-bold text-ink leading-tight">
              {c.stopHeading}
            </h2>
            <p className="mt-4 text-[16px] text-ink-muted leading-relaxed">
              {c.stopDesc}
            </p>
            <Link
              href="/medical-disclaimer"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-pine-deep hover:text-pine"
            >
              {c.disclaimerCta} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-container px-6 py-16">
        <EmailCapture variant="end-of-article" />
      </section>
    </main>
  );
}
