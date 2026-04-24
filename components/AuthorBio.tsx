export function AuthorBio() {
  return (
    <section className="mt-14 p-7 border border-pine/12 rounded-sm bg-cream-deep/40">
      <div className="flex items-center gap-3 mb-3">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
        <span className="caps-label text-pine">The byline</span>
      </div>
      <h3 className="font-serif text-xl text-pine mb-2">
        About The Peptips Editorial Team
      </h3>
      <p className="text-charcoal/85 leading-relaxed text-[15px] max-w-[62ch]">
        The Peptips Editorial Team is a small group of researchers dedicated to
        making GLP-1 information clearer, calmer, and more useful. We read the
        trials, the FDA labels, and the published literature, and we translate
        it into posts you can actually use. We do not provide medical advice,
        we do not accept payment from drug manufacturers or telehealth clinics,
        and we cite every claim we make. If you find something on this site
        that&apos;s wrong, we want to know — write to us and we&apos;ll update it.
      </p>
    </section>
  );
}
