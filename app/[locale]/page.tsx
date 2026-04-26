import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { hubs, getHub, localizeHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { AnimatedFieldRule } from "@/components/editorial/AnimatedFieldRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";
import { EmailCapture } from "@/components/EmailCapture";
import { SearchHero } from "@/components/home/SearchHero";
import { UtilityTiles } from "@/components/home/UtilityTiles";
import { TeaserCards } from "@/components/home/TeaserCards";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFeatured = await getTranslations("homeFeatured");
  const tCommon = await getTranslations("common");
  const tCredo = await getTranslations("homeCredo");
  const tLatest = await getTranslations("homeLatest");
  const tMag = await getTranslations("magazineGrid");
  const tType = await getTranslations("postType");
  const tPostChrome = await getTranslations("postChrome");
  const tNewsletter = await getTranslations("homeNewsletter");
  const tClosing = await getTranslations("closing");
  const typeLabel: Record<string, string> = {
    pillar: tType("pillar"),
    comparison: tType("comparison"),
    cluster: tType("cluster"),
    listicle: tType("listicle"),
  };
  const featured = featuredPost();
  const featuredI18n = featured
    ? localizePost(featured.slug, locale, {
        title: featured.title,
        h1: featured.h1,
        description: featured.description,
      })
    : null;
  const recent = latestPosts(6);
  const explainers = posts.filter((p) => p.postType === "cluster").slice(0, 3);

  return (
    <main>
      {/* === HERO — drugs.com-style centered tagline + search === */}
      <SearchHero />

      {/* === 4 utility tiles === */}
      <UtilityTiles />

      {/* === 2 large colored teaser cards === */}
      <TeaserCards />

      {/* === FEATURED LONG READ === */}
      {featured && (
        <ScrollReveal>
          <section className="border-b border-pine/10 bg-cream-deep/40">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="grid md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-5">
                  <Eyebrow tone="coral">{tFeatured("eyebrow")}</Eyebrow>
                  <h2 className="font-serif text-3xl md:text-4xl text-pine mt-4 leading-[1.1]">
                    {tFeatured("title")}
                  </h2>
                  <p className="mt-5 text-charcoal/80 text-[15px] leading-relaxed">
                    {tFeatured("intro")}
                  </p>
                </div>

                <article className="md:col-span-7">
                  <Link
                    href={`/${featured.slug}`}
                    className="card-lift group block bg-paper border border-pine/15 rounded-sm p-8 md:p-10 shadow-soft hover:border-sage-deep/60"
                  >
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      <span className="tier-badge">{tMag("editorsPick")}</span>
                      <span className="caps-label text-stone">
                        {getHub(featured.hub)?.shortName} · {tPostChrome("minRead", { n: featured.readingTime })}
                      </span>
                    </div>
                    <h3 className="font-serif text-[1.9rem] md:text-[2.3rem] leading-[1.08] text-pine">
                      {featuredI18n?.title ?? featured.title}
                    </h3>
                    <p className="mt-5 text-charcoal/80 text-[15.5px] leading-relaxed">
                      {featuredI18n?.description ?? featured.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sage-deep group-hover:text-coral-deep transition text-sm font-medium">
                      {tFeatured("cta")}
                      <span aria-hidden>→</span>
                    </span>
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* === THE FIVE HUBS === */}
      <ScrollReveal>
        <section id="hubs" className="border-b border-pine/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <Eyebrow tone="sage">{tMag("tableOfContents")}</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-pine mt-3 leading-tight">
                  {tMag("title")}
                </h2>
              </div>
              <Link
                href="/about"
                className="text-sage-deep hover:text-coral-deep text-sm font-medium"
              >
                {tLatest("whyWeBuilt")} →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-pine/10">
              {hubs.map((hub, i) => {
                const hl = localizeHub(hub, locale);
                return (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}`}
                  className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-pine/10 last:border-r-0 hover:bg-cream-deep/50 transition"
                >
                  <span className="rank-numeral !text-4xl mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl text-pine leading-tight mb-2">
                    {hl.name}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                    {hl.oneLiner}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sage-deep group-hover:text-coral-deep text-xs font-medium uppercase tracking-[0.14em]">
                    {tCommon("openHub")}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* === LATEST — two-column editorial === */}
      <ScrollReveal>
        <section className="border-b border-pine/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <Eyebrow tone="coral">{tLatest("subhead")}</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-pine mt-3 leading-tight">
                  {tLatest("heading")}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-10">
              {recent[0] && (
                <article className="md:col-span-7">
                  <Link href={`/${recent[0].slug}`} className="group block">
                    <div className="aspect-[16/9] bg-gradient-to-br from-sage/20 via-cream-deep to-coral/10 rounded-sm mb-5 relative overflow-hidden border border-pine/10">
                      <div className="absolute bottom-5 left-5">
                        <span className="caps-label text-pine bg-paper/85 backdrop-blur px-2 py-1 rounded-sm">
                          {typeLabel[recent[0].postType]}
                        </span>
                      </div>
                      <svg
                        className="absolute top-5 right-5 text-sage-deep/50"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        aria-hidden
                      >
                        <path d="M6 3H18L16.5 21H7.5L6 3Z" />
                        <path d="M7 9H17" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-pine leading-[1.12] group-hover:text-coral-deep transition">
                      {recent[0].title}
                    </h3>
                    <p className="mt-3 text-charcoal/80 text-[15.5px] leading-relaxed line-clamp-3">
                      {recent[0].description}
                    </p>
                    <div className="mt-4 caps-label text-stone">
                      {getHub(recent[0].hub)?.shortName} · {tPostChrome("minRead", { n: recent[0].readingTime })}
                    </div>
                  </Link>
                </article>
              )}

              <div className="md:col-span-5 space-y-0">
                {recent.slice(1, 5).map((p) => (
                  <article
                    key={p.slug}
                    className="py-5 border-b border-pine/10 first:border-t first:pt-0 first:mt-0 last:border-b-0"
                  >
                    <Link href={`/${p.slug}`} className="group block">
                      <div className="caps-label text-stone mb-1.5">
                        {typeLabel[p.postType]} · {getHub(p.hub)?.shortName}
                      </div>
                      <h3 className="font-serif text-lg text-pine leading-snug group-hover:text-sage-deep transition">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] text-charcoal/70 leading-snug line-clamp-2">
                        {p.description}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* === THE CREDO — "How we report" === */}
      <ScrollReveal>
        <section className="border-b border-pine/10 bg-pine text-cream relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 relative">
            <div className="absolute top-8 left-6 right-6">
              <AnimatedFieldRule className="text-sage-light" />
            </div>
            <Eyebrow tone="coral" className="!text-coral">{tCredo("heading")}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-[1.15] text-cream">
              {tMag("credoTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              <div>
                <div className="rank-numeral !text-sage-light mb-2">01</div>
                <h3 className="font-serif text-xl text-cream mb-2">{tCredo("tile1.label")}</h3>
                <p className="text-cream/80 text-[14.5px] leading-relaxed">
                  {tCredo("tile1.body")}
                </p>
              </div>
              <div>
                <div className="rank-numeral !text-sage-light mb-2">02</div>
                <h3 className="font-serif text-xl text-cream mb-2">{tCredo("tile2.label")}</h3>
                <p className="text-cream/80 text-[14.5px] leading-relaxed">
                  {tCredo("tile2.body")}
                </p>
              </div>
              <div>
                <div className="rank-numeral !text-sage-light mb-2">03</div>
                <h3 className="font-serif text-xl text-cream mb-2">{tCredo("tile3.label")}</h3>
                <p className="text-cream/80 text-[14.5px] leading-relaxed">
                  {tCredo("tile3.body")}
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-sage-light/30">
              <Link
                href="/editorial-standards"
                className="inline-flex items-center gap-1.5 text-sage-light hover:text-coral text-sm font-medium"
              >
                {tCredo("readMore")}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <ScrollReveal>
          <section className="border-b border-pine/10">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
              <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
                <div>
                  <Eyebrow tone="sage">{tMag("explainerEyebrow")}</Eyebrow>
                  <h2 className="font-serif text-3xl text-pine mt-3 leading-tight">
                    {tMag("explainerTitle")}
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-0 border-t border-pine/10">
                {explainers.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-pine/10 last:border-r-0 hover:bg-cream-deep/50 transition"
                  >
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-pine leading-tight mt-3 group-hover:text-sage-deep transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* === DISPATCH (Newsletter) === */}
      <ScrollReveal>
        <section className="bg-cream-deep/60 border-b border-pine/10">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <div className="text-center mb-8">
              <Eyebrow tone="coral">{tNewsletter("eyebrow")}</Eyebrow>
              <h2 className="font-serif text-3xl md:text-[2.5rem] text-pine mt-3 leading-[1.1] max-w-2xl mx-auto">
                {tNewsletter("title")}
              </h2>
              <p className="mt-5 text-charcoal/80 text-[15.5px] max-w-xl mx-auto leading-relaxed">
                {tNewsletter("body")}
              </p>
            </div>
            <EmailCapture />
          </div>
        </section>
      </ScrollReveal>

      {/* === CLOSING DATELINE === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-stone mt-6">
            {tClosing("lastUpdated")} · {new Date().toLocaleString(locale, { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>
    </main>
  );
}
