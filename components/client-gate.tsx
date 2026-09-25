"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import styles from "./client-gate.module.css";

/**
 * Posta Studio client gate.
 *
 * Demo-gate, honestly labeled "Private beta": the app backend is being
 * redeployed on MACS infrastructure, so for now a correct password opens the
 * client preview, not the live product. When the real backend lands, swap
 * verifyClientPassword() for a real auth call - the design stays.
 *
 * Passwords live as SHA-256 hashes below, keyed by client id so per-client
 * passwords (DWY / DFY tiers) slot in without a redesign. Rotate by adding a
 * new entry and retiring the old one. Plaintext never ships to the browser.
 */
const CLIENT_PASSWORD_HASHES: Record<string, string> = {
  seed: "32158baf766612141b44d5fe19d610df5b0be4139d48e31733cb67021191255f",
};

const copy = {
  en: {
    cta: "Client access",
    tagline: "In private beta.",
    kicker: "Posta Studio · Private beta",
    headline: "Enter your client password.",
    body: "Posta Studio is in private beta. Your client preview is behind this door.",
    fieldLabel: "Client password",
    submit: "Enter",
    error: "That password didn't work. Check it and try again.",
    footnote: "Not a client yet?",
    footnoteLink: "Tell us what's important",
    unlockedLine: "Posta Studio is in private beta.",
  },
  "es-MX": {
    cta: "Acceso de clientes",
    tagline: "En beta privada.",
    kicker: "Posta Studio · Beta privada",
    headline: "Ingresa tu contraseña de cliente.",
    body: "Posta Studio está en beta privada. Tu vista previa de cliente está detrás de esta puerta.",
    fieldLabel: "Contraseña de cliente",
    submit: "Entrar",
    error: "Esa contraseña no funcionó. Revisa y vuelve a intentarlo.",
    footnote: "¿Aún no eres cliente?",
    footnoteLink: "Cuéntanos qué es importante",
    unlockedLine: "Posta Studio está en beta privada.",
  },
} as const;

async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function verifyClientPassword(password: string): Promise<boolean> {
  const hash = await sha256Hex(password.trim());
  return Object.values(CLIENT_PASSWORD_HASHES).includes(hash);
}

export function ClientGate({
  locale,
  heroImage,
  name,
}: {
  locale: Locale;
  heroImage?: string;
  name: string;
}) {
  const t = copy[locale];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (unlocked) {
      sessionStorage.setItem("macs-posta-access", "granted");
    }
  }, [unlocked]);

  useEffect(() => {
    // Restore an earlier unlock after hydration (server render must start locked).
    if (sessionStorage.getItem("macs-posta-access") === "granted") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe session restore
      setUnlocked(true);
    }
  }, []);

  const openDialog = () => {
    setError(false);
    setPassword("");
    dialogRef.current?.showModal();
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeDialog = () => dialogRef.current?.close();

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (checking) return;
    setChecking(true);
    try {
      const ok = await verifyClientPassword(password);
      if (ok) {
        setUnlocked(true);
        closeDialog();
      } else {
        setError(true);
        setPassword("");
        inputRef.current?.focus();
      }
    } finally {
      setChecking(false);
    }
  };

  if (unlocked) {
    return (
      <div className={styles.preview} aria-live="polite">
        <p className="editorial-kicker">{t.kicker}</p>
        <p className={styles.previewLine}>{t.unlockedLine}</p>
        {heroImage ? (
          <span
            className={styles.previewMedia}
            role="img"
            aria-label={`${name} client preview`}
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        ) : null}
        <Link className="editorial-link" href="/apply">
          {t.footnoteLink} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.gate}>
      <button type="button" className={`editorial-link ${styles.opener}`} onClick={openDialog}>
        {t.cta} <span aria-hidden="true">↗</span>
      </button>
      <p className={styles.tagline}>{t.tagline}</p>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="client-gate-title"
        onClose={() => setError(false)}
      >
        <form className={styles.dialogInner} onSubmit={onSubmit} method="dialog" noValidate>
          <p className="editorial-kicker">{t.kicker}</p>
          <h2 id="client-gate-title" className={styles.title}>
            {t.headline}
          </h2>
          <p className={styles.body}>{t.body}</p>

          <label className={styles.label} htmlFor="client-gate-password">
            {t.fieldLabel}
          </label>
          <input
            id="client-gate-password"
            ref={inputRef}
            type="password"
            autoComplete="off"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(false);
            }}
            className={`${styles.input}${error ? ` ${styles.inputError}` : ""}`}
            aria-invalid={error || undefined}
            aria-describedby={error ? "client-gate-error" : undefined}
          />
          {error ? (
            <p id="client-gate-error" className={styles.error} role="alert">
              {t.error}
            </p>
          ) : null}

          <div className={styles.actions}>
            <button type="submit" className="button button--primary" disabled={checking || !password}>
              {t.submit}
            </button>
          </div>

          <p className={styles.footnote}>
            {t.footnote}{" "}
            <Link href="/apply" onClick={closeDialog}>
              {t.footnoteLink} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </form>
      </dialog>
    </div>
  );
}
