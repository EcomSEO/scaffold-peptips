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

/**
 * ClusterTemplate — pliability-style shell for educational long-form
 * cluster content. Same anatomy as PillarTemplate; FAQ is the body driver.
 */
export function ClusterTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);
  const isoDate = new Date(post.publishedAt).toLocaleDateString("en-CA");

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
        <div className="flex justify-center">
          <span className="tag-pill">
            {hub ? hub.shortName.toUpperCase() : "EXPLAINER"}
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

        <BodyImageSlot aspect="16:10" variant="cream" className="mt-10 !my-0" />

        {post.medicalDisclaimer === "required" && (
          <div className="mt-12">
            <PostReviewStamp reviewedOn={post.updatedAt} />
          </div>
        )}

        <div className="mt-12 prose">
          <p>{post.description}</p>

          {post.faq && post.faq.length > 0 && (
            <section className="not-prose">
              <h2
                className="mt-16 mb-8 font-normal text-ink"
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
                    {i === 1 && (
                      <BodyImageSlot aspect="16:10" variant="sage" />
                    )}
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
