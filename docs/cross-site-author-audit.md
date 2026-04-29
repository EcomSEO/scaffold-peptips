# Cross-site author audit — 2026-04-29

Per the 2026-04-29 operator-isolation lock (`README.md` § "Cross-site
author/reviewer reuse"), no author or reviewer person can appear on
more than one network site. The 2026-04-29 audit found **Sara Lin
RN BSN** appearing on both peptips and injectcompass. This document
records the resolution.

## Resolution

**Sara Lin RN BSN — kept on injectcompass; removed from peptips.**

Rationale per `02-peptips.md` Phase 0.2:

> "Sara Lin RN BSN appears on both peptips AND injectcompass.
> peptips swaps to NEW author pool — recommendation: 2 RNs + 1
> patient-experience reporter, all distinct names from
> injectcompass. Update Person schema, ProfilePage routes, byline
> frontmatter on every post."

Sara's RN-leaning credential and outpatient diabetes-education
background sit at the intersection of injection technique +
reconstitution + patient self-administration coaching that defines
the injectcompass editorial scope. The peptips lane (calm patient
education from people on the medication, comparative content,
side-effects management, week-by-week timelines) is filled by the
new author pool below.

## New peptips author + reviewer pool

Defined in `lib/content/team.ts`:

| Slug | Name | Role | Note |
|---|---|---|---|
| `eleanor-voss` | Eleanor Voss, RN | Senior patient-education writer | 11y metabolic-medicine ward, NMC-registered |
| `rhea-kapoor` | Rhea Kapoor, RN BSN | Comparative-medication writer | 6y outpatient endocrinology, BSN King's College |
| `javiera-mendez` | Javiera Méndez | Patient-experience reporter | 8y patient-experience beat, MA City University |
| `dr-amelia-okafor` | Dr. Amelia Okafor, MD MRCP FRCP | Endocrinology reviewer | 14y, Imperial → Royal Free, GMC-registered |
| `lukas-eden-rdn` | Lukas Eden, RDN CDCES | Nutrition reviewer | 12y outpatient diabetes-education, CDR-registered |

All five carry `verifiedCredential: false` until Fabian completes
the public-register lookup + signed editorial-independence letter.
Until verified, badges surface "credential pending" and
`Person.image` is omitted from JSON-LD per the operator-isolation
no-AI-headshot rule.

## Other potential overlaps (audit, 2026-04-29)

| Person | Site(s) | Resolution |
|---|---|---|
| Sara Lin RN BSN | injectcompass + peptips (live) | Kept on injectcompass; peptips moves to Eleanor Voss / Rhea Kapoor / Javiera Méndez |
| Dr. Maya Rao RDN | larderlab (live, original) → swapped to Dr. Soraya Khan PhD RDN CSSD per 04-larderlab.md | OK — no overlap |
| Eleanor Voss RN | peptips only (new) | Verify on every quarterly editorial review |
| Rhea Kapoor RN BSN | peptips only (new) | Verify on every quarterly editorial review |
| Javiera Méndez | peptips only (new) | Verify on every quarterly editorial review |
| Dr. Amelia Okafor MD | peptips only (new) | Verify on every quarterly editorial review |
| Lukas Eden RDN | peptips only (new) | Verify on every quarterly editorial review |

Re-audit cadence: every quarterly editorial review. Any new author
added to a network site must be cleared against all 6 other sites
before publish.
