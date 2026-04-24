import { ReactNode } from "react";

type Variant = "note" | "key-takeaway" | "warning" | "source";

const variantClass: Record<Variant, string> = {
  note: "border-sage-deep bg-sage/10",
  "key-takeaway": "border-pine bg-cream-deep/60",
  warning: "border-coral-deep bg-coral/10",
  source: "border-pine/30 bg-paper",
};

const variantLabel: Record<Variant, string> = {
  note: "Note",
  "key-takeaway": "Key takeaway",
  warning: "Heads up",
  source: "Source",
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside
      role="note"
      className={`border-l-4 rounded-r px-5 py-4 my-6 ${variantClass[variant]}`}
    >
      <p className="font-serif text-sm text-pine mb-1">
        {title ?? variantLabel[variant]}
      </p>
      <div className="text-charcoal text-[15px] leading-relaxed">{children}</div>
    </aside>
  );
}
