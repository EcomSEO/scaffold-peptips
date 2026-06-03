import Link from "next/link";

/**
 * Editorial-integrity block at the top of an article. Honest version: content
 * is written and edited by the Peptips Editorial Team and checked against the
 * FDA prescribing information and the published trials. We do NOT claim review
 * by a named clinician until a real credentialed reviewer is on file — that
 * slot is ready to populate (reviewerName) the moment one is.
 */
export function ReviewerStamp({
  reviewerName,
  reviewerCredentials,
  reviewerSlug,
  lastReviewed,
  className = "",
}: {
  reviewerName?: string;
  reviewerCredentials?: string;
  reviewerSlug?: string;
  lastReviewed: string;
  className?: string;
}) {
  const formattedDate = new Date(lastReviewed).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const hasReviewer = Boolean(reviewerName);
  const reviewerHref = reviewerSlug
    ? `/reviewers/${reviewerSlug}`
    : "/editorial-standards";

  return (
    <aside
      className={`rounded-md border border-rule bg-pine-50/40 px-5 py-4 md:px-6 md:py-5 flex items-start gap-4 ${className}`}
      aria-label="How this article is sourced"
    >
      <div
        aria-hidden
        className="shrink-0 w-14 h-14 rounded-pill bg-cream border-2 border-pine flex items-center justify-center text-pine font-semibold text-[14px]"
      >
        PT
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[12px] tracking-[0.05em] uppercase font-semibold text-pine">
          How this is sourced
        </div>
        <div className="mt-0.5 text-[15px] text-ink leading-snug">
          {hasReviewer ? (
            <>
              Medically reviewed by{" "}
              <Link
                href={reviewerHref}
                className="font-semibold hover:text-pine-deep underline decoration-pine/25 hover:decoration-pine underline-offset-2"
              >
                {reviewerName}
              </Link>
              {reviewerCredentials && (
                <span className="text-ink-muted">, {reviewerCredentials}</span>
              )}
            </>
          ) : (
            <>
              Written and edited by{" "}
              <Link
                href="/editorial-standards"
                className="font-semibold hover:text-pine-deep underline decoration-pine/25 hover:decoration-pine underline-offset-2"
              >
                The Peptips Editorial Team
              </Link>
            </>
          )}
        </div>
        <div className="mt-1 text-[13px] text-ink-muted">
          Checked against the FDA prescribing information and the published
          trials · Last updated{" "}
          <time dateTime={lastReviewed} className="text-ink">
            {formattedDate}
          </time>
        </div>
        <div className="mt-2 text-[12px] text-ink-muted leading-relaxed">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#E8927C" }}
              aria-hidden
            />
            Not medical advice · No pharma sponsorship · No telehealth deals
          </span>
        </div>
      </div>
    </aside>
  );
}
