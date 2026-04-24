"use client";

import { useEffect, useRef } from "react";

/**
 * A thin coral line that fills as the reader scrolls down the page.
 * Lives at the top of the Header masthead. Warm, reassuring — not a
 * data-dashboard progress bar.
 *
 * Respects prefers-reduced-motion by simply skipping the rAF loop
 * (the bar still shows, it just jumps instead of transitions —
 * the CSS transition is tiny anyway).
 */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
      el.style.setProperty("--rp", `${pct}%`);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="reading-progress"
      role="presentation"
    />
  );
}
