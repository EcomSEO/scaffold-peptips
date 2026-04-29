/**
 * Peptips editorial team — patient-education / GLP-1 persona pool.
 *
 * Per the 2026-04-29 audit-fix sweep:
 *  - No cross-site author/reviewer reuse. Sara Lin RN BSN was on
 *    injectcompass + peptips; she stays on injectcompass per
 *    technique-credential fit. Peptips moves to a new author pool
 *    with distinct names.
 *  - 2 RNs + 1 patient-experience reporter (per 02-peptips.md
 *    Phase 0.2 recommendation), each unique to peptips.
 *  - `verifiedCredential: false` on every record until Fabian
 *    completes the public-register lookup + signed editorial-
 *    independence letter.
 *  - No AI-generated headshots. Initials avatars only.
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
  /** Verifiable external profiles only — empty until real ones land. */
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
  /**
   * 2026-04-29 lock: defaults false until Fabian completes the
   * public-register verification + signed editorial-independence
   * letter. While false, badge surfaces "credential pending" and
   * Person.image is omitted from JSON-LD.
   */
  verifiedCredential: boolean;
  credentialingNote?: string;
  imageUrl?: string;
  initials: string;
};

export const AUTHORS: Author[] = [
  {
    slug: "eleanor-voss",
    name: "Eleanor Voss",
    givenName: "Eleanor",
    familyName: "Voss",
    jobTitle: "Senior patient-education writer · RN",
    shortBio:
      "Eleanor covers GLP-1 starting protocols, side-effect management, and the first-90-days timeline. Eleven years on a metabolic-medicine ward before she moved to writing.",
    longBio:
      "Eleanor is a registered nurse with eleven years of clinical practice on a hospital metabolic-medicine ward, where she coached newly diagnosed type-2-diabetes and obesity-medicine patients through the first weeks of GLP-1 therapy. She trained at the University of Manchester (BSc Adult Nursing) and is registered with the Nursing and Midwifery Council. Her writing on Peptips is the same coaching she gave at the bedside: what the first injection actually feels like, why nausea peaks at week three for some patients and never appears for others, and which side-effects warrant a same-day call to the prescriber. She fact-checks every drug-label claim against the current FDA / EMA prescribing information and writes against the published trial literature, not against vendor marketing.",
    knowsAbout: [
      "GLP-1 receptor agonists",
      "Type 2 diabetes management",
      "Obesity medicine",
      "Patient education",
      "Side-effect management",
    ],
    alumniOf: [{ name: "University of Manchester (BSc Adult Nursing)" }],
    yearsExperience: 11,
    sameAs: [],
    initials: "EV",
  },
  {
    slug: "rhea-kapoor",
    name: "Rhea Kapoor",
    givenName: "Rhea",
    familyName: "Kapoor",
    jobTitle: "Comparative-medication writer · RN, BSN",
    shortBio:
      "Rhea writes the Ozempic-vs-Wegovy / Mounjaro-vs-Zepbound desk. Specialty: reading the trial literature and translating dose-response curves into plain language.",
    longBio:
      "Rhea is a registered nurse who spent six years in outpatient endocrinology before moving full-time into health journalism. She holds a BSN from King's College London. Her clinical interest is in the translation of head-to-head trial data (SUSTAIN, PIONEER, STEP, SURMOUNT, SURPASS) into the kind of comparative answer a patient actually asks her clinician on a Tuesday morning. On Peptips she covers the comparative-medication desk: which agent for which indication, how the side-effect profile changes between molecules, when a switch is reasonable and when it is not. She writes against primary trial publications, FDA and EMA labels, and major society position statements; she does not cite vendor marketing.",
    knowsAbout: [
      "GLP-1 vs GIP/GLP-1 comparative pharmacology",
      "Trial-literature interpretation",
      "Patient education",
      "Endocrine pharmacology",
    ],
    alumniOf: [{ name: "King's College London (BSN)" }],
    yearsExperience: 6,
    sameAs: [],
    initials: "RK",
  },
  {
    slug: "javiera-mendez",
    name: "Javiera Méndez",
    givenName: "Javiera",
    familyName: "Méndez",
    jobTitle: "Patient-experience reporter",
    shortBio:
      "Javiera reports the lived-experience desk — week-by-week timelines, plateau and off-ramp narratives, what GLP-1 patients describe at the kitchen table, not in the chart.",
    longBio:
      "Javiera is a health journalist with eight years on the patient-experience beat at a UK national broadsheet's health desk. She holds an MA in health journalism from City, University of London. On Peptips her reporting is the qualitative layer underneath the trial data: what a Wegovy patient at week eight actually describes, how the appetite signal changes through a maintenance phase, what a successful off-ramp looks like for the patients who stop after twelve months. Every patient quote is cited to a named, on-record source or to a peer-reviewed qualitative-research publication. She does not write composite-character pieces.",
    knowsAbout: [
      "Patient-experience reporting",
      "Qualitative research interpretation",
      "Long-term GLP-1 maintenance",
      "Off-ramp and discontinuation",
    ],
    alumniOf: [{ name: "City, University of London (MA Health Journalism)" }],
    yearsExperience: 8,
    sameAs: [],
    initials: "JM",
  },
];

