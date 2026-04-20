export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export const hubs: Hub[] = [
  {
    slug: "glp1-101",
    name: "GLP-1 101",
    shortName: "GLP-1 101",
    oneLiner:
      "Beginner education. What GLP-1s are, how they work, who they're for, and the drug landscape.",
    thesis:
      "You just heard about GLP-1s, you just got prescribed one, or you're researching whether to ask your doctor. This hub builds the foundational understanding — calmly, without hype or lectures.",
  },
  {
    slug: "side-effects-and-management",
    name: "Side effects & management",
    shortName: "Side effects",
    oneLiner:
      "Nausea, constipation, sulfur burps, hair thinning — why they happen and what actually helps.",
    thesis:
      "Side effects are the number one reason people quit GLP-1s in the first 90 days. Every side effect is its own search query and every one deserves a calm, practical answer with real sources.",
  },
  {
    slug: "food-nutrition-and-muscle",
    name: "Food, nutrition & muscle",
    shortName: "Food & muscle",
    oneLiner:
      "When appetite drops 60-80%, every bite has to count. Protein targets, muscle preservation, what to eat.",
    thesis:
      "The hardest part of a GLP-1 isn't losing weight — it's losing it well. This hub is the practical food companion for anyone trying to protect muscle and hit nutrition targets on a shrunken appetite.",
  },
  {
    slug: "lifestyle-on-glp1",
    name: "Lifestyle on GLP-1",
    shortName: "Lifestyle",
    oneLiner:
      "Alcohol hits differently. Exercise feels different. Travel needs planning. Social life gets weird.",
    thesis:
      "Beyond food and side effects, life changes on a GLP-1. This hub addresses the lived experience — alcohol, exercise, travel, dating, social events, the identity shift of losing food noise.",
  },
  {
    slug: "plateaus-and-long-term",
    name: "Plateaus & long-term",
    shortName: "Long-term",
    oneLiner:
      "Plateaus, maintenance dosing, coming off, weight regain — the year-two questions nobody answers well yet.",
    thesis:
      "Year one is the honeymoon. Year two is where the hard questions live — plateaus, dose changes, maintenance, coming off, regain. This hub is the long-term companion most readers haven't found anywhere else.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
