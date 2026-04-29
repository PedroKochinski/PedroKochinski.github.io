import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display text-base font-semibold">Pedro Kochinski</div>
          <div className="text-xs text-muted-foreground mt-1">{t.footer.tagline}</div>
        </div>
        <div className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} · {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
