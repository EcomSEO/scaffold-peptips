import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ReviewStamp } from "../ReviewStamp";
import { AffiliateDisclosure } from "../AffiliateDisclosure";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { PostReviewStamp } from "../editorial/PostReviewStamp";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ItemListJsonLd } from "../schema/ItemListJsonLd";
import { MethodologyByline } from "../editorial/MethodologyByline";
import { BodyImageSlot } from "../editorial/BodyImageSlot";
import { EvidenceScore } from "../editorial/EvidenceScore";
import { TierBadge } from "../editorial/TierBadge";

/**
 * ComparisonTemplate — pliability long-form shell with one comparison table
 * embedded as a single section. EvidenceScore badges stay on each item.
 */
export function ComparisonTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);
  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA");

  const skips = (post.products ?? []).filter((p) =>
    p.tier.toLowerCase().includes("skip")
  );
  const picks = (post.products ?? []).filter(
    (p) => !p.tier.toLowerCase().includes("skip")
  );

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
      {post.products && (
        <ItemListJsonLd
          items={post.products.map((p) => ({ rank: p.rank, name: p.name }))}
        />
      )}

      <article className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-16">
        <div className="flex justify-center">
          <span className="tag-pill">
            {hub ? hub.shortName.toUpperCase() : "COMPARISON"}
          </span>
        </div>

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

        <p className="mt-6 mx-auto max-w-2xl text-center text-[1.125rem] md:text-[1.1875rem] leading-[1.5] text-ink-soft">
          {post.description}
        </p>

        <MethodologyByline reviewedOn={post.updatedAt} />

        <hr className="mt-12 border-0 border-t border-[#D6D6D6]" />

        <div className="mt-4 flex items-center justify-between caps-meta">
          <span>PEPTIPS</span>
          <span className="tnum">{isoDate}</span>
        </div>

        <BodyImageSlot aspect="16:10" variant="pine" className="mt-10 !my-0" />

        {post.medicalDisclaimer === "required" && (
          <div className="mt-12">
            <PostReviewStamp reviewedOn={post.updatedAt} />
          </div>
        )}

        <div className="mt-8">
          <AffiliateDisclosure />
        </div>

        <div className="mt-12 prose">
          <p>{post.description}</p>

          {/* Our pick — one prose paragraph with name + reason, no card chrome */}
          {post.ourPick && (
            <section id="our-pick" className="not-prose">
              <h2
                className="mt-16 mb-6 font-normal text-ink"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Our pick: {post.ourPick.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <TierBadge tier={post.ourPick.tier} />
              </div>
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft max-w-prose">
                {post.ourPick.reason}
              </p>
            </section>
          )}

          {/* The comparison table — one section in the long-form story */}
          {picks.length > 0 && (
            <section id="comparison" className="not-prose">
              <h2
                className="mt-16 mb-6 font-normal text-ink"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Side by side
              </h2>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-y border-[#D6D6D6]">
                      <th className="caps-meta py-3 pr-4 font-medium">Rank</th>
                      <th className="caps-meta py-3 pr-4 font-medium">Name</th>
                      <th className="caps-meta py-3 pr-4 font-medium">Tier</th>
                      <th className="caps-meta py-3 pr-4 font-medium">Evidence</th>
                      <th className="caps-meta py-3 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {picks.map((p, i) => (
                      <tr
                        key={p.rank}
                        className="border-b border-[#D6D6D6] align-top"
                      >
                        <td className="py-5 pr-4 text-ink-soft tnum text-[15px]">
                          {String(p.rank).padStart(2, "0")}
                        </td>
                        <td className="py-5 pr-4 text-ink font-medium text-[16px]">
                          {p.name}
                        </td>
                        <td className="py-5 pr-4">
                          <TierBadge tier={p.tier} />
                        </td>
                        <td className="py-5 pr-4">
                          <EvidenceScore
                            score={Math.max(60, 92 - i * 4)}
                            size="sm"
                          />
                        </td>
                        <td className="py-5 text-[15px] leading-[1.6] text-ink-soft">
                          {p.summary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* What we'd skip — prose, not a card */}
          {skips.length > 0 && (
            <section id="skips" className="not-prose">
              <h2
                className="mt-16 mb-6 font-normal text-ink"
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                What we&apos;d skip
              </h2>
              <div className="space-y-8">
                {skips.map((p) => (
                  <div key={p.rank}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-[1.5rem] font-semibold leading-[1.3] text-ink">
                        {p.name}
                      </h3>
                      <TierBadge tier={p.tier} />
                    </div>
                    <p className="text-[1.125rem] leading-[1.7] text-ink-soft max-w-prose">
                      {p.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ as readable prose */}
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

        <div id="sources" className="mt-20">
          <SourcesList sources={post.sources ?? []} />
        </div>

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
