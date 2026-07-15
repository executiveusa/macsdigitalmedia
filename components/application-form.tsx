"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

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

export function ApplicationForm() {
  const startedAt = useRef(Date.now());
  const [submission, setSubmission] = useState<SubmissionState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmission({ kind: "submitting", message: "Submitting your application…", errors: {} });

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
        setSubmission({
          kind: "error",
          message: result.errors?.form || "Review the highlighted information and submit again.",
          errors: result.errors || {},
        });
        return;
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmission({
        kind: "success",
        message:
          "Your application was received. MACS will review it before requesting a discovery call or additional information.",
        errors: {},
      });
    } catch {
      setSubmission({
        kind: "error",
        message: "The application could not be submitted. Check your connection and try again.",
        errors: {},
      });
    }
  }

  const fieldError = (name: string) => submission.errors[name];

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Company fax
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-grid">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} />
          {fieldError("name") ? <span className="field-error">{fieldError("name")}</span> : null}
        </label>

        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required maxLength={254} />
          {fieldError("email") ? <span className="field-error">{fieldError("email")}</span> : null}
        </label>

        <label>
          Phone number <span className="optional-label">Optional</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>

        <label>
          Organization name
          <input name="organization" type="text" autoComplete="organization" required minLength={2} maxLength={180} />
          {fieldError("organization") ? <span className="field-error">{fieldError("organization")}</span> : null}
        </label>

        <label>
          Organization website <span className="optional-label">Optional</span>
          <input name="website" type="url" inputMode="url" placeholder="https://" maxLength={500} />
          {fieldError("website") ? <span className="field-error">{fieldError("website")}</span> : null}
        </label>

        <label>
          Washington city or service area
          <input name="location" type="text" autoComplete="address-level2" required minLength={2} maxLength={160} />
          {fieldError("location") ? <span className="field-error">{fieldError("location")}</span> : null}
        </label>

        <label>
          Organization type
          <select name="organizationType" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option value="nonprofit">Nonprofit</option>
            <option value="social-purpose">Social-purpose company</option>
            <option value="small-business">Small business</option>
          </select>
          {fieldError("organizationType") ? (
            <span className="field-error">{fieldError("organizationType")}</span>
          ) : null}
        </label>

        <label>
          Approximate staff size
          <select name="staffSize" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option value="1-2">1–2</option>
            <option value="3-10">3–10</option>
            <option value="11-25">11–25</option>
            <option value="26-50">26–50</option>
            <option value="51+">51+</option>
          </select>
          {fieldError("staffSize") ? <span className="field-error">{fieldError("staffSize")}</span> : null}
        </label>
      </div>

      <label>
        What work is currently falling through the cracks?
        <textarea name="problem" rows={6} required minLength={30} maxLength={3000} />
        <span className="field-help">Examples include missed inquiries, meeting follow-up, scattered knowledge, or website friction.</span>
        {fieldError("problem") ? <span className="field-error">{fieldError("problem")}</span> : null}
      </label>

      <label>
        What result would matter most in the next 90 days?
        <textarea name="result" rows={6} required minLength={30} maxLength={3000} />
        {fieldError("result") ? <span className="field-error">{fieldError("result")}</span> : null}
      </label>

      <label className="checkbox-label">
        <input name="decisionMaker" type="checkbox" required />
        <span>A decision-maker can participate in discovery, workflow approval, and launch acceptance.</span>
      </label>
      {fieldError("decisionMaker") ? <span className="field-error field-error--standalone">{fieldError("decisionMaker")}</span> : null}

      <label className="checkbox-label">
        <input name="consent" type="checkbox" required />
        <span>
          MACS may use this information to review the application and contact me about the Washington Founding Launch. See the{" "}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>
      {fieldError("consent") ? <span className="field-error field-error--standalone">{fieldError("consent")}</span> : null}

      <button className="button button--primary" type="submit" disabled={submission.kind === "submitting"}>
        {submission.kind === "submitting" ? "Submitting application…" : "Submit founding application"}
      </button>

      <p
        className={`form-status${submission.kind !== "idle" ? ` form-status--${submission.kind}` : ""}`}
        role={submission.kind === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {submission.message}
      </p>
    </form>
  );
}
