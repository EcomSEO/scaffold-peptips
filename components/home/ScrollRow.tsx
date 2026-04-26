import { Link } from "@/i18n/navigation";

/**
 * ScrollRow — runrepeat "Latest reviews" / "Popular guides" replica.
 *
 * Horizontal-scroll row of N cards. Each card = a 4:3 gradient image-slot
 * placeholder above a title + small date line. The row is a CSS grid that
 * flips to overflow-x scroll on narrow viewports so the user can swipe.
 */

type Variant = "sage" | "coral" | "pine" | "cream";

const variantBg: Record<Variant, string> = {
  sage: "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
  coral: "linear-gradient(135deg, #F1EADC 0%, #E8927C 70%, #C77560 100%)",
  pine: "linear-gradient(135deg, #7D9175 0%, #3D4A3A 70%, #2E382B 100%)",
  cream: "linear-gradient(135deg, #FAF6F0 0%, #F1EADC 60%, #C5D2BE 100%)",
};

const cycle: Variant[] = ["sage", "coral", "pine", "cream", "coral", "sage", "cream"];

export type ScrollRowCard = {
  href: string;
  title: string;
  meta: string;
};

export function ScrollRow({
  heading,
  cards,
}: {
  heading: string;
  cards: ScrollRowCard[];
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
        <div
          className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[40%] md:auto-cols-[calc((100%-1.5rem*6)/7)] gap-4 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.slice(0, 7).map((card, i) => (
            <Link
              key={`${card.href}-${i}`}
              href={card.href}
              className="group block"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                role="img"
                aria-label=""
                className="aspect-[4/3] w-full border border-[#D6D6D6] group-hover:border-ink transition-colors"
                style={{ backgroundImage: variantBg[cycle[i % cycle.length]] }}
              />
              <h3 className="mt-3 text-ink text-[14px] font-semibold leading-snug group-hover:text-coral-deep transition-colors line-clamp-2">
                {card.title}
              </h3>
              <div className="mt-1.5 caps-meta">{card.meta}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
