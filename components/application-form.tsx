"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";

type SubmissionState = {
  kind: "idle" | "submitting" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const initialState: SubmissionState = { kind: "idle", message: "", errors: {} };

const copy = {
  en: {
    name: "Your name",
    email: "Email",
    need: "What do you need help with?",
    needOptions: [
      ["fix", "Fix something that isn’t working"],
      ["improve", "Improve something I already have"],
      ["build", "Build something new"],
      ["automate", "Automate part of my business"],
      ["unsure", "I’m not sure yet"],
    ],
    context: "What’s most important right now?",
    contextPlaceholder: "Tell us what you’re trying to accomplish, what’s getting in the way, or what you wish worked better.",
    website: "Website or existing setup",
    optional: "Optional",
    timing: "Timing",
    timingOptions: [
      ["now", "Right now"],
      ["month", "This month"],
      ["quarter", "Next 1–3 months"],
      ["exploring", "Just exploring"],
    ],
    consent: "MACS may use this information to review my request and contact me about next steps.",
    privacy: "Privacy notice",
    submit: "Send it",
    submitting: "Sending…",
    success: "Got it. A real person will read this.",
    book: "Book a conversation",
    required: "This field is required.",
    emailInvalid: "Enter a valid email address.",
    urlInvalid: "Enter a complete website address beginning with http:// or https://.",
    error: "Review the highlighted fields and try again.",
    connection: "We couldn’t send this. Check your connection and try again.",
  },
  "es-MX": {
    name: "Tu nombre",
    email: "Correo",
    need: "¿En qué necesitas ayuda?",
    needOptions: [
      ["fix", "Arreglar algo que no funciona"],
      ["improve", "Mejorar algo que ya tengo"],
      ["build", "Construir algo nuevo"],
      ["automate", "Automatizar parte de mi negocio"],
      ["unsure", "Todavía no estoy seguro"],
    ],
    context: "¿Qué es lo más importante ahora?",
    contextPlaceholder: "Cuéntanos qué quieres lograr, qué se interpone o qué te gustaría que funcionara mejor.",
    website: "Sitio web o sistema actual",
    optional: "Opcional",
    timing: "Cuándo",
    timingOptions: [
      ["now", "Ahora mismo"],
      ["month", "Este mes"],
      ["quarter", "Próximos 1–3 meses"],
      ["exploring", "Solo estoy explorando"],
    ],
    consent: "MACS puede usar esta información para revisar mi solicitud y contactarme sobre los siguientes pasos.",
    privacy: "Aviso de privacidad",
    submit: "Enviar",
    submitting: "Enviando…",
    success: "Listo. Una persona real leerá esto.",
    book: "Reservar una conversación",
    required: "Este campo es obligatorio.",
    emailInvalid: "Ingresa un correo válido.",
    urlInvalid: "Ingresa una dirección completa que empiece con http:// o https://.",
    error: "Revisa los campos marcados e inténtalo de nuevo.",
    connection: "No pudimos enviarlo. Revisa tu conexión e inténtalo de nuevo.",
  },
} as const;

export function ApplicationForm() {
  const startedAt = useRef(0);
  const { locale } = useSitePreferences();
  const c = copy[locale];
  const [submission, setSubmission] = useState<SubmissionState>(initialState);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function validate(formData: FormData) {
    const errors: Record<string, string> = {};
    const value = (name: string) => String(formData.get(name) || "").trim();

    if (value("name").length < 2) errors.name = c.required;
    const email = value("email");
    if (!email) errors.email = c.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = c.emailInvalid;
    if (!value("need")) errors.need = c.required;
    if (value("context").length < 10) errors.context = c.required;
    if (!value("timing")) errors.timing = c.required;

    const website = value("website");
    if (website) {
      try {
        const parsed = new URL(website);
        if (!["http:", "https:"].includes(parsed.protocol)) errors.website = c.urlInvalid;
      } catch {
        errors.website = c.urlInvalid;
      }
    }

    if (formData.get("consent") !== "on") errors.consent = c.required;
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validate(formData);

    if (Object.keys(errors).length) {
      setSubmission({ kind: "error", message: c.error, errors });
      return;
    }

    setSubmission({ kind: "submitting", message: c.submitting, errors: {} });

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      need: formData.get("need"),
      context: formData.get("context"),
      website: formData.get("website"),
      timing: formData.get("timing"),
      consent: formData.get("consent") === "on",
      company: formData.get("company"),
      sourceUrl: window.location.href,
      referrer: document.referrer,
      startedAt: startedAt.current,
    };

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setSubmission({
          kind: "error",
          message: result.errors?.form || c.error,
          errors: result.errors || {},
        });
        return;
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmission({ kind: "success", message: c.success, errors: {} });
    } catch {
      setSubmission({ kind: "error", message: c.connection, errors: {} });
    }
  }

  const error = (name: string) => submission.errors[name];
  const submitting = submission.kind === "submitting";

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <fieldset className="application-form__controls" disabled={submitting}>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="company">Company fax</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">{c.name}</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
            {error("name") ? <span className="field-error">{error("name")}</span> : null}
          </div>

          <div className="form-field">
            <label htmlFor="email">{c.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
            {error("email") ? <span className="field-error">{error("email")}</span> : null}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="need">{c.need}</label>
          <select id="need" name="need" defaultValue="" required>
            <option value="" disabled>—</option>
            {c.needOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          {error("need") ? <span className="field-error">{error("need")}</span> : null}
        </div>

        <div className="form-field">
          <label htmlFor="context">{c.context}</label>
          <textarea id="context" name="context" rows={5} placeholder={c.contextPlaceholder} required />
          {error("context") ? <span className="field-error">{error("context")}</span> : null}
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="website">{c.website} <span className="optional-label">{c.optional}</span></label>
            <input id="website" name="website" type="url" inputMode="url" placeholder="https://" />
            {error("website") ? <span className="field-error">{error("website")}</span> : null}
          </div>

          <div className="form-field">
            <label htmlFor="timing">{c.timing}</label>
            <select id="timing" name="timing" defaultValue="" required>
              <option value="" disabled>—</option>
              {c.timingOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            {error("timing") ? <span className="field-error">{error("timing")}</span> : null}
          </div>
        </div>

        <div className="checkbox-field">
          <label className="checkbox-label" htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" required />
            <span>{c.consent} <Link href="/privacy">{c.privacy}</Link>.</span>
          </label>
          {error("consent") ? <span className="field-error">{error("consent")}</span> : null}
        </div>

        <button className="button button--primary form-submit" type="submit">
          <span>{submitting ? c.submitting : c.submit}</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </button>
      </fieldset>

      {submission.message ? (
        <div className={"form-status form-status--" + submission.kind} role={submission.kind === "error" ? "alert" : "status"}>
          <p>{submission.message}</p>
          {submission.kind === "success" ? <p><Link href="/book">{c.book} ↗</Link></p> : null}
        </div>
      ) : null}
    </form>
  );
}
