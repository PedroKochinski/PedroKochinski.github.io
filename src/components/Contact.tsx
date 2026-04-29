import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

const EMAIL = "contato@kochinski.dev";
const CAL = "https://cal.com/pedrokochinski";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body =
      `Name: ${fd.get("name")}\n` +
      `Company: ${fd.get("company")}\n` +
      `Email: ${fd.get("email")}\n` +
      `Project type: ${fd.get("type")}\n` +
      `Deadline: ${fd.get("deadline")}\n\n` +
      `${fd.get("desc")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("New project brief")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bento-card p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.contact.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              {t.contact.title}
            </h2>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={CAL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
              {t.contact.ctaCall} →
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-medium hover:bg-surface">
              {t.contact.ctaEmail}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bento-card p-8 md:p-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t.contact.form.name} name="name" required />
            <Field label={t.contact.form.company} name="company" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t.contact.form.email} name="email" type="email" required />
            <SelectField label={t.contact.form.type} name="type" options={t.contact.form.typeOptions} />
          </div>
          <Field label={t.contact.form.deadline} name="deadline" placeholder="e.g. 4 weeks" />
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
              {t.contact.form.desc}
            </label>
            <textarea
              name="desc"
              rows={5}
              required
              className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
          >
            {t.contact.form.submit} →
          </button>
          {sent && <p className="text-xs text-muted-foreground text-center">{t.contact.form.sent}</p>}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <select
        name={name}
        className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}
