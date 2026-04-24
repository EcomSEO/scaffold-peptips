"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps the pillar/cluster opening paragraph. On scroll into view, the
 * drop-cap gets a gentle soft-sage halo that fades in — "the letter has
 * been opened." One-shot, slow, respects reduced-motion.
 */
export function OpeningParagraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      node.classList.add("is-opened");
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.classList.add("is-opened");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tiny settle so the paragraph feels read-first, then opened.
            window.setTimeout(() => node.classList.add("is-opened"), 320);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <p ref={ref} className={`drop-cap ${className}`}>
      {children}
    </p>
  );
}
