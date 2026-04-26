import Link from "next/link";
import { EvidenceScore } from "@/components/editorial/EvidenceScore";

/**
 * Two large colored teaser cards, side-by-side, goodrx pattern.
 * Left: side-effects week-by-week (sage-light wash).
 * Right: food + muscle (cream-deep wash).
 *
 * Coral "Read the guide →" CTA. EvidenceScore badge in the top-right.
 */

export function TeaserCards() {
  return (
    <section className="border-b border-pine/10">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-5">
          <TeaserCard
            eyebrow="Side effects · week by week"
            title="The Ozempic week-by-week guide they don't give you at the clinic."
            body="Twelve weeks tracked from the first 0.25mg dose through the second titration. What's normal, what isn't, and the four moments to call your prescriber."
            footnote="12 weeks tracked · 14 sources"
            cta="Read the week-by-week guide"
            href="/ozempic-week-by-week"
            score={92}
            tone="sage"
          />
          <TeaserCard
            eyebrow="Food + nutrition · muscle-first"
            title="Eating to keep your muscle on a GLP-1 — what to actually plate."
            body="Protein per meal, when timing matters and when it doesn't, and the lifting minimum that the trial literature says protects lean mass."
            footnote="Phillips 2017 + Trommelen 2023 reading"
            cta="Read the muscle-first guide"
            href="/guides/food-nutrition-and-muscle"
            score={88}
            tone="cream"
          />
        </div>
      </div>
    </section>
  );
}

function TeaserCard({
  eyebrow,
  title,
  body,
  footnote,
  cta,
  href,
  score,
  tone,
}: {
  eyebrow: string;
  title: string;
  body: string;
  footnote: string;
  cta: string;
  href: string;
  score: number;
  tone: "sage" | "cream";
}) {
  const bg =
    tone === "sage"
      ? "bg-[rgba(156,175,148,0.18)] border-sage-deep/40"
      : "bg-cream-deep border-sage-deep/30";

  return (
    <Link
      href={href}
      className={[
        "card-lift group relative flex flex-col p-7 md:p-9 rounded-sm border-2",
        bg,
      ].join(" ")}
    >
      <div className="absolute top-5 right-5">
        <EvidenceScore score={score} size="lg" />
      </div>

      <span className="caps-label text-pine/70">{eyebrow}</span>
      <h3 className="font-serif text-2xl md:text-[1.85rem] text-pine mt-3 leading-[1.12] max-w-md">
        {title}
      </h3>
      <p className="mt-4 text-[15px] text-charcoal/85 leading-relaxed max-w-prose">
        {body}
      </p>
      <div className="mt-5 caps-label text-pine/65">{footnote}</div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-coral-deep group-hover:text-pine font-medium text-sm">
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
