import type { ReactNode } from "react";

/**
 * Warm pull-quote with a subtle coral tick mark.
 *
 * Uses the single decorative italic serif loaded in layout.tsx
 * (Cormorant Garamond Italic, exposed as --font-quote) for a rounder,
 * warmer pen-stroke feel than Source Serif italic. Body copy stays on
 * the locked stack — this is purely for quote flourish.
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
            'var(--font-quote), "Source Serif 4", Georgia, serif',
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        <span
          aria-hidden
          className="mr-1 text-sage-deep/70 text-4xl leading-none align-[-0.2em]"
          style={{ fontFamily: 'var(--font-quote), Georgia, serif' }}
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
