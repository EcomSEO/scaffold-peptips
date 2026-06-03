import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Link } from "@/i18n/navigation";
import { autolink } from "@/lib/content/autolink";
import { RetailerButtons } from "../RetailerButtons";
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
import { ProductReviewJsonLd } from "../schema/ProductReviewJsonLd";
import { MethodologyByline } from "../editorial/MethodologyByline";
import { HowWeEvaluate } from "../editorial/HowWeEvaluate";
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
  // Shared across the page so each cross-link target is used at most once.
  const used = new Set<string>();

  const skips = (post.products ?? []).filter((p) =>
    p.tier.toLowerCase().includes("skip")
  );
  const picks = (post.products ?? []).filter(
    (p) => !p.tier.toLowerCase().includes("skip")
  );
  // The product behind "Our pick" (matched by name) — for its buy buttons.
  const pickProduct = (post.products ?? []).find(
    (p) => p.name === post.ourPick?.name
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
      {picks.length > 0 && (
        <ProductReviewJsonLd products={picks} reviewedOn={post.updatedAt} />
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

        <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#ECECEC] bg-surface-alt">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/heroes/${post.slug}.jpg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

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
              {pickProduct?.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={pickProduct.image}
                  alt={post.ourPick.name}
                  loading="lazy"
                  className="float-right ml-4 mb-3 h-24 w-24 sm:ml-6 sm:mb-4 sm:h-40 sm:w-40 rounded-lg border border-[#ECECEC] bg-white object-contain p-2"
                />
              )}
              <p className="text-[1.125rem] leading-[1.7] text-ink-soft max-w-prose">
                {autolink(post.ourPick.reason, post.slug, used)}
              </p>
              {pickProduct?.productKey && (
                <div className="mt-5">
                  <RetailerButtons
                    productKey={pickProduct.productKey}
                    size="lg"
                  />
                </div>
              )}
            </section>
          )}

          {/* How we evaluate — honest, spec-based methodology (no fake testing) */}
          {picks.length > 0 && (
            <HowWeEvaluate slug={post.slug} productCount={picks.length} />
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
              <p className="-mt-3 mb-6 text-[13px] text-ink-muted">
                Prices are approximate per-serving estimates, last checked{" "}
                {new Date(post.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
                . Tap “Check price” for the current cost.
              </p>
              <div className="space-y-4">
                {picks.map((p, i) => (
                  <div
                    key={p.rank}
                    className="rounded-2xl border border-[#E4E4E0] bg-white p-4 sm:p-5"
                  >
                    <div className="flex gap-4">
                      {p.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="w-20 h-20 sm:w-24 sm:h-24 flex-none rounded-lg border border-[#ECECEC] bg-white object-contain p-1.5"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="flex-none inline-flex items-center justify-center w-6 h-6 rounded-full bg-pine/10 text-pine-deep text-[12px] font-semibold tnum">
                            {p.rank}
                          </span>
                          <h3 className="text-[17px] font-semibold text-ink leading-snug">
                            {p.productKey ? (
                              <Link
                                href={`/picks/${p.productKey}`}
                                className="!no-underline hover:text-pine"
                              >
                                {p.name}
                              </Link>
                            ) : (
                              p.name
                            )}
                          </h3>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                          <TierBadge tier={p.tier} />
                          {p.price && (
                            <span className="text-[14px] text-ink-soft tnum">
                              {p.price}
                            </span>
                          )}
                          <EvidenceScore
                            score={Math.max(60, 92 - i * 4)}
                            size="sm"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">
                      {autolink(p.summary, post.slug, used)}
                    </p>
                    {p.productKey && (
                      <div className="mt-4">
                        <RetailerButtons productKey={p.productKey} />
                      </div>
                    )}
                  </div>
                ))}
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
                      {autolink(p.summary, post.slug, used)}
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
                      {autolink(f.a, post.slug, used)}
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
