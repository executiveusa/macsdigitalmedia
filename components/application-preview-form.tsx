"use client";

import { FormEvent, useState } from "react";

export function ApplicationPreviewForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Preview complete. Secure submission is intentionally disabled on this architecture branch until the intake service is connected and reviewed.",
    );
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Organization name
          <input name="organization" type="text" autoComplete="organization" required />
        </label>
        <label>
          Organization website
          <input name="website" type="url" inputMode="url" placeholder="https://" />
        </label>
        <label>
          Washington location
          <input name="location" type="text" autoComplete="address-level2" required />
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
        </label>
      </div>

      <label>
        What work is currently falling through the cracks?
        <textarea name="problem" rows={5} required />
      </label>

      <label>
        What result would matter most in the next 90 days?
        <textarea name="result" rows={5} required />
      </label>

      <label className="checkbox-label">
        <input name="decisionMaker" type="checkbox" required />
        <span>A decision-maker can participate in the discovery and acceptance process.</span>
      </label>

      <button className="button button--primary" type="submit">
        Review my application preview
      </button>

      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
