import type { Post } from "@/lib/content/posts";
import { posts } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { ArticleThumb } from "./ArticleThumb";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { AuthorByline } from "./AuthorByline";
import { MedicallyReviewedBadge } from "./MedicallyReviewedBadge";
import { LastReviewedLine } from "./LastReviewedLine";
import { ReviewerStamp } from "./ReviewerStamp";
import { TableOfContents, type TocItem } from "./TableOfContents";
import { EvidenceScoreCard } from "./EvidenceScoreCard";
import { NewsletterInline } from "./NewsletterInline";
import { SourcesAccordion, type Source } from "./SourcesAccordion";
import { RelatedArticles } from "./RelatedArticles";
import type { ArticleCardData } from "./ArticleCard";
import { ArticleJsonLd } from "./schema/ArticleJsonLd";
import { MedicalWebPageJsonLd } from "./schema/MedicalWebPageJsonLd";
import { type EvidenceDimensions } from "./editorial/EvidenceScore";

const REVIEWER = {
  name: "Dr. Maya Okafor",
  jobTitle: "MD, Internal Medicine",
};

const AUTHOR = {
  name: "Eleanor Voss",
  jobTitle: "RN",
};

// Reasonable per-post defaults; in a future pass each post gets its own.
const DEFAULT_DIMENSIONS: EvidenceDimensions = {
  trialStrength: 92, // STEP / SURMOUNT trials
  sampleSize: 88,
  mechanism: 95,
  reproducibility: 80,
  realWorldFit: 75,
};

/**
 * Healthline-grade article shell for peptips.
 * - Top: BreadcrumbNav
 * - Hero: hub eyebrow + Source-Serif H1 + warm dek + 5:2 gradient image
 * - Below hero: AuthorByline + MedicallyReviewedBadge + LastReviewedLine + reading time + share
 * - ReviewerStamp block
 * - 12-col grid: prose (col 1-8) + right rail (col 9-12)
 * - Right rail: EvidenceScoreCard + sticky TOC
 * - End: SourcesAccordion + RelatedArticles
 */
