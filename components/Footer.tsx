import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { hubs, localizeHub } from "@/lib/content/hubs";
import { SITE, siteDescription } from "@/lib/content/site";
import type { Locale } from "@/i18n/routing";
import { PeptipsMark } from "./Header";
import { LocaleSwitcher } from "./LocaleSwitcher";

/**
 * Footer copy per locale. English is the base; locales without an entry
 * fall back to English (same pattern as HOME_COPY on the homepage).
 */
type FooterCopy = {
  fiveHubs: string;
  bestProducts: string;
  reference: string;
  company: string;
  methodology: string;
  pipeline: string;
  editorialStandards: string;
  medicalDisclaimer: string;
  bestElectrolytes: string;
  bestFiber: string;
  bestProtein: string;
  about: string;
  contact: string;
  newsletter: string;
  affiliateDisclosure: string;
  disclaimerHeading: string;
  disclaimerBody: string;
  newsletterHeading: string;
  newsletterBody: string;
  subscribe: string;
  imprint: string;
  privacy: string;
  terms: string;
};

const FOOTER_COPY: Partial<Record<Locale, FooterCopy>> = {
  en: {
    fiveHubs: "The five hubs",
    bestProducts: "Best products",
    reference: "Reference",
    company: "Company",
    methodology: "Methodology v1.2",
    pipeline: "What we are researching",
    editorialStandards: "Editorial standards",
    medicalDisclaimer: "Medical disclaimer",
    bestElectrolytes: "Best electrolytes",
    bestFiber: "Best fiber for constipation",
    bestProtein: "Best protein powders",
    about: "About",
    contact: "Contact & corrections",
    newsletter: "Newsletter",
    affiliateDisclosure: "Affiliate disclosure",
    disclaimerHeading: "Medical disclaimer",
    disclaimerBody:
      "Peptips publishes patient-education content. Nothing here is a substitute for the prescription your clinician wrote, the Instructions for Use that came with your medication, or the judgment of the healthcare professional who knows your case. If a symptom does not match what you read here, treat what you read as out of date and call your prescriber.",
    newsletterHeading: "Newsletter",
    newsletterBody:
      "Calm, cited GLP-1 patient education, every week. New week-by-week guides, side-effect explainers, comparison deep-dives. No vendor pitches.",
    subscribe: "Subscribe →",
    imprint: "Patient-education only. Not medical advice.",
    privacy: "Privacy",
    terms: "Terms",
  },
  de: {
    fiveHubs: "Die fünf Bereiche",
    bestProducts: "Produktempfehlungen",
    reference: "Nachschlagen",
    company: "Über uns",
    methodology: "Methodik v1.2",
    pipeline: "Was wir gerade recherchieren",
    editorialStandards: "Redaktionelle Standards",
    medicalDisclaimer: "Medizinischer Hinweis",
    bestElectrolytes: "Beste Elektrolyte",
    bestFiber: "Beste Ballaststoffe bei Verstopfung",
    bestProtein: "Beste Proteinpulver",
    about: "Über uns",
    contact: "Kontakt & Korrekturen",
    newsletter: "Newsletter",
    affiliateDisclosure: "Affiliate-Hinweis",
    disclaimerHeading: "Medizinischer Hinweis",
    disclaimerBody:
      "Peptips veröffentlicht Informationsinhalte für Patientinnen und Patienten. Nichts hier ersetzt das Rezept Ihrer Ärztin oder Ihres Arztes, die Gebrauchsinformation Ihres Medikaments oder das Urteil der Fachperson, die Ihren Fall kennt. Wenn ein Symptom nicht zu dem passt, was Sie hier lesen, betrachten Sie den Text als veraltet und rufen Sie Ihre verschreibende Praxis an.",
    newsletterHeading: "Newsletter",
    newsletterBody:
      "Ruhige, belegte GLP-1-Informationen, jede Woche. Neue Woche-für-Woche-Guides, Erklärungen zu Nebenwirkungen, ausführliche Vergleiche. Keine Verkaufsangebote.",
    subscribe: "Abonnieren →",
    imprint: "Nur Patienteninformation. Keine medizinische Beratung.",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
  },
};

