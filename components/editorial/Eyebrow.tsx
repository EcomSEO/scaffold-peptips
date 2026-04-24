import type { ReactNode } from "react";

type Tone = "sage" | "pine" | "stone" | "coral";

export function Eyebrow({
  children,
  tone = "sage",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "pine"
      ? "text-pine"
      : tone === "stone"
      ? "text-stone"
      : tone === "coral"
      ? "text-coral-deep"
      : "text-sage-deep";
  return (
    <span className={`eyebrow ${toneClass} ${className}`}>{children}</span>
  );
}
