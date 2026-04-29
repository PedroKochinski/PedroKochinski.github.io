import { useI18n } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t } = useI18n();
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#cases", label: t.nav.work },
    { href: "#process", label: t.nav.process },
    { href: "#packages", label: t.nav.packages },
    { href: "#about", label: t.nav.about },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-glow text-primary-foreground font-mono text-xs font-bold">
            PK
          </span>
          Kochinski
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
