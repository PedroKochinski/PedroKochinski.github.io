import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Process() {
  const { t } = useI18n();
  return (
    <Section id="process">
      <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {t.process.steps.map((s) => (
          <div key={s.n} className="bento-card p-6">
            <div className="font-mono text-2xl font-semibold text-gradient">{s.n}</div>
            <h3 className="mt-4 font-display text-base font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
