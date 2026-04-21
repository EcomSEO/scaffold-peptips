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
    status: "published",
    featured: true,
    medicalDisclaimer: "required",
    faq: [
      {
        q: "When does Ozempic start working?",
        a: "Appetite suppression usually shows up within the first week — a lot of people notice it within 48-72 hours of the first 0.25mg dose. Measurable weight change is slower. In the STEP-1 trial of semaglutide 2.4mg (the Wegovy dose), the average weight curve separated from placebo around week 4 and kept going for 68 weeks. Blood sugar changes in people with type 2 diabetes often show up faster, sometimes within the first few weeks.",
      },
      {
        q: "What week is Ozempic the worst?",
        a: "For most people, the hardest stretch is the first two weeks of any new dose — so weeks 1-2 after starting, and again the week you step up from 0.25mg to 0.5mg (usually week 5), and again from 0.5mg to 1mg. The Ozempic prescribing information lists nausea, diarrhea, and vomiting as the most common adverse reactions, typically heaviest right after a dose change. Things usually settle within 1-2 weeks as the body adjusts to the new dose.",
      },
      {
        q: "When do Ozempic side effects go away?",
        a: "The short answer: usually 1-2 weeks after each dose change, sometimes a bit longer. In the STEP trials, GI side effects were described as transient — meaning they came on, peaked, and faded for most participants. A smaller group had persistent issues and either stayed at a lower dose or stopped the drug. If nausea, vomiting, or abdominal pain is getting worse rather than better by week 3 of any dose, that's a reason to call your prescriber.",
      },
      {
        q: "How much weight loss is typical in the first month?",
        a: "The STEP-1 trial of semaglutide 2.4mg reported an average of roughly 6% body-weight loss by week 20 — which means the first month is usually modest, often a few pounds, sometimes none. Ozempic (approved for type 2 diabetes, maxing at 2mg) tends to produce slightly less. Very early weight change is mostly water and reduced food intake, not fat. If the scale isn't moving in month 1, that's within the range of normal.",
      },
      {
        q: "Do I have to increase my dose?",
        a: "The FDA-approved schedule for Ozempic escalates every 4 weeks: 0.25mg, 0.5mg, 1mg, with 2mg as the maximum. But the prescribing information allows clinicians to slow the titration if side effects are rough. A lot of prescribers will hold you at 0.25mg or 0.5mg for an extra month if week 5 is miserable. Dose escalation is a conversation with your doctor, not a fixed calendar.",
      },
      {
        q: "Should I take my shot on the same day every week?",
        a: "The prescribing information says yes, same day of the week, any time of day, with or without food. If you need to move the day, the label allows it as long as the last dose was at least 2 days (48 hours) earlier. Many people pick a day and time that's boring and quiet — Sunday morning is a common choice because nausea in the first 48 hours is easier to ride out at home.",
      },
      {
        q: "What if I miss a dose?",
        a: "Per the Ozempic prescribing information: if the missed dose is within 5 days, take it when you remember, then go back to your regular schedule. If it's been more than 5 days, skip the missed dose and resume the next one on your regular day. Don't double up. If you're not sure, call your pharmacist — they deal with this question constantly and can check your specific dose.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide) injection",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Rubino D et al. Effect of Continued Weekly Semaglutide vs Placebo on Weight Loss Maintenance (STEP-4). JAMA 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33755728/",
      },
      {
        label: "Novo Nordisk Ozempic patient resources",
        url: "https://www.ozempic.com/",
      },
      {
        label: "FDA Wegovy (semaglutide) prescribing information",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
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
    status: "published",
    medicalDisclaimer: "required",
    faq: [
      {
        q: "What is a GLP-1, in plain English?",
        a: "GLP-1 stands for glucagon-like peptide-1. It's a hormone your gut already makes after you eat — it tells your pancreas to release insulin, tells your brain you're full, and slows how fast your stomach empties. The drugs in this class (semaglutide, tirzepatide, liraglutide) are lab-made versions that hang around in the body much longer than the natural hormone. Tirzepatide also activates a second gut hormone called GIP, which is why it's often described as a dual agonist.",
      },
      {
        q: "Who are GLP-1s approved for?",
        a: "It depends on the specific drug. Ozempic and Mounjaro are FDA-approved for adults with type 2 diabetes. Wegovy and Zepbound are approved for chronic weight management in adults with a BMI of 30 or higher, or 27 or higher with at least one weight-related condition (like hypertension or sleep apnea). Wegovy also has approvals for adolescents 12+ meeting the BMI criteria and for reducing cardiovascular risk in adults with established heart disease and obesity. Your prescriber checks the specific label against your situation.",
      },
      {
        q: "What's the difference between brand and generic?",
        a: "There isn't a true generic version of semaglutide or tirzepatide yet — the patents are active. What exists is compounded semaglutide, which is made by a compounding pharmacy rather than Novo Nordisk. Compounded versions were widely available during the FDA-declared drug shortage; as shortages resolve, the landscape keeps shifting. Compounded is not FDA-approved in the same way brand-name is — the FDA has publicly flagged concerns about salt forms, dosing errors, and quality control at some compounders.",
      },
      {
        q: "Does it work if I don't change my diet?",
        a: "It works, but it works better with food changes that support it. The STEP-1 trial paired semaglutide 2.4mg with lifestyle counseling and reported roughly 15% average body-weight loss at 68 weeks. Drug-only results exist but are less well-studied. What tends to happen: the drug shrinks appetite; if you eat mostly ultra-processed food with whatever appetite is left, you'll lose weight but also lose muscle and feel worse. Most dietitians working with GLP-1 patients focus on protein first, then vegetables, then everything else.",
      },
      {
        q: "What happens when I stop?",
        a: "The STEP-1 extension trial followed participants who stopped semaglutide after 68 weeks. On average, they regained about two-thirds of the weight they'd lost within the next year. Appetite returned, gastric emptying normalized, and the metabolic effects of the drug faded. This is the honest thing nobody wants to hear: the drug treats the condition while you're on it. Maintenance protocols and gradual tapers are being studied but there's no established off-ramp that prevents regain for most people.",
      },
      {
        q: "Are GLP-1s safe long term?",
        a: "The longest human data on semaglutide comes from the SUSTAIN and STEP trials, now stretching past 5 years for some participants. No new safety signals have emerged in that window for the approved populations. The known risks per the FDA label include pancreatitis, gallbladder disease, kidney injury from dehydration, and a boxed warning about thyroid C-cell tumors (based on rodent studies; no confirmed human cases at therapeutic doses). 10-20 year data doesn't exist yet for any drug in this class.",
      },
      {
        q: "How much do they cost?",
        a: "Without insurance, list prices in early 2026 run roughly $1,000-$1,400 per month for the brand-name drugs. Coverage is the big variable — Ozempic and Mounjaro are often covered for diabetes; Wegovy and Zepbound are inconsistently covered for obesity. Manufacturer savings cards exist (the Zepbound and Wegovy cards can drop out-of-pocket significantly with commercial insurance). Compounded versions run much less but come with the caveats above. Costs change monthly; the manufacturer sites are the most reliable source.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label: "FDA Prescribing Information: Mounjaro (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215866",
      },
      {
        label: "FDA Prescribing Information: Zepbound (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=217806",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "required",
    faq: [
      {
        q: "Which side effects are most common?",
        a: "Across the STEP and SURMOUNT trial programs, the most commonly reported side effects for semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) were gastrointestinal: nausea, diarrhea, constipation, vomiting, and abdominal pain. Most were described as mild to moderate and transient, with onset after the first dose or a dose increase and resolution within days to a few weeks. Serious adverse events were uncommon but included pancreatitis, gallbladder disease, and dehydration-related kidney issues.",
      },
      {
        q: "Why do GLP-1s cause so much GI trouble?",
        a: "The same mechanism that helps with weight and blood sugar also slows gastric emptying and acts on receptors in the brain's nausea pathway. Food sits in the stomach longer, which is why people feel full faster and why fatty or heavy meals can cause real discomfort. The FDA prescribing information for all four drugs explicitly names delayed gastric emptying as part of the mechanism. Most GI effects fade as the body adapts to each dose level.",
      },
      {
        q: "What about muscle loss?",
        a: "When anyone loses weight quickly, some of what they lose is lean mass. The STEP-1 body-composition substudy reported that participants on semaglutide lost roughly 39% of their lost weight as lean mass, a higher proportion than typical diet-only weight loss. The SURMOUNT-1 substudy reported closer to 25% for tirzepatide. What tends to move the needle: hitting a higher protein target (the literature on preserving muscle in a caloric deficit often points to 1.2-1.6g per kg body weight per day, per Phillips 2017) and doing resistance training 2-3 times per week.",
      },
      {
        q: "What is 'Ozempic face'?",
        a: "This is a media term, not a clinical one. It refers to the loss of facial volume that can happen with any meaningful weight loss — fat pads in the cheeks shrink, skin can look looser. It isn't specific to semaglutide; it happens with surgical weight loss and significant diet-based loss too. There's no published trial data quantifying it specifically for GLP-1s. Slower weight loss, adequate protein, and dermatology consultation are what patients report trying.",
      },
      {
        q: "What about hair thinning?",
        a: "Hair shedding during significant weight loss is well-documented across diet, surgery, and now GLP-1 populations. It's usually telogen effluvium — a temporary shift in the hair-growth cycle triggered by the physiologic stress of rapid weight change or caloric restriction. The STEP and SURMOUNT trials reported alopecia at rates higher than placebo but low in absolute terms. It tends to show up 2-4 months after major change and usually resolves within 6-9 months. Protein adequacy and iron checks are standard workup.",
      },
      {
        q: "When should I call my doctor?",
        a: "The FDA labels flag several things worth a prompt call: severe or persistent abdominal pain (especially if it radiates to the back — a possible pancreatitis signal), signs of gallbladder disease (right-upper-abdomen pain, fever, yellowing of the skin), severe vomiting that prevents keeping down fluids, signs of dehydration (dark urine, dizziness), vision changes (diabetic retinopathy signal in people with diabetes), and any suicidal thoughts. The prescribing information lists these explicitly; if something scares you, it's worth a call.",
      },
      {
        q: "Do side effects get better over time?",
        a: "The trial data says yes for most people. In the STEP-1 publication, the proportion of participants experiencing GI events declined across the 68-week trial, with most events clustering around dose increases and resolving within 1-2 weeks. A minority of participants (roughly 5-7% across these trials) discontinued due to GI side effects — meaning the majority found them manageable and fading. If yours are getting worse rather than better past week 3 of a dose, that's the signal to loop in your prescriber.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Mounjaro (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215866",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label:
          "Phillips SM. Protein Requirements Beyond the RDA. Applied Physiology, Nutrition, and Metabolism 2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28177710/",
      },
    ],
  },
  {
    slug: "glp1-nutrition-guide",
    title:
      "The Complete GLP-1 Nutrition Guide: Protein, Muscle, and What to Eat",
    h1: "The complete GLP-1 nutrition guide",
    description:
      "Protein targets, muscle preservation, electrolytes, micronutrients, and sample days of eating — the practical food companion for life on a GLP-1.",
    hub: "food-nutrition-and-muscle",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 20,
    status: "published",
    medicalDisclaimer: "light",
    faq: [
      {
        q: "How much protein should I eat on a GLP-1?",
        a: "The literature on preserving lean mass during a caloric deficit points to a daily target around 1.2-1.6g of protein per kilogram of body weight (Phillips 2017, among others). For a 180-pound person, that works out to roughly 98-131g per day. On a shrunken appetite, that's genuinely hard — which is why front-loading protein at breakfast (20-40g), a protein-forward lunch, and a shake or Greek yogurt as a backup tends to be the most realistic approach.",
      },
      {
        q: "Do I need to count calories?",
        a: "Most people on a GLP-1 don't need to track calories to lose weight — the drug handles that side. What's worth tracking, at least for the first month, is protein grams. Appetite suppression tends to push protein intake down without you noticing, and that's exactly the intake you want to protect. A rough log on paper or in a notes app is usually enough. Obsessive tracking isn't required and can make the relationship with food worse.",
      },
      {
        q: "What foods sit best on a slow-emptying stomach?",
        a: "What patients consistently report, and what dietitians working with GLP-1 patients tend to suggest: smaller portions, eaten slowly; lean proteins (chicken, fish, eggs, Greek yogurt, tofu); cooked vegetables over raw; warm or cold foods rather than very hot; and plenty of water between (not during) meals. Heavy, fatty, or deep-fried foods are the most commonly reported triggers for nausea and sulfur burps. Highly processed sugar often becomes unpleasant even if it was a favorite before.",
      },
      {
        q: "Should I worry about micronutrients?",
        a: "Reduced food intake can mean reduced intake of iron, B12, vitamin D, calcium, and fiber. None of the GLP-1 labels require supplementation, but many clinicians suggest a multivitamin on days when intake is below about 1,200 calories, and bloodwork at 6 months to check iron and B12. A registered dietitian can tailor this to your specific eating pattern — general multivitamins are fine; megadose supplements are not recommended without bloodwork showing a deficit.",
      },
      {
        q: "What about electrolytes?",
        a: "When total food and fluid intake drops, sodium, potassium, and magnesium intake drops too. That's a common cause of the first-month fatigue and light-headedness people describe. Broth, salted nuts, olives, and a low-sugar electrolyte mix (LMNT, Redmond Re-Lyte, and Needed Electrolytes are three that patients commonly mention) are all reasonable options. The drug doesn't directly deplete electrolytes — reduced eating does.",
      },
      {
        q: "Can I use protein powder?",
        a: "Yes, and many people need to. When food volume is small, protein density matters. A whey or whey-casein blend with 25-30g per scoop (Klean Athlete, Needed, Momentous, Promix, Optimum Nutrition, and Truvani all have versions that come up in patient discussions) mixed into water or milk tends to go down easier than a full meal on a nauseous day. Plant-based options (pea, rice, Orgain's blend) are an option if dairy isn't tolerated.",
      },
      {
        q: "Is resistance training really necessary?",
        a: "The lean-mass data from STEP-1 (roughly 39% of lost weight as lean mass) and SURMOUNT-1 (roughly 25%) is the clearest reason clinicians now suggest resistance work alongside a GLP-1. You don't have to lift heavy. What the sports medicine literature supports: 2-3 sessions per week of compound movements (squats, rows, presses, deadlift variants), enough to create meaningful stimulus. Protein plus load is the combination the evidence consistently supports for preserving muscle during weight loss.",
      },
    ],
    sources: [
      {
        label:
          "Phillips SM. Protein Requirements Beyond the RDA. Applied Physiology, Nutrition, and Metabolism 2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28177710/",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label: "Novo Nordisk Wegovy patient resources",
        url: "https://www.wegovy.com/",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "required",
    faq: [
      {
        q: "Are Ozempic and Wegovy the same drug?",
        a: "Same active ingredient (semaglutide), same manufacturer (Novo Nordisk), different FDA indications and maximum doses. Ozempic is approved for type 2 diabetes and tops out at 2mg weekly. Wegovy is approved for chronic weight management and goes up to 2.4mg weekly. The titration schedules are different too — Wegovy escalates more aggressively than Ozempic. From the body's perspective, they're effectively the same drug at overlapping doses.",
      },
      {
        q: "Are Mounjaro and Zepbound the same drug?",
        a: "Yes — same relationship as Ozempic and Wegovy. Both are tirzepatide, made by Eli Lilly. Mounjaro is FDA-approved for type 2 diabetes; Zepbound is approved for chronic weight management and for obstructive sleep apnea in adults with obesity. Dose ranges run from 2.5mg to 15mg weekly for both, escalated over several months. Insurance coverage and indication are the real difference in most patients' day-to-day.",
      },
      {
        q: "Which one causes the most weight loss?",
        a: "In the head-to-head SURMOUNT-5 trial (tirzepatide vs semaglutide for obesity), tirzepatide produced greater average body-weight reduction at 72 weeks — roughly 20% versus roughly 14% for semaglutide. Both numbers are averages with wide individual variation. Tirzepatide is a dual GIP/GLP-1 agonist, which is the biological explanation offered for the difference. 'Most weight loss on average' isn't the same as 'best for you' — side effect tolerance and insurance coverage often matter more.",
      },
      {
        q: "Which has fewer side effects?",
        a: "The side effect profiles are broadly similar — GI symptoms dominate both. The SURMOUNT-5 head-to-head reported comparable rates of nausea, diarrhea, and vomiting between tirzepatide and semaglutide, with tirzepatide showing slightly lower rates of some GI events in that specific study. Both FDA labels list the same short list of serious adverse events: pancreatitis, gallbladder disease, dehydration-related kidney issues, and the thyroid C-cell tumor boxed warning (rodent data).",
      },
      {
        q: "Which is cheaper?",
        a: "List prices for all four brand-name drugs sit in a similar range in early 2026, roughly $1,000-$1,400 per month without insurance. Manufacturer savings cards move this significantly: the Zepbound savings card and the Wegovy savings card can drop out-of-pocket costs substantially for commercially insured patients. Insurance coverage is the bigger variable — Ozempic and Mounjaro are more often covered (diabetes indication); Wegovy and Zepbound coverage for obesity is inconsistent across plans.",
      },
      {
        q: "Can I switch between them?",
        a: "Switching is possible and done routinely, but the switch point matters. The FDA labels don't give a fixed crossover protocol — prescribers typically pick a tirzepatide or semaglutide dose roughly equivalent to the old one and adjust from there. The first 1-2 weeks after a switch often feel like starting over: some nausea, some appetite recalibration. Patients sometimes switch for insurance reasons, for plateau, or for side effect tolerance. It's a conversation with the prescriber, not a DIY move.",
      },
      {
        q: "Which should I ask my doctor about?",
        a: "There isn't a clean answer — and any content claiming there is should be viewed carefully. The inputs that actually determine the right drug: your diagnosis (diabetes versus obesity versus both), your insurance formulary, your tolerance for injection frequency and needle type, your side effect profile on related meds, and what your prescriber has experience with. Bringing all four FDA labels to the appointment and asking the prescriber to talk through their reasoning is usually the most useful move.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label: "FDA Prescribing Information: Mounjaro (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215866",
      },
      {
        label: "FDA Prescribing Information: Zepbound (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=217806",
      },
      {
        label:
          "Aronne LJ et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5). NEJM 2025 [VERIFY exact citation details]",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "light",
    ourPick: {
      name: "Klean Athlete Klean Isolate",
      tier: "Premium whey isolate",
      reason:
        "A whey isolate with 20g of protein per scoop, minimal additives, and NSF Certified for Sport third-party testing. Mixes thin enough to drink on a nauseous morning when solid food isn't appealing, and the short ingredient list means fewer of the gums and sweeteners that bother slow-emptying stomachs. It's not the cheapest option on the shelf, but the calm formulation and tested quality earn it the top slot for GLP-1 users specifically.",
    },
    products: [
      {
        rank: 1,
        name: "Klean Athlete Klean Isolate",
        tier: "Premium whey isolate",
        summary:
          "20g per scoop, whey protein isolate, NSF Certified for Sport. Short ingredient list, no artificial colors or sweeteners. Mixes thin in water, which matters when a shake is replacing part of a meal on a day when nothing sounds good. Works well blended with frozen berries and a banana to hit a 30g breakfast target without asking a shrunken appetite to chew.",
      },
      {
        rank: 2,
        name: "Needed Grass-Fed Whey Isolate",
        tier: "Premium whey isolate",
        summary:
          "25g per scoop, grass-fed whey, third-party tested. The vanilla and chocolate flavors are sweetened with monk fruit rather than sucralose, which comes up often in patient conversations about shakes that don't aggravate nausea. Mixes clean. Designed by the supplement brand Needed as part of a clinical nutrition line — tends to be gentler on sensitive stomachs than big-box whey.",
      },
      {
        rank: 3,
        name: "Momentous Essential Whey",
        tier: "Premium whey blend",
        summary:
          "20g per scoop, grass-fed whey, NSF Certified for Sport. Stevia-sweetened (not sucralose), which is a plus for readers tracking sweetener tolerance on a slow-emptying stomach. Clean label, reliable mixing, and one of the more researched brands in the sports-nutrition space. A reasonable daily driver if budget allows.",
      },
      {
        rank: 4,
        name: "Promix Whey Isolate",
        tier: "Mid-tier whey isolate",
        summary:
          "25g per scoop, grass-fed whey isolate, unflavored and lightly flavored versions available. The unflavored blends invisibly into yogurt, soup, or oatmeal — useful when a full shake is too much volume but protein still needs to land. No artificial sweeteners in the unflavored version. One of the best mid-tier options for GLP-1 users wanting flexibility in how protein gets in.",
      },
      {
        rank: 5,
        name: "Optimum Nutrition Gold Standard Whey",
        tier: "Budget whey blend",
        summary:
          "24g per scoop, whey isolate + concentrate blend, widely available. Not the cleanest label in this list (contains sucralose and acesulfame-K) but the most accessible — available at Costco, Target, and Amazon at under half the price of the premium tier. A fine starting point if you're figuring out whether protein powder works for you before spending more on a cleaner formulation.",
      },
      {
        rank: 6,
        name: "Truvani Plant-Based Protein",
        tier: "Premium plant protein",
        summary:
          "20g per scoop, pea + chia + pumpkin seed blend, monk fruit sweetened. Good option for readers who don't tolerate dairy on a GLP-1 (lactose sensitivity tends to get worse when gastric emptying slows). Mixes on the thicker side and benefits from blending. Clean ingredient list, no gums. Works well with almond milk and nut butter for a morning protein hit.",
      },
      {
        rank: 7,
        name: "Orgain Organic Plant Protein",
        tier: "Mid-tier plant protein",
        summary:
          "21g per scoop, organic pea + brown rice + chia blend. Widely available at grocery stores. Uses stevia and erythritol — erythritol can bother some slow-emptying stomachs, so worth a small first scoop to test tolerance. Decent flavor for a plant powder. A reasonable non-premium plant option if Truvani is out of budget.",
      },
      {
        rank: 8,
        name: "Ritual Essential Protein Daily Shake 18+",
        tier: "Premium plant protein",
        summary:
          "20g per scoop, pea protein with added Choline and methylated B-vitamins. Traceable sourcing is the brand's pitch. Monk-fruit sweetened. More expensive per serving than Orgain or Truvani. The added micronutrients are a nice bonus for GLP-1 users eating less overall, though the dose is modest and shouldn't replace a multivitamin if one is clinically indicated.",
      },
      {
        rank: 9,
        name: "Garden of Life Sport Organic Plant Protein",
        tier: "Mid-tier plant protein",
        summary:
          "30g per scoop, pea + navy bean + lentil + garbanzo + cranberry blend, NSF Certified for Sport. High protein density for a plant option, which is useful when every calorie needs to do work. Organic and stevia-sweetened. Some readers find the legume blend thick; blending with ice helps.",
      },
      {
        rank: 10,
        name: "Quest Protein Powder",
        tier: "Budget whey/casein blend",
        summary:
          "23g per scoop, whey + milk protein isolate, widely available. Contains sucralose. Chosen by some GLP-1 users specifically because the slower-digesting casein in the blend stays in the stomach longer and helps with the hours-long hunger suppression. Not the cleanest label, but a practical option for readers who already trust the brand from protein bars.",
      },
    ],
    faq: [
      {
        q: "How much protein per scoop should I look for?",
        a: "Aim for at least 20g per scoop. For a person targeting 1.2-1.6g protein per kg body weight (Phillips 2017), a single scoop of a 20-30g powder is a meaningful chunk of the daily total — especially on low-appetite days. Anything under 15g tends to be padded with carbs or thickeners and isn't worth the calories.",
      },
      {
        q: "Whey or plant-based?",
        a: "Whey isolate has the highest leucine content gram-for-gram, which the muscle-protein-synthesis literature consistently supports for preserving lean mass. Plant blends (pea + rice, or pea + legume combinations) get close when the total dose is adequate and the blend covers the full amino-acid profile. On a GLP-1, the practical question is what your stomach tolerates — dairy sensitivity often worsens when gastric emptying slows.",
      },
      {
        q: "Are there artificial sweeteners I should avoid?",
        a: "No blanket answer, and the science on sweeteners and GI symptoms in GLP-1 users is thin. What patients commonly report: sucralose (Splenda) and sugar alcohols like erythritol can worsen bloating and nausea for some. Monk fruit and stevia are better tolerated on average. If a shake makes you feel worse, the sweetener is worth suspecting before the protein itself.",
      },
      {
        q: "Can I just drink shakes instead of eating?",
        a: "You can for a day or two when nausea is rough, but shakes shouldn't replace food long-term. Whole foods bring fiber, micronutrients, and satiety signals that powders don't. The realistic pattern for most GLP-1 users: one shake a day as a protein bridge (often breakfast), plus protein-forward meals for lunch and dinner.",
      },
      {
        q: "What about collagen peptides?",
        a: "Collagen is a protein, but it's missing tryptophan and low in leucine — which means it doesn't support muscle-protein synthesis the way whey or a complete plant blend does. It's fine for skin, joints, and as a supplement on top of your daily protein target, but it shouldn't be the main protein source for anyone trying to preserve lean mass on a GLP-1.",
      },
      {
        q: "Is NSF Certified for Sport or Informed Sport testing worth paying for?",
        a: "For most people, yes. These third-party programs test for heavy metals, banned substances, and label accuracy — relevant both for athletes and for anyone on a GLP-1 wanting to know what's actually in the powder. Klean Athlete, Momentous, Needed (on some products), and Garden of Life Sport are examples in this list that carry one of these certifications.",
      },
      {
        q: "When should I drink a shake?",
        a: "Whatever time fits your day and your appetite. The old 'anabolic window' (must be within 30 minutes of training) has been largely walked back by the sports nutrition literature — total daily protein and per-meal distribution (20-40g per feeding) matter more than timing around workouts. For GLP-1 users, the most practical slot is whichever meal is hardest to eat normally.",
      },
    ],
    sources: [
      {
        label:
          "Phillips SM. Protein Requirements Beyond the RDA. Applied Physiology, Nutrition, and Metabolism 2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28177710/",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label: "NSF Certified for Sport Product Database",
        url: "https://www.nsfsport.com/",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "light",
    ourPick: {
      name: "LMNT Recharge",
      tier: "Premium low-sugar electrolyte",
      reason:
        "A zero-sugar electrolyte mix with 1,000mg sodium, 200mg potassium, and 60mg magnesium per stick. No artificial sweeteners in the unflavored (Raw Unflavored) version. The sodium dose is the highest in this category and is the single reason LMNT lands at #1 for GLP-1 users — when total food intake drops, sodium intake drops with it, and the first-month fatigue patients describe often maps cleanly onto low sodium. Stevia-sweetened flavored versions are also well-tolerated.",
    },
    products: [
      {
        rank: 1,
        name: "LMNT Recharge",
        tier: "Premium low-sugar electrolyte",
        summary:
          "1,000mg sodium, 200mg potassium, 60mg magnesium per stick. Zero sugar, stevia-sweetened (Raw Unflavored version has no sweetener at all). High sodium makes this the most useful option for GLP-1 users in the first 1-2 months when intake is lowest. Flavors are polarizing — the unflavored can be added to broth; the citrus and mango chili versions are popular. One packet in 16-32oz of water.",
      },
      {
        rank: 2,
        name: "Redmond Re-Lyte Electrolyte Mix",
        tier: "Premium low-sugar electrolyte",
        summary:
          "810mg sodium, 400mg potassium, 50mg magnesium per scoop. Uses Redmond real salt (unrefined sea salt) plus added potassium and magnesium. Sweetened with a touch of stevia. Slightly lower sodium than LMNT but higher potassium, which some readers prefer. Dissolves well. The lemon-lime and mixed-berry flavors are the most accessible for daily use.",
      },
      {
        rank: 3,
        name: "Needed Electrolytes",
        tier: "Premium clinical formulation",
        summary:
          "815mg sodium, 250mg potassium, 75mg magnesium per stick. Designed by Needed's clinical nutrition team with GLP-1 and perinatal users in mind. Monk-fruit sweetened. Includes trace minerals beyond the big three. Slightly less salty than LMNT, which readers with sensitive stomachs often prefer. A premium-priced option, but the formulation is thoughtful.",
      },
      {
        rank: 4,
        name: "Liquid IV Hydration Multiplier",
        tier: "Budget hydration mix",
        summary:
          "500mg sodium, 370mg potassium, plus 11g added sugar per stick. The sugar is the tradeoff — the sodium dose is lower than the premium category, and the sugar load is counter to most GLP-1 eating patterns. A reasonable option if someone really struggles with plain water and can tolerate the carbs, but not a first choice when minimizing sugar matters.",
      },
      {
        rank: 5,
        name: "Nuun Sport Electrolyte Tablets",
        tier: "Budget low-sugar tablets",
        summary:
          "300mg sodium, 150mg potassium per tablet. Low sugar (1g), sweetened with stevia. The sodium dose is much lower than LMNT or Re-Lyte, so you may need two tablets. Fizzing tablet format is pleasant and portable. A reasonable travel or gym-bag option; probably not enough sodium on its own for heavy GLP-1 side-effect days.",
      },
      {
        rank: 6,
        name: "Ultima Replenisher",
        tier: "Mid-tier low-sugar electrolyte",
        summary:
          "55mg sodium, 250mg potassium, 100mg magnesium per stick. Zero sugar, stevia-sweetened, multiple flavors. The sodium dose here is very low — this is more of a light-hydration supplement than a replacement-level electrolyte. Useful for daily base hydration for some readers; not sufficient on its own for the worst fatigue or dehydration days.",
      },
      {
        rank: 7,
        name: "Pedialyte Electrolyte Solution",
        tier: "Medical-grade rehydration",
        summary:
          "490mg sodium, 370mg potassium per 12oz serving. Originally formulated for pediatric dehydration, commonly used by adults during vomiting or diarrhea illness. Contains dextrose (sugar) — intentionally, because glucose helps sodium absorption at the gut level. Worth keeping on hand for a severe GI-symptom day but not for daily use.",
      },
      {
        rank: 8,
        name: "Dr. Berg's Electrolyte Powder",
        tier: "Budget low-sugar electrolyte",
        summary:
          "50mg sodium, 1,000mg potassium, 120mg magnesium per scoop. Unusual profile — much lower sodium, much higher potassium than the rest of this list. That ratio is a better fit for someone already salting food heavily. No sugar, stevia-sweetened. Reasonable if the high-potassium profile matches what's missing from your diet; not a first pick for most GLP-1 users.",
      },
    ],
    faq: [
      {
        q: "Why do GLP-1 users need more electrolytes?",
        a: "Not directly because of the drug — because of the reduced eating that comes with it. Food is a major source of sodium, potassium, and magnesium, and when total intake drops, so does intake of all three. The Ozempic and Wegovy prescribing information flags dehydration and electrolyte imbalance as watchpoints, particularly when nausea or vomiting is present.",
      },
      {
        q: "How much sodium do I actually need?",
        a: "The standard US dietary guidelines suggest under 2,300mg per day, but that guidance is built around populations with high intake of processed food. When you're eating much less (as many GLP-1 users are in the first 1-3 months), you can genuinely undershoot. A common practical floor is around 2,000-3,000mg per day from food plus supplement. This is a conversation with your prescriber if you have high blood pressure or heart disease.",
      },
      {
        q: "Can I just drink Gatorade?",
        a: "You can, but standard Gatorade has roughly 160mg sodium and 36g sugar per 20oz bottle — much less sodium and much more sugar than the premium electrolyte mixes in this list. The sugar load is the bigger issue on a GLP-1. If Gatorade is what's accessible, Gatorade Zero is a closer match; better options exist.",
      },
      {
        q: "When should I take electrolytes?",
        a: "Most users sip electrolyte water in the morning and/or mid-afternoon, when fatigue and light-headedness tend to peak. During a nauseous or vomiting spell, small sips every 15-20 minutes (not gulping) tends to stay down better. If you're exercising or in hot weather, add one serving before and one during or after. Taking it with food or with a protein shake is fine.",
      },
      {
        q: "Can you take too much?",
        a: "Yes. Excess sodium raises blood pressure; excess potassium (rare from supplements but possible) is dangerous for people on certain blood pressure medications or with kidney disease. If you have CKD, heart failure, or are on ACE inhibitors, ARBs, or potassium-sparing diuretics, run the exact product past your prescriber before starting. For most healthy adults, one to two servings of a standard electrolyte mix per day is well within a safe range.",
      },
      {
        q: "What about magnesium for constipation?",
        a: "Magnesium citrate or magnesium oxide at bedtime (often 200-400mg) is a common approach for GLP-1-related constipation, separate from daily electrolyte mixes. Most general electrolyte mixes contain 50-120mg of magnesium, which is useful but usually not enough to move bowels on its own. A dedicated magnesium product is often layered on top. The Mounjaro and Ozempic labels both list constipation as a common side effect.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label: "FDA Prescribing Information: Mounjaro (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215866",
      },
      {
        label: "NIH Office of Dietary Supplements: Sodium Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Sodium-HealthProfessional/",
      },
      {
        label: "NIH Office of Dietary Supplements: Magnesium Fact Sheet",
        url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "required",
    faq: [
      {
        q: "How long does Ozempic nausea last?",
        a: "For most people, nausea is heaviest in the first 1-2 weeks of a new dose and fades as the body adjusts. The Ozempic prescribing information describes nausea as typically transient. The STEP-1 trial reported most GI events resolved within days to a couple of weeks. Each dose increase (weeks 5, 9, and beyond) can bring a smaller repeat of the first-week experience. Past 3 weeks of the same dose with no improvement is a reason to call your prescriber.",
      },
      {
        q: "Why does it happen in the first place?",
        a: "Semaglutide (the active ingredient in Ozempic and Wegovy) slows gastric emptying — food sits in the stomach longer than you're used to. It also acts on GLP-1 receptors in the brain's nausea-regulating pathway. Both effects are listed in the FDA prescribing information as part of the mechanism. The slowed emptying is a big part of why the drug helps with weight and blood sugar; the nausea is the same mechanism being felt as a symptom.",
      },
      {
        q: "What helps that actually has evidence?",
        a: "Smaller meals, eaten slowly; lower-fat meals (fat is the slowest macronutrient to digest, and slowed emptying makes this more uncomfortable); staying hydrated with cold, slow sips; avoiding lying down immediately after eating. The Novo Nordisk patient resources for Ozempic and Wegovy list all of these. Ginger (fresh, tea, or chews) has modest evidence for general nausea and comes up constantly in patient discussions. Prescription antiemetics (ondansetron, metoclopramide) are an option your prescriber can discuss for rough weeks.",
      },
      {
        q: "What should I avoid eating?",
        a: "The patterns most consistently reported as triggers: heavy fried foods, large meat-forward meals, creamy or fatty sauces, carbonated drinks, alcohol, and very sugary desserts. None of these are forbidden — what tends to work is keeping portions small when they do show up. A tablespoon of ice cream is usually fine; a full bowl after a fatty dinner is where the miserable night starts.",
      },
      {
        q: "When does nausea become a reason to call my doctor?",
        a: "The FDA label for Ozempic flags several escalation signals: severe or persistent abdominal pain (especially radiating to the back, which can signal pancreatitis), vomiting that prevents keeping fluids down, signs of dehydration (dark urine, dizziness, not urinating for 8+ hours), right-upper-abdomen pain with fever or yellowing of skin (possible gallbladder issue), and any vomiting that's persistent past 48-72 hours. These aren't 'wait and see' — they're same-day call signals.",
      },
      {
        q: "Can I take a lower dose to get through it?",
        a: "This is a prescriber conversation, not a DIY move — but yes, dose reduction or holding at a lower dose is common and is explicitly allowed by the FDA prescribing information. A lot of prescribers will hold you at 0.25mg for an extra 4 weeks if the jump to 0.5mg is rough, or step you back down if the jump to 1mg doesn't settle. The calendar in the label is a guideline, not a requirement.",
      },
      {
        q: "Will it always be like this?",
        a: "Almost certainly not. The STEP-1 and SURMOUNT-1 trial data both show GI event rates declining sharply after the first few months on each drug. A small group of people (roughly 5-7% across those trials) discontinued due to GI side effects — meaning the vast majority settled into a tolerable rhythm. Maintenance dosing past the first 6 months is usually much gentler than the titration phase.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label: "Novo Nordisk Ozempic patient resources",
        url: "https://www.ozempic.com/",
      },
      {
        label: "Novo Nordisk Wegovy patient resources",
        url: "https://www.wegovy.com/",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "light",
    faq: [
      {
        q: "What's the daily target?",
        a: "The sports nutrition literature for preserving lean mass during a caloric deficit consistently lands in the range of 1.2-1.6 grams of protein per kilogram of body weight per day (Phillips 2017 is the most-cited review). For a 70kg (154lb) person, that's 84-112g daily. For a 90kg (198lb) person, 108-144g. Some clinicians push toward the higher end (1.6g/kg) for GLP-1 users specifically because the lean-mass loss data from STEP and SURMOUNT is higher than typical diet-only weight loss.",
      },
      {
        q: "How do I hit that target when I'm barely hungry?",
        a: "Front-load. A 20-30g protein breakfast when appetite is quietest. A protein-forward lunch (chicken, fish, tofu, Greek yogurt parfait). A shake as a bridge when dinner doesn't happen. Liquid protein (Greek yogurt, cottage cheese, whey shakes) tends to go down easier than whole cuts of meat on a slow-emptying stomach. Small protein additions to everything — a scoop of cottage cheese on a salad, a hard-boiled egg with crackers.",
      },
      {
        q: "Does the body actually absorb that much at once?",
        a: "The older '30g per meal ceiling' has been largely walked back. Recent research (Trommelen et al., Cell Reports Medicine 2023) suggests the muscle-protein-synthesis response scales up with doses well above 30g per meal, which is good news for GLP-1 users who often have 2 meals of 40-50g protein rather than 4 meals of 25g. The bigger driver is daily total, not per-meal ceiling.",
      },
      {
        q: "Plant vs animal protein — does it matter?",
        a: "The leucine content and complete amino acid profile matter more than the source. Animal proteins (whey, eggs, fish, meat) are naturally higher in leucine gram-for-gram. Plant proteins can match, but generally require higher total intake (roughly 1.5x) and a blend of sources to cover the full amino acid profile. If you're plant-based, aim for the higher end of the 1.2-1.6g/kg range and mix sources (soy + pea + legumes + grains).",
      },
      {
        q: "Should I take it all at one meal if that's all I can manage?",
        a: "Better than not hitting the target at all, yes. But the muscle-protein-synthesis literature consistently favors 2-4 feedings spread through the day over a single large dose, even when total intake is equal. If one meal is genuinely all you can do on a bad day, use a shake in the morning or evening to split it. Consistency over weeks matters more than perfection on any single day.",
      },
      {
        q: "Can you have too much?",
        a: "For healthy adults with normal kidney function, intakes up to 2g/kg/day are consistently safe in the research literature. For anyone with chronic kidney disease, higher protein intake is genuinely something to discuss with your nephrologist — the calculus there is different. For most GLP-1 users without kidney issues, undershooting is far more common than overshooting.",
      },
      {
        q: "Does timing around my injection day matter?",
        a: "Probably not. Nothing in the FDA prescribing information for Ozempic, Wegovy, Mounjaro, or Zepbound recommends specific food timing. What patients do notice: the day of the injection and the day after are often the lowest-appetite days of the week. Leaning on shakes, Greek yogurt, and soft proteins on those two days, with heavier whole-food meals later in the week, is a pattern that shows up in a lot of GLP-1 eating plans.",
      },
    ],
    sources: [
      {
        label:
          "Phillips SM. Protein Requirements Beyond the RDA. Applied Physiology, Nutrition, and Metabolism 2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28177710/",
      },
      {
        label:
          "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). NEJM 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label:
          "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). NEJM 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label:
          "Trommelen J et al. The anabolic response to protein ingestion during recovery from exercise has no upper limit. Cell Reports Medicine 2023 [VERIFY]",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
    ],
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
    status: "published",
    medicalDisclaimer: "required",
    items: [
      {
        rank: 1,
        name: "Am I a candidate for a GLP-1 based on my BMI and health markers?",
        summary:
          "The FDA indications are specific. Wegovy and Zepbound are approved for adults with a BMI of 30+, or 27+ with at least one weight-related condition (hypertension, type 2 diabetes, dyslipidemia, obstructive sleep apnea, cardiovascular disease). Ozempic and Mounjaro are approved for type 2 diabetes. A good answer walks you through which label applies to your situation and why. If the answer is vague, that's a reason to ask for specifics — the criteria are on the label.",
      },
      {
        rank: 2,
        name: "Which specific GLP-1 are you recommending, and why this one?",
        summary:
          "There are four major options: Ozempic, Wegovy, Mounjaro, Zepbound. A good answer names the drug and gives the reasoning — your indication (diabetes vs. obesity), your insurance formulary, side effect tolerance, and which drug the prescriber has experience with. 'Whatever your insurance covers' is an honest and legitimate answer. 'Because it's the newest' is not.",
      },
      {
        rank: 3,
        name: "What's my insurance situation with this drug?",
        summary:
          "Coverage for GLP-1s varies dramatically by plan and by indication. Ozempic and Mounjaro are more commonly covered for diabetes; Wegovy and Zepbound coverage for obesity is inconsistent. Ask: is prior authorization required? What documentation does the plan want? Does the prescriber's office help with PA paperwork or is that on you? Is there a manufacturer savings card that applies (Zepbound and Wegovy both have them for commercially insured patients)?",
      },
      {
        rank: 4,
        name: "What are the most common side effects I should expect in week 1?",
        summary:
          "A good answer covers the GI landscape (nausea, constipation, diarrhea, possibly vomiting), the typical timeline (heaviest in the first 1-2 weeks of each dose, usually fading), and practical counsel (small meals, lower fat, slow sips of fluid). If the answer is a generic 'you might feel nauseous,' ask for more specifics. The prescribing information has real detail and your prescriber should have it on hand.",
      },
      {
        rank: 5,
        name: "What's the dose escalation schedule you'll use?",
        summary:
          "The FDA labels lay out standard schedules: Ozempic starts at 0.25mg for 4 weeks, moves to 0.5mg, then 1mg, with 2mg as maximum. Wegovy titrates faster to 2.4mg. Mounjaro and Zepbound start at 2.5mg and step up by 2.5mg every 4 weeks to a maximum of 15mg. A good answer confirms the schedule and makes it clear the prescriber will slow it down if side effects are rough. 'We'll follow the label' is fine; 'we'll see how you feel at each step' is better.",
      },
      {
        rank: 6,
        name: "What should I do if side effects become unmanageable?",
        summary:
          "The good answer names a specific channel — a patient portal message, the nurse line, a next-visit trigger — and includes the options on the table (hold at current dose, step back down, add anti-nausea medication, pause and reassess). The prescribing information supports all of these. If the answer is 'just call the office,' ask who answers and how quickly. 8-week response times are common in busy practices and worth knowing about in advance.",
      },
      {
        rank: 7,
        name: "How will we monitor my progress besides the scale?",
        summary:
          "Weight is one data point. Better ones: waist circumference, blood pressure, A1c (if diabetic or prediabetic), lipid panel, liver enzymes, vitamin levels if eating significantly less. Some clinicians also track body composition via DEXA or InBody when available. A good answer includes at least two of these. The point is to catch useful things — muscle loss, micronutrient shortfalls, metabolic improvement — that the scale won't show.",
      },
      {
        rank: 8,
        name: "Do you recommend anything specific for muscle preservation?",
        summary:
          "The lean-mass loss data from STEP-1 (roughly 39% of lost weight) and SURMOUNT-1 (roughly 25%) is increasingly showing up in clinical conversations. A good answer names protein intake (often 1.2-1.6g per kg body weight per day, citing Phillips 2017 or similar) and resistance training 2-3 times per week. If the prescriber waves this off, it's worth asking why — the trial data has been public for years.",
      },
      {
        rank: 9,
        name: "What's the long-term plan if this works?",
        summary:
          "The STEP-4 extension trial showed significant weight regain in participants who stopped semaglutide after 68 weeks. The honest answer is that most people who respond are on the drug long-term, often at a maintenance dose. A good answer discusses maintenance dosing, what coverage looks like past the first year, and what the plan is if you hit a plateau (common around 12-18 months). 'We'll figure it out' is a real answer — long-term data is still accumulating — but it should be said out loud.",
      },
      {
        rank: 10,
        name: "What are the warning signs I should call you about immediately?",
        summary:
          "The FDA labels flag a specific short list: severe or persistent abdominal pain (especially radiating to the back — pancreatitis signal); right-upper-abdomen pain with fever or yellowing (gallbladder); severe vomiting preventing fluid intake; signs of dehydration or kidney issues; vision changes in diabetics; and any new suicidal thoughts. A good answer names these explicitly and gives you the fastest way to reach the office.",
      },
      {
        rank: 11,
        name: "How often will we follow up, and how do I reach you between appointments?",
        summary:
          "A standard cadence is 4 weeks after start, 3 months, then every 3-6 months. Patient portal, nurse line, and pharmacist consults are the three channels most practices use between visits. A good answer is specific about which questions go where (dose-timing questions to the pharmacist, worsening side effects to the nurse, new symptoms to the prescriber). Knowing the triage in advance saves you a panicked week of waiting.",
      },
      {
        rank: 12,
        name: "What if I want to stop?",
        summary:
          "Stopping is a legitimate option and worth asking about before you start. A good answer covers: the mechanism fades within roughly 1-2 weeks after the last dose; appetite returns; the STEP-4 data shows significant regain is common; there's no withdrawal in the addiction sense; and the prescriber is available to help with a plan if that's where you land. An answer that treats stopping as failure is a red flag — this is your decision, and a calm plan for stopping is part of informed care.",
      },
    ],
    faq: [
      {
        q: "How long should I plan for this appointment?",
        a: "Most initial GLP-1 consults run 20-40 minutes. If you bring this list of 12 questions, expect to cover maybe 6-8 of them in the first visit and circle back to the rest at the 4-week follow-up. Prioritize the ones specific to your situation: insurance (#3), which drug and why (#2), the dose schedule (#5), and the warning signs (#10) are the four that often can't wait.",
      },
      {
        q: "What if my doctor only gives me 12 minutes?",
        a: "This is common, especially in busy primary care. Two strategies: ask for the longer slot when you book (specifically: 'I'd like a 30-minute consult to discuss GLP-1 therapy'), and/or bring a printed list and ask which questions the office prefers to handle by portal message versus in-person. A good practice will help you route the questions rather than brushing them off.",
      },
      {
        q: "Should I see a specialist instead of my PCP?",
        a: "For most eligible adults, the primary care prescriber is fine for GLP-1 management. Endocrinologists and obesity medicine specialists bring deeper experience, especially for complex cases — existing diabetes with complications, history of pancreatitis, medullary thyroid cancer risk, or a previous GLP-1 that didn't work. Referral is worth asking about if your PCP seems unsure.",
      },
      {
        q: "What do I need to bring?",
        a: "A list of your current medications (including supplements), your most recent labs if you have them, your insurance card, and a notes app or paper for answers. If you've had a previous GLP-1 trial (even briefly), bring the name, dose, how long you were on it, and what made you stop. That history shapes the conversation significantly.",
      },
      {
        q: "Can I record the appointment?",
        a: "Laws vary by state. In single-party consent states (most of the US), you can record your own medical appointment without asking. In two-party consent states (California, Florida, Illinois, and others), you need the prescriber's permission. Asking is the cleaner move everywhere — most providers will say yes if you frame it as 'I want to remember what you said,' not 'I'm documenting this.' Taking notes is a reasonable fallback anywhere.",
      },
      {
        q: "What if I don't like the answers I get?",
        a: "Getting a second opinion is reasonable, especially before starting a medication you're likely to be on for years. Obesity medicine specialists, endocrinologists, and some weight-focused primary care practices all prescribe these drugs. A thoughtful prescriber will welcome a second opinion rather than feel threatened. You're not obligated to start a drug from the first consult.",
      },
    ],
    sources: [
      {
        label: "FDA Prescribing Information: Ozempic (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
      },
      {
        label: "FDA Prescribing Information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
      },
      {
        label: "FDA Prescribing Information: Mounjaro (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215866",
      },
      {
        label: "FDA Prescribing Information: Zepbound (tirzepatide)",
        url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=217806",
      },
      {
        label:
          "Rubino D et al. Effect of Continued Weekly Semaglutide vs Placebo on Weight Loss Maintenance (STEP-4). JAMA 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/33755728/",
      },
      {
        label:
          "Phillips SM. Protein Requirements Beyond the RDA. Applied Physiology, Nutrition, and Metabolism 2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/28177710/",
      },
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
