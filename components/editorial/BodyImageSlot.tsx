/**
 * BodyImageSlot — inline image-slot placeholder for pliability-style article bodies.
 *
 * Renders a flat, gradient-tinted rectangle (no decorative SVGs, no logos),
 * full-container width, with optional caption beneath in caps Inter 11px stone.
 *
 * Variants pull from the peptips brand palette so the placeholder reads
 * editorial-warm without competing with the typography.
 */

type Aspect = "16:10" | "4:5" | "1:1" | "16:9" | "21:9";
type Variant = "sage" | "coral" | "pine" | "cream" | "stone";

const aspectClass: Record<Aspect, string> = {
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
  "21:9": "aspect-[21/9]",
};

const variantBg: Record<Variant, string> = {
  sage: "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
  coral: "linear-gradient(135deg, #F1EADC 0%, #E8927C 70%, #C77560 100%)",
  pine: "linear-gradient(135deg, #7D9175 0%, #3D4A3A 70%, #2E382B 100%)",
  cream: "linear-gradient(135deg, #FAF6F0 0%, #F1EADC 60%, #C5D2BE 100%)",
  stone: "linear-gradient(135deg, #F0F0F0 0%, #D6D6D6 60%, #6F6B63 100%)",
};

export function BodyImageSlot({
  aspect = "16:10",
  variant = "sage",
  caption,
  className = "",
}: {
  aspect?: Aspect;
  variant?: Variant;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`my-12 md:my-16 ${className}`}>
      <div
        role="img"
        aria-label={caption ?? "Editorial illustration"}
        className={`w-full ${aspectClass[aspect]} overflow-hidden rounded-none`}
        style={{ backgroundImage: variantBg[variant] }}
      />
      {caption && (
        <figcaption className="mt-3 caps-meta">{caption}</figcaption>
      )}
    </figure>
  );
}
