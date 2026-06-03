import { AffiliateLink } from "./AffiliateLink";
import { getRetailers } from "@/lib/affiliate/registry";

/**
 * Buy buttons for a product, sourced from the affiliate registry via its
 * productKey. Primary retailer is filled; any secondary (e.g. Amazon) is
 * outlined. All links carry rel="sponsored nofollow" (AffiliateLink) and
 * hop through the cloaked /go/[key] redirect. Shared by ComparisonTemplate
 * and the per-product /picks/[product] pages.
 */
export function RetailerButtons({
  productKey,
  size = "sm",
}: {
  productKey?: string;
  size?: "sm" | "lg";
}) {
  if (!productKey) return null;
  const retailers = getRetailers(productKey);
  if (retailers.length === 0) return null;
  // 44px tap target on mobile (the priority traffic), trimming to 40/44px on
  // larger screens where a mouse is precise.
  const pad =
    size === "lg"
      ? "h-12 px-5 text-[14px] sm:h-11"
      : "h-11 px-4 text-[13px] sm:h-10";
  const base = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight ${pad} transition-colors !no-underline`;
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {retailers.map((r, i) => (
        <AffiliateLink
          key={r.url}
          href={i === 0 ? `/go/${productKey}` : `/go/${productKey}?i=${i}`}
          className={
            i === 0
              ? `${base} bg-pine !text-cream hover:bg-pine-deep`
              : `${base} border border-pine/25 bg-white !text-pine-deep hover:border-pine/50 hover:bg-pine/[0.04]`
          }
        >
          {i === 0 ? `Check price at ${r.label}` : r.label}
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
          </svg>
        </AffiliateLink>
      ))}
    </div>
  );
}
