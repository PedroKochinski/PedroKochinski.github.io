import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Tech() {
  const { t } = useI18n();
  return (
    <Section id="tech">
      <SectionHeader eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {t.tech.groups.map((g) => (
          <div key={g.t} className="bento-card p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-primary">{g.t}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-foreground/90">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
