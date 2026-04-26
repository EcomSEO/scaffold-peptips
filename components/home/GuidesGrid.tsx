import { Link } from "@/i18n/navigation";

/**
 * GuidesGrid — runrepeat "Buying guides" replica.
 *
 * 8 thumbnail tiles laid out in 2 rows of 4. Each tile is a 4:3 gradient
 * image-slot placeholder above a small caps title and a single caption line.
 *
 * Used on the home page for in-depth guides (pillar / comparison posts).
 */

type Variant = "sage" | "coral" | "pine" | "cream";

const variantBg: Record<Variant, string> = {
  sage: "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
  coral: "linear-gradient(135deg, #F1EADC 0%, #E8927C 70%, #C77560 100%)",
  pine: "linear-gradient(135deg, #7D9175 0%, #3D4A3A 70%, #2E382B 100%)",
  cream: "linear-gradient(135deg, #FAF6F0 0%, #F1EADC 60%, #C5D2BE 100%)",
};

const cycle: Variant[] = ["coral", "sage", "cream", "pine", "sage", "cream", "pine", "coral"];

export type GuideTile = {
  href: string;
  title: string;
  caption: string;
};

export function GuidesGrid({
  heading,
  tiles,
}: {
  heading: string;
  tiles: GuideTile[];
}) {
  return (
    <section className="border-b border-[#D6D6D6]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          className="font-light text-ink mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {tiles.slice(0, 8).map((tile, i) => (
            <Link key={`${tile.href}-${i}`} href={tile.href} className="group block">
              <div
                role="img"
                aria-label=""
                className="aspect-[4/3] w-full border border-[#D6D6D6] group-hover:border-ink transition-colors"
                style={{ backgroundImage: variantBg[cycle[i % cycle.length]] }}
              />
              <h3 className="mt-3 text-ink text-[15px] font-semibold leading-snug group-hover:text-coral-deep transition-colors line-clamp-2">
                {tile.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-ink-soft leading-snug line-clamp-1">
                {tile.caption}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
