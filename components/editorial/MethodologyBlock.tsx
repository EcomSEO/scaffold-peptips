type Item = { label: string; detail: string };

/**
 * Peptips-unique Methodology frame — 4 points, warm-journal register.
 * Not "how we picked products" — "how we read the literature".
 */
const defaultItems: Item[] = [
  {
    label: "The questions we answered",
    detail:
      "We start from the real questions readers bring us — the ones from 11pm Google searches, not from a keyword planner. Every post has to answer at least one specific question in the first 100 words.",
  },
  {
    label: "The trials we read",
    detail:
      "We cite the STEP, SURMOUNT, PIONEER and SUSTAIN programs directly — not press releases. Where data is a secondary analysis or a subgroup, we flag it.",
  },
  {
    label: "What the labeling says",
    detail:
      "The FDA prescribing information is the ground truth for dosing, side effect rates, contraindications, and warnings. When guidance and label disagree, we show both.",
  },
  {
    label: "Where we say we're uncertain",
    detail:
      "Long-term data doesn't exist yet for most of this class. We mark uncertainty out loud — not bury it in a footnote — and we update the page when new data drops.",
  },
];

export function MethodologyBlock({
  items = defaultItems,
  title = "How this post was reported",
}: {
  items?: Item[];
  title?: string;
}) {
  return (
    <section className="my-12 bg-cream-deep/50 border border-pine/10 rounded-sm p-7 md:p-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-2 w-2 rounded-full bg-sage-deep" />
        <span className="caps-label text-pine">How we report</span>
      </div>
      <h2 className="font-serif text-2xl text-pine mb-6 leading-tight">
        {title}
      </h2>
      <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="eyebrow text-stone mb-1">{item.label}</dt>
            <dd className="text-[15px] text-charcoal/85 leading-relaxed">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
