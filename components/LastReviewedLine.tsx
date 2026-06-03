/**
 * Last-reviewed line — small text-secondary under article meta. Honest wording:
 * the editorial team checks every claim against the FDA labels and the trials,
 * so we say "Last reviewed", not "Last medically reviewed" (which would imply a
 * named clinician signed off, which we do not claim).
 */
export function LastReviewedLine({ date }: { date: string }) {
  const d = new Date(date);
  const formatted = d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="text-[13px] text-ink-muted">
      Last reviewed on <time dateTime={date}>{formatted}</time>
    </div>
  );
}
