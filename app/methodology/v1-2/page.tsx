import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { EvidenceScore, EVIDENCE_WEIGHTS } from "@/components/editorial/EvidenceScore";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Methodology v1.2",
  description:
    "The Evidence Score spec — five weighted dimensions, tier mapping, reviewer credentials, and the change log.",
  path: "/methodology/v1-2",
});

const DIMENSIONS = [
  {
    name: "Trial strength",
    weight: EVIDENCE_WEIGHTS.trialStrength,
    high:
      "Phase-3 randomized controlled trial with active comparator and pre-registered endpoints, or a meta-analysis of multiple Phase-3 trials.",
    mid: "Phase-2 trial, or Phase-3 with limitations like open-label design or single-center recruiting.",
    low: "Preclinical / animal data, case series, or anecdote.",
  },
  {
    name: "Sample size",
    weight: EVIDENCE_WEIGHTS.sampleSize,
    high: "n ≥ 10,000 (for cardiovascular outcomes) or n ≥ 1,500 for symptom endpoints.",
    mid: "n = 100 to 1,000.",
    low: "n < 100, or pilot work.",
  },
  {
    name: "Mechanism",
    weight: EVIDENCE_WEIGHTS.mechanism,
    high: "Receptor-level pharmacology established and reproducibly demonstrated in independent labs.",
    mid: "Plausible mechanism, with one or two supporting studies.",
    low: "Hypothetical or borrowed from a different drug class.",
  },
  {
    name: "Reproducibility",
    weight: EVIDENCE_WEIGHTS.reproducibility,
    high: "Two or more independent trials, run by different sponsors, report consistent results.",
    mid: "One large trial plus supportive observational work.",
    low: "Single trial, no replication yet.",
  },
  {
    name: "Real-world fit",
    weight: EVIDENCE_WEIGHTS.realWorldFit,
    high: "Trial population reflects our reader: women, mixed ages, real-world comorbidities and adherence.",
    mid: "Trial enrolled people similar to our reader on most dimensions.",
    low: "Lab-only data, healthy young men only, or non-generalizable population.",
  },
];

const TIERS = [
  {
    range: "90-100",
    label: "HIGH CONFIDENCE",
    body: "We treat this as settled enough to act on. Independent replication exists, mechanism is clear, the trial population fits.",
    score: 94,
  },
  {
    range: "80-89",
    label: "STRONG",
    body: "Solid evidence, but one of the five dimensions is short of perfect — usually replication or real-world fit.",
    score: 84,
  },
  {
    range: "70-79",
    label: "MODERATE",
    body: "Worth reporting, worth acting on with caveats. We name the limitation in the body of the post.",
    score: 74,
  },
  {
    range: "60-69",
    label: "LIMITED",
    body: "Early signal. We report it because readers ask, and we flag exactly what's missing.",
    score: 64,
  },
  {
    range: "0-59",
    label: "PRELIMINARY",
    body: "Mechanism is plausible or anecdote is loud, but the trial literature is too thin to be confident. We say so in plain language.",
    score: 42,
  },
];

export default function MethodologyV12Page() {
  return (
    <PageShell>
      <Eyebrow tone="coral">Methodology · v1.2</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-pine mt-3 leading-tight">
        The Evidence Score, in detail.
      </h1>
      <p className="mt-5 text-charcoal/85 text-[17px] leading-relaxed max-w-prose">
        Five weighted dimensions feed a single 0-100 score. The score gets
        rounded, mapped to a tier, and shown next to claims that need a
        confidence tag. This page is the long-form spec. The narrative summary
        lives at{" "}
        <Link
          href="/methodology"
          className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
        >
          /methodology
        </Link>
        .
      </p>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="sage">The five dimensions</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          What goes into the score.
        </h2>

        <div className="overflow-hidden border border-pine/15 rounded-sm">
          <table className="w-full text-[14.5px]">
            <thead className="bg-cream-deep/60 text-pine">
              <tr className="text-left">
                <th className="px-4 py-3 font-serif font-semibold">Dimension</th>
                <th className="px-4 py-3 font-serif font-semibold tnum">Weight</th>
                <th className="px-4 py-3 font-serif font-semibold">High</th>
                <th className="px-4 py-3 font-serif font-semibold">Mid</th>
                <th className="px-4 py-3 font-serif font-semibold">Low</th>
              </tr>
            </thead>
            <tbody className="text-charcoal/85">
              {DIMENSIONS.map((d) => (
                <tr key={d.name} className="border-t border-pine/10 align-top">
                  <td className="px-4 py-3 font-medium text-pine whitespace-nowrap">
                    {d.name}
                  </td>
                  <td className="px-4 py-3 tnum">
                    {Math.round(d.weight * 100)}%
                  </td>
                  <td className="px-4 py-3">{d.high}</td>
                  <td className="px-4 py-3">{d.mid}</td>
                  <td className="px-4 py-3">{d.low}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="coral">Tier mapping</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          What each band means.
        </h2>
        <ol className="space-y-5">
          {TIERS.map((t) => (
            <li
              key={t.label}
              className="grid grid-cols-[5.5rem_1fr] gap-4 pb-5 border-b border-pine/10 last:border-b-0"
            >
              <EvidenceScore score={t.score} size="lg" />
              <div>
                <div className="font-serif text-pine font-semibold">
                  <span className="tnum">{t.range}</span> · {t.label}
                </div>
                <p className="mt-2 text-[15.5px] text-charcoal/85 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="sage">Reviewer credentials</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-3">
          Who signs off, in plain language.
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed max-w-prose">
          Posts flagged with the medical-disclaimer requirement get a clinician
          review before publish. Reviewers are pharmacists (RPh / PharmD),
          physicians (MD / DO), or registered dietitians (RD), depending on the
          topic. The reviewer&apos;s name and credentials live on the post and
          on the author bio. Reviews are dated.
        </p>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="stone">Change log</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          What changed in v1.2.
        </h2>
        <ul className="space-y-3 text-[15.5px] text-charcoal/85 leading-relaxed">
          <li>
            <span className="caps-label text-stone block mb-1">v1.2 · 2026-04</span>
            Added Real-world fit as a fifth dimension; rebalanced weights so
            Trial strength still dominates at 35%. Tier band names now read
            HIGH CONFIDENCE / STRONG / MODERATE / LIMITED / PRELIMINARY (was
            high / medium / low / preliminary in v1.1).
          </li>
          <li>
            <span className="caps-label text-stone block mb-1">v1.1 · 2026-02</span>
            Added Reproducibility as a separate dimension instead of being
            folded into Trial strength.
          </li>
          <li>
            <span className="caps-label text-stone block mb-1">v1.0 · 2026-01</span>
            Initial spec. Three dimensions: Trial strength, Sample size,
            Mechanism.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
