import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "./Section";

export function Packages() {
  const { t } = useI18n();
  return (
    <Section id="packages">
      <SectionHeader eyebrow={t.packages.eyebrow} title={t.packages.title} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {t.packages.items.map((p, i) => (
          <div
            key={i}
            className={`bento-card p-7 flex flex-col ${
              p.featured ? "ring-1 ring-primary/60 glow-ring" : ""
            }`}
          >
            {p.featured && (
              <span className="self-start mb-4 rounded-full bg-primary/15 text-primary border border-primary/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                Most requested
              </span>
            )}
            <h3 className="font-display text-lg font-semibold leading-snug">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.who}</p>
            <ul className="mt-5 space-y-2 border-t border-border pt-5">
              {p.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
                  <svg
                    className="mt-1 h-3.5 w-3.5 flex-none text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
