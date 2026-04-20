# Peptips — Claude Code Guide

Read this file first. It's the source of truth for how peptips.com is built, how content is made, and what the rules are.

---

## What this repo is

The live Next.js site at **peptips.com** — calm, cited GLP-1 education. Female-skewing primary persona ("Jen, 42" — see `content/brand-book.md` §2), warm-nurse-friend voice, strict medical framing.

## Stack

- **Framework:** Next.js 14 (App Router, RSC)
- **Language:** TypeScript
- **Styling:** Tailwind + brand tokens (soft sage `#9CAF94` / cream / pine / coral)
- **Fonts:** Source Serif 4 (headlines) + Inter (body)
- **Hosting:** Vercel
- **Newsletter:** Beehiiv (planned)
- **Analytics:** Neon Postgres (planned)
- **Assets:** Supabase Storage CDN (planned)

## Legal positioning — NON-NEGOTIABLE

Peptips is medical-adjacent (YMYL in Google's terms). Legal framing is built into the code:

1. **Site-wide footer disclaimer** — `<MedicalDisclaimerFooter>` in `app/layout.tsx`. Never remove.
2. **Per-post review stamp** — when a post's frontmatter has `medicalDisclaimer: "required"`, `<PostReviewStamp>` renders above the article body. Any post discussing a specific drug, dose, or protocol must have this flag.
3. **Dedicated `/medical-disclaimer` page** — linked from the footer on every page.
4. **No telehealth vendor links.** Ever. Discussed in `content/brand-book.md` §6, §12.
5. **No weight-loss numbers or before/after imagery.** Platform compliance landmine + wrong-reader attractor.
6. **Use generic + brand names together.** Always "semaglutide (Ozempic, Wegovy)" — not just "Ozempic."

These rules are also documented in `docs/site-spec.md` §Legal.

## Voice

Warm, patient, nurse-friend. See `content/brand-book.md` for full voice rules, do/don't side-by-sides, and tone calibration per post type.

**Forbidden:**
- "Miracle" / "secret" / "shocking" language
- Hype, urgency, lecturing, fear-mongering
- Influencer-coded prose ("OMG bestie")
- Clinical-detached prose ("Patients may experience...")
- Weight-loss numbers
- Before/after anything

## The launch flag

`lib/content/site.ts` exports `SITE.launched`. Keep `false` until every item in `docs/site-spec.md` §Launch checklist is green.

While `false`:
- `robots.ts` returns `Disallow: /`
- `layout.tsx` sets `robots: { index: false, follow: false }`

## Structure

```
peptips/
├── app/
│   ├── layout.tsx              # Root shell + medical disclaimer footer + JsonLd
│   ├── page.tsx                # Home
│   ├── [slug]/page.tsx         # Dynamic post routes (template by postType)
│   ├── guides/[hub]/page.tsx   # Hub landing pages
│   ├── medical-disclaimer/     # Full medical disclaimer page
│   ├── about/ privacy/ terms/ editorial-standards/ affiliate-disclosure/ contact/ newsletter/
│   ├── robots.ts  sitemap.ts  llms.txt/route.ts
├── components/
│   ├── templates/              # PillarTemplate, ComparisonTemplate, ClusterTemplate, ListicleTemplate, TrustPageTemplate
│   ├── schema/                 # JSON-LD: Article, Breadcrumb, FAQ, ItemList, Organization
│   ├── MedicalDisclaimer.tsx   # Site-wide footer + per-post review stamp
│   ├── Header, Footer, PostCard, HubCard, EmailCapture, CookieBanner, etc.
├── lib/
│   ├── content/
│   │   ├── site.ts             # SITE constants, launched flag, requiresMedicalDisclaimer
│   │   ├── hubs.ts             # The 5 hubs: GLP-1 101, Side effects, Food/muscle, Lifestyle, Long-term
│   │   └── posts.ts            # 10 Wave 1 launch stubs with medicalDisclaimer flag
│   └── seo.ts
├── content/
│   └── brand-book.md           # Voice, Jen persona, medical framing rules
└── docs/
    ├── site-spec.md            # IA, templates, trust copy, launch checklist
    ├── topical-map.md          # 150 posts across 5 hubs + Wave 1 priority (40)
    └── sample-briefs.md        # Anchor briefs including medical-compliant examples
```

## Content states (future pipeline)

- `content/briefs/{slug}.md` → brief, ready to draft
- `content/drafts/{slug}.mdx` → drafted, in review (requires credentialed reviewer before publish per brand book §12)
- `content/posts/{slug}.mdx` → published
- `content/refresh-queue/{slug}.md` → flagged for refresh

## Editorial principles (every post)

1. **Frame as informational, never medical advice.**
2. **Cite the FDA label or the trial, every time.**
3. **Use generic + brand names together** on first mention.
4. **Never recommend a specific telehealth provider.**
5. **No before/after. No weight-loss numbers.**
6. **One original sentence per H2.**
7. **Steel-man the alternative view.**
8. **Update aggressively when new data drops.**

## Commands

```bash
pnpm install
pnpm dev              # http://localhost:3001
pnpm build
pnpm typecheck
pnpm lint
```

## What not to do

- Do not flip `SITE.launched` to `true` without clearing the launch checklist.
- Do not remove `<MedicalDisclaimerFooter>` from the root layout.
- Do not remove `<PostReviewStamp>` rendering from post templates.
- Do not link to telehealth providers anywhere.
- Do not write affiliate copy without applying the `truth-vs-trust` skill.
- Do not publish drug-specific content without `medicalDisclaimer: "required"` on the post.
- Do not write weight-loss numbers in post titles, descriptions, or pin headlines.

## Pointers

- Voice: `content/brand-book.md`
- All 150 posts: `docs/topical-map.md`
- Wave 1 priority: last section of `docs/topical-map.md`
- Sample briefs (incl. medical-compliant format): `docs/sample-briefs.md`
