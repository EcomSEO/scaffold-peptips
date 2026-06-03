import type { Locale } from "@/i18n/routing";

/**
 * Site-level constants for peptips.com. The `launched` flag drives the
 * pre-launch noindex defaults in `lib/seo.ts` and `app/robots.ts`.
 *
 * `i18n` carries native-register copy for the masthead tagline and the
 * meta description in every supported locale. Voice target stays the
 * same across languages, warm nurse-friend, calm, cited, never selling
 * anything, but each translation reads as if a native medical journalist
 * at a respected publication wrote it (Stiftung Warentest Gesundheit for
 * German, Que Choisir Santé for French, and so on).
 */
export const SITE = {
  name: "Peptips",
  url: "https://peptips.com",
  tagline:
    "Real answers about life on a GLP-1, without the hype or the lectures.",
  description:
    "Calm, cited GLP-1 information. Side effects, food and muscle, dosing, and the questions your doctor did not have time to answer.",
  author: "The Peptips Editorial Team",
  email: "hello@peptips.com",
  launched: true,
  requiresMedicalDisclaimer: true,
  // Editorial masthead, a journal framing (Field Notes format)
  volume: "Volume I",
  issue: "Issue 01",
  issueName: "Field Notes",
  issueTagline: "Answers your doctor didn't have time for.",
  i18n: {
    en: {
      tagline:
        "Real answers about life on a GLP-1, without the hype or the lectures.",
      description:
        "Calm, cited GLP-1 information. Side effects, food and muscle, dosing, and the questions your doctor did not have time to answer.",
    },
    de: {
      tagline:
        "Echte Antworten zum Alltag mit GLP-1, ohne Hype und ohne erhobenen Zeigefinger.",
      description:
        "Ruhige, belegte Informationen zu GLP-1. Nebenwirkungen, Ernährung und Muskelerhalt, Dosierung und die Fragen, für die in der Sprechstunde keine Zeit blieb.",
    },
    fr: {
      tagline:
        "Des réponses concrètes pour vivre avec un GLP-1, sans excès ni leçons de morale.",
      description:
        "Une information posée et sourcée sur les GLP-1. Effets secondaires, alimentation et masse musculaire, posologie, et les questions auxquelles votre médecin n'a pas eu le temps de répondre.",
    },
    it: {
      tagline:
        "Risposte concrete sulla vita con i GLP-1, senza enfasi e senza lezioni.",
      description:
        "Informazione sobria e documentata sui GLP-1. Effetti collaterali, alimentazione e massa muscolare, dosaggio, e le domande a cui il medico non ha avuto il tempo di rispondere.",
    },
    es: {
      tagline:
        "Respuestas reales sobre la vida con un GLP-1, sin sensacionalismo ni sermones.",
      description:
        "Información serena y documentada sobre los GLP-1. Efectos secundarios, alimentación y masa muscular, dosificación y las preguntas para las que su médico no tuvo tiempo.",
    },
    nl: {
      tagline:
        "Eerlijke antwoorden over het leven met een GLP-1, zonder hype en zonder belerende toon.",
      description:
        "Rustige, onderbouwde informatie over GLP-1. Bijwerkingen, voeding en spierbehoud, dosering, en de vragen waar uw arts geen tijd voor had.",
    },
    pl: {
      tagline:
        "Rzeczowe odpowiedzi na pytania o życie z GLP-1, bez sensacji i pouczania.",
      description:
        "Spokojne, udokumentowane informacje o GLP-1. Działania niepożądane, odżywianie i ochrona mięśni, dawkowanie oraz pytania, na które lekarz nie miał czasu odpowiedzieć.",
    },
    sv: {
      tagline:
        "Riktiga svar om livet med en GLP-1, utan hype och utan pekpinnar.",
      description:
        "Lugn, källbelagd information om GLP-1. Biverkningar, mat och muskelbevarande, dosering, och frågorna din läkare inte hann besvara.",
    },
  } satisfies Record<Locale, { tagline: string; description: string }>,
} as const;

export function siteTagline(locale: Locale): string {
  return SITE.i18n[locale]?.tagline ?? SITE.tagline;
}

export function siteDescription(locale: Locale): string {
  return SITE.i18n[locale]?.description ?? SITE.description;
}
