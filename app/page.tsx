import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts } from "@/lib/content/posts";
import { HubCard } from "@/components/HubCard";
import { PostCard } from "@/components/PostCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] text-pine">
            Real answers about life on a GLP-1.
          </h1>
          <p className="mt-6 text-xl text-charcoal/80 max-w-2xl leading-relaxed">
            Calm, cited, specific guidance for everything your doctor didn&apos;t have
            time to answer — side effects, food, muscle, dosing, and the
            questions that feel too embarrassing to ask.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/guides/side-effects-and-management"
              className="inline-flex items-center rounded-md bg-pine px-6 py-3 text-cream hover:bg-sage transition"
            >
              Start with side effects →
            </Link>
            <Link
              href="#email-capture"
              className="inline-flex items-center rounded-md border border-pine/30 px-6 py-3 text-pine hover:border-pine transition"
            >
              Get the First 30 Days guide
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-6 py-14 border-t border-pine/10">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
            <span className="text-xs uppercase tracking-wide text-coral">
              The post most readers find us through
            </span>
          </div>
          <PostCard post={featured} variant="feature" />
        </section>
      )}

      <section id="hubs" className="mx-auto max-w-6xl px-6 py-16 border-t border-pine/10">
        <h2 className="font-serif text-3xl text-pine mb-8">The guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub) => (
            <HubCard key={hub.slug} hub={hub} />
          ))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 border-t border-pine/10">
          <h2 className="font-serif text-3xl text-pine mb-8">Latest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recent.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-pine/10">
        <EmailCapture />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-pine/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg text-pine mb-2">Cited, not clinical.</h3>
            <p className="text-sm text-charcoal/70">
              Every claim links to an FDA label, a peer-reviewed trial, or a
              manufacturer disclosure.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-pine mb-2">No miracle language.</h3>
            <p className="text-sm text-charcoal/70">
              We don&apos;t hype. We don&apos;t lecture. We don&apos;t sell you a coaching
              program.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-pine mb-2">No clinic affiliation.</h3>
            <p className="text-sm text-charcoal/70">
              We don&apos;t take money from drug makers or telehealth providers. Ever.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
