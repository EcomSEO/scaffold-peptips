"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

/**
 * Calm inline email capture.
 *
 * Focus treatment: soft pine glow on the input plus a coral accent line
 * that sweeps in along the bottom (left-to-right) when the user engages
 * the form. Submit button gently presses down on :active via .btn-primary.
 */
export function EmailCapture({
  headline,
  subhead,
  variant = "inline",
  buttonLabel,
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
  buttonLabel?: string;
}) {
  const t = useTranslations("emailCapture");
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

  const resolvedHeadline = headline ?? t("headline");
  const resolvedSubhead = subhead ?? t("subhead");
  const resolvedButton = buttonLabel ?? t("submit");

  return (
    <section id="email-capture" className={wrapper}>
      <div className="flex items-center gap-3 mb-3">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-coral-deep" />
        <span className="caps-label text-coral-deep">{t("eyebrow")}</span>
      </div>
      <h2 className="font-serif text-2xl md:text-[1.75rem] text-pine leading-tight">
        {resolvedHeadline}
      </h2>
      <p className="mt-3 text-[15px] text-charcoal/85 max-w-xl leading-relaxed">
        {resolvedSubhead}
      </p>
      {status === "ok" ? (
        <p className="mt-6 text-pine font-medium">{t("success")}</p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md"
        >
          <label htmlFor="email" className="sr-only">
            {t("emailLabel")}
          </label>
          <div className="email-input relative flex-1">
            <input
              id="email"
              type="email"
              required
              placeholder={t("placeholder")}
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
            {status === "loading" ? t("submitLoading") : resolvedButton}
          </button>
        </form>
      )}
      <p className="mt-4 text-[12px] text-stone max-w-md leading-relaxed">
        {t("consentBefore")}{" "}
        <a href="/privacy" className="underline decoration-sage-deep/60 underline-offset-2">
          {t("privacyLink")}
        </a>
        {t("consentAfter")}
      </p>
    </section>
  );
}
