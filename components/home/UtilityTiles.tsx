import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

/**
 * 4-up utility tile row, drugs.com pattern, peptips palette.
 * White cards on a thin gray-line bordered band.
 */

type Tile = {
  href: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
};

export async function UtilityTiles() {
  const t = await getTranslations("utilityTiles");

  const TILES: Tile[] = [
    {
      href: "/methodology/v1-2",
      label: t("evidenceScore.label"),
      sub: t("evidenceScore.description"),
      icon: <GaugeIcon />,
    },
    {
      href: "/pipeline",
      label: t("researching.label"),
      sub: t("researching.description"),
      icon: <FlaskIcon />,
    },
    {
      href: "/methodology",
      label: t("methodology.label"),
      sub: t("methodology.description"),
      icon: <BookIcon />,
    },
    {
      href: "/newsletter",
      label: t("audit.label"),
      sub: t("audit.description"),
      icon: <ClipboardIcon />,
    },
  ];

  return (
    <section className="bg-body-bg border-y border-[#D6D6D6]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {TILES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex flex-col gap-3 bg-white border border-[#D6D6D6] rounded-sm p-5 hover:border-ink transition-colors"
            >
              <div className="text-ink-soft group-hover:text-coral-deep transition-colors">
                {t.icon}
              </div>
              <div>
                <div className="text-ink text-[17px] font-semibold leading-snug">
                  {t.label}
                </div>
                <div className="mt-1.5 text-[13.5px] text-stone leading-snug">
                  {t.sub}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function GaugeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 22a11 11 0 0 1 22 0" />
      <line x1="16" y1="22" x2="22" y2="12" />
      <circle cx="16" cy="22" r="1.4" fill="currentColor" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 4h8" />
      <path d="M13 4v8L7 24a2 2 0 0 0 1.7 3h14.6A2 2 0 0 0 25 24l-6-12V4" />
      <line x1="9" y1="20" x2="23" y2="20" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 6a2 2 0 0 1 2-2h7v22H7a2 2 0 0 1-2-2V6Z" />
      <path d="M27 6a2 2 0 0 0-2-2h-7v22h7a2 2 0 0 0 2-2V6Z" />
      <line x1="14" y1="4" x2="14" y2="26" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="8" y="6" width="16" height="22" rx="2" />
      <rect x="12" y="3" width="8" height="5" rx="1" />
      <line x1="12" y1="14" x2="20" y2="14" />
      <line x1="12" y1="19" x2="20" y2="19" />
      <line x1="12" y1="24" x2="17" y2="24" />
    </svg>
  );
}
