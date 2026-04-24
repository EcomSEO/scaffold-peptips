"use client";

import { FormEvent, useState } from "react";

/**
 * Calm inline email capture.
 *
 * Focus treatment: soft pine glow on the input plus a coral accent line
 * that sweeps in along the bottom (left-to-right) when the user engages
 * the form. Submit button gently presses down on :active via .btn-primary.
 */
export function EmailCapture({
  headline = "The First 30 Days on a GLP-1.",
  subhead = "A 15-page calm companion guide — week-by-week expectations, what to eat, what to track, what to ask at your first follow-up. Free. Delivered instantly.",
  variant = "inline",
  buttonLabel = "Send me the guide",
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 400));
    setStatus("ok");
  }

  const wrapper =
    variant === "end-of-article"
      ? "my-12 p-7 md:p-9 rounded-sm bg-sage/10 border border-sage-deep/25"
      : "my-10 p-7 md:p-9 rounded-sm bg-paper border border-pine/12 shadow-soft";

  return (
    <section id="email-capture" className={wrapper}>
      <div className="flex items-center gap-3 mb-3">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-coral-deep" />
        <span className="caps-label text-coral-deep">The free companion guide</span>
      </div>
      <h2 className="font-serif text-2xl md:text-[1.75rem] text-pine leading-tight">
        {headline}
      </h2>
      <p className="mt-3 text-[15px] text-charcoal/85 max-w-xl leading-relaxed">
        {subhead}
      </p>
      {status === "ok" ? (
        <p className="mt-6 text-pine font-medium">Thanks — check your inbox.</p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="email-input relative flex-1">
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-pine/20 px-4 py-3 bg-paper focus:outline-none"
            />
            <span aria-hidden className="coral-sweep" />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary justify-center disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : buttonLabel}
          </button>
        </form>
      )}
      <p className="mt-4 text-[12px] text-stone max-w-md leading-relaxed">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="underline decoration-sage-deep/60 underline-offset-2">
          Privacy Policy
        </a>
        . One calm email on Sundays. Unsubscribe anytime.
      </p>
    </section>
  );
}
