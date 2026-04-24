/**
 * Fixed, full-viewport warm paper-grain overlay.
 * Subtle SVG noise at ~3.5% opacity, multiply-blended onto the cream paper
 * so the site stops feeling like a screen color and starts feeling like
 * an actual letter. Purely decorative.
 */
export function PaperGrain() {
  return <div aria-hidden className="paper-grain" />;
}
