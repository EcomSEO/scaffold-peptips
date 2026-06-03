import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AFFILIATES } from "@/lib/affiliate/registry";
import {
  findProductUsage,
  productPageKeys,
  categoryContext,
} from "@/lib/content/products-meta";
import { PageShell } from "@/components/templates/PageShell";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";
import { TierBadge } from "@/components/editorial/TierBadge";
import { EvidenceScore } from "@/components/editorial/EvidenceScore";
import { RetailerButtons } from "@/components/RetailerButtons";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { ProductReviewJsonLd } from "@/components/schema/ProductReviewJsonLd";
import { pageMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return productPageKeys().map((product) => ({ product }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string; locale: Locale }>;
}): Promise<Metadata> {
  const { product } = await params;
  const a = AFFILIATES[product];
  if (!a) return {};
  return pageMetadata({
    title: `${a.name} for GLP-1 users: our take`,
    description: a.blurb,
    path: `/picks/${product}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string; locale: Locale }>;
}) {
  const { product, locale } = await params;
  setRequestLocale(locale);

  const a = AFFILIATES[product];
  if (!a) notFound();

  const usage = findProductUsage(product);
  const primary = usage[0];
  const ctx = categoryContext(a.category);
  const reviewedOn = primary?.post.updatedAt ?? "2026-06-01";

  // Other products from the same guide — internal links between product pages.
  const siblings = (primary?.post.products ?? [])
    .filter((p) => p.productKey && p.productKey !== product)
    .slice(0, 6);

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { label: "Home", href: "/" },
          ...(primary
            ? [{ label: primary.post.title, href: `/${primary.post.slug}` }]
            : []),
          { label: a.name },
        ]}
      />
      <ProductReviewJsonLd
        products={[
          {
            rank: primary?.rank ?? 1,
            name: a.name,
            summary: primary?.summary ?? a.blurb,
            productKey: product,
            image: primary?.image,
          },
        ]}
        reviewedOn={reviewedOn}
      />

      <PageShell>
        {/* Back link to the guide */}
        {primary && (
          <Link
            href={`/${primary.post.slug}`}
            className="caps-meta text-ink-muted hover:text-pine inline-flex items-center gap-1 !no-underline"
          >
            ← {primary.post.title}
          </Link>
        )}

        <div className="mt-4">
          <Eyebrow tone="sage">{ctx.label}</Eyebrow>
        </div>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl text-pine leading-tight">
          {a.name}
        </h1>
        <p className="mt-2 text-ink-muted text-[15px]">
          by {a.brand}
          {primary?.tier ? ` · ${primary.tier}` : ""}
        </p>

        {/* Hero: image + quick facts + primary CTA */}
        <div className="mt-7 flex flex-col sm:flex-row gap-6 rounded-2xl border border-[#E4E4E0] bg-white p-5 sm:p-6">
          {primary?.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={primary.image}
              alt={a.name}
              className="w-full sm:w-44 h-44 flex-none rounded-xl border border-[#ECECEC] bg-white object-contain p-3"
            />
          )}
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {primary && <EvidenceScore score={primary.score} size="lg" />}
              {primary?.price && (
                <span className="text-ink-soft tnum text-[15px]">
                  {primary.price}
                </span>
              )}
              {primary?.tier && <TierBadge tier={primary.tier} />}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {a.blurb}
            </p>
            <div className="mt-auto pt-5">
              <RetailerButtons productKey={product} size="lg" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <AffiliateDisclosure />
        </div>

        {/* What it is */}
        {primary?.summary && (
          <section className="mt-12">
            <Eyebrow tone="pine">What it is</Eyebrow>
            <p className="mt-3 text-[1.0625rem] leading-[1.75] text-charcoal/85 max-w-prose">
              {primary.summary}
            </p>
          </section>
        )}

        {ctx.why && (
          <>
            <DotRule className="my-10" />
            <section>
              <Eyebrow tone="sage">Why it matters on a GLP-1</Eyebrow>
              <p className="mt-3 text-[1.0625rem] leading-[1.75] text-charcoal/85 max-w-prose">
                {ctx.why}
              </p>
            </section>
          </>
        )}

        {ctx.howToUse && (
          <>
            <DotRule className="my-10" />
            <section>
              <Eyebrow tone="pine">How to use it</Eyebrow>
              <p className="mt-3 text-[1.0625rem] leading-[1.75] text-charcoal/85 max-w-prose">
                {ctx.howToUse}
              </p>
            </section>
          </>
        )}

        {/* Where we recommend it */}
        {usage.length > 0 && (
          <>
            <DotRule className="my-10" />
            <section>
              <Eyebrow tone="sage">Where we recommend it</Eyebrow>
              <ul className="mt-4 space-y-3">
                {usage.map((u) => (
                  <li key={u.post.slug} className="text-[15px]">
                    <Link
                      href={`/${u.post.slug}`}
                      className="font-medium text-pine underline decoration-sage-deep/40 underline-offset-2 hover:decoration-coral"
                    >
                      {u.post.title}
                    </Link>
                    <span className="text-ink-muted">
                      {" "}
                      — ranked #{u.rank}
                      {u.tier ? `, ${u.tier.toLowerCase()}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* More picks in this guide — internal links to sibling product pages */}
        {siblings.length > 0 && primary && (
          <>
            <DotRule className="my-10" />
            <section>
              <Eyebrow tone="pine">More {ctx.label.toLowerCase()} picks</Eyebrow>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {siblings.map((s) => (
                  <Link
                    key={s.productKey}
                    href={`/picks/${s.productKey}`}
                    className="group flex items-center gap-3 rounded-xl border border-[#E4E4E0] bg-white p-3 hover:border-pine/40 !no-underline transition-colors"
                  >
                    {s.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        className="w-12 h-12 flex-none rounded-md border border-[#ECECEC] bg-white object-contain p-1"
                      />
                    )}
                    <span className="min-w-0">
                      <span className="block text-[14px] font-medium text-ink group-hover:text-pine leading-snug">
                        {s.name}
                      </span>
                      <span className="block text-[12px] text-ink-muted">
                        #{s.rank} · {s.tier}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href={`/${primary.post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-pine-deep hover:text-pine !no-underline"
              >
                See the full guide
                <span aria-hidden>→</span>
              </Link>
            </section>
          </>
        )}

        {/* Final CTA */}
        <DotRule className="my-10" />
        <section className="rounded-2xl bg-cream/60 border border-pine/15 p-6">
          <h2 className="font-serif text-xl text-ink">
            Where to buy {a.name}
          </h2>
          <p className="mt-1 text-[13px] text-ink-muted">
            Prices change often; tap through for the current cost. We may earn a
            commission, which never changes our picks.
          </p>
          <div className="mt-4">
            <RetailerButtons productKey={product} size="lg" />
          </div>
        </section>

        <p className="mt-8 text-[13px] leading-relaxed text-ink-muted">
          This is general information, not medical advice. Talk to your prescriber
          before adding a supplement, especially if you have kidney disease, heart
          disease, or take prescription medication.
        </p>
      </PageShell>
    </>
  );
}
