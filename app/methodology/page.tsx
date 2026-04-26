import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { EvidenceScore } from "@/components/editorial/EvidenceScore";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Methodology",
  description:
    "How peptips reads the trial literature, how we cite, who reviews, and how we score evidence on a 0-100 scale.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <PageShell>
      <Eyebrow tone="coral">Methodology</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-pine mt-3 leading-tight">
        How we read the literature.
      </h1>
      <p className="mt-5 text-charcoal/85 text-[17px] leading-relaxed max-w-prose">
        Peptips is medical-adjacent. That means the way we write has to be more
        careful than a typical wellness site, and it means we have to show our
        work. This page is the short version. The full versioned spec lives at{" "}
        <Link
          href="/methodology/v1-2"
          className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
        >
          /methodology/v1-2
        </Link>
        .
      </p>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="sage">The five rules</Eyebrow>
        <ol className="mt-4 space-y-5">
          {RULES.map((r, i) => (
            <li
              key={r.title}
              className="grid grid-cols-[2.2rem_1fr] gap-4 pb-5 border-b border-pine/10 last:border-b-0"
            >
              <span className="rank-numeral !text-xl !text-sage-deep tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl text-pine leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15.5px] text-charcoal/85 leading-relaxed">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="coral">The Evidence Score</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-3 leading-tight">
          A 0-100 confidence score for the medical claims on this site.
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed max-w-prose">
          The Evidence Score is not a product rating. It&apos;s a confidence
          score for a specific claim — &quot;semaglutide preserves weight loss
          at 68 weeks,&quot; for instance. Five weighted dimensions go in, one
          number comes out, and the tier label tells you how much weight to put
          on it.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <EvidenceScore score={94} size="lg" />
          <EvidenceScore score={84} size="lg" />
          <EvidenceScore score={74} size="lg" />
          <EvidenceScore score={64} size="lg" />
          <EvidenceScore score={42} size="lg" />
        </div>
        <div className="mt-4">
          <Link
            href="/methodology/v1-2"
            className="text-sage-deep hover:text-coral-deep text-sm font-medium"
          >
            Read the full v1.2 spec →
          </Link>
        </div>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="sage">Reviewers</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-3 leading-tight">
          Who signs off.
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed max-w-prose">
          Posts that discuss a specific drug, dose, or protocol carry a review
          stamp at the top. The reviewer is a credentialed clinician — a
          pharmacist, physician, or registered dietitian, depending on the
          topic. Reviewer names and credentials show up on every reviewed post,
          and on the author bio at the bottom.
        </p>
      </section>
    </PageShell>
  );
}

const RULES = [
  {
    title: "The label or the trial, every time.",
    body: "Every claim about a drug, a dose, or a side effect links to the FDA prescribing information or to the published trial — never to a press release, never to a content marketer, never to another secondary source.",
  },
  {
    title: "Generic and brand names together.",
    body: "We say semaglutide (Ozempic, Wegovy) — not just Ozempic. The molecule is the thing. The brand is the marketing.",
  },
  {
    title: "Uncertainty named, never buried.",
    body: "Long-term data does not yet exist for most of this drug class. Where the literature is thin, we say so in the body of the post — not in a footnote.",
  },
  {
    title: "No telehealth-clinic money.",
    body: "We do not accept payment from drug manufacturers or from any of the cash-pay GLP-1 telehealth providers. Trust is the asset.",
  },
  {
    title: "We update when new data drops.",
    body: "Trial readouts and label updates trigger a post refresh. Updated dates show on every post.",
  },
];
