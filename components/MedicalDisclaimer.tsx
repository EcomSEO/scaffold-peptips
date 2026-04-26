import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

// Re-export the new editorial PostReviewStamp so existing imports still resolve.
export { PostReviewStamp } from "./editorial/PostReviewStamp";

/**
 * The Header already carries the primary medical-disclaimer strip on every page.
 * This footer variant is a secondary, calmer reminder placed just before <Footer>
 * in app/layout.tsx — cream-deep, not alarmist.
 */
export async function MedicalDisclaimerFooter() {
  const t = await getTranslations("medicalDisclaimer");
  return (
    <div className="bg-cream-deep/70 border-t border-sage-deep/20">
      <div className="mx-auto max-w-6xl px-6 py-4 text-[12.5px] text-pine/90 leading-relaxed">
        <strong className="text-pine">{t("footerStrong")}</strong>{" "}
        {t("footerBody")}{" "}
        <Link href="/medical-disclaimer" className="underline decoration-sage-deep/60 underline-offset-2 hover:decoration-coral">
          {t("fullDisclaimerLink")}
        </Link>
        .
      </div>
    </div>
  );
}
