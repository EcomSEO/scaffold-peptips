import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "The Guide",
  comparison: "The Comparison",
  cluster: "The Explainer",
  listicle: "The Checklist",
};

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <div className="flex items-center gap-3 mb-6">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
        <span className="caps-label text-pine">Keep reading</span>
      </div>
      <div className="grid md:grid-cols-3 gap-0 border-t border-pine/10">
        {posts.map((p) => {
          const hub = getHub(p.hub);
          return (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group p-5 border-b md:border-b-0 md:border-r border-pine/10 last:border-r-0 hover:bg-cream-deep/50 transition"
            >
              <div className="caps-label text-stone">
                {typeLabel[p.postType]} · {hub?.shortName}
              </div>
              <h3 className="font-serif text-lg text-pine mt-2 leading-snug group-hover:text-sage-deep transition">
                {p.title}
              </h3>
              <p className="text-[13.5px] text-charcoal/70 mt-2 leading-snug line-clamp-2">
                {p.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
