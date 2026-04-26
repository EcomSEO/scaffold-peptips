import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { hubs, getHub } from "@/lib/content/hubs";
import { pipelineByStage, pipelineCounts } from "@/lib/content/pipeline";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What we're researching",
  description:
    "The peptips research pipeline — every post we're working on right now and every one we have lined up. Readable to readers and to crawlers.",
  path: "/pipeline",
});

export default function PipelinePage() {
  const inResearch = pipelineByStage("in-research");
  const queued = pipelineByStage("queued");
  const counts = pipelineCounts();

  return (
    <PageShell>
      <Eyebrow tone="coral">The pipeline</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-pine mt-3 leading-tight">
        What we&apos;re researching right now.
      </h1>
      <p className="mt-5 text-charcoal/85 text-[17px] leading-relaxed max-w-prose">
        Every post on peptips starts as a question a reader asked us. We keep
        the queue public so you can see what&apos;s coming, push back, and tell
        us what we&apos;re missing. Send us a question and it goes into this
        list.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 caps-label text-stone">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-coral animate-[reviewPulse_3.6s_ease-in-out_infinite]"
          />
          {counts.inResearch} in research
        </span>
        <span aria-hidden>·</span>
        <span>{counts.queued} queued</span>
        <span aria-hidden>·</span>
        <span>updated weekly</span>
      </div>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="sage">In research</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-6">
          Being briefed and drafted right now.
        </h2>
        <ol className="space-y-6">
          {inResearch.map((item, i) => {
            const hub = getHub(item.hub);
            return (
              <li
                key={item.title}
                className="grid grid-cols-[2.2rem_1fr] gap-4 pb-6 border-b border-pine/10 last:border-b-0"
              >
                <span className="rank-numeral !text-xl !text-coral-deep tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-pine leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] text-charcoal/80 leading-relaxed">
                    {item.why}
                  </p>
                  {hub && (
                    <div className="mt-2 caps-label text-stone">
                      Lands in {hub.shortName}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="stone">Queued</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-6">
          Lined up next.
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {queued.map((item) => {
            const hub = getHub(item.hub);
            return (
              <li
                key={item.title}
                className="text-[15px] text-pine leading-snug"
              >
                <span className="block font-serif">{item.title}</span>
                {hub && (
                  <span className="block caps-label text-stone mt-1">
                    {hub.shortName}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="sage">Suggest one</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-3">
          Tell us what we&apos;re missing.
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed">
          The best questions on this list came from readers.{" "}
          <Link
            href="/contact"
            className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
          >
            Send us a question
          </Link>{" "}
          and it goes into the queue.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {hubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/guides/${hub.slug}`}
              className="inline-flex items-center rounded-full border border-sage-deep/30 px-3.5 py-1.5 text-[13px] text-pine hover:bg-sage/10"
            >
              {hub.shortName}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
