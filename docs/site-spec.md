# Peptips — Site Build Spec

The complete spec for building peptips.com. Pairs with `content/brand-book.md`, `docs/topical-map.md`, `docs/sample-briefs.md`, and `CLAUDE.md`.

This is the engineering reference. It describes what's already implemented in the repo and what still needs to be filled in as content is drafted.

---

## 1. Information architecture

### URL structure

Flat, keyword-first, no dates, no hub prefix in the URL.

```
https://peptips.com/
https://peptips.com/{slug}                      # post pages
https://peptips.com/guides/{hub-slug}           # hub landing
https://peptips.com/about
https://peptips.com/editorial-standards
https://peptips.com/medical-disclaimer          # peptips-specific
https://peptips.com/privacy
https://peptips.com/terms
https://peptips.com/affiliate-disclosure
https://peptips.com/contact
https://peptips.com/newsletter
https://peptips.com/sitemap.xml
https://peptips.com/robots.txt
https://peptips.com/llms.txt
```

### Hub slugs

- `guides/glp1-101`
- `guides/side-effects-and-management`
- `guides/food-nutrition-and-muscle`
- `guides/lifestyle-on-glp1`
- `guides/plateaus-and-long-term`

### Canonical rules

- Every post `rel="canonical"` points to itself
- No trailing slash (enforce in Vercel)
- `www.` → apex 301
- `http` → `https` 301

---

## 2. Page templates

Same five templates as the plasticfreelab network standard, with two peptips-specific additions:

- `<MedicalDisclaimerFooter>` renders site-wide in `app/layout.tsx`
- `<PostReviewStamp>` renders above article body when `post.medicalDisclaimer === "required"`

### HomePage (`/`)

1. Hero — "Real answers about life on a GLP-1"
2. Featured post — the single most-read post of the month (seed: "Ozempic week by week")
3. 5 hub cards
4. Latest posts
5. Email capture — lead magnet: "The First 30 Days on a GLP-1"
6. Trust strip — cited / no miracles / no clinic affiliation
7. Medical disclaimer footer (site-wide)
8. Footer

### HubPage (`/guides/{hub-slug}`)

Hub hero + hub thesis → pillar card → ranked comparisons → everything-else grid → email capture.

### PillarTemplate

Long-form guide with review stamp, calm intro, callouts, inline FAQ, sources, author bio, related posts, email capture. Medical review stamp renders above intro when required.

### ComparisonTemplate

For protein powder / electrolyte / fiber posts. Editor's pick card → ranked list → methodology → what-to-look-for → FAQ → sources. `<AffiliateDisclosure>` above the product list.

**No comparison pages for drugs.** Mounjaro-vs-Ozempic-vs-Wegovy-vs-Zepbound uses the `PillarTemplate` (or a future `DrugComparisonTemplate`) with medical review stamp, no affiliate disclosure, and zero buy-links.

### ClusterTemplate

Direct-answer paragraph → body → FAQ → sources. Medical review stamp above body when required.

### ListicleTemplate

Intro → numbered items (each ~80-150 words) → related → email capture.

### TrustPageTemplate

Clean reading layout, breadcrumbs, h1, typographic styling via child elements. Used for About, Editorial Standards, Medical Disclaimer, Privacy, Terms, Affiliate Disclosure, Contact.

---

## 3. SEO technical spec

### JSON-LD by template

| Template | Schema |
|---|---|
| Home | `Organization` + `WebSite` + `SearchAction` |
| Hub | `CollectionPage` + `BreadcrumbList` |
| Pillar | `Article` + `BreadcrumbList` + `FAQPage` (+ `MedicalWebPage` when drug-specific) |
| Comparison (supplements) | `Article` + `BreadcrumbList` + `ItemList` + `FAQPage` |
| Cluster | `Article` + `BreadcrumbList` + `FAQPage` |
| Listicle | `Article` + `BreadcrumbList` + `ItemList` |

All `Article` JSON-LD includes: `headline`, `description`, `datePublished`, `dateModified`, `author` (Organization: "The Peptips Editorial Team"), `publisher`.

### robots.txt

While `SITE.launched = false`:
```
User-agent: *
Disallow: /
```

Once launched:
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://peptips.com/sitemap.xml
```

### Internal linking

- Every cluster → its hub pillar
- Every pillar → ≥6 cluster children in the same hub
- Every comparison (supplements) → 2-3 supporting cluster posts
- Related posts block on every post
- **No cross-network links** (peptips does not link to plasticfreelab, larderlab, injectcompass, etc.)

### Core Web Vitals budgets

LCP < 2.5s, INP < 200ms, CLS < 0.1 (p75). No hero images yet — the typographic hero hits these easily.

---

## 4. Legal framing (non-negotiable)

### Site-wide

- `MedicalDisclaimerFooter` on every page
- `/medical-disclaimer` page linked from footer
- Privacy / Terms / Affiliate Disclosure / Editorial Standards / Contact pages all live

### Per drug-specific post

- `medicalDisclaimer: "required"` in the post metadata
- `<PostReviewStamp>` renders above the body — "Reviewed by The Peptips Editorial Team · [date] · This post is for informational purposes only and is not medical advice."
- Generic drug name + brand name on first mention
- At least one FDA label or peer-reviewed trial citation
- No "you should" / "this will" — use "the trial reported" / "the label indicates"

### What we never publish

- Before/after images
- Weight-loss numbers in titles, descriptions, or pins
- Telehealth provider recommendations
- Drug manufacturer-sponsored content
- Medical advice presented as fact

---

## 5. Homepage copy (implemented)

- H1: *Real answers about life on a GLP-1.*
- Subhead: *Calm, cited, specific guidance for everything your doctor didn't have time to answer — side effects, food, muscle, dosing, and the questions that feel too embarrassing to ask.*
- Primary CTA: *Start with side effects →* → `/guides/side-effects-and-management`
- Secondary CTA: *Get the First 30 Days guide* → `#email-capture`

