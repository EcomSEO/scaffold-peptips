export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-[#D6D6D6]">
      <div className="caps-meta mb-4">Sources</div>
      <ol className="space-y-2.5 text-[14px] text-ink-soft tnum">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-3 leading-relaxed">
            <span className="text-stone shrink-0 font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-ink underline decoration-stone/40 underline-offset-2 hover:decoration-coral hover:text-coral-deep transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
