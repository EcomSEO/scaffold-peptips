import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { hubs, getHub } from "@/lib/content/hubs";
import { pipelineByStage, pipelineCounts } from "@/lib/content/pipeline";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pipelinePageExt" });
  return pageMetadata({
    title: t("h1"),
    description: t("intro"),
    path: "/pipeline",
  });
}

export default async function PipelinePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pipelinePageExt" });
  const inResearch = pipelineByStage("in-research");
  const queued = pipelineByStage("queued");
  const counts = pipelineCounts();

  return (
    <PageShell>
      <Eyebrow tone="coral">{t("eyebrow")}</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-pine mt-3 leading-tight">
        {t("h1")}
      </h1>
      <p className="mt-5 text-charcoal/85 text-[17px] leading-relaxed max-w-prose">
        {t("intro")}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 caps-label text-stone">
        <span className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-coral animate-[reviewPulse_3.6s_ease-in-out_infinite]"
          />
          {counts.inResearch} {t("inResearchSuffix")}
        </span>
        <span aria-hidden>·</span>
        <span>{counts.queued} {t("queuedSuffix")}</span>
        <span aria-hidden>·</span>
        <span>{t("updatedWeekly")}</span>
      </div>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="sage">{t("inResearchEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-6">
          {t("inResearchTitle")}
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
                      {t("landsIn")} {hub.shortName}
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
        <Eyebrow tone="stone">{t("queuedEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-6">
          {t("queuedTitle")}
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
        <Eyebrow tone="sage">{t("suggestEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-2 mb-3">
          {t("suggestTitle")}
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed">
          {t("suggestBody")}{" "}
          <Link
            href="/contact"
            className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
          >
            {t("sendQuestion")}
          </Link>{" "}
          {t("andItGoes")}
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
