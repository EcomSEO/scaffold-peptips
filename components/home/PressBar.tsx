/**
 * PressBar — "AS REFERENCED IN" text-only logo bar.
 *
 * No real press logos until earned. Until then a row of grayscale publication
 * names sits in a thin band so the visual rhythm matches runrepeat without
 * making a claim that we cannot back.
 */

export function PressBar({
  heading,
  outlets,
}: {
  heading: string;
  outlets: string[];
}) {
  return (
    <section className="border-b border-[#D6D6D6]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="flex items-center justify-center mb-6">
          <span className="caps-meta">{heading}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-stone tracking-[0.1em] uppercase text-[12px] font-medium">
          {outlets.map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
