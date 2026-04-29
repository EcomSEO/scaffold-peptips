# Peptips — Launch Blockers (2026-04-29)

What stands between peptips today and "leave it alone for 3 months and just upload content."

Status as of `main` post 2026-04-29 audit-fix sweep + monetization scaffolding.

---

## TL;DR — Fabian-side decisions only

The 2026-04-29 audit-fix sweep is complete on the feature branch.
Peptips is re-anchored to the calm-patient-ed lane, no sister-site
links anywhere, Sara Lin removed (lives only on injectcompass), new
peptips-distinct author + reviewer pool centralized in
`lib/content/team.ts`, affiliate registry scaffolded, methodology
versioning helper in place.

| # | Blocker | Owner | Time | Status |
|---|---|---|---|---|
| 1 | Operator placeholders in impressum / terms / privacy | Fabian + lawyer | 30 min + lawyer | ❌ pending (TTDSG §5) |
| 2 | Vercel env: `BEEHIIV_API_KEY` | Fabian | 5 min | ❌ pending — newsletter no-ops without |
| 3 | Vercel env: real Amazon Associates tag (current placeholder: `peptips-20`) | Fabian | 5 min | ❌ pending |
| 4 | Reviewer credential verification: Dr. Amelia Okafor MD MRCP FRCP — GMC public-register lookup + ORCID + signed editorial-independence letter | Fabian | 1–2 hr | ❌ pending — `verifiedCredential: false` flag surfaces "credential pending" note |
| 5 | Reviewer credential verification: Lukas Eden RDN CDCES — CDR registration + signed editorial-independence letter | Fabian | 1–2 hr | ❌ pending |
| 6 | Real reviewer + author headshots commissioned (initials avatars in use until then) | Fabian | external | ❌ deferred — `Person.image` omitted from JSON-LD while pending |
| 7 | Custom domain DNS to peptips.com | Fabian | 30 min | ❌ pending |

After those seven, peptips is in pure content-upload mode.

## 2026-04-29 audit-fix status (Claude side)

| Audit blocker | Status |
|---|---|
| Sister-site footer (injectcompass / plasticfreelab / larderlab / circadianstack) | ✅ shipped — replaced with newsletter CTA |
| Cross-site author reuse (Sara Lin on injectcompass + peptips) | ✅ resolved — Sara kept on injectcompass; peptips moves to Eleanor Voss / Rhea Kapoor / Javiera Méndez. Documented in `docs/cross-site-author-audit.md` |
| Self-host fonts via `next/font` | ✅ verified — already on `next/font/google` (Inter + Source Serif 4) |
| Affiliate registry scaffolded | ✅ `lib/affiliate/registry.ts` — 13 SKUs across cooking scales, CGM, magnesium glycinate, B12, electrolytes, travel cool-bags. ZERO peptide vendors. ZERO telehealth. ZERO weight-loss supplements |
| Methodology versioning helper | ✅ `lib/content/methodology-version.ts` |
| Centralized team registry | ✅ `lib/content/team.ts` — 3 authors + 2 reviewers, `verifiedCredential: false` flag |

## Genuinely deferred (multi-week or env-gated)

- **Phase 1**: 12-locale × 5-hub keyword research (DataForSEO API run — needs `DATAFORSEO_LOGIN`)
- **Phase 2**: Per-post EvidenceDimensions data fill (every post needs its own scored dimensions, not defaults)
- **Phase 3**: Post-body humanizer pass (chrome humanized; bodies pending)
- **Phase 4 content extension**: `/ozempic-week-by-week` 1,336 → 2,500+ words with 10+ PubMed/FDA citations (currently 0 citations on the post)
- **Phase 5 Sweden compound stubs**: required for the 4 restricted compounds on `/sv/`
- **Phase 8 photography**: kie.ai batch (needs `KIE_AI_KEY`)
- **Phase 10 production Lighthouse**: post-DNS

The site is structurally launch-ready pending the seven Fabian-side decisions.
