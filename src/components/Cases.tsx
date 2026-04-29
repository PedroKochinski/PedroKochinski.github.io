import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Cases() {
  const { t } = useI18n();
  return (
    <Section id="cases">
      <SectionHeader eyebrow={t.cases.eyebrow} title={t.cases.title} />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {t.cases.items.map((c, i) => (
          <article key={i} className="bento-card p-7 flex flex-col">
            <span className="self-start font-mono text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full px-2.5 py-1">
              {c.tag}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold leading-snug">{c.t}</h3>
            <div className="mt-6 space-y-4 text-sm">
              <Block label="Problem" text={c.problem} />
              <Block label="Solution" text={c.solution} />
              <Block label="Result" text={c.result} accent />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Block({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <p className={`mt-1 leading-relaxed ${accent ? "text-foreground" : "text-foreground/80"}`}>{text}</p>
    </div>
  );
}
