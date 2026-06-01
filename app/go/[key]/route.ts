import { NextRequest, NextResponse } from "next/server";
import { getRetailers } from "@/lib/affiliate/registry";

/**
 * Cloaked affiliate redirect: /go/[key] → the product's affiliate URL.
 *
 * Why a redirect layer instead of linking out directly from post bodies:
 *  - Links can be swapped (dead SKU, owned-shop launch) without editing posts.
 *  - Every click is server-logged for attribution before the bounce.
 *  - Outbound monetized links carry rel="sponsored nofollow" at render time
 *    (see ComparisonTemplate); this route is just the hop.
 *
 * 302 (temporary) is deliberate: the destination changes when the bridge
 * model swaps thirdPartyUrl → ownedShopUrl, so we never want it cached.
 */
export const dynamic = "force-dynamic";

export function GET(
  req: NextRequest,
  { params }: { params: { key: string } },
) {
  const retailers = getRetailers(params.key);
  if (retailers.length === 0) {
    // Unknown product key — send the reader somewhere useful, not a dead end.
    return NextResponse.redirect(new URL("/", req.url), 302);
  }
  // ?i=N selects the retailer button (0 = primary). Clamp to a valid index.
  const i = Number(req.nextUrl.searchParams.get("i") ?? "0");
  const idx = Number.isInteger(i) && i >= 0 && i < retailers.length ? i : 0;
  const link = retailers[idx];
  // Minimal click log (stdout → Vercel logs). Swap for an analytics sink later.
  console.log(
    `[affiliate-click] key=${params.key} label=${link.label} owned=${link.isOwned}`,
  );
  return NextResponse.redirect(link.url, 302);
}