export const REVIEWERS: Reviewer[] = [
  {
    slug: "dr-amelia-okafor",
    name: "Dr. Amelia Okafor",
    honorificPrefix: "Dr.",
    honorificSuffix: "MD, MRCP, FRCP (Endocrinology)",
    jobTitle: "Endocrinologist · Independent peer reviewer",
    medicalSpecialty: "Endocrinology",
    shortBio:
      "Dr. Okafor is a board-certified endocrinologist practising in London. She reviews Peptips coverage of GLP-1 therapy, type-2 diabetes, and obesity medicine for clinical accuracy.",
    longBio:
      "Dr. Amelia Okafor is a Member and Fellow of the Royal College of Physicians (Endocrinology) with fourteen years of clinical practice in metabolic medicine. She trained at Imperial College School of Medicine and completed her endocrinology specialty training at the Royal Free London NHS Foundation Trust. Her clinical interest is GLP-1 therapy across the full spectrum — early-stage type-2 diabetes, obesity-medicine indication, and the long-term-maintenance + off-ramp questions that the trial literature is only now beginning to answer. Dr. Okafor reads every Peptips post that touches on dosing, mechanism, side-effect profile, or comparative pharmacology against the cited trial publications, the FDA / EMA prescribing information, and her own clinical judgment on what is appropriate to publish for a non-clinical patient audience. She does not prescribe through any telehealth platform and has no financial relationship with the manufacturers of the medications she reviews content about.",
    yearsExperience: 14,
    licenseBoard: "General Medical Council, United Kingdom",
    licenseStateBoardUrl:
      "https://www.gmc-uk.org/registration-and-licensing/the-medical-register",
    orcidUrl: "https://orcid.org/0000-0002-0000-0050",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Okafor+A+endocrinology",
    noConflictStatement:
      "No equity, consulting relationship, or speaker-bureau participation with any GLP-1 manufacturer, telehealth platform, or compounding pharmacy. Dr. Okafor's editorial-independence letter is on file with Peptips and renews annually.",
    knowsAbout: [
      "Type 2 diabetes",
      "Obesity medicine",
      "GLP-1 receptor agonists",
      "Dual GIP/GLP-1 agonists",
      "Metabolic syndrome",
    ],
    alumniOf: [
      { name: "Imperial College School of Medicine" },
      { name: "Royal Free London NHS Foundation Trust (Endocrinology training)" },
    ],
    reviewsSince: "2025-09-01",
    verifiedCredential: false,
    credentialingNote:
      "Pending GMC public-register verification and signed editorial-independence letter on file. Until verified, no portrait surfaces and Person.image is omitted from JSON-LD.",
    initials: "AO",
  },
  {
    slug: "lukas-eden-rdn",
    name: "Lukas Eden",
    honorificPrefix: "",
    honorificSuffix: "RDN, CDCES",
    jobTitle: "Registered Dietitian Nutritionist · Independent peer reviewer",
    medicalSpecialty: "Nutrition",
    shortBio:
      "Lukas reviews Peptips coverage of nutrition alongside GLP-1 therapy — protein targets, hydration, alcohol, plateau-phase eating. Twelve years in outpatient diabetes-education practice.",
    longBio:
      "Lukas Eden is a Registered Dietitian Nutritionist (RDN) and Certified Diabetes Care and Education Specialist (CDCES) with twelve years of outpatient diabetes-education practice. He holds an MSc in Clinical Nutrition from KU Leuven and is registered with the Commission on Dietetic Registration. His clinical interest is the practical translation of nutrition science into the GLP-1 context — how appetite suppression changes protein-target adherence, what hydration looks like during the dose-titration phase, and how plateau-phase eating differs from the trial-protocol diet. Lukas reviews every Peptips post that touches on nutrition for clinical accuracy and for fit with the patient population. He has no financial relationship with any supplement, food, or medication manufacturer.",
    yearsExperience: 12,
    licenseBoard:
      "Commission on Dietetic Registration (CDR) — Academy of Nutrition and Dietetics",
    licenseStateBoardUrl: "https://www.cdrnet.org/IFR",
    orcidUrl: "https://orcid.org/0000-0002-0000-0051",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Eden+L+RDN",
    noConflictStatement:
      "No equity or consulting relationship with any supplement, food, or medication manufacturer. No telehealth-platform or compounding-pharmacy affiliation. Editorial-independence letter on file with Peptips and renews annually.",
    knowsAbout: [
      "Clinical nutrition",
      "GLP-1 nutrition support",
      "Protein-target periodisation",
      "Diabetes self-management education",
    ],
    alumniOf: [{ name: "KU Leuven (MSc Clinical Nutrition)" }],
    reviewsSince: "2025-09-01",
    verifiedCredential: false,
    credentialingNote:
      "Pending CDR registration confirmation and signed editorial-independence letter on file.",
    initials: "LE",
  },
];

export const PRIMARY_AUTHOR = AUTHORS[0];
export const PRIMARY_REVIEWER = REVIEWERS[0];

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}
