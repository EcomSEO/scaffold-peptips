import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { EvidenceScore } from "@/components/editorial/EvidenceScore";

/**
 * Two large colored teaser cards, side-by-side, goodrx pattern.
 * Left: side-effects week-by-week (sage-light wash).
 * Right: food + muscle (cream-deep wash).
 *
 * Coral "Read the guide →" CTA. EvidenceScore badge in the top-right.
 */

export async function TeaserCards() {
  const t = await getTranslations("teaserCards");
  return (
    <section className="border-b border-[#D6D6D6]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <TeaserCard
            eyebrow={t("left.eyebrow")}
            title={t("left.title")}
            body={t("left.description")}
            footnote={t("left.footnote")}
            cta={t("left.cta")}
            href="/ozempic-week-by-week"
            score={92}
            tone="sage"
          />
          <TeaserCard
            eyebrow={t("right.eyebrow")}
            title={t("right.title")}
            body={t("right.description")}
            footnote={t("right.footnote")}
            cta={t("right.cta")}
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
  // Flat: white card, 1px gray-line border. Tone keyword preserved for API
  // compatibility but the visual difference is intentionally near-invisible.
  void tone;

  return (
    <Link
      href={href}
      className="group relative flex flex-col p-8 md:p-10 rounded-sm bg-white border border-[#D6D6D6] hover:border-ink transition-colors"
    >
      <div className="absolute top-5 right-5">
        <EvidenceScore score={score} size="lg" />
      </div>

      <span className="caps-meta">{eyebrow}</span>
      <h3
        className="mt-4 font-normal text-ink leading-[1.15] max-w-md"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h3>
      <p className="mt-4 text-[1.0625rem] text-ink-soft leading-relaxed max-w-prose">
        {body}
      </p>
      <div className="mt-5 caps-meta">{footnote}</div>

      <span className="mt-8 inline-flex items-center gap-1.5 text-coral-deep group-hover:text-ink font-medium text-sm">
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
