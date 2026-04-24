"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "peptips:cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(choice: "accept" | "reject") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-cream border border-pine/20 rounded-sm shadow-card p-4"
    >
      <p className="text-sm text-charcoal leading-relaxed">
        We use a small number of cookies for analytics and session continuity.
        No advertising cookies. See our{" "}
        <a
          href="/privacy"
          className="text-pine underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral transition-colors duration-150"
        >
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          onClick={() => accept("reject")}
          className="text-sm px-3 min-h-[44px] inline-flex items-center justify-center rounded-sm text-pine hover:bg-sage/10 transition-colors duration-150"
        >
          Reject
        </button>
        <button
          onClick={() => accept("accept")}
          className="text-sm px-4 min-h-[44px] inline-flex items-center justify-center rounded-sm bg-pine text-cream hover:bg-pine-deep transition-colors duration-150 font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