/**
 * Healthline-grade publisher footer for peptips.
 *
 * 4-col link grid, medical disclaimer block, locale switcher,
 * copyright + editorial standards / privacy / terms. Sister-site
 * cross-links removed per the 2026-04-29 operator-isolation lock.
 */
export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const c = FOOTER_COPY[locale] ?? FOOTER_COPY.en!;

  const tools = [
    { slug: "/methodology", name: c.methodology },
    { slug: "/pipeline", name: c.pipeline },
    { slug: "/editorial-standards", name: c.editorialStandards },
    { slug: "/medical-disclaimer", name: c.medicalDisclaimer },
  ];

  const bestProducts = [
    { slug: "/best-electrolytes-for-glp1", name: c.bestElectrolytes },
    { slug: "/best-fiber-supplements-for-glp1", name: c.bestFiber },
    { slug: "/best-protein-powders-for-glp1", name: c.bestProtein },
  ];

  return (
    <footer className="mt-24 bg-surface-alt border-t border-rule">
      <div className="mx-auto max-w-container px-6 pt-14 pb-8">
        {/* Brand row */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-rule">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Peptips, home">
              <PeptipsMark size={32} />
              <span className="font-serif font-semibold text-[20px] tracking-tight text-pine">peptips</span>
            </Link>
            <p className="mt-4 text-[14px] text-ink-muted leading-relaxed max-w-md">
              {siteDescription(locale)}
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">{c.fiveHubs}</h4>
            <ul className="space-y-2 text-[14px]">
              {hubs.map((hub) => (
                <li key={hub.slug}>
                  <Link href={`/guides/${hub.slug}`} className="text-ink hover:text-pine-deep transition-colors">
                    {localizeHub(hub, locale).name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">{c.bestProducts}</h4>
            <ul className="space-y-2 text-[14px]">
              {bestProducts.map((b) => (
                <li key={b.slug}>
                  <Link href={b.slug} className="text-ink hover:text-pine-deep transition-colors">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">{c.reference}</h4>
            <ul className="space-y-2 text-[14px]">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={t.slug} className="text-ink hover:text-pine-deep transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">{c.company}</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="/about" className="text-ink hover:text-pine-deep">{c.about}</Link></li>
              <li><Link href="/editorial-standards" className="text-ink hover:text-pine-deep">{c.editorialStandards}</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-pine-deep">{c.contact}</Link></li>
              <li><Link href="/newsletter" className="text-ink hover:text-pine-deep">{c.newsletter}</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-ink hover:text-pine-deep">{c.affiliateDisclosure}</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer block */}
        <div className="py-8 border-b border-rule">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <h4 className="eyebrow eyebrow-danger mb-2">{c.disclaimerHeading}</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                {c.disclaimerBody}
              </p>
            </div>
            <div className="md:col-span-5">
              <h4 className="eyebrow mb-2">{c.newsletterHeading}</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                {c.newsletterBody}{" "}
                <Link
                  href="/newsletter"
                  className="text-pine-deep hover:text-ink underline decoration-pine-deep/40 hover:decoration-ink underline-offset-4"
                >
                  {c.subscribe}
                </Link>
              </p>
              <div className="mt-4 flex items-center gap-2 text-ink-muted">
                <GlobeIcon className="w-4 h-4 shrink-0" />
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Imprint strip */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-ink-muted">
          <div>© {new Date().getFullYear()} {SITE.name}. {c.imprint}</div>
          <ul className="flex flex-wrap gap-x-4">
            <li><Link href="/editorial-standards" className="hover:text-pine-deep">{c.editorialStandards}</Link></li>
            <li><Link href="/privacy" className="hover:text-pine-deep">{c.privacy}</Link></li>
            <li><Link href="/terms" className="hover:text-pine-deep">{c.terms}</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-pine-deep">{c.affiliateDisclosure}</Link></li>
            <li><Link href="/medical-disclaimer" className="hover:text-pine-deep">{c.medicalDisclaimer}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15" />
      <path d="M10 2.5c2.5 2.7 2.5 12.3 0 15" />
      <path d="M10 2.5c-2.5 2.7-2.5 12.3 0 15" />
    </svg>
  );
}
