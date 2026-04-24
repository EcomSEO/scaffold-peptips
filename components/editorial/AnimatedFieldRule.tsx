"use client";

import { useEffect, useRef } from "react";

/**
 * Peptips "field-notes rule" — a soft single dot on a thin line — that
 * animates on scroll into view: the line draws in from the left, and the
 * dot traces along the line like a nurse's notebook pen stroke, settling
 * at the far right. Warm, slow, once.
 *
 * Falls back to a static rule for reduced-motion readers.
 */
export function AnimatedFieldRule({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.classList.add("is-visible");
      return;
    }
    const measure = () => {
      const lineEl = node.querySelector<HTMLElement>(".fr-line");
      const dotEl = node.querySelector<HTMLElement>(".fr-dot");
      if (!lineEl || !dotEl) return;
      // Travel = the visible width of the line, minus the dot's diameter and
      // the starting left offset so the dot lands neatly at the line's end.
      const rect = lineEl.getBoundingClientRect();
      const travel = Math.max(0, rect.width - 10);
      dotEl.style.setProperty("--fr-travel", `${travel}px`);
    };
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            measure();
            node.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      obs.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`field-rule-animated flex items-center gap-4 ${className}`}
    >
      <span className="fr-line block h-px flex-1 bg-sage-deep/60" />
      <span className="fr-dot h-1.5 w-1.5 rounded-full bg-sage-deep" />
    </div>
  );
}
