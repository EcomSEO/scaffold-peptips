"use client";

import { Link } from "@/i18n/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { FieldRule } from "@/components/editorial/DotRule";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorExt");
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[peptips] error boundary:", error);
  }, [error]);

  return (
    <main>
      <section className="border-b border-pine/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16 md:pb-20">
          <Eyebrow tone="coral">{t("eyebrow")}</Eyebrow>
          <h1 className="display-headline text-pine mt-5 text-[2.5rem] sm:text-5xl md:text-[3.6rem] leading-[1.05]">
            {t("h1")}
          </h1>

          <div className="mt-8 space-y-5 text-charcoal/85 text-[17px] leading-[1.75] max-w-[60ch]">
            <p>{t("bodyP1")}</p>
            <p>
              {t("bodyP2Before")}{" "}
              <Link
                href="/contact"
                className="text-pine underline decoration-sage decoration-[1.5px] underline-offset-[3px] hover:decoration-coral"
              >
                hello@peptips.com
              </Link>{" "}
              {t("bodyP2After")}
            </p>
          </div>

          <div className="mt-12">
            <FieldRule />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary"
            >
              {t("tryAgain")}
              <span aria-hidden>&rarr;</span>
            </button>
            <Link href="/" className="btn-secondary">
              {t("backHome")}
            </Link>
          </div>

          {error?.digest && (
            <p className="mt-8 text-[12.5px] text-stone italic">
              {t("reference")}{" "}
              <span className="tnum text-stone/90">{error.digest}</span>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
