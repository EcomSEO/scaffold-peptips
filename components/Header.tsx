"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { hubs, localizeHub } from "@/lib/content/hubs";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ReadingProgress } from "./ReadingProgress";

/**
 * The floating pill masthead — peptips' primary navigation.
 *
 * Geometry: a single dark pine capsule, centered at the top of the viewport,
 * ~95% of viewport width with side margins, full-pill rounded (rounded-full),
 * ~64px tall. White wordmark + center nav links + coral primary CTA on the right.
 *
 * Two visual modes are exposed via the `hero` prop:
 *  - hero=true  → translucent pine + backdrop-blur (sits over photography on the home hero)
 *  - hero=false → solid pine (the normal article-page state, on cream)
 *
 * A thin secondary white strip sits directly below the pill, carrying the
 * mandatory medical disclaimer + the pipeline counters. Required on every page
 * (CLAUDE.md §Legal positioning).
 *
 * Mobile: the centered nav collapses behind a hamburger; the pill keeps its
 * geometry. Entrance animations are skipped under prefers-reduced-motion.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale() as Locale;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <ReadingProgress />

      {/* === The floating pill === */}
      <div className="px-3 md:px-6 pt-3 md:pt-4">
        <div className="mx-auto max-w-7xl">
          <div
            className={[
              "relative flex items-center justify-between gap-4",
              "h-14 md:h-16 px-3 md:px-5",
              "rounded-full",
              "bg-pine/95 supports-[backdrop-filter]:bg-pine/85 backdrop-blur-md",
              "border border-pine-deep/40",
              "shadow-[0_8px_24px_-12px_rgba(46,56,43,0.45)]",
              scrolled ? "shadow-[0_12px_32px_-14px_rgba(46,56,43,0.5)]" : "",
            ].join(" ")}
          >
            {/* LEFT — wordmark on dark */}
            <Link
              href="/"
              aria-label="Peptips — home"
              className="flex items-center gap-2 shrink-0 pl-1 md:pl-2"
            >
              <PillMark />
              <span className="font-serif text-cream text-lg md:text-[1.3rem] font-semibold tracking-tight leading-none">
                Peptips
              </span>
            </Link>

            {/* CENTER — nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[14px]">
              <PillNavLink href="/guides/glp1-101">{t("navGlp1")}</PillNavLink>
              <PillNavLink href="/guides/side-effects-and-management">
                {t("navSideEffects")}
              </PillNavLink>
              <PillNavLink href="/guides/food-nutrition-and-muscle">
                {t("navFood")}
              </PillNavLink>
              <PillNavLink href="/guides/lifestyle-on-glp1">
                {t("navLifestyle")}
              </PillNavLink>
              <PillNavLink href="/guides/plateaus-and-long-term">
                {t("navLongTerm")}
              </PillNavLink>
              <PillNavLink href="/newsletter">{t("navNewsletter")}</PillNavLink>
            </nav>

            {/* RIGHT — secondary + primary CTAs */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <Link
                href="/medical-disclaimer"
                className="hidden md:inline-flex items-center text-cream/75 hover:text-cream text-[13.5px] px-2 py-1.5 rounded-full transition-colors"
              >
                {t("disclaimerLink")}
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-1.5 bg-coral hover:bg-coral-deep text-pine font-medium text-[13.5px] md:text-sm rounded-full px-4 md:px-5 h-9 md:h-10 transition-colors"
              >
                {t("ctaGetTips")}
                <span aria-hidden>→</span>
              </Link>
              <div className="hidden md:inline-flex">
                <LocaleSwitcher />
              </div>

              {/* Hamburger — visible below lg */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-cream hover:bg-cream/10 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden
                >
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Secondary strip — disclaimer + pipeline counters (every page) === */}
      <div
        role="note"
        aria-label="Editorial standards strip"
        className="mt-3 border-y border-pine/10 bg-paper/85 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <div className="flex items-center gap-2 text-[10.5px] md:text-[11px] uppercase tracking-[0.16em] text-stone">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-coral animate-[reviewPulse_3.6s_ease-in-out_infinite]"
            />
            <span>{t("secondaryStrip")}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10.5px] md:text-[11px] uppercase tracking-[0.16em] text-stone">
            <Link href="/pipeline" className="hover:text-pine transition-colors">
              {t("pipelineCount")}
            </Link>
            <span aria-hidden className="text-sage-deep/40">·</span>
            <Link href="/methodology" className="hover:text-pine transition-colors">
              {t("methodologyVersion")}
            </Link>
            <span aria-hidden className="text-sage-deep/40">·</span>
            <Link href="/editorial-standards" className="hover:text-pine transition-colors">
              {t("editorialStandardsLink")}
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile drawer === */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream lg:hidden overflow-auto">
          <div className="flex items-center justify-between px-5 py-4 border-b border-pine/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mark.svg" alt="" aria-hidden className="h-7 w-7" />
              <span className="font-serif text-pine text-xl font-semibold">
                Peptips
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-pine inline-flex items-center justify-center h-11 w-11 rounded-full hover:bg-sage/10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-5 py-6 gap-1">
            <div className="eyebrow text-stone mb-3">{t("fiveHubs")}</div>
            {hubs.map((hub, i) => {
              const hl = localizeHub(hub, locale);
              return (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                onClick={() => setMobileOpen(false)}
                className="min-h-[48px] py-3 text-lg text-pine font-serif flex items-center gap-3 rounded-sm hover:bg-sage/10 px-2 -mx-2"
              >
                <span className="rank-numeral !text-xl !text-sage-deep/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hl.name}
              </Link>
              );
            })}
            <div className="eyebrow text-stone mt-6 mb-3">{t("masthead")}</div>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navAbout")}</Link>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navMethodology")}</Link>
            <Link href="/pipeline" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navPipeline")}</Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navEditorialStandards")}</Link>
            <Link href="/medical-disclaimer" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navMedicalDisclaimer")}</Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navNewsletter")}</Link>
            <div className="mt-6">
              <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="inline-flex w-full items-center justify-center gap-1.5 bg-coral hover:bg-coral-deep text-pine font-medium rounded-full px-5 h-12 transition-colors">
                {t("ctaGetTips")}
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-pine/10">
              <LocaleSwitcher onNavigate={() => setMobileOpen(false)} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* === Pieces === */

function PillNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-cream/85 hover:text-cream text-[14px] font-medium tracking-tight transition-colors"
    >
      {children}
    </Link>
  );
}

/**
 * The peptips mark recolored for the dark pill — recolors the source
 * mark.svg paths via inline SVG so all strokes/fills sit on cream.
 */
function PillMark() {
  return (
    <svg
      viewBox="0 0 60 60"
      width="26"
      height="26"
      role="img"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M 12 32 A 18 18 0 0 1 48 32"
        fill="none"
        stroke="#FAF6F0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 20 40 A 10 10 0 0 1 40 40"
        fill="none"
        stroke="#C5D2BE"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="48" cy="32" r="3.2" fill="#E8927C" />
      <circle cx="12" cy="32" r="1.6" fill="#FAF6F0" />
    </svg>
  );
}
