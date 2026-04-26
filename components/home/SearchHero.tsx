import Link from "next/link";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { pipelineCounts } from "@/lib/content/pipeline";

/**
 * Centered tagline-first hero, drugs.com pattern, peptips voice.
 *
 * - Centered eyebrow
 * - Centered Source-Serif-4 H1, big
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

export function SearchHero() {
  const counts = pipelineCounts();

  return (
    <section className="relative bg-cream border-b border-pine/10">
      {/* Soft warm wash, no animation under reduced-motion (gradient-mesh respects it globally) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(48rem 30rem at 12% 8%, rgba(197,210,190,0.35) 0%, transparent 60%), radial-gradient(36rem 24rem at 92% 12%, rgba(232,146,124,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 pt-12 md:pt-16 pb-14 md:pb-20 text-center">
        <Eyebrow tone="coral">GLP-1 education · MMXXVI</Eyebrow>
        <h1
          className="display-headline text-pine mt-5 leading-[1.04]"
          style={{
            fontSize: "clamp(2.4rem, 5.6vw, 3.75rem)",
          }}
        >
          Real answers about life on a GLP-1, without the hype or the lectures.
        </h1>
        <p className="mt-6 text-[17px] md:text-[18px] text-charcoal/85 leading-[1.55] max-w-2xl mx-auto">
          We answer the questions your doctor didn&apos;t have time for. Cited
          from FDA labels, peer-reviewed trials, and the lived experience of
          women who&apos;ve been there.
        </p>

        {/* Search input — visual; submit routes to a server-side search later. */}
        <form
          action="/search"
          method="get"
          role="search"
          aria-label="Search GLP-1 questions"
          className="mt-9 mx-auto max-w-2xl flex items-center gap-2 bg-paper border border-sage-light/60 rounded-full pl-5 pr-1.5 h-14 md:h-[60px] shadow-soft focus-within:border-sage-deep focus-within:shadow-card transition"
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
            placeholder="Search GLP-1 questions, side effects, brand names…"
            aria-label="Search"
            className="flex-1 bg-transparent outline-none border-0 text-[15.5px] text-pine placeholder:text-stone"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1 bg-coral hover:bg-coral-deep text-pine font-medium text-sm rounded-full px-5 h-11 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Trending row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[13.5px] text-stone">
          <span className="caps-label">Trending:</span>
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
            {counts.inResearch} in research
          </Link>
          <span aria-hidden className="mx-2 text-sage-deep/40">·</span>
          <Link href="/pipeline" className="hover:text-pine">
            {counts.queued} queued
          </Link>
          <span aria-hidden className="mx-2 text-sage-deep/40">·</span>
          <Link href="/methodology/v1-2" className="hover:text-pine">
            Methodology v1.2
          </Link>
        </div>
      </div>
    </section>
  );
}
