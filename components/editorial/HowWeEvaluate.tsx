/**
 * HowWeEvaluate — the honest methodology block for comparison/money pages.
 *
 * E-E-A-T note (non-negotiable): peptips does NOT run a lab and does NOT claim
 * hands-on testing it didn't do. So this block states plainly what the ranking
 * IS based on — ingredient panels, label/trial-supported doses, third-party
 * certifications, format fit for a slowed GLP-1 gut, and normalized price — and
 * states plainly what it is NOT based on (in-house lab testing). That honesty is
 * itself the trust signal. Commissions never move the ranking.
 */

type Criterion = { title: string; body: string };

const CRITERIA_DEFAULT: Criterion[] = [
  {
    title: "What's actually in it",
    body: "We read the Supplement Facts panel and weigh the active doses against what the published trials and the FDA labels actually support, not against the claim on the front of the box.",
  },
  {
    title: "Fit for a GLP-1 gut",
    body: "GLP-1s slow digestion and blunt appetite. We favor formats that suit that, easy to get down, low-volume, gentle, and we flag anything (mega-doses, harsh additives) that tends to make nausea or reflux worse.",
  },
  {
    title: "Third-party testing & quality",
    body: "Independent certification (NSF, Informed Sport, USP) and published certificates of analysis count in a product's favor. Proprietary blends, heavy additives, and unnecessary allergens count against it.",
  },
  {
    title: "Price per serving",
    body: "We normalize cost to a per-serving figure so the ranking reflects value, not sticker price, and we re-check it on every update.",
  },
];

const CRITERIA_FIBER: Criterion[] = [
  {
    title: "Fiber type and dose",
    body: "We check the actual grams of soluble fiber per serving against what's been studied for constipation, and prefer well-tolerated forms (psyllium, partially-hydrolyzed guar) over bulky or gas-forming ones that fight a slowed gut.",
  },
  CRITERIA_DEFAULT[1],
  CRITERIA_DEFAULT[2],
  CRITERIA_DEFAULT[3],
];

const CRITERIA_PROTEIN: Criterion[] = [
  {
    title: "Protein quality and dose",
    body: "We weigh grams of complete protein per serving and the amino-acid profile against the daily targets the muscle-preservation literature points to, not against the label's headline number.",
  },
  CRITERIA_DEFAULT[1],
  CRITERIA_DEFAULT[2],
  CRITERIA_DEFAULT[3],
];

function pickCriteria(slug: string): Criterion[] {
  if (slug.includes("fiber")) return CRITERIA_FIBER;
  if (slug.includes("protein")) return CRITERIA_PROTEIN;
  return CRITERIA_DEFAULT;
}

export function HowWeEvaluate({
  slug,
  productCount,
}: {
  slug: string;
  productCount?: number;
}) {
  const criteria = pickCriteria(slug);
  return (
    <section id="how-we-evaluate" className="not-prose">
      <h2
        className="mt-16 mb-6 font-normal text-ink"
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        How we evaluate
      </h2>
      <p className="mb-7 text-[1.0625rem] leading-[1.7] text-ink-soft max-w-prose">
        We evaluate on specifications, not vibes:{" "}
        {productCount ? `the ${productCount} products here were` : "every product is"}{" "}
        scored against the same criteria below, drawn from the ingredient panel,
        independent testing, and the published evidence. We do not run a lab, so
        where we have not used a product ourselves we say so and base the call on
        its specs and the trial literature. Affiliate commissions never change
        the ranking.
      </p>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {criteria.map((c) => (
          <div key={c.title} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage-deep"
            />
            <div>
              <h3 className="text-[15px] font-semibold text-ink leading-snug">
                {c.title}
              </h3>
              <p className="mt-1 text-[15px] leading-[1.6] text-ink-soft">
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
