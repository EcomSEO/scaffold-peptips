/**
 * Peptips affiliate registry.
 *
 * Per the 2026-04-29 monetization lock (`MONETIZATION-MODEL.md` §
 * "Peptide trio — pre-shop") and the brand-DNA hard rules in
 * `CLAUDE.md` + `02-peptips.md` Phase 0.5, this registry contains:
 *
 *   - Cooking scales (Escali, Etekcity, OXO)
 *   - CGM (Levels, Abbott Lingo, NutriSense)
 *   - Magnesium glycinate (Thorne, Pure Encapsulations)
 *   - B12 supplements (Thorne, NOW Foods)
 *   - Electrolyte mixes (LMNT, Liquid IV)
 *   - Travel cool-bags (Frio, MedAngel)
 *
 * It MUST NOT contain (site-ending boundary):
 *
 *   - Peptide vendors / compounding pharmacies
 *   - Telehealth GLP-1 prescribers (Hims, Ro, Sequence, etc.)
 *   - Weight-loss supplements / appetite suppressants (would
 *     violate the calm-patient-ed brand promise)
 *   - Display ads (clinical aesthetic + low YMYL CPMs)
 *
 * Schema follows the network-wide bridge-monetization pattern: every
 * link starts as a third-party affiliate (`thirdPartyUrl`); when the
 * owned shop launches the same `productKey` swaps to the first-party
 * URL automatically (no body rewrites needed).
 */

export type AffiliateLink = {
  productKey: string;
  brand: string;
  name: string;
  thirdPartyUrl: string;
  thirdPartyLabel:
    | "Amazon"
    | "Direct"
    | "Thorne"
    | "Pure Encapsulations"
    | "Levels"
    | "Abbott"
    | "NutriSense"
    | "LMNT"
    | "Frio";
  ownedShopUrl?: string;
  ownedShopAvailableFromDate?: string;
  category:
    | "cooking-scale"
    | "cgm"
    | "magnesium"
    | "b12"
    | "electrolytes"
    | "travel-cool-bag";
  blurb: string;
};

const AMAZON_TAG = "peptips-20";
const amazonUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;

