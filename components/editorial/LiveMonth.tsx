"use client";

import { useEffect, useState } from "react";

/**
 * Small client component that updates the current month on mount, so the
 * masthead dateline stays fresh without rebuilds. Server-renders the
 * build-time month (passed as `initial`) so there's no layout shift.
 */
export function LiveMonth({ initial }: { initial: string }) {
  const [label, setLabel] = useState(initial);

  useEffect(() => {
    const now = new Date();
    const fresh = new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
    }).format(now);
    if (fresh !== initial) setLabel(fresh);
  }, [initial]);

  return <span>{label}</span>;
}
