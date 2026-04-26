import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { EvidenceScore, EVIDENCE_WEIGHTS } from "@/components/editorial/EvidenceScore";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "methodologyV12" });
  return pageMetadata({
    title: t("h1"),
    description: t("intro"),
    path: "/methodology/v1-2",
  });
}

export default async function MethodologyV12Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "methodologyV12" });
  const tEvidence = await getTranslations({ locale, namespace: "evidenceScore" });

  const DIMENSIONS = [
    { name: t("dim1Name"), weight: EVIDENCE_WEIGHTS.trialStrength, high: t("dim1High"), mid: t("dim1Mid"), low: t("dim1Low") },
    { name: t("dim2Name"), weight: EVIDENCE_WEIGHTS.sampleSize, high: t("dim2High"), mid: t("dim2Mid"), low: t("dim2Low") },
    { name: t("dim3Name"), weight: EVIDENCE_WEIGHTS.mechanism, high: t("dim3High"), mid: t("dim3Mid"), low: t("dim3Low") },
    { name: t("dim4Name"), weight: EVIDENCE_WEIGHTS.reproducibility, high: t("dim4High"), mid: t("dim4Mid"), low: t("dim4Low") },
    { name: t("dim5Name"), weight: EVIDENCE_WEIGHTS.realWorldFit, high: t("dim5High"), mid: t("dim5Mid"), low: t("dim5Low") },
  ];

  const TIERS = [
    { range: "90-100", label: tEvidence("highConfidence"), body: t("tier1"), score: 94 },
    { range: "80-89",  label: tEvidence("strong"),         body: t("tier2"), score: 84 },
    { range: "70-79",  label: tEvidence("moderate"),       body: t("tier3"), score: 74 },
    { range: "60-69",  label: tEvidence("limited"),        body: t("tier4"), score: 64 },
    { range: "0-59",   label: tEvidence("preliminary"),    body: t("tier5"), score: 42 },
  ];

  return (
    <PageShell>
      <Eyebrow tone="coral">{t("eyebrow")}</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl text-pine mt-3 leading-tight">
        {t("h1")}
      </h1>
      <p className="mt-5 text-charcoal/85 text-[17px] leading-relaxed max-w-prose">
        {t("intro")} {t("narrativeAt")}{" "}
        <Link
          href="/methodology"
          className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
        >
          /methodology
        </Link>
        .
      </p>

      <DotRule className="my-10" />

      <section>
        <Eyebrow tone="sage">{t("dimensionsEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          {t("dimensionsTitle")}
        </h2>

        <div className="overflow-hidden border border-pine/15 rounded-sm">
          <table className="w-full text-[14.5px]">
            <thead className="bg-cream-deep/60 text-pine">
              <tr className="text-left">
                <th className="px-4 py-3 font-serif font-semibold">{t("tableDimension")}</th>
                <th className="px-4 py-3 font-serif font-semibold tnum">{t("tableWeight")}</th>
                <th className="px-4 py-3 font-serif font-semibold">{t("tableHigh")}</th>
                <th className="px-4 py-3 font-serif font-semibold">{t("tableMid")}</th>
                <th className="px-4 py-3 font-serif font-semibold">{t("tableLow")}</th>
              </tr>
            </thead>
            <tbody className="text-charcoal/85">
              {DIMENSIONS.map((d) => (
                <tr key={d.name} className="border-t border-pine/10 align-top">
                  <td className="px-4 py-3 font-medium text-pine whitespace-nowrap">
                    {d.name}
                  </td>
                  <td className="px-4 py-3 tnum">
                    {Math.round(d.weight * 100)}%
                  </td>
                  <td className="px-4 py-3">{d.high}</td>
                  <td className="px-4 py-3">{d.mid}</td>
                  <td className="px-4 py-3">{d.low}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="coral">{t("tierEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          {t("tierTitle")}
        </h2>
        <ol className="space-y-5">
          {TIERS.map((tier) => (
            <li
              key={tier.label}
              className="grid grid-cols-[5.5rem_1fr] gap-4 pb-5 border-b border-pine/10 last:border-b-0"
            >
              <EvidenceScore score={tier.score} size="lg" />
              <div>
                <div className="font-serif text-pine font-semibold">
                  <span className="tnum">{tier.range}</span> · {tier.label}
                </div>
                <p className="mt-2 text-[15.5px] text-charcoal/85 leading-relaxed">
                  {tier.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="sage">{t("reviewersEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-3">
          {t("reviewersTitle")}
        </h2>
        <p className="text-charcoal/85 text-[16px] leading-relaxed max-w-prose">
          {t("reviewersBody")}
        </p>
      </section>

      <DotRule className="my-12" />

      <section>
        <Eyebrow tone="stone">{t("changeLogEyebrow")}</Eyebrow>
        <h2 className="font-serif text-2xl md:text-3xl text-pine mt-3 mb-6">
          {t("changeLogTitle")}
        </h2>
        <ul className="space-y-3 text-[15.5px] text-charcoal/85 leading-relaxed">
          <li>
            <span className="caps-label text-stone block mb-1">{t("cl12date")}</span>
            {t("cl12")}
          </li>
          <li>
            <span className="caps-label text-stone block mb-1">{t("cl11date")}</span>
            {t("cl11")}
          </li>
          <li>
            <span className="caps-label text-stone block mb-1">{t("cl10date")}</span>
            {t("cl10")}
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
