import type { MetadataRoute } from "next";
import { hubs } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { productPageKeys } from "@/lib/content/products-meta";
import { localizeBody } from "@/lib/content/posts-i18n";
import { localeUrl } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

/**
 * Clean sitemap: every URL is a real, unique, indexable page.
 *
 * Policy (2026-06-08 rewrite):
 *  - English is the canonical version of every page and is always listed.
 *  - A locale variant is listed ONLY when that page has genuinely translated
 *    content, not English fallback. Submitting fallback-only locale URLs is
 *    duplicate content, so the six untranslated locales (fr/it/es/nl/pl/sv)
 *    are intentionally excluded until they carry real translations.
 *  - German (de) is listed for the homepage and for posts whose translated
 *    body exists (detected via localizeBody().hasBody). Those entries carry
 *    hreflang alternates (en/de/x-default); English-only pages carry none.
 *  - No priority or changeFrequency: Google ignores priority and largely
 *    ignores changeFrequency. lastModified is the one signal worth sending.
 */

const TRANSLATED_LOCALES: Locale[] = ["de"];

export default function sitemap(): MetadataRoute.Sitemap {
  // Date-only (YYYY-MM-DD) lastmod: the cleanest, most universally accepted
  // W3C-datetime form, and it avoids the millisecond-precision timestamps
  // some sitemap parsers dislike.
  const now = new Date().toISOString().slice(0, 10);

  // English-only entry: one clean URL, no hreflang noise.
  const en = (path: string, lastModified: string = now): MetadataRoute.Sitemap[number] => ({
    url: localeUrl("en", path),
    lastModified,
  });

  // Bilingual entry set: emit the English URL plus each translated-locale URL,
  // every one carrying the same en/de/x-default hreflang map.
  const withTranslations = (
    path: string,
    translated: Locale[],
    lastModified: string = now
  ): MetadataRoute.Sitemap => {
    const languages: Record<string, string> = { en: localeUrl("en", path) };
    for (const l of translated) languages[l] = localeUrl(l, path);
    languages["x-default"] = localeUrl("en", path);

    return (["en", ...translated] as Locale[]).map((l) => ({
      url: localeUrl(l, path),
      lastModified,
      alternates: { languages },
    }));
  };

  const entries: MetadataRoute.Sitemap = [
    // Home — German homepage is fully localized, so list both with hreflang.
    ...withTranslations("/", TRANSLATED_LOCALES),

    // Hubs — masthead is localized but body chrome is not yet, so English only.
    ...hubs.map((h) => en(`/guides/${h.slug}`)),

    // Posts — English always; add a German URL only where a real translated
    // body exists (TranslationPendingBanner would otherwise show on the rest).
    ...posts.flatMap((p) => {
      const de = TRANSLATED_LOCALES.filter(
        (l) => localizeBody(p.slug, l).hasBody
      );
      return de.length
        ? withTranslations(`/${p.slug}`, de, p.updatedAt)
        : [en(`/${p.slug}`, p.updatedAt)];
    }),

    // Per-product pick pages — English only (no translations yet).
    ...productPageKeys().map((key) => en(`/picks/${key}`)),

    // Trust and utility pages — English only.
    ...[
      "/about",
      "/editorial-standards",
      "/methodology",
      "/methodology/v1-2",
      "/pipeline",
      "/medical-disclaimer",
      "/privacy",
      "/terms",
      "/affiliate-disclosure",
      "/contact",
      "/newsletter",
    ].map((path) => en(path)),
  ];

  return entries;
}
