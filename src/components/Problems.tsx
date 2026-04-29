import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Problems() {
  const { t } = useI18n();
  return (
    <Section id="problems">
      <SectionHeader eyebrow={t.problems.eyebrow} title={t.problems.title} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {t.problems.items.map((item, i) => (
          <div key={i} className="bento-card p-6 group">
            <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{item.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
