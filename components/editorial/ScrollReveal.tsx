"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades a section up as it scrolls into view. IntersectionObserver-based,
 * one-shot (no re-animation on scroll-up), and respects reduced-motion
 * via the .reveal class in globals.css.
 */
export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
}) {
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
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => target.classList.add("is-visible"), delayMs);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delayMs, threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
