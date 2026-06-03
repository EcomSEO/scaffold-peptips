import type { Metadata } from "next";
import { SITE } from "./content/site";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";

const INDEX_WHEN_LAUNCHED: Metadata["robots"] = {
  index: true,
  follow: true,
};

const NO_INDEX_PRE_LAUNCH: Metadata["robots"] = {
  index: false,
  follow: false,
};

export function robotsMeta(): Metadata["robots"] {
  return SITE.launched ? INDEX_WHEN_LAUNCHED : NO_INDEX_PRE_LAUNCH;
}

/**
 * Build a path for the given locale + page path. The default locale is
 * served without a prefix (`/`, `/about`); other locales are prefixed
 * (`/de`, `/de/about`).
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return clean === "/" ? "" : clean;
  }
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function localeUrl(locale: Locale, path: string): string {
  const built = `${SITE.url}${localePath(locale, path)}`;
  return built === SITE.url ? `${SITE.url}/` : built;
}

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  es: "es_ES",
  nl: "nl_NL",
  pl: "pl_PL",
  sv: "sv_SE",
};

export function canonical(path: string): string {
  return localeUrl(defaultLocale, path);
}

/**
 * Page-level Metadata builder. Emits a locale-aware canonical, full
 * `alternates.languages` map (twelve locales plus `x-default`), and an
 * `openGraph.locale` tag in the right region format.
 */
/** Clamp a description to a SERP-safe length at a word boundary (meta only). */
function clampDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:]\s*$/, "");
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  ogType?: "website" | "article";
  /** Path under /public for the social/OG image (e.g. /heroes/slug.jpg).
   *  Falls back to the generated branded /opengraph-image when omitted. */
  image?: string;
  /** Force noindex,nofollow regardless of SITE.launched. Used by the
   *  Sweden compound stub on /sv/{restricted-slug}. */
  noindex?: boolean;
}): Metadata {
  const locale = opts.locale ?? defaultLocale;
  const url = localeUrl(locale, opts.path);
  const metaDescription = clampDescription(opts.description);
  const ogImage = opts.image
    ? `${SITE.url}${opts.image}`
    : `${SITE.url}/opengraph-image`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localeUrl(l, opts.path);
  }
  languages["x-default"] = localeUrl(defaultLocale, opts.path);

  return {
    title: opts.title,
    description: metaDescription,
    alternates: {
      canonical: url,
      languages,
    },
    robots: opts.noindex ? NO_INDEX_PRE_LAUNCH : robotsMeta(),
    openGraph: {
      type: opts.ogType ?? "website",
      url,
      title: opts.title,
      description: metaDescription,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
      images: [{ url: ogImage, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: metaDescription,
      images: [ogImage],
    },
  };
}
