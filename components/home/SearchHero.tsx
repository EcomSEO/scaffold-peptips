import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { pipelineCounts } from "@/lib/content/pipeline";

/**
 * Centered tagline-first hero, drugs.com pattern, peptips voice.
 *
 * - Centered eyebrow
 * - Centered Inter 400 H1, big
 * - Centered subhead
 * - Centered rounded search input with coral submit on the right
 * - "Trending questions" pill row of in-text links to real posts
 * - Small caps line with pipeline counters under the chips
 */

const TRENDING: { label: string; href: string }[] = [
  { label: "Ozempic week 1", href: "/ozempic-week-by-week" },
  { label: "Mounjaro side effects", href: "/glp1-side-effects-explained" },
  { label: "GLP-1 + alcohol", href: "/guides/lifestyle-on-glp1" },
  { label: "Cycling Wegovy", href: "/guides/plateaus-and-long-term" },
  { label: "GLP-1 muscle loss", href: "/guides/food-nutrition-and-muscle" },
  { label: "Sulfur burps", href: "/guides/side-effects-and-management" },
];

export async function SearchHero() {
  const counts = pipelineCounts();
  const t = await getTranslations("searchHero");
  const tHeader = await getTranslations("header");
  const tPipeline = await getTranslations("pipelinePage");

  return (
    <section className="relative bg-body-bg border-b border-[#D6D6D6]">
      <div className="relative mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-16 md:pb-20 text-center">
        <div className="flex justify-center">
          <span className="tag-pill">{t("eyebrow")}</span>
        </div>
        <h1
          className="mt-6 font-normal text-ink text-balance"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {t("h1")}
        </h1>
        <p className="mt-6 text-[1.125rem] md:text-[1.1875rem] text-ink-soft leading-[1.5] max-w-2xl mx-auto">
          {t("subhead")}
        </p>

        {/* Search input — visual; submit routes to a server-side search later. */}
        <form
          action="/search"
          method="get"
          role="search"
          aria-label="Search GLP-1 questions"
          className="mt-10 mx-auto max-w-2xl flex items-center gap-2 bg-white border border-[#D6D6D6] rounded-full pl-5 pr-1.5 h-14 md:h-[60px] focus-within:border-ink transition"
        >
          <svg
            aria-hidden
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="text-sage-deep shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>
          <input
            type="search"
            name="q"
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchButton")}
            className="flex-1 bg-transparent outline-none border-0 text-[15.5px] text-pine placeholder:text-stone"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 bg-coral hover:bg-coral-deep text-pine font-medium text-sm rounded-full px-5 h-11 transition-colors"
          >
            {t("searchButton")}
          </button>
        </form>

        {/* Trending row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[13.5px] text-stone">
          <span className="caps-label">{t("trendingLabel")}:</span>
          {TRENDING.map((t, i) => (
            <span key={t.label} className="inline-flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-sage-deep/40">
                  ·
                </span>
              )}
              <Link
                href={t.href}
                className="text-pine hover:text-coral-deep underline decoration-sage-deep/30 underline-offset-2 hover:decoration-coral"
              >
                {t.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Pipeline counters */}
        <div className="mt-6 caps-label text-stone tnum">
          <Link href="/pipeline" className="hover:text-pine">
            {counts.inResearch} {tPipeline("section.researching").toLowerCase()}
          </Link>
          <span aria-hidden className="mx-2 text-sage-deep/40">·</span>
          <Link href="/pipeline" className="hover:text-pine">
            {counts.queued} {tPipeline("status.scheduled").toLowerCase()}
          </Link>
          <span aria-hidden className="mx-2 text-sage-deep/40">·</span>
          <Link href="/methodology/v1-2" className="hover:text-pine">
            {tHeader("methodologyVersion")}
          </Link>
        </div>
      </div>
    </section>
  );
}
