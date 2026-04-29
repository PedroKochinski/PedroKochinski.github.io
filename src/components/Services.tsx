import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Services() {
  const { t } = useI18n();
  return (
    <Section id="services">
      <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.services.items.map((s, i) => (
          <div key={i} className="bento-card p-8">
            <div className="flex items-start justify-between">
              <h3 className="font-display text-2xl font-semibold tracking-tight">{s.t}</h3>
              <span className="font-mono text-xs text-primary mt-1">0{i + 1}</span>
            </div>
            <p className="mt-3 text-muted-foreground">{s.d}</p>
            <ul className="mt-6 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-primary" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
