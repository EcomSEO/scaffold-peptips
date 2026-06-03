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
 *   - Electrolyte mixes (LMNT, Liquid IV, Re-Lyte, Needed, ...)
 *   - Fiber supplements (Citrucel, Metamucil, Sunfiber, ...)
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
 *
 * Outbound links are rendered through the cloaked `/go/[productKey]`
 * redirect (see app/go/[key]/route.ts) so links can be swapped without
 * editing post bodies and every click is server-logged.
 */

export type AffiliateLink = {
  productKey: string;
  brand: string;
  name: string;
  /** Primary affiliate URL today. Amazon links carry the peptips-20 tag. */
  thirdPartyUrl: string;
  /** Button label for the primary retailer, e.g. "Amazon" or "LMNT". */
  thirdPartyLabel: string;
  /** Optional second retailer button (e.g. brand-direct primary + Amazon). */
  amazonUrl?: string;
  ownedShopUrl?: string;
  ownedShopAvailableFromDate?: string;
  category:
    | "cooking-scale"
    | "cgm"
    | "magnesium"
    | "b12"
    | "electrolytes"
    | "fiber"
    | "protein"
    | "travel-cool-bag";
  blurb: string;
};

const AMAZON_TAG = "ecomseo02-20";
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
    amazonUrl: amazonUrl("B07TT8B1JJ"),
    category: "electrolytes",
    blurb:
      "1000 mg Na, 200 mg K, 60 mg Mg per stick. Useful during the GLP-1 titration phase when reduced fluid intake can produce headaches and lethargy.",
  },
  "redmond-re-lyte": {
    productKey: "redmond-re-lyte",
    brand: "Redmond",
    name: "Re-Lyte Electrolyte Mix",
    thirdPartyUrl: "https://redmond.life/products/re-lyte-electrolyte-mix",
    thirdPartyLabel: "Redmond",
    amazonUrl: amazonUrl("B088G2F4ZJ"),
    category: "electrolytes",
    blurb:
      "810 mg Na, 400 mg K, 50 mg Mg per scoop using unrefined real salt. Higher potassium than LMNT; lightly stevia-sweetened.",
  },
  "needed-electrolytes": {
    productKey: "needed-electrolytes",
    brand: "Needed",
    name: "Hydration Support / Electrolytes",
    thirdPartyUrl: "https://thisisneeded.com/products/electrolytes",
    thirdPartyLabel: "Needed",
    amazonUrl: amazonUrl("B0B994NCDY"),
    category: "electrolytes",
    blurb:
      "815 mg Na, 250 mg K, 75 mg Mg per stick, monk-fruit sweetened, formulated with GLP-1 and perinatal users in mind. Premium-priced, thoughtfully built.",
  },
  "liquid-iv": {
    productKey: "liquid-iv",
    brand: "Liquid I.V.",
    name: "Hydration Multiplier",
    thirdPartyUrl: amazonUrl("B01IT9NLHW"),
    thirdPartyLabel: "Amazon",
    category: "electrolytes",
    blurb:
      "Lower sodium per stick (500 mg) and added sugar — the alternative when the LMNT salt level is too much for a sedentary day.",
  },
  "nuun-sport": {
    productKey: "nuun-sport",
    brand: "Nuun",
    name: "Sport Electrolyte Tablets",
    thirdPartyUrl: "https://nuunlife.com/products/nuun-sport",
    thirdPartyLabel: "Nuun",
    amazonUrl: amazonUrl("B018NZJC70"),
    category: "electrolytes",
    blurb:
      "300 mg Na, 150 mg K per tablet, low sugar, stevia-sweetened. Portable fizzing-tablet format; you may need two tablets to match the powder mixes.",
  },
  "ultima-replenisher": {
    productKey: "ultima-replenisher",
    brand: "Ultima",
    name: "Replenisher Electrolyte Powder",
    thirdPartyUrl: "https://ultimareplenisher.com/",
    thirdPartyLabel: "Ultima",
    amazonUrl: amazonUrl("B01IIGCCIK"),
    category: "electrolytes",
    blurb:
      "55 mg Na, 250 mg K, 100 mg Mg per stick, zero sugar. Light-hydration level sodium — a daily base, not a heavy side-effect-day replacement.",
  },
  "pedialyte-solution": {
    productKey: "pedialyte-solution",
    brand: "Pedialyte",
    name: "Electrolyte Solution",
    thirdPartyUrl: amazonUrl("B000ARPKB2"),
    thirdPartyLabel: "Amazon",
    category: "electrolytes",
    blurb:
      "490 mg Na, 370 mg K per 12 oz, with dextrose to aid sodium absorption. Worth keeping on hand for a severe vomiting/diarrhea day, not for daily use.",
  },
  "dr-berg-electrolytes": {
    productKey: "dr-berg-electrolytes",
    brand: "Dr. Berg",
    name: "Electrolyte Powder",
    thirdPartyUrl: "https://shop.drberg.com/electrolyte-powder-regular",
    thirdPartyLabel: "Dr. Berg",
    amazonUrl: amazonUrl("B06W9F3X88"),
    category: "electrolytes",
    blurb:
      "50 mg Na, 1000 mg K, 120 mg Mg per scoop — an unusually high-potassium, low-sodium profile. Fits someone already salting food heavily.",
  },

  // ── Fiber supplements (GLP-1 constipation) ─────────────────────────
  // Bias: non-fermenting fibers first (less gas on an already-slowed gut).
  "citrucel-methylcellulose": {
    productKey: "citrucel-methylcellulose",
    brand: "Citrucel",
    name: "Methylcellulose Fiber",
    thirdPartyUrl: amazonUrl("B001F0QZBC"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Non-fermenting soluble fiber: bulks and softens stool without producing gas — the most comfortable default for a bloated GLP-1 gut. Powder and caplet forms.",
  },
  "metamucil-psyllium": {
    productKey: "metamucil-psyllium",
    brand: "Metamucil / Konsyl",
    name: "Psyllium Husk Fiber",
    thirdPartyUrl: amazonUrl("B003CT2YQY"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "The most-studied fiber for chronic constipation; forms a soft gel. Partially fermentable, so start low and build. Choose sugar-free; Konsyl is near-pure psyllium.",
  },
  "sunfiber-phgg": {
    productKey: "sunfiber-phgg",
    brand: "Sunfiber",
    name: "Partially Hydrolyzed Guar Gum (PHGG)",
    thirdPartyUrl: amazonUrl("B00GYHWJRA"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Clear, tasteless, low-gas soluble fiber that stirs into any liquid. Mildly prebiotic but far gentler than inulin. Comfortable, if slightly slower-acting.",
  },
  "ground-flaxseed": {
    productKey: "ground-flaxseed",
    brand: "Bob's Red Mill",
    name: "Ground Flaxseed",
    thirdPartyUrl: amazonUrl("B000QSS260"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Whole-food mixed soluble/insoluble fiber plus omega-3s and lignans. Small servings suit a small appetite; must be ground and refrigerated.",
  },
  "fibercon-polycarbophil": {
    productKey: "fibercon-polycarbophil",
    brand: "FiberCon",
    name: "Calcium Polycarbophil Caplets",
    thirdPartyUrl: amazonUrl("B0000VLWZQ"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Non-fermenting bulk-former in caplet form — no powder to mix, easy on low-appetite days. Take each dose with a full glass of water.",
  },
  "acacia-fiber": {
    productKey: "acacia-fiber",
    brand: "Acacia (gum arabic)",
    name: "Acacia Fiber Powder",
    thirdPartyUrl: amazonUrl("B0025OUVPI"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Slow, gentle-fermenting soluble prebiotic fiber — less gas than inulin. Dissolves cleanly and tasteless; a mild daily base.",
  },
  "benefiber-wheat-dextrin": {
    productKey: "benefiber-wheat-dextrin",
    brand: "Benefiber",
    name: "Wheat Dextrin Fiber",
    thirdPartyUrl: amazonUrl("B00CX3ASFE"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Dissolves invisibly with no grit, but readily fermented — more likely to add gas to an uncomfortable gut. Contains wheat (gluten).",
  },
  "inulin-chicory": {
    productKey: "inulin-chicory",
    brand: "Inulin / chicory root",
    name: "Inulin Prebiotic Fiber",
    thirdPartyUrl: amazonUrl("B000MGSI1K"),
    thirdPartyLabel: "Amazon",
    category: "fiber",
    blurb:
      "Strong prebiotic but highly fermentable — a common cause of exactly the gas and bloating GLP-1 users are already fighting. Usually the wrong pick here.",
  },

  // ── Protein powders (lean-mass protection on a GLP-1) ──────────────
  // Amazon-search primary: protein SKUs/flavours rotate constantly, so a
  // tagged search never 404s or points at a discontinued tub.
  "klean-isolate": {
    productKey: "klean-isolate",
    brand: "Klean Athlete",
    name: "Klean Isolate Whey",
    thirdPartyUrl: amazonUrl("B00XIKLTLS"),
    thirdPartyLabel: "Amazon",
    category: "protein",
    blurb:
      "NSF Certified for Sport whey isolate, ~20 g protein, minimal additives. The clean, low-additive pick for a sensitive GLP-1 gut.",
  },
  "transparent-labs-whey": {
    productKey: "transparent-labs-whey",
    brand: "Transparent Labs",
    name: "Grass-Fed Whey Protein Isolate",
    thirdPartyUrl: "https://www.transparentlabs.com/products/grass-fed-whey-protein-isolate",
    thirdPartyLabel: "Transparent Labs",
    amazonUrl: amazonUrl("B0CQ3MQR7C"),
    category: "protein",
    blurb:
      "28 g grass-fed whey isolate, third-party tested, stevia-sweetened with no artificial sweeteners or fillers. A short, clean ingredient list that tends to sit well on a sensitive GLP-1 gut.",
  },
  "momentous-whey": {
    productKey: "momentous-whey",
    brand: "Momentous",
    name: "Essential Grass-Fed Whey",
    thirdPartyUrl: "https://www.livemomentous.com/products/whey-protein-isolate",
    thirdPartyLabel: "Momentous",
    amazonUrl: amazonUrl("B09F1SWMFG"),
    category: "protein",
    blurb:
      "NSF Certified for Sport grass-fed whey, ~20-24 g protein. Well-tolerated, mixes clean; a frequent dietitian recommendation.",
  },
  "promix-whey": {
    productKey: "promix-whey",
    brand: "Promix",
    name: "Whey Protein Isolate",
    thirdPartyUrl: "https://promixnutrition.com/products/whey-protein-isolate-powder",
    thirdPartyLabel: "Promix",
    amazonUrl: amazonUrl("B06W9J1SQK"),
    category: "protein",
    blurb:
      "Grass-fed whey isolate, ~30 g protein per scoop, minimal ingredients. Strong cost-per-gram for a clean isolate.",
  },
  "on-gold-standard-whey": {
    productKey: "on-gold-standard-whey",
    brand: "Optimum Nutrition",
    name: "Gold Standard 100% Whey",
    thirdPartyUrl: amazonUrl("B000QSNYGI"),
    thirdPartyLabel: "Amazon",
    category: "protein",
    blurb:
      "The category benchmark: ~24 g protein, whey blend, wide flavor range, budget-friendly per serving. A few additives, but the value is hard to beat.",
  },
  "truvani-plant": {
    productKey: "truvani-plant",
    brand: "Truvani",
    name: "Plant-Based Protein",
    thirdPartyUrl: "https://truvani.com/products/plant-based-protein-powder",
    thirdPartyLabel: "Truvani",
    amazonUrl: amazonUrl("B07JG7VS62"),
    category: "protein",
    blurb:
      "Short-ingredient pea-protein blend, ~20 g protein, no added sugar. A clean plant option for whey-sensitive or dairy-avoiding readers.",
  },
  "orgain-plant": {
    productKey: "orgain-plant",
    brand: "Orgain",
    name: "Organic Plant Protein",
    thirdPartyUrl: amazonUrl("B00J074W7Q"),
    thirdPartyLabel: "Amazon",
    category: "protein",
    blurb:
      "21 g organic plant protein, widely available and affordable. Some readers find the texture chalkier than premium picks; the value is excellent.",
  },
  "ritual-protein": {
    productKey: "ritual-protein",
    brand: "Ritual",
    name: "Essential Protein Daily Shake 18+",
    thirdPartyUrl: "https://ritual.com/products/protein-powder-18plus",
    thirdPartyLabel: "Ritual",
    amazonUrl: amazonUrl("B0DQ68JDSC"),
    category: "protein",
    blurb:
      "Traceable pea protein, ~20 g, third-party tested with a clean label. Subscription-first brand; premium-priced.",
  },
  "gol-sport-plant": {
    productKey: "gol-sport-plant",
    brand: "Garden of Life",
    name: "Sport Organic Plant-Based Protein",
    thirdPartyUrl: amazonUrl("B01N7DTD98"),
    thirdPartyLabel: "Amazon",
    category: "protein",
    blurb:
      "NSF Certified for Sport organic plant blend, ~30 g protein with added BCAAs. A good plant pick when muscle preservation is the priority.",
  },
  "quest-protein": {
    productKey: "quest-protein",
    brand: "Quest",
    name: "Protein Powder",
    thirdPartyUrl: amazonUrl("B07L94L214"),
    thirdPartyLabel: "Amazon",
    category: "protein",
    blurb:
      "Whey/casein blend, ~23-24 g protein, low sugar. Budget-friendly and easy to find; flavors are sweeter than the premium isolates.",
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

/**
 * All retailer buttons for a product, primary first. When the owned shop
 * launches it leads; otherwise the brand/Amazon primary leads, with an
 * optional secondary Amazon button.
 */
export function getRetailers(
  productKey: string,
): Array<{ url: string; label: string; isOwned: boolean }> {
  const a = AFFILIATES[productKey];
  if (!a) return [];
  const out: Array<{ url: string; label: string; isOwned: boolean }> = [];
  if (a.ownedShopUrl) {
    out.push({ url: a.ownedShopUrl, label: "Peptips Shop", isOwned: true });
  }
  out.push({ url: a.thirdPartyUrl, label: a.thirdPartyLabel, isOwned: false });
  if (a.amazonUrl && a.thirdPartyLabel !== "Amazon") {
    out.push({ url: a.amazonUrl, label: "Amazon", isOwned: false });
  }
  return out;
}

export function affiliatesByCategory(
  category: AffiliateLink["category"],
): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}
