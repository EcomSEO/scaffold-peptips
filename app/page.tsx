import Link from "next/link";
import { hubs, getHub } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, FieldRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { EmailCapture } from "@/components/EmailCapture";

const typeLabel: Record<string, string> = {
  pillar: "The Guide",
  comparison: "The Comparison",
  cluster: "The Explainer",
  listicle: "The Checklist",
};

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);
  const comparisons = posts.filter((p) => p.postType === "comparison").slice(0, 3);
  const explainers = posts.filter((p) => p.postType === "cluster").slice(0, 3);

  return (
    <main>
      {/* === HERO — "In this issue" editorial front page === */}
      <section className="border-b border-pine/10">
        <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8 fade-up">
              <Eyebrow tone="coral">
                Issue 01 &nbsp;·&nbsp; Field Notes
              </Eyebrow>
              <h1 className="display-headline text-pine mt-5 text-[2.75rem] sm:text-5xl md:text-[4.1rem] leading-[1.03]">
                Real answers about life on a{" "}
                <em className="not-italic text-sage-deep">GLP-1</em>.
              </h1>
              <p className="mt-7 text-lg md:text-xl text-charcoal/85 max-w-2xl leading-[1.55]">
                Answers your doctor didn&apos;t have time for — calm, cited,
                specific. Side effects, food, muscle, dosing, and the
                questions that feel too embarrassing to ask.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/guides/side-effects-and-management" className="btn-primary">
                  Start with side effects
                  <span aria-hidden>→</span>
                </Link>
                <Link href="#hubs" className="btn-secondary">
                  In this issue
                </Link>
              </div>
            </div>

            {/* In-this-issue sidebar */}
            <aside className="md:col-span-4 md:pl-8 md:border-l md:border-pine/10 fade-up-delay-1">
              <div className="eyebrow text-stone mb-4">In this issue</div>
              <ul className="space-y-4">
                {[featured, ...comparisons.filter((c) => c.slug !== featured?.slug)]
                  .slice(0, 4)
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))
                  .map((p, i) => {
                    const hub = getHub(p.hub);
                    return (
                      <li key={p.slug} className="flex gap-3">
                        <span className="rank-numeral !text-xl !text-sage-deep/50 tnum shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <Link
                            href={`/${p.slug}`}
                            className="font-serif text-[17px] leading-snug text-pine hover:text-sage-deep transition block"
                          >
                            {p.title}
                          </Link>
                          <div className="text-[11px] uppercase tracking-[0.14em] text-stone mt-1">
                            {hub?.shortName} · {p.readingTime} min
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* === FEATURED INVESTIGATION === */}
      {featured && (
        <section className="border-b border-pine/10 bg-cream-deep/40">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <Eyebrow tone="coral">The Long Read</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-pine mt-4 leading-[1.1]">
                  The one Jen keeps coming back to.
                </h2>
                <p className="mt-5 text-charcoal/75 text-[15px] leading-relaxed">
                  Every issue we anchor one long read — the post readers
                  bookmark in week 1 and re-open in week 5 when the dose
                  steps up. This one&apos;s been our most-read since launch.
                </p>
              </div>

              <article className="md:col-span-7">
                <Link
                  href={`/${featured.slug}`}
                  className="group block bg-paper border border-pine/15 rounded-sm p-8 md:p-10 shadow-soft hover:shadow-card hover:border-sage-deep/60 transition"
                >
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span className="tier-badge">Editor&apos;s pick</span>
                    <span className="caps-label text-stone">
                      {getHub(featured.hub)?.shortName} · {featured.readingTime} min read
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.9rem] md:text-[2.3rem] leading-[1.08] text-pine">
                    {featured.title}
                  </h3>
                  <p className="mt-5 text-charcoal/80 text-[15.5px] leading-relaxed">
                    {featured.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sage-deep group-hover:text-coral-deep transition text-sm font-medium">
                    Read the full timeline
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* === THE FIVE HUBS === */}
      <section id="hubs" className="border-b border-pine/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="sage">The table of contents</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-pine mt-3 leading-tight">
                Five hubs. Everything a GLP-1 reader needs, organized.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-sage-deep hover:text-coral-deep text-sm font-medium"
            >
              Why we built it this way →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-pine/10">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-pine/10 last:border-r-0 hover:bg-cream-deep/50 transition"
              >
                <span className="rank-numeral !text-4xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-pine leading-tight mb-2">
                  {hub.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sage-deep group-hover:text-coral-deep text-xs font-medium uppercase tracking-[0.14em]">
                  Open hub
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === LATEST — two-column editorial === */}
      <section className="border-b border-pine/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="coral">Freshly filed</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-pine mt-3 leading-tight">
                The latest field notes.
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
                    {/* Glass-of-water-style icon — photography stand-in */}
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
                    {getHub(recent[0].hub)?.shortName} · {recent[0].readingTime} min read
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

      {/* === THE CREDO — "How we report" === */}
      <section className="border-b border-pine/10 bg-pine text-cream relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 relative">
          <div className="absolute top-8 left-6 right-6">
            <FieldRule className="text-sage-light" />
          </div>
          <Eyebrow tone="coral" className="!text-coral">How we report</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-[1.15] text-cream">
            <span className="text-sage-light">We promise</span> a site where
            every claim is cited, every uncertainty is named, and no telehealth
            clinic has ever paid for a mention.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="rank-numeral !text-sage-light mb-2">01</div>
              <h3 className="font-serif text-xl text-cream mb-2">Cited, not clinical.</h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                Every claim about a drug, a dose, or a side effect links to
                the FDA label or the published trial — not a press release.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-sage-light mb-2">02</div>
              <h3 className="font-serif text-xl text-cream mb-2">Uncertainty, named.</h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                Long-term data doesn&apos;t exist yet for most of this class.
                We flag it. We don&apos;t bury it in a footnote.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-sage-light mb-2">03</div>
              <h3 className="font-serif text-xl text-cream mb-2">No clinic money.</h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                We do not accept payment from drug manufacturers or
                telehealth clinics. Ever. Trust is the asset.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-sage-light/30">
            <Link
              href="/editorial-standards"
              className="inline-flex items-center gap-1.5 text-sage-light hover:text-coral text-sm font-medium"
            >
              Read our full editorial standards
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <section className="border-b border-pine/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="sage">The Explainers</Eyebrow>
                <h2 className="font-serif text-3xl text-pine mt-3 leading-tight">
                  The questions that don&apos;t have good answers elsewhere.
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
      )}

      {/* === DISPATCH (Newsletter) === */}
      <section className="bg-cream-deep/60 border-b border-pine/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center mb-8">
            <Eyebrow tone="coral">The Sunday Dispatch</Eyebrow>
            <h2 className="font-serif text-3xl md:text-[2.5rem] text-pine mt-3 leading-[1.1] max-w-2xl mx-auto">
              One calm, cited email every Sunday.
            </h2>
            <p className="mt-5 text-charcoal/80 text-[15.5px] max-w-xl mx-auto leading-relaxed">
              One question, answered — never a fire-hose. Plus the free
              &quot;First 30 Days on a GLP-1&quot; guide when you subscribe.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>

      {/* === CLOSING DATELINE === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-stone mt-6">
            Last updated · {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>
    </main>
  );
}
