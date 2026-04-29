import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Clients() {
  const { t } = useI18n();
  return (
    <Section id="clients">
      <SectionHeader eyebrow={t.clients.eyebrow} title={t.clients.title} subtitle={t.clients.subtitle} />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {t.clients.items.map((c, i) => (
          <article
            key={i}
            className={`bento-card p-7 flex flex-col ${i === 0 ? "lg:col-span-3 lg:row-span-1" : ""}`}
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                {c.name}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {c.location}
              </span>
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-primary">
              {c.role}
            </div>
            <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-foreground/80">
              {c.scope}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wider border border-border rounded-full px-2.5 py-1 text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
