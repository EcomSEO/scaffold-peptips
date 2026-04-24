/**
 * Layered radial gradient "mesh" — soft sage / coral / cream-deep at very low
 * opacity, drifting almost imperceptibly. Sits behind the hero.
 *
 * Evokes morning sunlight warming a kitchen table — not a tech dashboard.
 * Respects prefers-reduced-motion (animation killed in globals.css).
 */
export function GradientMesh({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`gradient-mesh ${className}`} />;
}
