"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";

type SubmissionState = {
  kind: "idle" | "submitting" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const initialState: SubmissionState = {
  kind: "idle",
  message: "",
  errors: {},
};

function FieldError({ id, message }: { id: string; message?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {message ? (
        <m.span
          id={id}
          className="field-error"
          initial={reduceMotion ? false : { opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
        >
          {message}
        </m.span>
      ) : null}
    </AnimatePresence>
  );
}

export function ApplicationForm() {
  const startedAt = useRef(0);
  const { copy, locale } = useSitePreferences();
  const c = copy.form;
  const reduceMotion = useReducedMotion();
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

    if (value("organization").length < 2) errors.organization = c.required;
    if (value("location").length < 2) errors.location = c.required;
    if (!value("organizationType")) errors.organizationType = c.selectRequired;
    if (!value("staffSize")) errors.staffSize = c.selectRequired;

    const website = value("website");
    if (website) {
      try {
        const parsed = new URL(website);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") errors.website = c.urlInvalid;
      } catch {
        errors.website = c.urlInvalid;
      }
    }

    if (value("problem").length < 30) errors.problem = c.tooShort;
    if (value("result").length < 30) errors.result = c.tooShort;
    if (formData.get("decisionMaker") !== "on") errors.decisionMaker = c.checkboxRequired;
    if (formData.get("consent") !== "on") errors.consent = c.checkboxRequired;

    return errors;
  }

  function focusFirstError(form: HTMLFormElement, errors: Record<string, string>) {
    const control = Array.from(form.elements).find((element) => {
      const name = element.getAttribute("name");
      return Boolean(name && Object.prototype.hasOwnProperty.call(errors, name));
    });

    if (control instanceof HTMLElement) {
      requestAnimationFrame(() => control.focus());
    }
  }

  function localizeServerFieldError(field: string, englishMessage: string) {
    if (locale === "en") return englishMessage;

    const messages: Record<string, string> = {
      name: c.required,
      email: c.emailInvalid,
      organization: c.required,
      website: c.urlInvalid,
      location: c.required,
      organizationType: c.selectRequired,
      staffSize: c.selectRequired,
      problem: c.tooShort,
      result: c.tooShort,
      decisionMaker: c.checkboxRequired,
      consent: c.checkboxRequired,
    };

    return messages[field] || c.review;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const clientErrors = validate(formData);

    if (Object.keys(clientErrors).length > 0) {
      setSubmission({ kind: "error", message: c.errorSummary, errors: clientErrors });
      focusFirstError(form, clientErrors);
      return;
    }

    setSubmission({ kind: "submitting", message: c.submittingMessage, errors: {} });

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      website: formData.get("website"),
      location: formData.get("location"),
      organizationType: formData.get("organizationType"),
      staffSize: formData.get("staffSize"),
      problem: formData.get("problem"),
      result: formData.get("result"),
      decisionMaker: formData.get("decisionMaker") === "on",
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

      const result = (await response.json()) as {
        ok?: boolean;
        applicationId?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        const serverErrors = result.errors || {};
        const localizedErrors = Object.fromEntries(
          Object.entries(serverErrors)
            .filter(([key]) => key !== "form")
            .map(([key, message]) => [key, localizeServerFieldError(key, message)]),
        );

        setSubmission({
          kind: "error",
          message: locale === "en" ? serverErrors.form || c.review : c.review,
          errors: localizedErrors,
        });
        focusFirstError(form, localizedErrors);
        return;
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmission({ kind: "success", message: c.success, errors: {} });
    } catch {
      setSubmission({ kind: "error", message: c.connection, errors: {} });
    }
  }

  const fieldError = (name: string) => submission.errors[name];
  const describedBy = (name: string, helpId?: string) =>
    [helpId, fieldError(name) ? `${name}-error` : undefined].filter(Boolean).join(" ") || undefined;
  const submitting = submission.kind === "submitting";

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <fieldset className="application-form__controls" disabled={submitting}>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="company">{c.companyFax}</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">{c.name}</label>
            <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} aria-invalid={Boolean(fieldError("name"))} aria-describedby={describedBy("name")} />
            <FieldError id="name-error" message={fieldError("name")} />
          </div>

          <div className="form-field">
            <label htmlFor="email">{c.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(fieldError("email"))} aria-describedby={describedBy("email")} />
            <FieldError id="email-error" message={fieldError("email")} />
          </div>

          <div className="form-field">
            <label htmlFor="phone">{c.phone} <span className="optional-label">{c.optional}</span></label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>

          <div className="form-field">
            <label htmlFor="organization">{c.organization}</label>
            <input id="organization" name="organization" type="text" autoComplete="organization" required minLength={2} maxLength={180} aria-invalid={Boolean(fieldError("organization"))} aria-describedby={describedBy("organization")} />
            <FieldError id="organization-error" message={fieldError("organization")} />
          </div>

          <div className="form-field">
            <label htmlFor="website">{c.website} <span className="optional-label">{c.optional}</span></label>
            <input id="website" name="website" type="url" inputMode="url" placeholder="https://" maxLength={500} aria-invalid={Boolean(fieldError("website"))} aria-describedby={describedBy("website")} />
            <FieldError id="website-error" message={fieldError("website")} />
          </div>

          <div className="form-field">
            <label htmlFor="location">{c.location}</label>
            <input id="location" name="location" type="text" autoComplete="address-level2" required minLength={2} maxLength={160} aria-invalid={Boolean(fieldError("location"))} aria-describedby={describedBy("location")} />
            <FieldError id="location-error" message={fieldError("location")} />
          </div>

          <div className="form-field">
            <label htmlFor="organizationType">{c.organizationType}</label>
            <select id="organizationType" name="organizationType" defaultValue="" required aria-invalid={Boolean(fieldError("organizationType"))} aria-describedby={describedBy("organizationType")}>
              <option value="" disabled>{c.selectOne}</option>
              <option value="nonprofit">{c.nonprofit}</option>
              <option value="social-purpose">{c.socialPurpose}</option>
              <option value="small-business">{c.smallBusiness}</option>
            </select>
            <FieldError id="organizationType-error" message={fieldError("organizationType")} />
          </div>

          <div className="form-field">
            <label htmlFor="staffSize">{c.staffSize}</label>
            <select id="staffSize" name="staffSize" defaultValue="" required aria-invalid={Boolean(fieldError("staffSize"))} aria-describedby={describedBy("staffSize")}>
              <option value="" disabled>{c.selectOne}</option>
              <option value="1-2">1–2</option>
              <option value="3-10">3–10</option>
              <option value="11-25">11–25</option>
              <option value="26-50">26–50</option>
              <option value="51+">51+</option>
            </select>
            <FieldError id="staffSize-error" message={fieldError("staffSize")} />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="problem">{c.problem}</label>
          <textarea id="problem" name="problem" rows={6} required minLength={30} maxLength={3000} aria-invalid={Boolean(fieldError("problem"))} aria-describedby={describedBy("problem", "problem-help")} />
          <span id="problem-help" className="field-help">{c.problemHelp}</span>
          <FieldError id="problem-error" message={fieldError("problem")} />
        </div>

        <div className="form-field">
          <label htmlFor="result">{c.result}</label>
          <textarea id="result" name="result" rows={6} required minLength={30} maxLength={3000} aria-invalid={Boolean(fieldError("result"))} aria-describedby={describedBy("result")} />
          <FieldError id="result-error" message={fieldError("result")} />
        </div>

        <div className="checkbox-field">
          <label className="checkbox-label" htmlFor="decisionMaker">
            <input id="decisionMaker" name="decisionMaker" type="checkbox" required aria-invalid={Boolean(fieldError("decisionMaker"))} aria-describedby={describedBy("decisionMaker")} />
            <span>{c.decisionMaker}</span>
          </label>
          <FieldError id="decisionMaker-error" message={fieldError("decisionMaker")} />
        </div>

        <div className="checkbox-field">
          <label className="checkbox-label" htmlFor="consent">
            <input id="consent" name="consent" type="checkbox" required aria-invalid={Boolean(fieldError("consent"))} aria-describedby={describedBy("consent")} />
            <span>
              {c.consentStart} <Link href="/privacy">{c.privacyNotice}</Link>.
            </span>
          </label>
          <FieldError id="consent-error" message={fieldError("consent")} />
        </div>

        <button className="button button--primary form-submit" type="submit">
          <span>{submitting ? c.submitting : c.submit}</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </button>
      </fieldset>

      <AnimatePresence mode="wait" initial={false}>
        {submission.message ? (
          <m.p
            key={`${submission.kind}:${submission.message}`}
            className={`form-status form-status--${submission.kind}`}
            role={submission.kind === "error" ? "alert" : "status"}
            aria-live="polite"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            {submission.message}
          </m.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