---

## 6. Lead magnet spec — "The First 30 Days on a GLP-1"

15-page PDF, US Letter portrait. Design brief:

- Cover: peptips wordmark, "The First 30 Days on a GLP-1 — A Calm Companion Guide," photo of a glass of water and a plate of protein-forward food
- Pages 2-3: Intro + how to use this guide
- Pages 4-7: Week-by-week expectations (what's normal, what's not)
- Pages 8-10: The food section — protein target, sample day, what to eat when you can't eat
- Page 11: Electrolyte + hydration basics
- Page 12: 12 questions to ask at your first follow-up (printable)
- Pages 13-14: Red flags — when to call your doctor
- Page 15: About Peptips + sources

**Critical:** no weight-loss numbers. Compliant with Pinterest/Instagram algorithm penalties.

Generated via the `pdf` skill. Stored in Supabase CDN under `peptips/lead-magnets/first-30-days-v1.pdf` (once CDN is wired).

### Welcome email sequence (3 emails over 7 days)

**Email 1 (instant):** "Your First 30 Days guide is here" — PDF attached + link to Ozempic-week-by-week post.
**Email 2 (Day 3):** "The three things that tend to make week 2 easier" — teaser for protein / electrolytes / sulfur-burp post.
**Email 3 (Day 7):** "The first follow-up: 12 questions worth asking" — teaser for the listicle post.

Day 8+: one calm email per week — a single useful thing from the archive.

---

## 7. Launch checklist

Must be true before flipping `SITE.launched` to `true`:

- [ ] Domain resolves to Vercel, SSL active
- [ ] All 8 trust pages live (About, Editorial Standards, Medical Disclaimer, Privacy, Terms, Affiliate Disclosure, Contact, Newsletter)
- [ ] Home + at least 1 hub page live
- [ ] At least 10 posts with real content (not stubs)
- [ ] Every post discussing a drug has `medicalDisclaimer: "required"` flag and visible review stamp
- [ ] Credentialed reviewer sign-off on every drug post (see brand book §8 on long-term plan to add a named credentialed author)
- [ ] Breadcrumb, Article, FAQ JSON-LD rendering on post pages
- [ ] `robots.txt`, `sitemap.xml`, `llms.txt` all responding correctly
- [ ] Cookie banner functional
- [ ] Email capture wired to Beehiiv, welcome sequence tested end-to-end
- [ ] Lead magnet PDF produced and delivered on signup
- [ ] Neon analytics wired (pageviews landing)
- [ ] Logo + favicon registered in Supabase CDN (or at least a branded favicon in /public)
- [ ] OG images render correctly (tested in Twitter / LinkedIn validators)
- [ ] Core Web Vitals green on 5 sample URLs
- [ ] Google Search Console verified; sitemap submitted
- [ ] Bing Webmaster verified; sitemap submitted

Until every box is checked, the site is `noindex`.

---

## 8. Content at launch (10 Wave 1 posts — stubs live in `lib/content/posts.ts`)

1. Pillar — The complete GLP-1 guide for beginners
2. Pillar — The complete GLP-1 side effect guide: week by week
3. Pillar — The complete GLP-1 nutrition guide
4. Comparison — Mounjaro vs Ozempic vs Wegovy vs Zepbound (no affiliate links)
5. Comparison — Best protein powders for GLP-1 users (affiliate)
6. Comparison — Best electrolyte products for GLP-1 users (affiliate)
7. Cluster — Ozempic week by week: what to expect (featured)
8. Cluster — Why does Ozempic make you nauseous?
9. Cluster — How much protein do you actually need on a GLP-1?
10. Listicle — 12 questions to ask your doctor before starting a GLP-1

Each has `status: "stub"` and a `medicalDisclaimer` flag. Drafting replaces stub bodies with the full content while preserving the frontmatter.

---

## 9. Still deferred

- Credentialed medical reviewer (long-term; brand book §8 acknowledges this as a YMYL risk)
- Beehiiv wiring (post-launch checklist)
- Neon analytics (post-launch checklist)
- Supabase CDN for PDFs and future photography
- Pinterest pin pipeline (Week 4 per implementation plan)
- Logo (currently wordmark only)

---

## 10. Handoff

To replace a stub with real content:

1. Generate a brief (per `docs/sample-briefs.md`) for the target keyword.
2. Draft per the brand book voice.
3. Update the post entry in `lib/content/posts.ts`:
   - Set `status: "published"`
   - Populate `faq`, `sources`, `items` / `products` as applicable
   - Verify `medicalDisclaimer` flag
4. When MDX rendering lands in a later pass, the body moves from the TS file into `content/posts/{slug}.mdx`.
