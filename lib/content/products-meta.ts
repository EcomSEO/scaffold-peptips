import { posts, type Post } from "./posts";

/**
 * Supporting data for the per-product /picks/[product] pages.
 *
 * Each product page is assembled from real content — the detailed write-up
 * from the guide that ranks it, its rank/rating, plus category-level GLP-1
 * context and usage notes below — so the pages are genuinely useful, not
 * thin affiliate stubs.
 */

export type ProductUsage = {
  post: Post;
  rank: number;
  tier: string;
  price?: string;
  summary: string;
  image?: string;
  /** Mirrors the EvidenceScore shown in the comparison table (0-100). */
  score: number;
};

/** Every guide entry (with its rich summary) that features this productKey. */
export function findProductUsage(productKey: string): ProductUsage[] {
  const out: ProductUsage[] = [];
  for (const post of posts) {
    for (const p of post.products ?? []) {
      if (p.productKey === productKey) {
        out.push({
          post,
          rank: p.rank,
          tier: p.tier,
          price: p.price,
          summary: p.summary,
          image: p.image,
          score: Math.max(60, 92 - (p.rank - 1) * 4),
        });
      }
    }
  }
  // Best rank first.
  return out.sort((a, b) => a.rank - b.rank);
}

/** Product keys that appear in at least one guide (these get a page). */
export function productPageKeys(): string[] {
  const keys = new Set<string>();
  for (const post of posts)
    for (const p of post.products ?? []) if (p.productKey) keys.add(p.productKey);
  return [...keys];
}

type CategoryContext = { label: string; why: string; howToUse: string };

const CATEGORY_CONTEXT: Record<string, CategoryContext> = {
  electrolytes: {
    label: "Electrolytes",
    why: "On a GLP-1, the problem usually isn't the drug itself, it's that you're eating and drinking less, so sodium, potassium, and magnesium intake fall along with your appetite. That shortfall is behind a lot of the first-month fatigue, headaches, and light-headedness people describe. The Ozempic and Wegovy prescribing information both flag dehydration and electrolyte imbalance as watchpoints, especially when nausea or vomiting is in the picture.",
    howToUse: "Most people sip an electrolyte drink in the morning and again mid-afternoon, when the slump tends to hit hardest. During a nauseous spell, small sips every 15 to 20 minutes stay down better than gulping. If you have high blood pressure, kidney disease, or take a blood-pressure medication, run the sodium and potassium dose past your prescriber before starting.",
  },
  fiber: {
    label: "Fiber",
    why: "GLP-1 medications slow how fast the gut moves, and you're taking in less of everything, fiber and water included. That combination is why constipation is one of the most common early side effects. The catch: the wrong fiber can make things worse. Highly fermentable types feed gas production in a gut that is already bloated and uncomfortable.",
    howToUse: "Start at about half the label dose and build up over a week or two, and treat water as non-negotiable, because fiber works by holding water in the stool and taking it dry can backfire. Non-fermenting fibers tend to be the most comfortable starting point. If constipation doesn't ease with fiber, fluids, and magnesium over a couple of weeks, that is worth a call to your prescriber.",
  },
  protein: {
    label: "Protein",
    why: "When you lose weight on a GLP-1, a meaningful share of it can come from lean muscle, not just fat. Hitting a protein target helps protect that muscle, but a shrunken appetite makes eating enough genuinely hard, which is where a clean, easy-to-tolerate protein powder earns its place as a bridge.",
    howToUse: "A shake is most useful when appetite is quietest, often at breakfast, or as a stand-in when a meal just isn't happening. Liquid protein tends to go down easier than whole cuts of meat on a slow-emptying stomach. Look for a short ingredient list and a sweetener you tolerate; some people find sucralose-heavy formulas rough on an already-sensitive gut.",
  },
};

export function categoryContext(cat: string): CategoryContext {
  return (
    CATEGORY_CONTEXT[cat] ?? {
      label: cat,
      why: "",
      howToUse: "",
    }
  );
}
