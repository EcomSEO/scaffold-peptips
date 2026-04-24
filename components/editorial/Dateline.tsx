import { SITE } from "@/lib/content/site";
import { LiveMonth } from "./LiveMonth";

function buildTimeMonth() {
  const d = new Date();
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

/**
 * Peptips dateline — soft journal framing:
 *   Volume I · Issue 01 · Field Notes · April 2026
 *
 * The month refreshes client-side via <LiveMonth> so the masthead stays
 * current between rebuilds (Intl.DateTimeFormat). SSR still ships the
 * build-time month so there's no flash.
 */
export function Dateline({ className = "" }: { className?: string }) {
  const initial = buildTimeMonth();
  return (
    <div className={`dateline flex items-center gap-3 ${className}`}>
      <span>{SITE.volume}</span>
      <span aria-hidden>·</span>
      <span>{SITE.issue}</span>
      <span aria-hidden>·</span>
      <span>{SITE.issueName}</span>
      <span aria-hidden>·</span>
      <LiveMonth initial={initial} />
    </div>
  );
}
