/**
 * TestingProcess — runrepeat "Testing process" 3-photo strip replica.
 *
 * Three image-slot squares with simple numbered captions: "1. We read every
 * cited trial." / "2. A medical reviewer signs off." / "3. We update
 * quarterly when new data lands."
 *
 * Pure visual — no buttons, no lede paragraphs. The captions ARE the copy.
 */

const slotBg: string[] = [
  "linear-gradient(135deg, #C5D2BE 0%, #9CAF94 60%, #7D9175 100%)",
  "linear-gradient(135deg, #F1EADC 0%, #E8927C 70%, #C77560 100%)",
  "linear-gradient(135deg, #7D9175 0%, #3D4A3A 70%, #2E382B 100%)",
];

export function TestingProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: [string, string, string];
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i}>
              <div
                role="img"
                aria-label=""
                className="aspect-square w-full border border-[#D6D6D6]"
                style={{ backgroundImage: slotBg[i] }}
              />
              <p className="mt-4 text-ink text-[14px] leading-relaxed">
                <span className="text-stone tnum mr-2">{i + 1}.</span>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
