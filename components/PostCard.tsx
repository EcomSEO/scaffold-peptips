import Link from "next/link";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "Guide",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Listicle",
};

/**
 * PostCard
 *
 * Gains the `card-lift` treatment — gentle Y-2px rise + soft coral-tinted
 * shadow — so the card feels like it's lifting toward the reader's finger,
 * not snapping at it.
 */
export function PostCard({ post, variant = "compact" }: { post: Post; variant?: "compact" | "feature" }) {
  const hub = getHub(post.hub);
  if (variant === "feature") {
    return (
      <Link
        href={`/${post.slug}`}
        className="card-lift block p-8 bg-paper/80 border border-pine/10 rounded-sm hover:border-sage-deep/40"
      >
        <span className="caps-label text-sage-deep">
          {hub?.shortName} · {typeLabel[post.postType]}
        </span>
        <h3 className="font-serif text-2xl text-pine mt-2 mb-3 leading-snug">{post.title}</h3>
        <p className="text-charcoal/80 text-[15px] leading-relaxed">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sage-deep text-sm">
          Read the full comparison
          <span aria-hidden>→</span>
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={`/${post.slug}`}
      className="card-lift block p-5 bg-paper/70 border border-pine/10 rounded-sm hover:border-sage-deep/40"
    >
      <span className="caps-label text-sage-deep">
        {hub?.shortName} · {typeLabel[post.postType]}
      </span>
      <h3 className="font-serif text-lg text-pine mt-2 mb-2 leading-snug">{post.title}</h3>
      <p className="text-sm text-charcoal/70 line-clamp-2">{post.description}</p>
      <span className="mt-3 inline-block text-xs text-stone">
        {post.readingTime} min read
      </span>
    </Link>
  );
}
