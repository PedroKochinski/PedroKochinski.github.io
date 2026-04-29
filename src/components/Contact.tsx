import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

const EMAIL = "pedrokochinski@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
const CAL = "https://cal.com/pedrokochinski";
type SubmitStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") || "Not provided"),
      email: String(fd.get("email") ?? ""),
      project_type: String(fd.get("type") ?? ""),
      deadline: String(fd.get("deadline") || "Not provided"),
      message: String(fd.get("desc") ?? ""),
      _honey: String(fd.get("_honey") ?? ""),
      _subject: "New project brief from pedrokochinski.github.io",
      _template: "table",
      _captcha: "false",
    };

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bento-card p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
              {t.contact.title}
            </h2>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={CAL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
            >
              {t.contact.ctaCall}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface/40 px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              {t.contact.ctaEmail}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bento-card p-8 md:p-10 space-y-4">
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t.contact.form.name} name="name" required />
            <Field label={t.contact.form.company} name="company" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t.contact.form.email} name="email" type="email" required />
            <SelectField
              label={t.contact.form.type}
              name="type"
              options={t.contact.form.typeOptions}
            />
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
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90"
          >
            {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
          </button>
          {status === "sent" && (
            <p className="text-xs text-muted-foreground text-center">{t.contact.form.sent}</p>
          )}
          {status === "error" && (
            <p className="text-xs text-destructive text-center">{t.contact.form.error}</p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
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
      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-lg border border-border bg-background/40 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
