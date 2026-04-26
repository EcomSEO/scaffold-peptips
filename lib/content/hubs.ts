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
      "Beginner education. What GLP-1s are, how they work, who they are for, and the drug landscape in plain language.",
    thesis:
      "You heard about GLP-1s last week. You got a prescription yesterday. You are weighing whether to ask your doctor next month. This hub builds the foundation calmly, without the hype and without the lecture.",
  },
  {
    slug: "side-effects-and-management",
    name: "Side effects & management",
    shortName: "Side effects",
    oneLiner:
      "Nausea, constipation, sulfur burps, hair thinning. Why they happen and what actually helps.",
    thesis:
      "Side effects are the number-one reason people quit GLP-1s in the first ninety days. Every side effect is its own search query, and every one deserves a calm, practical answer with real sources.",
  },
  {
    slug: "food-nutrition-and-muscle",
    name: "Food, nutrition & muscle",
    shortName: "Food & muscle",
    oneLiner:
      "Appetite drops 60-80% on a GLP-1, so every bite has to count. Protein targets, muscle preservation, what to plate.",
    thesis:
      "The hardest part of a GLP-1 is not losing weight. It is losing it well. This hub is the practical food companion for anyone trying to protect muscle and hit nutrition targets on a shrunken appetite.",
  },
  {
    slug: "lifestyle-on-glp1",
    name: "Lifestyle on GLP-1",
    shortName: "Lifestyle",
    oneLiner:
      "Alcohol hits differently. Exercise feels different. Travel needs planning. Social life gets a little weird.",
    thesis:
      "Beyond food and side effects, life shifts on a GLP-1. This hub is the lived-experience hub: alcohol, exercise, travel, dating, social events, and the identity shift of losing food noise.",
  },
  {
    slug: "plateaus-and-long-term",
    name: "Plateaus & long-term",
    shortName: "Long-term",
    oneLiner:
      "Plateaus, maintenance dosing, coming off, regain. The year-two questions nobody answers well yet.",
    thesis:
      "Year one is the honeymoon. Year two is where the hard questions live: plateaus, dose changes, maintenance, coming off, regain. This hub is the long-term companion most readers have not found anywhere else.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
