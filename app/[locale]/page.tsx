import { Link } from "@/i18n/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { hubs, getHub, localizeHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { localizePost } from "@/lib/content/posts-i18n";
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
        <section className="border-b border-[#D6D6D6]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <span className="caps-meta">{tFeatured("eyebrow")}</span>
                <h2
                  className="mt-4 font-normal text-ink"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
                >
                  {tFeatured("title")}
                </h2>
                <p className="mt-5 text-ink-soft text-[1.0625rem] leading-relaxed">
                  {tFeatured("intro")}
                </p>
              </div>

              <article className="md:col-span-7">
                <Link
                  href={`/${featured.slug}`}
                  className="group block bg-white border border-[#D6D6D6] rounded-sm p-8 md:p-10 hover:border-ink transition-colors"
                >
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span className="tag-pill">{tMag("editorsPick")}</span>
                    <span className="caps-meta">
                      {getHub(featured.hub)?.shortName} · {tPostChrome("minRead", { n: featured.readingTime })}
                    </span>
                  </div>
                  <h3
                    className="font-normal text-ink"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
                  >
                    {featuredI18n?.title ?? featured.title}
                  </h3>
                  <p className="mt-5 text-ink-soft text-[1.0625rem] leading-relaxed">
                    {featuredI18n?.description ?? featured.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-coral-deep group-hover:text-ink transition text-sm font-medium">
                    {tFeatured("cta")}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* === THE FIVE HUBS === */}
      <section id="hubs" className="border-b border-[#D6D6D6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="caps-meta">{tMag("tableOfContents")}</span>
              <h2
                className="mt-3 font-normal text-ink"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
              >
                {tMag("title")}
              </h2>
            </div>
            <Link
              href="/about"
              className="text-coral-deep hover:text-ink text-sm font-medium"
            >
              {tLatest("whyWeBuilt")} →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-[#D6D6D6]">
            {hubs.map((hub, i) => {
              const hl = localizeHub(hub, locale);
              return (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-[#D6D6D6] last:border-r-0 hover:bg-white transition-colors"
              >
                <span className="text-stone tnum text-3xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-ink text-xl font-semibold leading-tight mb-2">
                  {hl.name}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">
                  {hl.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-coral-deep group-hover:text-ink text-xs font-medium uppercase tracking-[0.1em]">
                  {tCommon("openHub")}
                  <span aria-hidden>→</span>
                </span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* === LATEST — two-column editorial === */}
      <section className="border-b border-[#D6D6D6]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="caps-meta">{tLatest("subhead")}</span>
              <h2
                className="mt-3 font-normal text-ink"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
              >
                {tLatest("heading")}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            {recent[0] && (
              <article className="md:col-span-7">
                <Link href={`/${recent[0].slug}`} className="group block">
                  <div
                    className="aspect-[16/9] mb-5 relative overflow-hidden border border-[#D6D6D6]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
                    }}
                  >
                    <div className="absolute bottom-5 left-5">
                      <span className="caps-meta bg-white px-2 py-1">
                        {typeLabel[recent[0].postType]}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="font-normal text-ink group-hover:text-coral-deep transition"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
                  >
                    {recent[0].title}
                  </h3>
                  <p className="mt-3 text-ink-soft text-[1.0625rem] leading-relaxed line-clamp-3">
                    {recent[0].description}
                  </p>
                  <div className="mt-4 caps-meta">
                    {getHub(recent[0].hub)?.shortName} · {tPostChrome("minRead", { n: recent[0].readingTime })}
                  </div>
                </Link>
              </article>
            )}

            <div className="md:col-span-5 space-y-0">
              {recent.slice(1, 5).map((p) => (
                <article
                  key={p.slug}
                  className="py-5 border-b border-[#D6D6D6] first:border-t first:pt-0 first:mt-0 last:border-b-0"
                >
                  <Link href={`/${p.slug}`} className="group block">
                    <div className="caps-meta mb-2">
                      {typeLabel[p.postType]} · {getHub(p.hub)?.shortName}
                    </div>
                    <h3 className="text-ink text-lg font-semibold leading-snug group-hover:text-coral-deep transition">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-ink-soft leading-snug line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === THE CREDO — "How we report" === */}
      <section className="border-b border-pine/30 bg-pine text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <span className="caps-meta !text-coral">{tCredo("heading")}</span>
          <h2
            className="mt-4 font-normal text-cream"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            {tMag("credoTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="text-sage-light tnum text-3xl mb-3">01</div>
              <h3 className="text-cream text-xl font-semibold mb-2">{tCredo("tile1.label")}</h3>
              <p className="text-cream/80 text-[15px] leading-relaxed">
                {tCredo("tile1.body")}
              </p>
            </div>
            <div>
              <div className="text-sage-light tnum text-3xl mb-3">02</div>
              <h3 className="text-cream text-xl font-semibold mb-2">{tCredo("tile2.label")}</h3>
              <p className="text-cream/80 text-[15px] leading-relaxed">
                {tCredo("tile2.body")}
              </p>
            </div>
            <div>
              <div className="text-sage-light tnum text-3xl mb-3">03</div>
              <h3 className="text-cream text-xl font-semibold mb-2">{tCredo("tile3.label")}</h3>
              <p className="text-cream/80 text-[15px] leading-relaxed">
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

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <section className="border-b border-[#D6D6D6]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
              <div>
                <span className="caps-meta">{tMag("explainerEyebrow")}</span>
                <h2
                  className="mt-3 font-normal text-ink"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
                >
                  {tMag("explainerTitle")}
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-t border-[#D6D6D6]">
              {explainers.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group p-6 border-b md:border-b-0 md:border-r border-[#D6D6D6] last:border-r-0 hover:bg-white transition-colors"
                >
                  <span className="text-stone tnum text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-ink text-xl font-semibold leading-tight mt-3 group-hover:text-coral-deep transition">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-ink-soft mt-2 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === DISPATCH (Newsletter) === */}
      <section className="border-b border-[#D6D6D6]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="text-center mb-10">
            <span className="caps-meta">{tNewsletter("eyebrow")}</span>
            <h2
              className="mt-3 font-normal text-ink max-w-2xl mx-auto"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}
            >
              {tNewsletter("title")}
            </h2>
            <p className="mt-5 text-ink-soft text-[1.0625rem] max-w-xl mx-auto leading-relaxed">
              {tNewsletter("body")}
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* === CLOSING DATELINE === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <hr className="border-0 border-t border-[#D6D6D6]" />
          <p className="text-center caps-meta mt-6">
            {tClosing("lastUpdated")} · {new Date().toLocaleString(locale, { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>
    </main>
  );
}
