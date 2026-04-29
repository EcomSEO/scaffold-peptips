/**
 * Substances illegal or restricted in Sweden as of the 2026-04-29
 * compliance audit. Content discussing these compounds must not be
 * served to Swedish (sv) locale visitors as a substantive article;
 * instead, render the noindex stub with Läkemedelsverket reference.
 *
 * Sources: Compliance audit 2026-04-29 (Läkemedelsverket
 * reclassifications + July 2025 narcotics schedule). Aligned with the
 * network-shared compliance-gap-fill.md Component 5.
 */

export const SE_RESTRICTED_COMPOUNDS = new Set([
  "compounded-semaglutide",
  "melanotan-i",
  "melanotan-ii",
  "bpc-157",
  "tb-500",
]);

/**
 * Compound terms (lowercase) that, if present in a post slug or title,
 * mark the article as restricted in Sweden.
 */
export const SE_RESTRICTED_TERMS: string[] = [
  "compounded-semaglutide",
  "compounded semaglutide",
  "melanotan",
  "bpc-157",
  "bpc 157",
  "tb-500",
  "tb 500",
];

export function isRestrictedInSweden(slug: string): boolean {
  if (SE_RESTRICTED_COMPOUNDS.has(slug)) return true;
  const haystack = slug.toLowerCase();
  return SE_RESTRICTED_TERMS.some((term) => haystack.includes(term));
}

export const SE_RESTRICTED_NOTICE =
  "Innehållet är inte tillgängligt i Sverige. Den här artikeln behandlar ett ämne som är reglerat i Sverige enligt Läkemedelsverkets riktlinjer för apoteksberedning och förskrivning. För information om vad som gäller i Sverige, se Läkemedelsverket.";
