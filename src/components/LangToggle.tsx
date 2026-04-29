import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

export function LangToggle() {
  const { lang, setLang } = useI18n();
  const opts: Lang[] = ["en", "pt"];
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-surface/60 p-0.5 backdrop-blur-sm">
      {opts.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
