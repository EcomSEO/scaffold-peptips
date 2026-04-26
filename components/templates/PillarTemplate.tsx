import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { PostReviewStamp } from "../editorial/PostReviewStamp";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { MethodologyByline } from "../editorial/MethodologyByline";
import { BodyImageSlot } from "../editorial/BodyImageSlot";
import { PullQuote } from "../editorial/PullQuote";

/**
 * PillarTemplate — pliability-style long-form article shell.
 *
 * Section order (replicates pliability.com/stories anatomy 1:1):
 *   1.  Floating pine pill nav (rendered globally in layout)
 *   2.  Medical disclaimer strip (rendered in Header)
 *   3.  Article container max-w-3xl
 *   4.  Vertical breathing space pt-16 md:pt-24
 *   5.  Coral "LEARN" tag pill, centered
 *   6.  Centered H1 (Inter 400, clamp 2.25rem - 3.75rem)
 *   7.  Centered subhead (Inter 400, 18-19px)
 *   8.  Thin gray rule
 *   9.  Caps "PEPTIPS · {date}" meta row
 *  10.  Big hero photo placeholder
 *  11.  First body paragraph (lede)
 *  12.  H2 sections rendered from items[]
 *  13.  Inline image slots between sections
 *  14.  Pullquote callout
 *  15.  FAQ as readable prose, NOT bordered cards
 *  16.  EvidenceScore badge inline near H1 (when pflScore exists — peptips uses
 *       PostReviewStamp for medical posts; EvidenceScore is comparison-only)
 *  17.  MethodologyByline between subhead and hero photo
 *  18.  Sources at bottom (numbered, Inter 14px)
 */
export function PillarTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA"); // YYYY-MM-DD

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}

      <article className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-16">
        {/* 5. Coral "LEARN" tag pill, centered */}
        <div className="flex justify-center">
          <span className="tag-pill">
            {hub ? hub.shortName.toUpperCase() : "LEARN"}
          </span>
        </div>

        {/* 6. Centered H1 — Inter 400, 60px clamp, line-height 1.1 */}
        <h1
          className="mt-6 text-center font-normal text-ink text-balance"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {post.h1}
        </h1>

        {/* 7. Centered subhead — Inter 400, 18-19px, color #1F1F1F */}
        <p className="mt-6 mx-auto max-w-2xl text-center text-[1.125rem] md:text-[1.1875rem] leading-[1.5] text-ink-soft">
          {post.description}
        </p>

        {/* 17. MethodologyByline */}
        <MethodologyByline reviewedOn={post.updatedAt} />

        {/* 8. Thin gray rule */}
        <hr className="mt-12 border-0 border-t border-[#D6D6D6]" />

        {/* 9. Caps PEPTIPS · ISO date row */}
        <div className="mt-4 flex items-center justify-between caps-meta">
          <span>PEPTIPS</span>
          <span className="tnum">{isoDate}</span>
        </div>

        {/* 10. Big hero photo */}
        <BodyImageSlot aspect="16:10" variant="sage" className="mt-10 !my-0" />

        {/* Site-unique medical review stamp (required above body when flagged) */}
        {post.medicalDisclaimer === "required" && (
          <div className="mt-12">
            <PostReviewStamp reviewedOn={post.updatedAt} />
          </div>
        )}

        {/* 11. First body paragraph — Inter 400 18-19px / 1.7 / #1F1F1F */}
        <div className="mt-12 prose">
          <p>{post.description}</p>

          {/* 14. Pullquote callout — sits early to break up the lede */}
          <div className="not-prose">
            <PullQuote attribution="Peptips house view, methodology v1.2">
              We answer the question you actually asked in the first paragraph.
              Everything that follows is the why — sourced from the FDA label
              and the trials, written for someone reading on her phone at 11pm.
            </PullQuote>
          </div>

          {/* 12. Items rendered as H2 sections — readable prose, not cards */}
          {post.items && post.items.length > 0 && (
            <>
              {post.items.map((item, i) => (
                <section key={item.rank} className="not-prose">
                  <h2
                    className="mt-16 mb-6 font-normal text-ink"
                    style={{
                      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.name}
                  </h2>
                  <p className="text-[1.125rem] leading-[1.7] text-ink-soft max-w-prose">
                    {item.summary}
                  </p>
                  {/* Inline image every ~3 items */}
                  {i > 0 && i % 3 === 0 && (
                    <BodyImageSlot
                      aspect="4:5"
                      variant={i % 2 === 0 ? "coral" : "cream"}
                    />
                  )}
                </section>
              ))}
            </>
          )}

          {/* 15. FAQ rendered as readable prose, NOT bordered cards */}
          {post.faq && post.faq.length > 0 && (
            <section id="faq" className="not-prose">
              <h2
                className="mt-20 mb-8 font-normal text-ink"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Frequently asked questions
              </h2>
              <div className="space-y-10">
                {post.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-ink">
                      {f.q}
                    </h3>
                    <p className="mt-3 text-[1.125rem] leading-[1.7] text-ink-soft max-w-prose">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* 18. Sources — numbered list at bottom */}
        <div id="sources" className="mt-20">
          <SourcesList sources={post.sources ?? []} />
        </div>

        {/* Reading meta — kept compact, no decorative chrome */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </article>
    </>
  );
}
