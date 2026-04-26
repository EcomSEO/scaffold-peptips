import type { ReactNode } from "react";

/**
 * Warm pull-quote with a subtle coral tick mark.
 *
 * Uses the brand-book-locked Source Serif 4 italic for the quote body.
 * Body copy stays on the same locked stack — this component is purely
 * for visual flourish (the sage rule, the coral tick, the big curly quote).
 */
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-10 md:my-14 relative pl-7 md:pl-11 max-w-2xl">
      {/* Thin sage rule + a soft coral tick — "the friend underlined this part" */}
      <span
        aria-hidden
        className="absolute left-0 top-2 bottom-2 w-px bg-sage-deep/55"
      />
      <span
        aria-hidden
        className="absolute left-[-3px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-coral"
      />
      <blockquote
        className="text-2xl md:text-[1.7rem] leading-[1.3] text-pine"
        style={{
          fontFamily:
            '"Source Serif 4", Georgia, serif',
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        <span
          aria-hidden
          className="mr-1 text-sage-deep/70 text-4xl leading-none align-[-0.2em]"
          style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}
        >
          &ldquo;
        </span>
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 caps-label">— {attribution}</figcaption>
      )}
    </figure>
  );
}
