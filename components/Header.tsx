"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { MegaMenu, type MegaMenuColumn } from "./MegaMenu";

/**
 * Healthline-grade publisher header for peptips.
 * Sticky white bar h-16, pine wordmark + coral dot, primary nav center
 * (with mega-menu on hover), 320px rounded search, locale switcher,
 * "Newsletter" pine pill button.
 *
 * Mobile: hamburger drawer + collapsed search icon.
 */

type SimpleNav = { href: string; label: string };
type MegaNav = {
  label: string;
  megaMenu: MegaMenuColumn[];
  featured?: { eyebrow: string; title: string; href: string; dek: string };
};
type NavItem = SimpleNav | MegaNav;

function isMega(item: NavItem): item is MegaNav {
  return (item as MegaNav).megaMenu !== undefined;
}

const NAV: NavItem[] = [
  {
    label: "Hubs",
    megaMenu: [
      {
        title: "Get oriented",
        items: [
          { label: "GLP-1 101", href: "/guides/glp1-101" },
          { label: "The complete beginner guide", href: "/glp1-guide-for-beginners" },
          { label: "Ozempic week by week", href: "/ozempic-week-by-week" },
        ],
      },
      {
        title: "Living on a GLP-1",
        items: [
          { label: "Side effects & management", href: "/guides/side-effects-and-management" },
          { label: "Food, nutrition & muscle", href: "/guides/food-nutrition-and-muscle" },
          { label: "Lifestyle on GLP-1", href: "/guides/lifestyle-on-glp1" },
        ],
      },
      {
        title: "Long-term",
        items: [
          { label: "Plateaus & long-term", href: "/guides/plateaus-and-long-term" },
          { label: "Maintenance dosing", href: "/guides/plateaus-and-long-term" },
          { label: "Coming off a GLP-1", href: "/guides/plateaus-and-long-term" },
        ],
      },
    ],
    featured: {
      eyebrow: "Field notes",
      title: "Ozempic week by week — what to expect, what is normal, when to call.",
      href: "/ozempic-week-by-week",
      dek: "A calm, week-numbered companion to the first year on semaglutide.",
    },
  },
  {
    label: "Conditions",
    megaMenu: [
      {
        title: "Type 2 diabetes",
        items: [
          { label: "GLP-1 for type 2 diabetes", href: "/guides/glp1-101" },
          { label: "Ozempic & A1c", href: "/ozempic-week-by-week" },
          { label: "Mounjaro for diabetes", href: "/glp1-guide-for-beginners" },
        ],
      },
      {
        title: "Weight management",
        items: [
          { label: "Wegovy explained", href: "/glp1-guide-for-beginners" },
          { label: "Zepbound explained", href: "/glp1-guide-for-beginners" },
          { label: "Plateaus & maintenance", href: "/guides/plateaus-and-long-term" },
        ],
      },
      {
        title: "Cardiometabolic",
        items: [
          { label: "Heart-risk reduction", href: "/glp1-guide-for-beginners" },
          { label: "Sleep apnea", href: "/guides/lifestyle-on-glp1" },
          { label: "Fatty liver", href: "/guides/glp1-101" },
        ],
      },
    ],
  },
  {
    label: "Side effects",
    megaMenu: [
      {
        title: "GI",
        items: [
          { label: "Nausea & vomiting", href: "/guides/side-effects-and-management" },
          { label: "Constipation", href: "/guides/side-effects-and-management" },
          { label: "Sulfur burps", href: "/guides/side-effects-and-management" },
        ],
      },
      {
        title: "Body composition",
        items: [
          { label: "Muscle loss & protein", href: "/guides/food-nutrition-and-muscle" },
          { label: "Hair thinning", href: "/guides/side-effects-and-management" },
          { label: "Fatigue", href: "/guides/side-effects-and-management" },
        ],
      },
      {
        title: "Less common",
        items: [
          { label: "Pancreatitis warnings", href: "/guides/side-effects-and-management" },
          { label: "Gallbladder symptoms", href: "/guides/side-effects-and-management" },
          { label: "Injection-site bruising", href: "/guides/side-effects-and-management" },
        ],
      },
    ],
  },
  {
    label: "Compare",
    megaMenu: [
      {
        title: "Drug vs. drug",
        items: [
          { label: "Ozempic vs. Wegovy", href: "/glp1-guide-for-beginners" },
          { label: "Mounjaro vs. Zepbound", href: "/glp1-guide-for-beginners" },
          { label: "Semaglutide vs. tirzepatide", href: "/glp1-guide-for-beginners" },
        ],
      },
      {
        title: "GLP-1 vs. alternatives",
        items: [
          { label: "GLP-1 vs. metformin", href: "/glp1-guide-for-beginners" },
          { label: "GLP-1 vs. SGLT2", href: "/glp1-guide-for-beginners" },
          { label: "GLP-1 vs. lifestyle alone", href: "/guides/lifestyle-on-glp1" },
        ],
      },
    ],
  },
  {
    label: "Tools",
    megaMenu: [
      {
        title: "Reference",
        items: [
          { label: "Methodology v1.2", href: "/methodology" },
          { label: "Editorial standards", href: "/editorial-standards" },
          { label: "What we are researching", href: "/pipeline" },
        ],
      },
      {
        title: "Trust",
        items: [
          { label: "About peptips", href: "/about" },
          { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
          { label: "Medical disclaimer", href: "/medical-disclaimer" },
        ],
      },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 120);
  };

  const activeItem = activeMega ? NAV.find((n) => isMega(n) && n.label === activeMega) : null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-rule">
      <div className="mx-auto max-w-container px-6 h-16 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Peptips — home">
          <PeptipsMark />
          <span className="font-serif font-semibold text-[18px] tracking-tight text-pine group-hover:text-pine-deep transition-colors">
            peptips
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 ml-4 flex-1"
          aria-label="Primary"
          onMouseLeave={scheduleClose}
        >
          {NAV.map((item) => {
            if (isMega(item)) {
              const isOpen = activeMega === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMega(item.label)}
                  onFocus={() => openMega(item.label)}
                >
                  <button
                    type="button"
                    className={`px-3 py-2 text-[15px] font-medium rounded-md transition-colors ${
                      isOpen ? "text-pine-deep bg-pine-50" : "text-ink hover:text-pine-deep"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[15px] font-medium text-ink hover:text-pine-deep transition-colors rounded-md"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <form
          role="search"
          action="/"
          className="hidden md:flex items-center w-[320px] h-10 px-4 rounded-pill bg-surface-alt border border-rule focus-within:border-pine focus-within:bg-white transition-colors"
        >
          <SearchIcon className="w-4 h-4 text-ink-muted shrink-0" />
          <input
            type="search"
            name="q"
            placeholder="Search GLP-1 questions, drugs, side effects…"
            className="ml-2 bg-transparent w-full text-[14px] text-ink placeholder:text-ink-soft outline-none"
            aria-label="Search the site"
          />
        </form>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 h-9 text-[13px] font-medium text-ink-muted hover:text-ink rounded-md transition-colors"
            aria-label="Change language"
          >
            <GlobeIcon className="w-4 h-4" />
            <span>EN</span>
          </button>
          <Link
            href="/newsletter"
            className="hidden md:inline-flex items-center h-9 px-4 rounded-pill bg-pine text-white text-[14px] font-semibold hover:bg-pine-deep transition-colors"
          >
            Newsletter
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-md"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-md"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {activeItem && isMega(activeItem) && (
        <div
          className="absolute left-0 right-0 bg-white border-b border-rule shadow-card"
          onMouseEnter={() => openMega(activeItem.label)}
          onMouseLeave={scheduleClose}
        >
          <MegaMenu columns={activeItem.megaMenu} featured={activeItem.featured} />
        </div>
      )}

      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 bg-white overflow-auto lg:hidden"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-rule">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <PeptipsMark />
              <span className="font-serif font-semibold text-[18px] text-pine">peptips</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <form role="search" action="/" className="flex items-center w-full h-12 px-4 rounded-pill bg-surface-alt border border-rule mb-6">
              <SearchIcon className="w-5 h-5 text-ink-muted shrink-0" />
              <input
                type="search"
                name="q"
                placeholder="Search GLP-1 questions…"
                className="ml-3 bg-transparent w-full text-[15px] outline-none"
                aria-label="Search the site"
              />
            </form>
            <nav className="flex flex-col">
              {NAV.map((item) => {
                if (isMega(item)) {
                  return (
                    <details key={item.label} className="border-b border-rule">
                      <summary className="cursor-pointer flex items-center justify-between py-4 text-[18px] font-semibold text-ink list-none">
                        {item.label}
                        <ChevronDown />
                      </summary>
                      <div className="pb-4 pl-2">
                        {item.megaMenu.map((col) => (
                          <div key={col.title} className="mb-3">
                            <div className="eyebrow eyebrow-muted mb-2">{col.title}</div>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[15px] text-ink hover:text-pine-deep"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-[18px] font-semibold text-ink border-b border-rule"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center h-12 px-4 rounded-pill bg-pine text-white text-[15px] font-semibold"
            >
              Sign up for the newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function PeptipsMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 3 C 21 9, 22 19, 14 25 C 6 19, 7 9, 14 3 Z"
        fill="#3D4A3A"
      />
      <path d="M14 7 L 14 22" stroke="#C5D2BE" strokeWidth="1" strokeLinecap="round" />
      <circle cx="14" cy="13" r="3.2" fill="#FAF6F0" />
      <circle cx="14" cy="13" r="1.6" fill="#E8927C" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="9" cy="9" r="6" />
      <line x1="13.5" y1="13.5" x2="17.5" y2="17.5" strokeLinecap="round" />
    </svg>
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

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <polyline points="3,6 8,11 13,6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
