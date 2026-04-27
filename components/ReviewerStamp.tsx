import Link from "next/link";

/**
 * ReviewerStamp — peptips' anti-Healthline trust block.
 *
 * Sits at the top of an article ABOVE the prose. Healthline shows a
 * pill; we show the human: a 56px reviewer-photo placeholder, name,
 * credentials, "last reviewed" line, and an unambiguous independence
 * statement ("No pharma sponsorship.").
 */
export function ReviewerStamp({
  reviewerName,
  reviewerCredentials,
  reviewerSlug,
  lastReviewed,
  className = "",
}: {
  reviewerName: string;
  reviewerCredentials: string;
  reviewerSlug?: string;
  lastReviewed: string;
  className?: string;
}) {
  const initials = reviewerName
    .split(" ")
    .filter((s) => !/^(dr\.?|md|do|rn|np)$/i.test(s))
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  const formattedDate = new Date(lastReviewed).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const reviewerHref = reviewerSlug ? `/reviewers/${reviewerSlug}` : "/editorial-standards";

  return (
    <aside
      className={`rounded-md border border-rule bg-pine-50/40 px-5 py-4 md:px-6 md:py-5 flex items-start gap-4 ${className}`}
      aria-label="Reviewer information"
    >
      {/* Reviewer avatar — pine ring with cream interior + coral dot */}
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-pill bg-cream border-2 border-pine flex items-center justify-center text-pine font-semibold text-[15px]">
          {initials}
        </div>
        <span
          className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center"
          aria-hidden
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#3D4A3A" strokeWidth="2.2">
            <path d="m4 8 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[12px] tracking-[0.05em] uppercase font-semibold text-pine">
          Medically reviewed
        </div>
        <div className="mt-0.5 text-[15px] text-ink leading-snug">
          <Link
            href={reviewerHref}
            className="font-semibold hover:text-pine-deep underline decoration-pine/25 hover:decoration-pine underline-offset-2"
          >
            {reviewerName}
          </Link>
          <span className="text-ink-muted">, {reviewerCredentials}</span>
        </div>
        <div className="mt-1 text-[13px] text-ink-muted">
          Last reviewed on{" "}
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
            Independent peer review · No pharma sponsorship · No telehealth deals
          </span>
        </div>
      </div>
    </aside>
  );
}
