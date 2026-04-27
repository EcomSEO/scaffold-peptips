import { Link } from "@/i18n/navigation";
import { hubs } from "@/lib/content/hubs";
import { SITE } from "@/lib/content/site";
import { PeptipsMark } from "./Header";

const tools = [
  { slug: "/methodology", name: "Methodology v1.2" },
  { slug: "/pipeline", name: "What we are researching" },
  { slug: "/editorial-standards", name: "Editorial standards" },
  { slug: "/medical-disclaimer", name: "Medical disclaimer" },
];

const sisterSites = [
  { name: "InjectCompass", href: "https://injectcompass.com" },
  { name: "PlasticFreeLab", href: "https://plasticfreelab.com" },
  { name: "LarderLab", href: "https://larderlab.com" },
  { name: "CircadianStack", href: "https://circadianstack.com" },
];

/**
 * Healthline-grade publisher footer for peptips.
 * 4 column link grid, medical disclaimer block, sister-site links,
 * locale switcher, copyright + editorial standards / privacy / terms.
 */
export function Footer() {
  return (
    <footer className="mt-24 bg-surface-alt border-t border-rule">
      <div className="mx-auto max-w-container px-6 pt-14 pb-8">
        {/* Brand row */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-rule">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Peptips — home">
              <PeptipsMark size={32} />
              <span className="font-serif font-semibold text-[20px] tracking-tight text-pine">peptips</span>
            </Link>
            <p className="mt-4 text-[14px] text-ink-muted leading-relaxed max-w-md">
              {SITE.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-3">The five hubs</h4>
            <ul className="space-y-2 text-[14px]">
              {hubs.map((hub) => (
                <li key={hub.slug}>
                  <Link href={`/guides/${hub.slug}`} className="text-ink hover:text-pine-deep transition-colors">
                    {hub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-3">Reference</h4>
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

          <div className="md:col-span-3">
            <h4 className="eyebrow mb-3">Company</h4>
            <ul className="space-y-2 text-[14px]">
              <li><Link href="/about" className="text-ink hover:text-pine-deep">About</Link></li>
              <li><Link href="/editorial-standards" className="text-ink hover:text-pine-deep">Editorial standards</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-pine-deep">Contact &amp; corrections</Link></li>
              <li><Link href="/newsletter" className="text-ink hover:text-pine-deep">Newsletter</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-ink hover:text-pine-deep">Affiliate disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer block */}
        <div className="py-8 border-b border-rule">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <h4 className="eyebrow eyebrow-danger mb-2">Medical disclaimer</h4>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                Peptips publishes patient-education content. Nothing here is a
                substitute for the prescription your clinician wrote, the
                Instructions for Use that came with your medication, or the
                judgment of the healthcare professional who knows your case.
                If a symptom does not match what you read here, treat what
                you read as out of date and call your prescriber.
              </p>
            </div>
            <div className="md:col-span-5">
              <h4 className="eyebrow mb-2">From the network</h4>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[13px]">
                {sisterSites.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      rel="noopener"
                      className="text-ink-muted hover:text-pine-deep transition-colors"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink"
                  aria-label="Change language"
                >
                  <GlobeIcon className="w-4 h-4" />
                  English (US)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Imprint strip */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-ink-muted">
          <div>© {new Date().getFullYear()} {SITE.name}. Patient-education only. Not medical advice.</div>
          <ul className="flex flex-wrap gap-x-4">
            <li><Link href="/editorial-standards" className="hover:text-pine-deep">Editorial standards</Link></li>
            <li><Link href="/privacy" className="hover:text-pine-deep">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-pine-deep">Terms</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-pine-deep">Affiliate disclosure</Link></li>
            <li><Link href="/medical-disclaimer" className="hover:text-pine-deep">Medical disclaimer</Link></li>
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
