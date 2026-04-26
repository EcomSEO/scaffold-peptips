import { Link } from "@/i18n/navigation";

/**
 * MethodologyByline — sits between the article subhead and the hero image.
 *
 * Layout: a small monogram circle, then "By {author}" and a "Reviewed using
 * methodology v1.2 ↗" link. All text is caps Inter 11px stone.
 */
export function MethodologyByline({
  author = "The Peptips Editorial Team",
  monogram = "PT",
  reviewedOn,
}: {
  author?: string;
  monogram?: string;
  reviewedOn?: string;
}) {
  const formatted = reviewedOn
    ? new Date(reviewedOn).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="mt-6 flex items-center gap-3">
      <span
        aria-hidden
        className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-pine text-cream text-[10px] font-medium tracking-wider"
      >
        {monogram}
      </span>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 caps-meta">
        <span>By {author}</span>
        {formatted && (
          <>
            <span aria-hidden className="text-stone/50">·</span>
            <span>Reviewed {formatted}</span>
          </>
        )}
        <span aria-hidden className="text-stone/50">·</span>
        <Link
          href="/methodology"
          className="hover:text-coral-deep transition-colors underline decoration-stone/40 underline-offset-2"
        >
          Methodology v1.2 <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}
