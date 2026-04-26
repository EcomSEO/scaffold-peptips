import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trustPages.newsletter" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/newsletter",
  });
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trustPages.newsletter" });
  const tCapture = await getTranslations({ locale, namespace: "emailCapture" });
  const body = (t.raw("body") as string[]) ?? [];
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-pine leading-tight">
        {t("h1")}
      </h1>
      {body.map((para, i) => (
        <p key={i} className="mt-6 text-lg text-charcoal/80 leading-relaxed">
          {para}
        </p>
      ))}
      <EmailCapture
        variant="end-of-article"
        headline={tCapture("headline")}
        subhead={tCapture("subhead")}
      />
    </main>
  );
}
