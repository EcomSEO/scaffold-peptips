import type { ReactNode } from "react";

/**
 * Pliability-style pullquote.
 *
 * Inter 400 italic 24-28px, thin coral left border, attribution in caps
 * Inter 11px stone underneath. No decorative quote marks, no Source Serif.
 *
 * Exported as both `PullQuote` (legacy import name) and `Pullquote` (new name
 * matching the deliverable spec) so existing call sites keep working.
 */
export function PullQuote({
  children,
  attribution,
  className = "",
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <figure className={`my-12 md:my-16 max-w-prose ${className}`}>
      <blockquote className="border-l-2 border-coral pl-6 md:pl-8 italic text-[1.5rem] md:text-[1.75rem] leading-[1.4] font-normal text-ink">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 caps-meta pl-6 md:pl-8">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

// Alias matching the new component name in the rebuild spec.
export const Pullquote = PullQuote;
