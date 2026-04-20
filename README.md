# peptips.com

Calm, cited GLP-1 education. Next.js 14 source for **peptips.com**.

Read [CLAUDE.md](./CLAUDE.md) first — the legal/medical framing rules live there.

## Local dev

```bash
pnpm install
pnpm dev              # http://localhost:3001
pnpm build
```

## Deploy

Auto-deploys to Vercel on push to `main`. Keep `SITE.launched = false` in `lib/content/site.ts` until the launch checklist (`docs/site-spec.md` §Launch checklist) is green — crucially, that includes credentialed-reviewer sign-off on any drug-specific content.

## Key docs

- [content/brand-book.md](./content/brand-book.md) — voice, Jen persona, compliance framing
- [docs/topical-map.md](./docs/topical-map.md) — 150 posts, 5 hubs, Wave 1 priority list
- [docs/sample-briefs.md](./docs/sample-briefs.md) — anchor briefs
- [docs/site-spec.md](./docs/site-spec.md) — IA, templates, launch checklist

## The legal posture

Peptips is YMYL in Google's eyes. The code enforces three guardrails:

1. Site-wide medical disclaimer footer on every page (`components/MedicalDisclaimer.tsx`)
2. Per-post review stamp for any post with `medicalDisclaimer: "required"` frontmatter
3. Dedicated `/medical-disclaimer` page linked from the footer

Never bypass these.
