import Link from "next/link";
import type { Hub } from "@/lib/content/hubs";

/**
 * HubCard — gains the warm `card-lift` hover (Y-2px + coral-tinted shadow).
 */
export function HubCard({ hub }: { hub: Hub }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="card-lift block p-6 bg-paper/70 border border-pine/10 rounded-sm hover:border-sage-deep/40 h-full"
    >
      <h3 className="font-serif text-xl text-pine mb-2 leading-snug">{hub.name}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{hub.oneLiner}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sage-deep text-sm">
        Browse
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
