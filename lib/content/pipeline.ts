/**
 * The peptips research pipeline — fully readable to readers and crawlers.
 *
 * Three states:
 *   - inResearch:  actively being briefed/drafted right now (8 items)
 *   - queued:      planned and ordered, brief not yet started (23 items)
 *   - shipped:     reference list of recent publishes (lightweight; the
 *                  source of truth is still posts.ts)
 *
 * Surfaces:
 *   - Header secondary strip ("8 in research · Methodology v1.2 · …")
 *   - /pipeline page (full readable list with reasoning)
 *   - Optional inline strip on hub pages
 */

export type PipelineStage = "in-research" | "queued" | "shipped";

export type PipelineItem = {
  /** Working title — what the brief calls the post. */
  title: string;
  /** One-sentence reason it's being researched. */
  why: string;
  /** Which hub it'll land in once shipped. */
  hub:
    | "glp1-101"
    | "side-effects-and-management"
    | "food-nutrition-and-muscle"
    | "lifestyle-on-glp1"
    | "plateaus-and-long-term";
  stage: PipelineStage;
};

export const PIPELINE: PipelineItem[] = [
  // === In research — 8 ===
  {
    title: "GLP-1s during pregnancy and the conversations no one is having",
    why: "The labels say discontinue at least two months before a planned pregnancy, but readers ask us about unplanned ones every week.",
    hub: "lifestyle-on-glp1",
    stage: "in-research",
  },
  {
    title: "Slow-dose protocols: when prescribers hold you at 0.25mg longer",
    why: "Off-label step-down practice is real and rarely written about calmly.",
    hub: "side-effects-and-management",
    stage: "in-research",
  },
  {
    title: "Wegovy and alcohol — what the receptor work actually shows",
    why: "Reduced reward signalling shows up in animal models and small human trials, and readers feel it.",
    hub: "lifestyle-on-glp1",
    stage: "in-research",
  },
  {
    title: "Mounjaro vs Zepbound: same drug, different contracts, different prices",
    why: "Tirzepatide is one molecule with two FDA approvals. Readers want a calm, cited comparison without the telehealth pitch.",
    hub: "glp1-101",
    stage: "in-research",
  },
  {
    title: "How to actually keep muscle on a GLP-1 — the Phillips & Trommelen reading",
    why: "Most muscle-preservation advice online is borrowed from bodybuilding. The trial literature is more specific and more useful.",
    hub: "food-nutrition-and-muscle",
    stage: "in-research",
  },
  {
    title: "Oral semaglutide vs the injectable — Rybelsus, side effects, and the absorption question",
    why: "The pill is real and underdiscussed. The dosing window matters.",
    hub: "glp1-101",
    stage: "in-research",
  },
  {
    title: "GLP-1s and a thyroid-cancer history — what the boxed warning means and doesn't",
    why: "Rodent C-cell findings drive the label. We want a calm, cited reading.",
    hub: "side-effects-and-management",
    stage: "in-research",
  },
  {
    title: "Cycling off and the rebound question — STEP-4, SURMOUNT-4, and what comes next",
    why: "The trial data on stopping is now strong enough to be specific about. Most coverage is still vague.",
    hub: "plateaus-and-long-term",
    stage: "in-research",
  },

  // === Queued — 23 ===
  {
    title: "Sulfur burps on Ozempic: why they happen and what helps",
    why: "Top reader question; mechanism is unsettled but the practical playbook is clear.",
    hub: "side-effects-and-management",
    stage: "queued",
  },
  {
    title: "GLP-1s and gallbladder disease — what to watch for",
    why: "Rapid weight loss raises gallstone risk. Readers deserve plain language about red-flag symptoms.",
    hub: "side-effects-and-management",
    stage: "queued",
  },
  {
    title: "Hair shedding on a GLP-1 — what's the drug, what's the calorie deficit, what helps",
    why: "Telogen effluvium from rapid loss is real. Readers panic about it.",
    hub: "side-effects-and-management",
    stage: "queued",
  },
  {
    title: "The protein math: how much, when, and why the timing argument is overblown",
    why: "Anchored in the Phillips 2017 review and Trommelen's distribution work.",
    hub: "food-nutrition-and-muscle",
    stage: "queued",
  },
  {
    title: "What to put on the plate when nothing sounds good",
    why: "Appetite drops 60-80%. The practical advice is mostly missing.",
    hub: "food-nutrition-and-muscle",
    stage: "queued",
  },
  {
    title: "Resistance training on a GLP-1 — the minimum effective dose",
    why: "Two sessions a week with progressive load preserves most lean mass in the trial literature.",
    hub: "food-nutrition-and-muscle",
    stage: "queued",
  },
  {
    title: "Travel kit for a GLP-1 — the four things that actually matter",
    why: "Cold-chain, customs declarations, the spare pen question, and the time-zone dosing thing.",
    hub: "lifestyle-on-glp1",
    stage: "queued",
  },
  {
    title: "Dating on a GLP-1 — the awkwardness of restaurants when nothing sounds good",
    why: "Real reader question; nobody writes about this without being weird about it.",
    hub: "lifestyle-on-glp1",
    stage: "queued",
  },
  {
    title: "The food-noise question — what the dopamine literature actually says",
    why: "The most quoted phenomenon on the drug, often misexplained.",
    hub: "lifestyle-on-glp1",
    stage: "queued",
  },
  {
    title: "Maintenance dosing — 0.5mg, every other week, or something else",
    why: "Off-label maintenance is real and varies wildly between prescribers.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
  {
    title: "The plateau at month 9 — what's normal, what's not, what to ask for",
    why: "Plateau anxiety is the second-biggest reason people quit after side effects.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
  {
    title: "Coming off a GLP-1: the four-week taper most prescribers don't mention",
    why: "Abrupt stops are common and often miserable. A taper helps.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
  {
    title: "Compound semaglutide and tirzepatide — what the FDA shortage list actually means",
    why: "503A/503B compounding is misunderstood. We want a calm, jurisdictionally honest read.",
    hub: "glp1-101",
    stage: "queued",
  },
  {
    title: "Insurance coverage in 2026 — what actually changed",
    why: "PA criteria moved. Readers need a cheat sheet.",
    hub: "glp1-101",
    stage: "queued",
  },
  {
    title: "GLP-1s and hormonal contraception — the absorption question",
    why: "The Mounjaro label has a specific oral-contraceptive note. Readers miss it.",
    hub: "lifestyle-on-glp1",
    stage: "queued",
  },
  {
    title: "GLP-1s for non-diabetic type-2 prevention — what the trials show",
    why: "Pre-diabetes use is exploding off-label. The data is interesting and underdiscussed.",
    hub: "glp1-101",
    stage: "queued",
  },
  {
    title: "The constipation stack — the four things that actually move the needle",
    why: "Magnesium, fiber, water, walking. The order and the doses matter.",
    hub: "side-effects-and-management",
    stage: "queued",
  },
  {
    title: "Acid reflux and GERD on a GLP-1 — separating the drug from the food choices",
    why: "Slowed gastric emptying is part of the mechanism. So is eating differently.",
    hub: "side-effects-and-management",
    stage: "queued",
  },
  {
    title: "Sleep on a GLP-1 — what readers report and what the literature shows",
    why: "Anecdotal sleep changes are common. Trial signal is mixed.",
    hub: "lifestyle-on-glp1",
    stage: "queued",
  },
  {
    title: "Bone density on long-term GLP-1 use",
    why: "Year-three question. Lean-mass loss raises the question; trial data is sparse.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
  {
    title: "GLP-1s and PCOS — what's actually been studied",
    why: "Off-label use in PCOS is widespread and the data is more interesting than most coverage suggests.",
    hub: "glp1-101",
    stage: "queued",
  },
  {
    title: "When the scale won't move at all — the under-eating trap",
    why: "Calorie intake too low to keep losing is real. The fix is counterintuitive.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
  {
    title: "GLP-1s after 60 — what changes in dosing, monitoring, and food",
    why: "The over-60 reader has different muscle, kidney, and gastric concerns.",
    hub: "plateaus-and-long-term",
    stage: "queued",
  },
];

export function pipelineByStage(stage: PipelineStage): PipelineItem[] {
  return PIPELINE.filter((p) => p.stage === stage);
}

export function pipelineCounts() {
  return {
    inResearch: PIPELINE.filter((p) => p.stage === "in-research").length,
    queued: PIPELINE.filter((p) => p.stage === "queued").length,
  };
}