export const AFFILIATES: Record<string, AffiliateLink> = {
  // ── Cooking scales ─────────────────────────────────────────────────
  "escali-primo-scale": {
    productKey: "escali-primo-scale",
    brand: "Escali",
    name: "Primo Digital Kitchen Scale",
    thirdPartyUrl: amazonUrl("B0007GAWRS"),
    thirdPartyLabel: "Amazon",
    category: "cooking-scale",
    blurb:
      "1 g resolution, tare in g and oz, 11 lb capacity. Useful for hitting protein targets when GLP-1-induced appetite suppression makes 'eating by feel' unreliable.",
  },
  "etekcity-eks-4150": {
    productKey: "etekcity-eks-4150",
    brand: "Etekcity",
    name: "Digital Food Scale, 0.1 g resolution",
    thirdPartyUrl: amazonUrl("B07Y1B2V8R"),
    thirdPartyLabel: "Amazon",
    category: "cooking-scale",
    blurb:
      "0.1 g resolution — finer than most kitchen scales. The pick when you're tracking small portions of high-density protein during a titration phase.",
  },

  // ── Continuous glucose monitors ────────────────────────────────────
  "abbott-lingo": {
    productKey: "abbott-lingo",
    brand: "Abbott",
    name: "Lingo CGM (Stelo in US)",
    thirdPartyUrl: "https://www.hellolingo.com/",
    thirdPartyLabel: "Abbott",
    category: "cgm",
    blurb:
      "Over-the-counter CGM. Useful for self-monitoring how a GLP-1 dose is moving glucose without a prescription. Same Abbott Libre sensor in a consumer wrapper.",
  },
  "levels-cgm": {
    productKey: "levels-cgm",
    brand: "Levels",
    name: "Levels CGM Program",
    thirdPartyUrl: "https://www.levelshealth.com/",
    thirdPartyLabel: "Levels",
    category: "cgm",
    blurb:
      "CGM + nutrition app wrapper. Pricier than Stelo / Lingo; the value-add depends on whether you'll use the analytics layer.",
  },
  "nutrisense-cgm": {
    productKey: "nutrisense-cgm",
    brand: "NutriSense",
    name: "NutriSense CGM Program",
    thirdPartyUrl: "https://www.nutrisense.io/",
    thirdPartyLabel: "NutriSense",
    category: "cgm",
    blurb:
      "CGM + dietitian coaching. The path when you want a human reviewing your glucose curves alongside the GLP-1 titration, not just the app.",
  },

  // ── Magnesium glycinate (sleep / cramp / GLP-1 GI side-effect adjunct) ──
  "thorne-magnesium-bisglycinate": {
    productKey: "thorne-magnesium-bisglycinate",
    brand: "Thorne",
    name: "Magnesium Bisglycinate",
    thirdPartyUrl: amazonUrl("B07KFXSBLD"),
    thirdPartyLabel: "Thorne",
    category: "magnesium",
    blurb:
      "Glycinate form — better tolerated than oxide / citrate at the same elemental dose. Useful for the constipation that can accompany the slowed-gastric-emptying GLP-1 phase.",
  },
  "pure-encapsulations-magnesium-glycinate": {
    productKey: "pure-encapsulations-magnesium-glycinate",
    brand: "Pure Encapsulations",
    name: "Magnesium (Glycinate)",
    thirdPartyUrl: amazonUrl("B0017OAXQ8"),
    thirdPartyLabel: "Pure Encapsulations",
    category: "magnesium",
    blurb:
      "120 mg elemental magnesium per capsule, glycinate form. Hypoallergenic formulation. The runner-up to Thorne when budget matters.",
  },

  // ── B12 (often a question on long-term GLP-1 cohorts) ──────────────
  "thorne-methyl-b12": {
    productKey: "thorne-methyl-b12",
    brand: "Thorne",
    name: "Methylcobalamin (B12)",
    thirdPartyUrl: amazonUrl("B0019LRY8U"),
    thirdPartyLabel: "Thorne",
    category: "b12",
    blurb:
      "1 mg methylcobalamin sublingual. Worth a lab-confirmed status check before supplementing — most patients on standard diets are replete.",
  },
  "now-b12-1000": {
    productKey: "now-b12-1000",
    brand: "NOW Foods",
    name: "B-12, 1000 mcg",
    thirdPartyUrl: amazonUrl("B0019LRDOC"),
    thirdPartyLabel: "Amazon",
    category: "b12",
    blurb:
      "Methylcobalamin sublingual at a budget price point. Equivalent active form to the Thorne SKU at half the per-tablet cost.",
  },

  // ── Electrolyte mixes (titration-phase hydration) ─────────────────
  "lmnt-electrolytes": {
    productKey: "lmnt-electrolytes",
    brand: "LMNT",
    name: "Recharge Electrolytes",
    thirdPartyUrl: "https://drinklmnt.com/",
    thirdPartyLabel: "LMNT",
    category: "electrolytes",
    blurb:
      "1000 mg Na, 200 mg K, 60 mg Mg per stick. Useful during the GLP-1 titration phase when reduced fluid intake can produce headaches and lethargy.",
  },
  "liquid-iv": {
    productKey: "liquid-iv",
    brand: "Liquid I.V.",
    name: "Hydration Multiplier",
    thirdPartyUrl: amazonUrl("B07RZQ7B5N"),
    thirdPartyLabel: "Amazon",
    category: "electrolytes",
    blurb:
      "Lower sodium per stick (500 mg) and added sugar — the alternative when the LMNT salt level is too much for a sedentary day.",
  },

  // ── Travel cool-bags ───────────────────────────────────────────────
  "frio-wallet-individual": {
    productKey: "frio-wallet-individual",
    brand: "Frio",
    name: "Frio Insulin Cooling Wallet, Individual",
    thirdPartyUrl: "https://frioinsulincoolingcase.com/",
    thirdPartyLabel: "Frio",
    category: "travel-cool-bag",
    blurb:
      "Evaporative cooling — wet for two minutes, lasts ~45 hours at typical room temperatures. The travel option airlines don't flag as a refrigeration accessory.",
  },
  "medangel-thermometer": {
    productKey: "medangel-thermometer",
    brand: "MedAngel",
    name: "MedAngel ONE Bluetooth Thermometer",
    thirdPartyUrl: amazonUrl("B07P5R3NC1"),
    thirdPartyLabel: "Amazon",
    category: "travel-cool-bag",
    blurb:
      "Bluetooth thermometer for medication storage; logs the actual temperature curve of your fridge / cool-bag and alerts on excursion. The right tool when you're auditing whether your travel storage actually held.",
  },
};

export function getAffiliate(
  productKey: string,
): { url: string; label: string; isOwned: boolean } | null {
  const a = AFFILIATES[productKey];
  if (!a) return null;
  if (a.ownedShopUrl) {
    return { url: a.ownedShopUrl, label: "Peptips Shop", isOwned: true };
  }
  return { url: a.thirdPartyUrl, label: a.thirdPartyLabel, isOwned: false };
}

export function affiliatesByCategory(
  category: AffiliateLink["category"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}
