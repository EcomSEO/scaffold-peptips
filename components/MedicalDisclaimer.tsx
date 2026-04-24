import Link from "next/link";

// Re-export the new editorial PostReviewStamp so existing imports still resolve.
export { PostReviewStamp } from "./editorial/PostReviewStamp";

/**
 * The Header already carries the primary medical-disclaimer strip on every page.
 * This footer variant is a secondary, calmer reminder placed just before <Footer>
 * in app/layout.tsx — cream-deep, not alarmist.
 */
export function MedicalDisclaimerFooter() {
  return (
    <div className="bg-cream-deep/70 border-t border-sage-deep/20">
      <div className="mx-auto max-w-6xl px-6 py-4 text-[12.5px] text-pine/90 leading-relaxed">
        <strong className="text-pine">Not medical advice.</strong>{" "}
        Information on Peptips is for educational purposes only. Always consult
        your healthcare provider before starting, stopping, or changing any
        medication. See our{" "}
        <Link href="/medical-disclaimer" className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral">
          full medical disclaimer
        </Link>
        .
      </div>
    </div>
  );
}
