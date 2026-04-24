import { SITE } from "@/lib/content/site";

function currentMonth() {
  const d = new Date();
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

/**
 * Peptips dateline — soft journal framing:
 *   Volume I · Issue 01 · Field Notes · April 2026
 * Warmer than plasticfreelab's "Volume · Issue · Month · plasticfreelab.com".
 * Anchors the site as a field-journal rather than a lab report.
 */
export function Dateline({ className = "" }: { className?: string }) {
  return (
    <div className={`dateline flex items-center gap-3 ${className}`}>
      <span>{SITE.volume}</span>
      <span aria-hidden>·</span>
      <span>{SITE.issue}</span>
      <span aria-hidden>·</span>
      <span>{SITE.issueName}</span>
      <span aria-hidden>·</span>
      <span>{currentMonth()}</span>
    </div>
  );
}
