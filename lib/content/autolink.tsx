import { Link } from "@/i18n/navigation";
import { Fragment, type ReactNode } from "react";

/**
 * Contextual internal links woven into article body text.
 *
 * Each rule links the FIRST mention of a phrase to the relevant guide.
 * Rules fire once per page (shared `used` set) and never self-link (skip
 * when the target is the current page), so the body gets a few high-value
 * cross-links without turning into a sea of blue. Highest-value phrases
 * are ordered first.
 */
const RULES: { re: RegExp; href: string }[] = [
  { re: /\bprotein powders?\b/i, href: "/best-protein-powders-for-glp1" },
  { re: /\belectrolytes?\b/i, href: "/best-electrolytes-for-glp1" },
  { re: /\bconstipation\b/i, href: "/best-fiber-supplements-for-glp1" },
  { re: /\bfiber\b/i, href: "/best-fiber-supplements-for-glp1" },
  { re: /\bnause(?:a|ous|ated)\b/i, href: "/why-does-ozempic-make-you-nauseous" },
  { re: /\bweek[- ]by[- ]week\b/i, href: "/ozempic-week-by-week" },
  { re: /\b(?:dosing schedule|titration schedule|titration)\b/i, href: "/glp1-dosing-schedule" },
  { re: /\bozempic face\b/i, href: "/ozempic-face" },
  { re: /\bhair (?:loss|shedding|thinning)\b/i, href: "/ozempic-hair-loss" },
  { re: /\balcohol\b/i, href: "/ozempic-and-alcohol" },
  { re: /\bdiarrh(?:ea|oea)\b/i, href: "/ozempic-diarrhea" },
  { re: /\borforglipron\b/i, href: "/orforglipron" },
  { re: /\bretatrutide (?:dosing|dose|titration)\b/i, href: "/retatrutide-dosing" },
  { re: /\bretatrutide\b/i, href: "/retatrutide" },
  { re: /\bmounjaro vs\.? zepbound\b/i, href: "/mounjaro-vs-zepbound" },
  { re: /\bmounjaro\b/i, href: "/mounjaro-vs-zepbound" },
  { re: /\bzepbound\b/i, href: "/wegovy-vs-zepbound" },
  { re: /\btirzepatide\b/i, href: "/semaglutide-vs-tirzepatide" },
  { re: /\bfatigue\b/i, href: "/ozempic-fatigue" },
  { re: /\bsupplements?\b/i, href: "/best-supplements-for-glp1" },
  { re: /\bburp(?:s|ing)?\b/i, href: "/ozempic-burps" },
  { re: /\bheadaches?\b/i, href: "/ozempic-headache" },
  { re: /\bcosts?\b/i, href: "/ozempic-cost" },
];

const LINK_CLASS =
  "text-pine underline decoration-pine/30 underline-offset-2 hover:decoration-pine";

export function autolink(
  text: string,
  currentSlug: string,
  used: Set<string>,
): ReactNode {
  const parts: ReactNode[] = [text];
  let linked = false;

  for (const rule of RULES) {
    if (used.has(rule.href)) continue;
    if (rule.href === `/${currentSlug}`) continue; // never self-link

    for (let i = 0; i < parts.length; i++) {
      const seg = parts[i];
      if (typeof seg !== "string") continue;
      const m = rule.re.exec(seg);
      if (!m || m.index == null) continue;

      const before = seg.slice(0, m.index);
      const word = seg.slice(m.index, m.index + m[0].length);
      const after = seg.slice(m.index + m[0].length);
      parts.splice(
        i,
        1,
        before,
        <Link key={rule.href} href={rule.href} className={LINK_CLASS}>
          {word}
        </Link>,
        after,
      );
      used.add(rule.href);
      linked = true;
      break;
    }
  }

  if (!linked) return text;
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
