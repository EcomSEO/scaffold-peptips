import { Link } from "@/i18n/navigation";

/**
 * CategoryGrid — runrepeat "Reviews" replica.
 *
 * 8 image tiles in a 4×2 grid (2-up on mobile, 4-up on md+). Each tile is a
 * 1:1 gradient image-slot placeholder above a small caps label. Click goes
 * through to the hub (or expanded category) page.
 *
 * Pure placeholder palette cycle — sage / coral / pine / cream — so the grid
 * reads visual without competing with typography.
 */

type Variant = "sage" | "coral" | "pine" | "cream";

const variantBg: Record<Variant, string> = {
  sage: "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
  coral: "linear-gradient(135deg, #F1EADC 0%, #E8927C 70%, #C77560 100%)",
  pine: "linear-gradient(135deg, #7D9175 0%, #3D4A3A 70%, #2E382B 100%)",
  cream: "linear-gradient(135deg, #FAF6F0 0%, #F1EADC 60%, #C5D2BE 100%)",
};

const cycle: Variant[] = ["sage", "coral", "pine", "cream", "coral", "sage", "cream", "pine"];

export type CategoryTile = {
  href: string;
  label: string;
};

export function CategoryGrid({
  heading,
  tiles,
}: {
  heading: string;
  tiles: CategoryTile[];
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {tiles.slice(0, 8).map((tile, i) => (
            <Link
              key={`${tile.href}-${i}`}
              href={tile.href}
              className="group block"
            >
              <div
                role="img"
                aria-label=""
                className="aspect-square w-full border border-[#D6D6D6] group-hover:border-ink transition-colors"
                style={{ backgroundImage: variantBg[cycle[i % cycle.length]] }}
              />
              <div className="mt-3 caps-meta group-hover:text-ink transition-colors">
                {tile.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
