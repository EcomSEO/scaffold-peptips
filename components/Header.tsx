"use client";

import Link from "next/link";
import { useState } from "react";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { Dateline } from "./editorial/Dateline";

export function Header() {
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-paper/95 backdrop-blur sticky top-0 z-40 border-b border-pine/10">
      {/* Masthead strip — journal cue */}
      <div className="border-b border-pine/10 hidden md:block">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">
          <Dateline />
          <div className="flex items-center gap-5 text-[11px] tracking-[0.14em] uppercase text-stone">
            <Link href="/editorial-standards" className="nav-link">
              Editorial standards
            </Link>
            <span aria-hidden className="text-sage-deep/50">·</span>
            <Link href="/medical-disclaimer" className="nav-link">
              Medical disclaimer
            </Link>
            <span aria-hidden className="text-sage-deep/50">·</span>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <span aria-hidden className="text-sage-deep/50">·</span>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <Wordmark size="md" />

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              onClick={() => setGuidesOpen((v) => !v)}
              className="nav-link flex items-center gap-1"
              aria-expanded={guidesOpen}
              aria-haspopup="menu"
            >
              Guides
              <span aria-hidden className="text-sage-deep">▾</span>
            </button>
            {guidesOpen && (
              <div
                role="menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-paper border border-pine/15 rounded-sm shadow-card p-3"
              >
                <div className="eyebrow text-stone px-3 pb-2 border-b border-pine/10 mb-2">
                  The five hubs
                </div>
                {hubs.map((hub, i) => (
                  <Link
                    key={hub.slug}
                    href={`/guides/${hub.slug}`}
                    role="menuitem"
                    className="flex items-start gap-3 px-3 py-2.5 hover:bg-sage/10 rounded-sm group"
                  >
                    <span className="rank-numeral !text-base !text-sage-deep/60 group-hover:!text-sage-deep shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="text-pine font-medium leading-tight">
                        {hub.name}
                      </div>
                      <div className="text-xs text-stone mt-0.5">
                        {hub.shortName}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/guides/side-effects-and-management" className="nav-link">
            Side effects
          </Link>
          <Link href="/newsletter" className="nav-link">
            Newsletter
          </Link>
          <Link
            href="/newsletter"
            className="btn-primary !py-2.5 !px-4 !text-sm"
          >
            Get the 30-day guide →
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-pine"
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {/* MANDATORY medical disclaimer strip — sits directly below masthead, on every page */}
      <div className="bg-sage/10 border-t border-sage-deep/20">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-start gap-3">
          <span
            aria-hidden
            className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sage-deep shrink-0"
          />
          <p className="text-[12px] md:text-[12.5px] text-pine/90 leading-snug">
            <span className="font-semibold">Peptips is an educational resource.</span>{" "}
            We are not a clinic and do not provide medical advice. Talk to your prescriber before
            changing your GLP-1 regimen.{" "}
            <Link
              href="/medical-disclaimer"
              className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral"
            >
              Read the full disclaimer
            </Link>
            .
          </p>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-paper md:hidden overflow-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-pine/10">
            <Wordmark size="sm" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-pine"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="eyebrow text-stone mb-2">The five hubs</div>
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg text-pine font-serif flex items-center gap-3"
              >
                <span className="rank-numeral !text-xl !text-sage-deep/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hub.name}
              </Link>
            ))}
            <div className="eyebrow text-stone mt-6 mb-2">The masthead</div>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-pine">
              About
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-pine">
              Editorial standards
            </Link>
            <Link href="/medical-disclaimer" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-pine">
              Medical disclaimer
            </Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-pine">
              Newsletter
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2 text-lg text-pine">
              Contact
            </Link>
            <div className="mt-6">
              <Link
                href="/newsletter"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Get the 30-day guide →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
