import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about">
      <div className="bento-card p-8 md:p-14 grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.about.eyebrow}
          </span>
          <div className="mt-6 grid h-32 w-32 place-items-center rounded-2xl bg-gradient-to-br from-primary to-glow font-display text-5xl font-semibold text-primary-foreground shadow-glow">
            PK
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {t.about.title}
          </h2>
          <div className="mt-2 font-mono text-sm text-primary">{t.about.role}</div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            {t.about.body}
          </p>
          <div className="mt-6 font-mono text-xs text-muted-foreground">{t.about.langs}</div>
        </div>
      </div>
    </Section>
  );
}
