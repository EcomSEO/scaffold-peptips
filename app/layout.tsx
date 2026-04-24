import type { Metadata } from "next";
import { Source_Serif_4, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { MedicalDisclaimerFooter } from "@/components/MedicalDisclaimer";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { PaperGrain } from "@/components/editorial/PaperGrain";
import { SITE } from "@/lib/content/site";
import { robotsMeta } from "@/lib/seo";

// Locked body/headline stack from the brand book — self-hosted via next/font
// so we get no FOUT and no Google Fonts preconnect flash.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// ONE decorative italic serif — used purely for pull-quote flourish
// (see components/editorial/PullQuote.tsx). Inter body stays.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: robotsMeta(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <OrganizationJsonLd />
        <PaperGrain />
        <Header />
        {children}
        <MedicalDisclaimerFooter />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
