"use client";

import Link from "next/link";
import { useState } from "react";
import {
  computeEvidenceScore,
  EVIDENCE_WEIGHTS,
  tierFor,
  type EvidenceDimensions,
  type EvidenceTier,
} from "./editorial/EvidenceScore";

/**
 * EvidenceScoreCard — the peptips differentiator vs Healthline.
 *
 * A polished article-rail card that renders the 5-dimension Evidence Score
 * with horizontal mini-bars colored on a pine→sage gradient, an overall
 * numeric, and a tier label. Hovering a dimension row reveals its weight
 * (e.g. "35%"). Bottom links to /methodology.
 *
 * Compositionally it's ~260px wide and made for the lg:col-span-4 right rail.
 */

const DIMENSIONS: Array<{
  key: keyof EvidenceDimensions;
  label: string;
  weightPct: string;
  blurb: string;
}> = [
  { key: "trialStrength", label: "Trial strength", weightPct: "35%", blurb: "Phase-3 RCT vs preclinical" },
  { key: "sampleSize", label: "Sample size", weightPct: "20%", blurb: "n=10k+ vs n<100" },
  { key: "mechanism", label: "Mechanism", weightPct: "15%", blurb: "Receptor-level vs hypothetical" },
  { key: "reproducibility", label: "Reproducibility", weightPct: "15%", blurb: "Independent replication" },
  { key: "realWorldFit", label: "Real-world fit", weightPct: "15%", blurb: "Trial population matches reader" },
];

const TIER_COLOR: Record<EvidenceTier, string> = {
  "HIGH CONFIDENCE": "#3D4A3A",
  STRONG: "#7D9175",
  MODERATE: "#9CAF94",
  LIMITED: "#C77560",
  PRELIMINARY: "#5A6358",
};

export function EvidenceScoreCard({
  dimensions,
  score,
  className = "",
}: {
  dimensions: EvidenceDimensions;
  score?: number;
  className?: string;
}) {
  const [hoveredKey, setHoveredKey] = useState<keyof EvidenceDimensions | null>(null);
  const overall = score ?? computeEvidenceScore(dimensions);
  const tier = tierFor(overall);
  const tierColor = TIER_COLOR[tier];

  return (
    <aside
      className={`rounded-md border border-rule bg-white shadow-subtle overflow-hidden ${className}`}
      aria-label={`Evidence Score ${overall} of 100, ${tier.toLowerCase()}`}
    >
      {/* Header strip */}
      <div className="flex items-baseline justify-between gap-3 px-5 pt-5 pb-3 border-b border-rule">
        <div>
          <div className="eyebrow text-pine-deep" style={{ fontSize: 11 }}>
            Evidence Score
          </div>
          <div className="mt-1 inline-flex items-center gap-1.5">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: tierColor }}
              aria-hidden
            />
            <span
              className="font-semibold text-[11px] tracking-[0.14em] uppercase"
              style={{ color: tierColor }}
            >
              {tier}
            </span>
          </div>
        </div>
        <div
          className="font-serif font-semibold tnum leading-none"
          style={{ fontSize: 38, color: "#1A1F1A" }}
        >
          {overall}
          <span className="ml-1 text-[14px] font-medium text-ink-soft tnum">/100</span>
        </div>
      </div>

      {/* Dimension bars */}
      <ul className="divide-y divide-rule">
        {DIMENSIONS.map((d) => {
          const value = dimensions[d.key];
          const isHovered = hoveredKey === d.key;
          // Pine→sage gradient for the filled portion
          return (
            <li
              key={d.key}
              className="px-5 py-3 transition-colors hover:bg-surface-alt"
              onMouseEnter={() => setHoveredKey(d.key)}
              onMouseLeave={() => setHoveredKey(null)}
              onFocus={() => setHoveredKey(d.key)}
              onBlur={() => setHoveredKey(null)}
              tabIndex={0}
            >
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <span className="text-[13px] font-medium text-ink">{d.label}</span>
                <span
                  className="text-[11px] tnum tabular-nums transition-colors"
                  style={{ color: isHovered ? "#3D4A3A" : "#5A6358" }}
                >
                  {isHovered ? d.weightPct : `${value}`}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-pine-50 overflow-hidden">
                <div
                  className="h-full rounded-full transition-[width] duration-300 ease-out"
                  style={{
                    width: `${value}%`,
                    background:
                      "linear-gradient(90deg, #3D4A3A 0%, #7D9175 60%, #9CAF94 100%)",
                  }}
                />
              </div>
              {isHovered && (
                <div className="mt-1.5 text-[11px] text-ink-muted leading-snug">
                  Weighted at {d.weightPct} · {d.blurb}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Footer link */}
      <div className="px-5 py-3 bg-surface-alt border-t border-rule">
        <Link
          href="/methodology"
          className="inline-flex items-center gap-1 text-[12px] font-semibold text-pine-deep hover:text-pine"
        >
          How we score evidence{" "}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </aside>
  );
}

// Re-export weights for callers that want them inline
export { EVIDENCE_WEIGHTS };
