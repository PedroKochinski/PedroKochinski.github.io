import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {t.hero.tag}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            {t.hero.title} <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
            >
              {t.hero.ctaPrimary} →
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.hero.stats.map((s) => (
            <div key={s.v} className="bento-card p-5">
              <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-snug">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
