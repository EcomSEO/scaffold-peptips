/**
 * ArticleThumb — gradient placeholder used when we don't have a real photo.
 * Renders a deterministic pine→sage gradient with a subtle organic motif so
 * cards do not look broken before art is added.
 */
export function ArticleThumb({
  seed = "",
  className = "",
  variant = "card",
}: {
  seed?: string;
  className?: string;
  variant?: "card" | "hero";
}) {
  const hash = Array.from(seed).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const angle = (hash % 8) * 12;
  const blob = (hash % 4) + 1;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          variant === "hero"
            ? `linear-gradient(135deg, #2C3829 0%, #3D4A3A 45%, #7D9175 80%, #C5D2BE 100%)`
            : `linear-gradient(${135 + angle}deg, #2C3829 0%, #3D4A3A 50%, #9CAF94 100%)`,
      }}
      aria-hidden
    >
      <div
        className="absolute inset-0 mix-blend-overlay opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at ${20 + blob * 10}% ${30 + blob * 6}%, rgba(255,255,255,0.7) 0%, transparent 50%), radial-gradient(circle at ${80 - blob * 8}% ${70 - blob * 5}%, rgba(0,0,0,0.3) 0%, transparent 40%)`,
        }}
      />
      {/* Faint organic sweep evoking calm clinical photography */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        viewBox="0 0 200 125"
        preserveAspectRatio="none"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
      >
        <path d={`M0 ${60 + blob * 4} Q ${50 + blob * 6} ${30 - blob * 2}, 100 ${55 + blob * 3} T 200 ${50 + blob * 5}`} />
        <path d={`M0 ${80} Q ${50} ${50 + blob * 5}, 100 ${75 + blob * 2} T 200 ${70}`} opacity="0.5" />
      </svg>
      {/* Coral dot — peptips signature */}
      <span
        className="absolute rounded-full"
        style={{
          width: 8 + blob * 2,
          height: 8 + blob * 2,
          background: "#E8927C",
          opacity: 0.85,
          right: `${12 + blob * 2}%`,
          top: `${18 + blob * 3}%`,
          boxShadow: "0 0 0 3px rgba(232, 146, 124, 0.18)",
        }}
      />
    </div>
  );
}
