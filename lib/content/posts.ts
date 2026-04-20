export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  products?: Array<{
    rank: number;
    name: string;
    tier: string;
    summary: string;
  }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  medicalDisclaimer?: "required" | "light";
};

export const posts: Post[] = [
  {
    slug: "ozempic-week-by-week",
    title: "Ozempic Week by Week: What to Expect",
    h1: "Ozempic week by week: what to expect",
    description:
      "A calm, cited week-by-week timeline of the first year on semaglutide. What's normal, what's not, and when to call your doctor.",
    hub: "side-effects-and-management",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
    featured: true,
    medicalDisclaimer: "required",
    faq: [
      { q: "When does Ozempic start working?", a: "TODO: draft" },
      { q: "What week is Ozempic the worst?", a: "TODO: draft" },
      { q: "When do Ozempic side effects go away?", a: "TODO: draft" },
    ],
  },
  {
    slug: "glp1-guide-for-beginners",
    title: "The Complete GLP-1 Guide for Beginners",
    h1: "The complete GLP-1 guide for beginners",
    description:
      "What GLP-1s are, how they work in the body, who they're approved for, and the four-drug landscape — explained without hype.",
    hub: "glp1-101",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 22,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "glp1-side-effect-guide",
    title: "The Complete GLP-1 Side Effect Guide: Week by Week",
    h1: "The complete GLP-1 side effect guide: week by week",
    description:
      "Every common GLP-1 side effect, the week it typically appears, why it happens, and what actually helps — with citations from trial data and manufacturer labels.",
    hub: "side-effects-and-management",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 24,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "glp1-nutrition-guide",
    title: "The Complete GLP-1 Nutrition Guide: Protein, Muscle, and What to Eat",
    h1: "The complete GLP-1 nutrition guide",
    description:
      "Protein targets, muscle preservation, electrolytes, micronutrients, and sample days of eating — the practical food companion for life on a GLP-1.",
    hub: "food-nutrition-and-muscle",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 20,
    status: "stub",
    medicalDisclaimer: "light",
  },
  {
    slug: "mounjaro-vs-ozempic-vs-wegovy-vs-zepbound",
    title: "Mounjaro vs Ozempic vs Wegovy vs Zepbound: A Calm Comparison",
    h1: "Mounjaro vs Ozempic vs Wegovy vs Zepbound",
    description:
      "The four big GLP-1 drugs compared — mechanism, efficacy, side effect profile, cost. What trials actually showed, side by side.",
    hub: "glp1-101",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 18,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "best-protein-powders-for-glp1",
    title: "Best Protein Powders for GLP-1 Users",
    h1: "Best protein powders for GLP-1 users",
    description:
      "The protein powders that fit a 30g-per-scoop target, sit well on a slow-emptying stomach, and don't rely on artificial sweeteners readers don't want.",
    hub: "food-nutrition-and-muscle",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
    medicalDisclaimer: "light",
  },
  {
    slug: "best-electrolytes-for-glp1",
    title: "Best Electrolyte Products for GLP-1 Users",
    h1: "Best electrolyte products for GLP-1 users",
    description:
      "When appetite drops, electrolyte intake drops with it. Here's what's worth buying, what to skip, and which formulas are calm on the stomach.",
    hub: "side-effects-and-management",
    postType: "comparison",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "stub",
    medicalDisclaimer: "light",
  },
  {
    slug: "why-does-ozempic-make-you-nauseous",
    title: "Why Does Ozempic Make You Nauseous?",
    h1: "Why does Ozempic make you nauseous?",
    description:
      "The gastric-emptying mechanism behind semaglutide nausea, how long it typically lasts, eleven things that actually help, and when to call your doctor.",
    hub: "side-effects-and-management",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 10,
    status: "stub",
    medicalDisclaimer: "required",
  },
  {
    slug: "how-much-protein-on-a-glp1",
    title: "How Much Protein Do You Actually Need on a GLP-1?",
    h1: "How much protein do you actually need on a GLP-1?",
    description:
      "The target range (1.2-1.6g per kg body weight), why it matters for muscle preservation, how to hit it on a shrunken appetite, with worked examples.",
    hub: "food-nutrition-and-muscle",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 9,
    status: "stub",
    medicalDisclaimer: "light",
  },
  {
    slug: "12-questions-to-ask-your-doctor-before-glp1",
    title: "12 Questions to Ask Your Doctor Before Starting a GLP-1",
    h1: "12 questions to ask your doctor before starting a GLP-1",
    description:
      "Prep for your first GLP-1 appointment: 12 questions worth asking, why each matters, and what a good answer looks like.",
    hub: "glp1-101",
    postType: "listicle",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 11,
    status: "stub",
    medicalDisclaimer: "required",
    items: [
      { rank: 1, name: "Am I a candidate for a GLP-1 based on my BMI / health markers?", summary: "TODO: draft" },
      { rank: 2, name: "Which specific GLP-1 are you recommending and why this one?", summary: "TODO: draft" },
      { rank: 3, name: "What's my insurance situation with this drug?", summary: "TODO: draft" },
      { rank: 4, name: "What are the most common side effects I should expect in week 1?", summary: "TODO: draft" },
      { rank: 5, name: "What's the dose escalation schedule you'll use?", summary: "TODO: draft" },
      { rank: 6, name: "What should I do if side effects become unmanageable?", summary: "TODO: draft" },
      { rank: 7, name: "How will we monitor my progress (besides weight)?", summary: "TODO: draft" },
      { rank: 8, name: "Do you recommend anything specific for muscle preservation?", summary: "TODO: draft" },
      { rank: 9, name: "What's the long-term plan if this works?", summary: "TODO: draft" },
      { rank: 10, name: "What are the warning signs I should call you about immediately?", summary: "TODO: draft" },
      { rank: 11, name: "How often will we follow up, and how do I reach you between appointments?", summary: "TODO: draft" },
      { rank: 12, name: "What if I want to stop?", summary: "TODO: draft" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsByHub(hubSlug: string): Post[] {
  return posts.filter((p) => p.hub === hubSlug);
}

export function latestPosts(limit = 6): Post[] {
  return [...posts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function featuredPost(): Post | undefined {
  return posts.find((p) => p.featured);
}

export function relatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.hub === post.hub && p.slug !== post.slug)
    .slice(0, limit);
}
