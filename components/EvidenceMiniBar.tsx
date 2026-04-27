/**
 * 5-dot Evidence mini bar.
 * Filled dots = tier strength, 1 (preliminary) → 5 (high confidence).
 * Pine→sage gradient on filled, pine-100 on unfilled. Compact card use.
 */
export function EvidenceMiniBar({
  tier = 3,
  className = "",
}: {
  tier?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const dots = [1, 2, 3, 4, 5];
  return (
    <span
      className={`inline-flex items-center gap-[3px] ${className}`}
      aria-label={`Evidence tier ${tier} of 5`}
      role="img"
    >
      {dots.map((d) => {
        const filled = d <= tier;
        return (
          <span
            key={d}
            className="block w-[5px] h-[5px] rounded-full"
            style={{
              background: filled
                ? `linear-gradient(135deg, #3D4A3A 0%, #7D9175 ${100 - d * 10}%)`
                : "#DCE6D6",
            }}
          />
        );
      })}
    </span>
  );
}
