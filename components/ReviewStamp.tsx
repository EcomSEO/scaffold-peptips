export function ReviewStamp({
  updatedAt,
  readingTime,
  author = "The Peptips Editorial Team",
}: {
  updatedAt: string;
  readingTime: number;
  author?: string;
}) {
  const formatted = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="text-[11px] tracking-[0.14em] uppercase text-stone flex flex-wrap items-center gap-2">
      <span>By {author}</span>
      <span aria-hidden className="text-sage-deep/50">·</span>
      <span>Updated {formatted}</span>
      <span aria-hidden className="text-sage-deep/50">·</span>
      <span className="tnum">{readingTime} min read</span>
    </p>
  );
}
