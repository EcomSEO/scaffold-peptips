/**
 * Peptips site-unique editorial component.
 *
 * Renders at the top of every medical-claim post:
 *   "Last medically reviewed: {date} — {Reviewer Name, Credential}"
 *
 * Uses warm pine color (not coral, which would read alarmist).
 * Includes a tiny medical-disclaimer caption below the stamp.
 *
 * Placed into PillarTemplate / ComparisonTemplate / ClusterTemplate / ListicleTemplate
 * ABOVE the lead paragraph whenever post.medicalDisclaimer === "required".
 */
export function PostReviewStamp({
  reviewedOn,
  reviewer = "The Peptips Editorial Team",
  credential = "Researchers · Brand book §8",
}: {
  reviewedOn: string;
  reviewer?: string;
  credential?: string;
}) {
  const formatted = new Date(reviewedOn).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <aside
      role="note"
      aria-label="Medical review and disclaimer"
      className="not-prose my-7 rounded-sm border border-sage-deep/30 bg-sage/8 px-5 py-4"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full bg-sage-deep"
          />
          <span className="caps-label text-pine">Last medically reviewed</span>
        </span>
        <span className="text-[13.5px] text-pine font-medium tnum">
          {formatted}
        </span>
        <span aria-hidden className="text-sage-deep/60">·</span>
        <span className="text-[13.5px] text-pine">{reviewer}</span>
        <span className="text-[12.5px] text-stone italic">— {credential}</span>
      </div>
      <p className="mt-2 text-[12.5px] text-stone leading-relaxed">
        This post is for informational purposes only and is not medical advice.
        Always discuss any changes to your GLP-1 regimen with your prescriber.
      </p>
    </aside>
  );
}
