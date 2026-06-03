/**
 * Peptips editorial team.
 *
 * HONESTY RULE (non-negotiable): this file must only describe people and
 * credentials that actually exist and are verifiable. We do NOT ship invented
 * authors, invented clinician reviewers, or invented credentials/ORCIDs/license
 * numbers — fabricated E-E-A-T is both deceptive and a YMYL ranking liability.
 *
 * Today, peptips content is written and edited by a small research team that
 * checks every claim against the FDA prescribing information and the published
 * trials. We do not yet have a named, credentialed clinician on file, so
 * REVIEWERS is intentionally empty. The moment a real reviewer signs on (with a
 * verifiable public-register entry + editorial-independence letter), add them
 * here with `verifiedCredential: true` and the byline/schema slots will pick
 * them up.
 */

export type Author = {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  jobTitle: string;
  shortBio: string;
  longBio: string;
  knowsAbout: string[];
  alumniOf: { name: string }[];
  credentials?: string[];
  yearsExperience: number;
  /** Verifiable external profiles only, empty until real ones land. */
  sameAs: string[];
  imageUrl?: string;
  initials: string;
  email?: string;
};

export type Reviewer = {
  slug: string;
  name: string;
  honorificPrefix: "Dr." | "Prof." | "";
  honorificSuffix: string;
  jobTitle: string;
  medicalSpecialty:
    | "Endocrinology"
    | "Nutrition"
    | "Pharmacy"
    | "Internal Medicine";
  shortBio: string;
  longBio: string;
  yearsExperience: number;
  licenseBoard: string;
  licenseStateBoardUrl: string;
  orcidUrl?: string;
  pubmedUrl?: string;
  noConflictStatement: string;
  knowsAbout: string[];
  alumniOf: { name: string }[];
  reviewsSince: string;
  /** Must be true (with a real, verifiable credential) before this reviewer is rendered or put in JSON-LD. */
  verifiedCredential: boolean;
  credentialingNote?: string;
  imageUrl?: string;
  initials: string;
};

export const AUTHORS: Author[] = [
  {
    slug: "peptips-editorial-team",
    name: "The Peptips Editorial Team",
    givenName: "Peptips",
    familyName: "Editorial Team",
    jobTitle: "Research & editorial team",
    shortBio:
      "A small research team making GLP-1 information clearer and calmer. We read the trials, the FDA labels, and the published literature, and translate it into posts you can actually use.",
    longBio:
      "The Peptips Editorial Team is a small group of researchers and writers focused on GLP-1 education. We work from the FDA prescribing information, the published trial literature (STEP, SUSTAIN, SURMOUNT, SURPASS and the rest), and peer-reviewed sources, never from vendor marketing. Every drug, dose, and side-effect figure is checked against the original label or trial before it ships, and we name what the evidence does not yet show instead of papering over it. We do not provide medical advice, we take no money from drug manufacturers or telehealth clinics, and we cite every claim. If something here is wrong, tell us and we will correct it.",
    knowsAbout: [
      "GLP-1 receptor agonists",
      "Type 2 diabetes management",
      "Obesity medicine",
      "Patient education",
      "Side-effect management",
      "Trial-literature interpretation",
    ],
    alumniOf: [],
    yearsExperience: 0,
    sameAs: [],
    initials: "PT",
  },
];

/**
 * Empty until a real, credentialed clinician is on file. Do not add a reviewer
 * here unless their credential is independently verifiable AND verifiedCredential
 * is true.
 */
export const REVIEWERS: Reviewer[] = [];

export const PRIMARY_AUTHOR = AUTHORS[0];
export const PRIMARY_REVIEWER: Reviewer | undefined = REVIEWERS[0];

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}
