/**
 * EvidenceScore — peptips' equivalent of plasticfreelab's PFL Score.
 *
 * A 0-100 confidence score for a medical claim. NOT a product-quality rating.
 *
 * Composition (5 weighted dimensions, sum to 100%):
 *   - Trial strength    35%   Phase-3 RCT + meta-analysis = high; Phase-2 = mid; preclinical = low
 *   - Sample size       20%   n=10,000+ = high; n=100-1,000 = mid; n<100 = low
 *   - Mechanism         15%   Established receptor-level pharmacology vs hypothetical
 *   - Reproducibility   15%   Independent replication exists vs single-trial
 *   - Real-world fit    15%   Trial population matches our reader vs lab-only
 *
 * Tier mapping (peptips palette):
 *    90-100  HIGH CONFIDENCE  pine bg / cream text
 *    80-89   STRONG           sage bg / pine text
 *    70-79   MODERATE         cream-deep bg / pine text
 *    60-69   LIMITED          coral-light bg / pine text
 *     0-59   PRELIMINARY      stone bg / cream text
 *
 * Render: a squared rectangle (border-radius 2px), NOT a round badge —
 * keeps the journal-of-record register. No rotating textPath ring.
 */

export type EvidenceDimensions = {
  /** Phase-3 RCT + meta-analysis = high; Phase-2 = moderate; preclinical/anecdote = low. 0-100. */
  trialStrength: number;
  /** n=10,000+ = high; n=100-1,000 = moderate; n<100 = low. 0-100. */
  sampleSize: number;
  /** Established receptor-level pharmacology vs hypothetical. 0-100. */
  mechanism: number;
  /** Independent replication exists vs single-trial. 0-100. */
  reproducibility: number;
  /** Trial population matches our reader vs lab-only. 0-100. */
  realWorldFit: number;
};

export const EVIDENCE_WEIGHTS = {
  trialStrength: 0.35,
  sampleSize: 0.2,
  mechanism: 0.15,
  reproducibility: 0.15,
  realWorldFit: 0.15,
} as const;

export type EvidenceTier =
  | "HIGH CONFIDENCE"
  | "STRONG"
  | "MODERATE"
  | "LIMITED"
  | "PRELIMINARY";

export function computeEvidenceScore(d: EvidenceDimensions): number {
  const raw =
    d.trialStrength * EVIDENCE_WEIGHTS.trialStrength +
    d.sampleSize * EVIDENCE_WEIGHTS.sampleSize +
    d.mechanism * EVIDENCE_WEIGHTS.mechanism +
    d.reproducibility * EVIDENCE_WEIGHTS.reproducibility +
    d.realWorldFit * EVIDENCE_WEIGHTS.realWorldFit;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

export function tierFor(score: number): EvidenceTier {
  if (score >= 90) return "HIGH CONFIDENCE";
  if (score >= 80) return "STRONG";
  if (score >= 70) return "MODERATE";
  if (score >= 60) return "LIMITED";
  return "PRELIMINARY";
}

const tierStyles: Record<
  EvidenceTier,
  { bg: string; text: string; chip: string }
> = {
  "HIGH CONFIDENCE": {
    bg: "bg-pine",
    text: "text-cream",
    chip: "text-cream/80",
  },
  STRONG: {
    bg: "bg-sage",
    text: "text-pine",
    chip: "text-pine/70",
  },
  MODERATE: {
    bg: "bg-cream-deep",
    text: "text-pine",
    chip: "text-pine/65",
  },
  LIMITED: {
    bg: "bg-coral/40",
    text: "text-pine",
    chip: "text-pine/65",
  },
  PRELIMINARY: {
    bg: "bg-stone",
    text: "text-cream",
    chip: "text-cream/75",
  },
};

type Props = {
  /** Either pass a precomputed `score` or pass `dimensions` and we'll compute it. */
  score?: number;
  dimensions?: EvidenceDimensions;
  /** small for catalog/inline use, large for article hero */
  size?: "sm" | "lg";
  /** show the tier label (default true) */
  showLabel?: boolean;
  className?: string;
};

export function EvidenceScore({
  score,
  dimensions,
  size = "sm",
  showLabel = true,
  className = "",
}: Props) {
  const value =
    typeof score === "number"
      ? score
      : dimensions
      ? computeEvidenceScore(dimensions)
      : 0;
  const tier = tierFor(value);
  const styles = tierStyles[tier];

  if (size === "lg") {
    return (
      <div
        role="img"
        aria-label={`Evidence Score ${value} out of 100, ${tier.toLowerCase()}`}
        className={[
          "inline-flex flex-col items-center justify-center",
          "w-[88px] h-[64px] rounded-[2px] px-2",
          styles.bg,
          styles.text,
          className,
        ].join(" ")}
      >
        <span
          className="font-serif font-bold leading-none tnum"
          style={{ fontSize: "30px", fontVariationSettings: '"opsz" 60' }}
        >
          {value}
        </span>
        {showLabel && (
          <span
            className={[
              "mt-0.5 font-sans font-semibold tracking-[0.14em] uppercase leading-none",
              styles.chip,
            ].join(" ")}
            style={{ fontSize: "8.5px" }}
          >
            {tier}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Evidence Score ${value} out of 100, ${tier.toLowerCase()}`}
      className={[
        "inline-flex items-center gap-1.5 rounded-[2px] px-2 py-1",
        styles.bg,
        styles.text,
        className,
      ].join(" ")}
    >
      <span
        className="font-serif font-bold leading-none tnum"
        style={{ fontSize: "13px", fontVariationSettings: '"opsz" 60' }}
      >
        {value}
      </span>
      {showLabel && (
        <span
          className={[
            "font-sans font-semibold tracking-[0.12em] uppercase leading-none",
            styles.chip,
          ].join(" ")}
          style={{ fontSize: "9px" }}
        >
          {tier}
        </span>
      )}
    </div>
  );
}
