import { JsonLd } from "./JsonLd";
import { AFFILIATES } from "@/lib/affiliate/registry";

type ReviewedProduct = {
  rank: number;
  name: string;
  summary: string;
  productKey?: string;
  image?: string;
};

/**
 * Product + editorial Review schema for comparison/money pages.
 *
 * The rating is Peptips' OWN editorial assessment (authored by the
 * Organization), mirroring the EvidenceScore shown in the comparison
 * table — NOT a fabricated aggregate of user ratings. We deliberately
 * emit a single `review` (not `aggregateRating`) so the markup honestly
 * reflects "one expert review by us," which is what Google's review-
 * snippet guidelines allow for editorial product reviews.
 *
 * The score formula matches ComparisonTemplate: max(60, 92 - i*4) on a
 * 0-100 scale, normalised to a 0-5 star rating.
 */
export function ProductReviewJsonLd({
  products,
  reviewedOn,
}: {
  products: ReviewedProduct[];
  reviewedOn: string;
}) {
  if (!products || products.length === 0) return null;
  return (
    <>
      {products.map((p, i) => {
        const score = Math.max(60, 92 - i * 4); // 0-100, same as the table
        const ratingValue = Math.round((score / 20) * 10) / 10; // → 0-5, 1dp
        const brand = p.productKey ? AFFILIATES[p.productKey]?.brand : undefined;
        return (
          <JsonLd
            key={p.productKey ?? p.name}
            data={{
              "@context": "https://schema.org",
              "@type": "Product",
              name: p.name,
              description: p.summary,
              ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
              ...(p.image ? { image: p.image } : {}),
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue,
                  bestRating: 5,
                  worstRating: 1,
                },
                author: {
                  "@type": "Organization",
                  name: "Peptips Editorial Team",
                },
                datePublished: reviewedOn,
              },
            }}
          />
        );
      })}
    </>
  );
}
