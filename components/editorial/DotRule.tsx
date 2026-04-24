export function DotRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="h-px flex-1 bg-sage/25" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <span className="h-1 w-1 rounded-full bg-sage/50" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <span className="h-px flex-1 bg-sage/25" />
    </div>
  );
}

export function ThinRule({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-px w-full bg-pine/10 ${className}`} />;
}

/**
 * The peptips "field-notes rule" — a soft single dot on a thin line.
 * Warmer than plasticfreelab's LabRule (which implies forensics);
 * this reads like a hand-drawn notebook divider.
 */
export function FieldRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-10 bg-sage-deep" />
      <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
      <span className="h-px flex-1 bg-sage-deep/25" />
    </div>
  );
}

// Back-compat alias for any shared code that still calls LabRule.
export const LabRule = FieldRule;
