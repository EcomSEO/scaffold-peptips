import type { ReactNode } from "react";

type Variant = "key-takeaway" | "watch-out" | "method" | "our-take" | "short-answer";

const config: Record<
  Variant,
  { label: string; border: string; bg: string; dot: string }
> = {
  "short-answer": {
    label: "The short answer",
    border: "border-sage-deep",
    bg: "bg-sage/10",
    dot: "bg-sage-deep",
  },
  "key-takeaway": {
    label: "Key takeaway",
    border: "border-sage-deep",
    bg: "bg-sage/10",
    dot: "bg-sage-deep",
  },
  "watch-out": {
    label: "Worth knowing",
    border: "border-coral-deep",
    bg: "bg-coral/10",
    dot: "bg-coral-deep",
  },
  method: {
    label: "How we read this",
    border: "border-pine",
    bg: "bg-cream-deep/60",
    dot: "bg-pine",
  },
  "our-take": {
    label: "Our take",
    border: "border-sage-deep",
    bg: "bg-cream-deep/70",
    dot: "bg-sage-deep",
  },
};

export function KeyTakeaway({
  variant = "key-takeaway",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const c = config[variant];
  return (
    <aside
      className={`my-8 border-l-[3px] ${c.border} ${c.bg} pl-5 pr-5 py-5 rounded-r`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
        <span className="caps-label text-pine">{title ?? c.label}</span>
      </div>
      <div className="text-[15.5px] text-charcoal/90 leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