export function ArticleTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);

  const crumbs = [
    { label: "Home", href: "/" },
    hub
      ? { label: hub.name, href: `/guides/${hub.slug}` }
      : { label: "Library" },
    { label: post.title },
  ];

  // Build TOC from sections we render.
  const toc: TocItem[] = [
    { id: "introduction", label: "What this guide covers", level: 2 },
    ...(post.items && post.items.length > 0
      ? [{ id: "key-points", label: "Key points", level: 2 as const }]
      : []),
    { id: "deep-dive", label: "What the trials actually show", level: 2 },
    ...(post.faq && post.faq.length > 0
      ? [{ id: "faq", label: "Frequently asked questions", level: 2 as const }]
      : []),
    { id: "sources", label: "Sources", level: 2 },
  ];

  const sources: Source[] =
    post.sources && post.sources.length > 0
      ? post.sources
      : DEFAULT_SOURCES;

  const related: ArticleCardData[] = posts
    .filter((p) => p.slug !== post.slug && p.hub === post.hub)
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: getHub(p.hub)?.name ?? "Library",
      readingTime: p.readingTime,
      reviewed: p.medicalDisclaimer === "required",
      author: AUTHOR.name,
      evidenceTier: 4,
    }));

  return (
    <main className="bg-white" data-toc-root>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        authorName={AUTHOR.name}
        authorJobTitle={AUTHOR.jobTitle}
        reviewerName={REVIEWER.name}
        reviewerJobTitle={REVIEWER.jobTitle}
      />
      <MedicalWebPageJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        lastReviewed={post.updatedAt}
        reviewerName={REVIEWER.name}
        reviewerCredentials={REVIEWER.jobTitle}
        about={hub?.name}
      />

      {/* Breadcrumb */}
      <div className="border-b border-rule">
        <div className="mx-auto max-w-container px-6 py-4">
          <BreadcrumbNav crumbs={crumbs} />
        </div>
      </div>

      {/* Hero band */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-container px-6 pt-8 md:pt-10 pb-8">
          <div className="max-w-[800px]">
            <div className="eyebrow mb-3">{hub?.name ?? "Library"}</div>
            <h1 className="editorial-h1">{post.h1 || post.title}</h1>
            <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-ink-muted max-w-[60ch]">
              {post.description}
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-8 aspect-[5/2] w-full rounded-md overflow-hidden">
            <ArticleThumb seed={post.slug} variant="hero" className="w-full h-full" />
          </div>

          {/* Author + meta strip */}
          <div className="mt-6 grid md:grid-cols-12 gap-4 md:gap-6 items-center">
            <div className="md:col-span-6">
              <AuthorByline
                authorName={AUTHOR.name}
                authorCredentials={AUTHOR.jobTitle}
                reviewedBy={REVIEWER.name}
                reviewerCredentials={REVIEWER.jobTitle}
                date={post.updatedAt}
              />
            </div>
            <div className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end">
              <MedicallyReviewedBadge
                reviewerName={REVIEWER.name}
                credentials={REVIEWER.jobTitle}
              />
              <span className="text-[13px] text-ink-muted">
                {post.readingTime} min read
              </span>
              <ShareIcons title={post.title} />
            </div>
          </div>

          <div className="mt-3">
            <LastReviewedLine date={post.updatedAt} />
          </div>

          {/* Reviewer stamp — peptips differentiator */}
          <div className="mt-6">
            <ReviewerStamp
              reviewerName={REVIEWER.name}
              reviewerCredentials={REVIEWER.jobTitle}
              lastReviewed={post.updatedAt}
            />
          </div>
        </div>
      </section>

      {/* Body grid */}
      <section className="mx-auto max-w-container px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Article column */}
          <article className="lg:col-span-8 article-prose">
            {/* Mobile EvidenceScoreCard collapses inline below the meta */}
            <div className="lg:hidden mb-8">
              <EvidenceScoreCard dimensions={DEFAULT_DIMENSIONS} />
            </div>

            {/* Mobile in-article TOC accordion */}
            <details className="lg:hidden mb-8 rounded-md border border-rule bg-surface-alt p-4">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-semibold text-ink list-none">
                <span>On this page</span>
                <span aria-hidden className="text-ink-muted">+</span>
              </summary>
              <div className="mt-3">
                <TableOfContents items={toc} />
              </div>
            </details>

            <h2 id="introduction">What this guide covers</h2>
            <p>
              {post.description} This article walks through what the
              published trials, the FDA prescribing information, and the
              real-world experience of people on a GLP-1 agree on. It is
              patient-education only — it is not a substitute for the
              prescriber who knows your case.
            </p>
            <p>
              You will find the practical summary first, then the trial
              evidence, then the questions readers ask the most. Generic
              names appear next to brand names — semaglutide (Ozempic,
              Wegovy), tirzepatide (Mounjaro, Zepbound) — every time.
            </p>

            {post.items && post.items.length > 0 && (
              <>
                <h2 id="key-points">Key points</h2>
                <ul>
                  {post.items.slice(0, 5).map((it) => (
                    <li key={it.rank}>
                      <strong>{it.name}.</strong> {it.summary}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 id="deep-dive">What the trials actually show</h2>
            <p>
              The pivotal evidence for this class is the STEP program for
              semaglutide and the SURMOUNT program for tirzepatide. The
              trials enrolled adults with overweight or obesity, ran for
              68-72 weeks, and reported their results in peer-reviewed
              journals (NEJM, JAMA). The FDA prescribing information for
              each drug — Ozempic, Wegovy, Mounjaro, and Zepbound — is the
              authoritative source for dosing, indications, and warnings.
            </p>
            <p>
              The honest summary: GLP-1 receptor agonists move blood-sugar
              and weight outcomes in trial populations far more than any
              prior class of medications. The honest caveat: the studied
              populations were not perfectly representative, side effects
              are common in the first weeks of any new dose, and the
              long-term picture beyond two years is still being written.
            </p>

            <NewsletterInline />

            {post.faq && post.faq.length > 0 && (
              <>
                <h2 id="faq">Frequently asked questions</h2>
                {post.faq.map((q, i) => (
                  <div key={i}>
                    <h3>{q.q}</h3>
                    <p>{q.a}</p>
                  </div>
                ))}
              </>
            )}

            <SourcesAccordion sources={sources} />
            <RelatedArticles articles={related} />
          </article>

          {/* Right rail */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <EvidenceScoreCard dimensions={DEFAULT_DIMENSIONS} />
              <TableOfContents items={toc} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ShareIcons({ title }: { title: string }) {
  const t = encodeURIComponent(title);
  return (
    <div className="flex items-center gap-1" aria-label="Share">
      <a
        href={`https://twitter.com/intent/tweet?text=${t}`}
        target="_blank"
        rel="noopener nofollow"
        className="w-9 h-9 inline-flex items-center justify-center rounded-pill border border-rule text-ink-muted hover:text-pine-deep hover:border-pine transition-colors"
        aria-label="Share on X / Twitter"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6 1.5h2.4l-5.2 6 6.1 8h-4.8L7.4 9.7 2.7 15.5H.3l5.6-6.4L0 1.5h4.9l3.4 4.5L12.6 1.5Zm-.9 12.1h1.3L4.4 2.8H3l8.7 10.8Z" /></svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=`}
        target="_blank"
        rel="noopener nofollow"
        className="w-9 h-9 inline-flex items-center justify-center rounded-pill border border-rule text-ink-muted hover:text-pine-deep hover:border-pine transition-colors"
        aria-label="Share on Facebook"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M9 8h2l.4-2H9V4.7c0-.6.2-1 1-1h1.4V1.9C11.1 1.8 10.4 1.7 9.6 1.7c-1.7 0-2.8 1-2.8 2.8V6H4.6v2h2.2v6H9V8Z" /></svg>
      </a>
      <button
        type="button"
        className="w-9 h-9 inline-flex items-center justify-center rounded-pill border border-rule text-ink-muted hover:text-pine-deep hover:border-pine transition-colors"
        aria-label="Copy link"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6.5 9.5 9.5 6.5" strokeLinecap="round" /><path d="M9 4l1-1a3 3 0 1 1 3 3l-1 1" strokeLinecap="round" /><path d="M7 12l-1 1a3 3 0 1 1-3-3l1-1" strokeLinecap="round" /></svg>
      </button>
    </div>
  );
}

const DEFAULT_SOURCES: Source[] = [
  {
    label: "FDA Prescribing Information: Ozempic (semaglutide) injection",
    url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=209637",
    publisher: "FDA",
  },
  {
    label:
      "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1).",
    url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
    publisher: "NEJM 2021",
  },
  {
    label:
      "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1).",
    url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
    publisher: "NEJM 2022",
  },
  {
    label:
      "Rubino D et al. Effect of Continued Weekly Semaglutide vs Placebo on Weight Loss Maintenance (STEP-4).",
    url: "https://pubmed.ncbi.nlm.nih.gov/33755728/",
    publisher: "JAMA 2021",
  },
  {
    label: "FDA Wegovy (semaglutide) prescribing information",
    url: "https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256",
    publisher: "FDA",
  },
];
