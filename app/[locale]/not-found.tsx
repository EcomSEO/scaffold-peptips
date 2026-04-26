import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { hubs } from "@/lib/content/hubs";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { AnimatedFieldRule } from "@/components/editorial/AnimatedFieldRule";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "We couldn't find that page on Peptips. Here are the five hubs you can start with instead.",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const t = await getTranslations("notFoundExt");
  return (
    <main>
      <section className="border-b border-pine/10">
        <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="breathe-dot inline-block h-2 w-2 rounded-full bg-coral shadow-[0_0_0_4px_rgba(232,146,124,0.16)]"
            />
            <Eyebrow tone="coral">{t("eyebrow")}</Eyebrow>
          </div>
          <h1 className="display-headline text-pine mt-5 text-[2.5rem] sm:text-5xl md:text-[3.6rem] leading-[1.05]">
            {t("h1")}
          </h1>

          <div className="mt-8 space-y-5 text-charcoal/85 text-[17px] leading-[1.75] max-w-[60ch]">
            <p>{t("bodyP1")}</p>
            <p>{t("bodyP2")}</p>
          </div>

          <div className="mt-12">
            <AnimatedFieldRule />
          </div>

          <div className="mt-10">
            <div className="eyebrow text-stone mb-5">{t("startHub")}</div>
            <ul className="divide-y divide-pine/10 border-t border-pine/10">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="group flex items-start gap-5 py-5 hover:bg-cream-deep/40 transition px-2 -mx-2 rounded-sm"
                  >
                    <span className="rank-numeral !text-3xl !text-sage-deep/60 group-hover:!text-sage-deep tnum shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-serif text-xl text-pine leading-snug group-hover:text-sage-deep transition">
                        {hub.name}
                      </h2>
                      <p className="mt-1.5 text-[14.5px] text-charcoal/75 leading-relaxed">
                        {hub.oneLiner}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="text-sage-deep/60 group-hover:text-coral-deep text-lg mt-2 shrink-0"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              {t("backHome")}
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t("tellUs")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
