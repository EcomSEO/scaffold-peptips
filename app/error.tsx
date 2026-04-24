"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { FieldRule } from "@/components/editorial/DotRule";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error in the console for debugging; no third-party
    // logger is wired up yet.
    // eslint-disable-next-line no-console
    console.error("[peptips] error boundary:", error);
  }, [error]);

  return (
    <main>
      <section className="border-b border-pine/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16 md:pb-20">
          <Eyebrow tone="coral">Something slipped</Eyebrow>
          <h1 className="display-headline text-pine mt-5 text-[2.5rem] sm:text-5xl md:text-[3.6rem] leading-[1.05]">
            Something broke on our side.
          </h1>

          <div className="mt-8 space-y-5 text-charcoal/85 text-[17px] leading-[1.75] max-w-[60ch]">
            <p>
              This one&apos;s on us, not on you. The page tried to load and
              something went sideways behind the scenes. Often a quick retry is
              enough to sort it out.
            </p>
            <p>
              If it keeps happening, head back to the home page and pick a hub
              from there. If you have a second, tell us what you were trying
              to read at <Link href="/contact" className="text-pine underline decoration-sage decoration-[1.5px] underline-offset-[3px] hover:decoration-coral">hello@peptips.com</Link> so we can fix it.
            </p>
          </div>

          <div className="mt-12">
            <FieldRule />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary"
            >
              Try again
              <span aria-hidden>&rarr;</span>
            </button>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>

          {error?.digest && (
            <p className="mt-8 text-[12.5px] text-stone italic">
              Reference:{" "}
              <span className="tnum text-stone/90">{error.digest}</span>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
