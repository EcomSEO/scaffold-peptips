import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { MedicalDisclaimerFooter } from "@/components/MedicalDisclaimer";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { SITE, siteTagline, siteDescription } from "@/lib/content/site";
import { robotsMeta, localeUrl } from "@/lib/seo";
import { routing, locales, type Locale } from "@/i18n/routing";

// Single-font system — Inter only. Pliability-style editorial register.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US", de: "de_DE", fr: "fr_FR", it: "it_IT", es: "es_ES",
  nl: "nl_NL", pl: "pl_PL", sv: "sv_SE", pt: "pt_PT", ro: "ro_RO",
  cs: "cs_CZ", no: "no_NO",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) return {};
  const locale = raw as Locale;
  const tagline = siteTagline(locale);
  const description = siteDescription(locale);

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = localeUrl(l, "/");
  }
  languages["x-default"] = localeUrl("en", "/");

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} — ${tagline}`,
      template: `%s — ${SITE.name}`,
    },
    description,
    alternates: {
      canonical: localeUrl(locale, "/"),
      languages,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: { card: "summary_large_image" },
    robots: robotsMeta(),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) {
    notFound();
  }
  const locale = raw as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <OrganizationJsonLd />
          <Header />
          {children}
          <MedicalDisclaimerFooter />
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
