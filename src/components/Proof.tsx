import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Proof() {
  const { t } = useI18n();
  return (
    <Section id="proof">
      <SectionHeader eyebrow={t.proof.eyebrow} title={t.proof.title} subtitle={t.proof.subtitle} align="center" />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {t.proof.items.map((item, i) => (
          <div key={i} className="bento-card p-8 text-center">
            <div className="font-display text-4xl md:text-5xl font-semibold text-gradient">{item.k}</div>
            <div className="mt-3 text-sm text-muted-foreground leading-snug">{item.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
