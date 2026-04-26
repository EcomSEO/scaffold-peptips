import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trustPages.medicalDisclaimer" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/medical-disclaimer",
  });
}

export default async function MedicalDisclaimerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trustPages.medicalDisclaimer" });
  const body = (t.raw("body") as string[]) ?? [];
  return <TrustPageTemplate title={t("h1")} body={body} />;
}
