export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-pine/10">
      <div className="flex items-center gap-3 mb-4">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
        <span className="caps-label text-pine">Sources</span>
      </div>
      <ol className="space-y-2.5 text-[14px] text-charcoal/85 tnum">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span className="text-sage-deep/70 shrink-0 font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-pine underline decoration-sage-deep/50 underline-offset-2 hover:decoration-coral"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
