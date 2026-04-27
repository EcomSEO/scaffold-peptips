"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { hubs, localizeHub } from "@/lib/content/hubs";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ReadingProgress } from "./ReadingProgress";

/**
 * Runrepeat-style header — full-width dark pine bar, big rounded search input
 * dominating the center, "Reviews" + "Buying guides" nav on the right.
 *
 * - Bar: pine #3D4A3A solid, h-16 (64px), full-width, sticky top.
 * - Logo: peptips wordmark + leaf in cream (left).
 * - Search: white rounded-pill input + coral submit button on the right of
 *   the input. Submits to /search?q=… (TODO: real search route — currently
 *   redirects to /guides as the catalog).
 * - Nav: Reviews · Buying guides · LocaleSwitcher (right of search).
 * - Mobile: search collapses to a magnifying-glass icon; nav into hamburger.
 *
 * Below the bar: thin paper-cream strip carrying the mandatory medical
 * disclaimer + pipeline counter + methodology link (CLAUDE.md §Legal).
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (mobileOpen || mobileSearchOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen, mobileSearchOpen]);

  return (
    <header className="sticky top-0 z-40">
      <ReadingProgress />

      {/* === Main bar === */}
      <div
        role="banner"
        className="bg-pine border-b border-pine-deep/40"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-3 md:gap-5 h-14 md:h-16">

            {/* LEFT — wordmark */}
            <Link
              href="/"
              aria-label="Peptips — home"
              className="flex items-center gap-2 shrink-0"
            >
              <Mark />
              <span
                className="text-cream text-lg md:text-xl font-semibold tracking-tight leading-none"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Peptips
              </span>
            </Link>

            {/* CENTER — search (desktop) */}
            <form
              role="search"
              action={`/${locale === "en" ? "" : locale}/guides`}
              className="hidden md:flex items-center flex-1 max-w-[640px] mx-auto"
            >
              <label className="relative flex w-full items-stretch">
                <span className="sr-only">{t("searchPlaceholder")}</span>
                <input
                  type="search"
                  name="q"
                  placeholder={t("searchPlaceholder")}
                  className="w-full bg-white rounded-l-md text-pine placeholder:text-stone/70 px-4 h-9 md:h-10 outline-none focus:ring-2 focus:ring-coral/60"
                  style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: 14 }}
                />
                <button
                  type="submit"
                  aria-label={t("searchButton")}
                  className="inline-flex items-center justify-center bg-coral hover:bg-coral-deep text-pine rounded-r-md px-4 h-9 md:h-10 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                  </svg>
                </button>
              </label>
            </form>

            {/* RIGHT — nav (desktop) + locale + mobile triggers */}
            <div className="flex items-center gap-3 md:gap-5 shrink-0 ml-auto md:ml-0">

              {/* Reviews + Buying guides — desktop */}
              <nav className="hidden md:flex items-center gap-5 text-[14px]">
                <Link
                  href="/guides"
                  className="text-cream/85 hover:text-cream transition-colors font-medium"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {t("navReviews")}
                </Link>
                <Link
                  href="/guides"
                  className="text-cream/85 hover:text-cream transition-colors font-medium"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {t("navBuyingGuides")}
                </Link>
              </nav>

              {/* Locale switcher — desktop */}
              <div className="hidden md:inline-flex">
                <LocaleSwitcher />
              </div>

              {/* Mobile search trigger */}
              <button
                onClick={() => setMobileSearchOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-cream hover:bg-cream/10 transition-colors"
                aria-label={t("searchButton")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-cream hover:bg-cream/10 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* === Secondary strip — disclaimer + pipeline + methodology + standards (every page) === */}
      <div
        role="note"
        aria-label="Editorial standards strip"
        className="border-b border-pine/10 bg-paper/85 backdrop-blur"
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

      {/* === Mobile search overlay === */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 bg-pine md:hidden">
          <div className="flex items-center gap-2 px-4 h-14 border-b border-pine-deep/40">
            <button
              onClick={() => setMobileSearchOpen(false)}
              aria-label="Close search"
              className="text-cream inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-cream/10"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <form
              role="search"
              action={`/${locale === "en" ? "" : locale}/guides`}
              className="flex-1 flex items-stretch"
              onSubmit={() => setMobileSearchOpen(false)}
            >
              <input
                type="search"
                name="q"
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="flex-1 bg-white text-pine placeholder:text-stone/70 px-4 h-10 outline-none rounded-l-md"
                style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: 14 }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-coral text-pine rounded-r-md px-4 h-10"
                aria-label={t("searchButton")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* === Mobile drawer === */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream md:hidden overflow-auto">
          <div className="flex items-center justify-between px-5 py-4 border-b border-pine/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mark.svg" alt="" aria-hidden className="h-7 w-7" />
              <span
                className="text-pine text-xl font-semibold"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Peptips
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-pine inline-flex items-center justify-center h-11 w-11 rounded-md hover:bg-sage/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-5 py-6 gap-1">
            <div className="text-[11px] uppercase tracking-[0.16em] text-stone mb-3 font-medium">
              {t("navReviews")} & {t("navBuyingGuides")}
            </div>
            {hubs.map((hub) => {
              const hl = localizeHub(hub, locale);
              return (
                <Link
                  key={hub.slug}
                  href={`/guides/${hub.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[48px] py-3 text-lg text-pine flex items-center rounded-sm hover:bg-sage/10 px-2 -mx-2"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {hl.name}
                </Link>
              );
            })}
            <div className="text-[11px] uppercase tracking-[0.16em] text-stone mt-6 mb-3 font-medium">
              {t("masthead")}
            </div>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navAbout")}</Link>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navMethodology")}</Link>
            <Link href="/pipeline" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navPipeline")}</Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navEditorialStandards")}</Link>
            <Link href="/medical-disclaimer" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navMedicalDisclaimer")}</Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="min-h-[44px] py-2.5 text-pine flex items-center px-2 -mx-2 rounded-sm hover:bg-sage/10">{t("navNewsletter")}</Link>
            <div className="mt-6">
              <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="inline-flex w-full items-center justify-center gap-1.5 bg-coral hover:bg-coral-deep text-pine font-medium rounded-md px-5 h-12 transition-colors">
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

/**
 * Peptips brand mark recolored cream-on-pine for the dark bar.
 */
function Mark() {
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
