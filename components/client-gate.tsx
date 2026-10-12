"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import styles from "./client-gate.module.css";

/**
 * Shared gate for MACS Built Here / in-house products.
 *
 * This is a preview gate, not a security boundary for sensitive client data.
 * Internal product pages remain public so visitors can understand the product,
 * while the working preview stays behind client access. Real customer systems
 * must use server-side authentication at the product boundary.
 *
 * Passwords are represented as SHA-256 hashes so plaintext is not committed.
 * Replace this browser-side verification with real auth when a product carries
 * private data or production capability.
 */
const CLIENT_PASSWORD_HASHES: Record<string, string> = {
  seed: "32158baf766612141b44d5fe19d610df5b0be4139d48e31733cb67021191255f",
};

function copyFor(locale: Locale, name: string) {
  if (locale === "es-MX") {
    return {
      cta: "Vista previa para clientes",
      tagline: "Producto interno de MACS.",
      kicker: `${name} · Producto interno de MACS`,
      headline: "Ingresa tu PIN de cliente.",
      body: `${name} es un sistema creado por MACS que instalamos y configuramos para nuestros clientes. Ingresa tu PIN para abrir la vista previa privada.`,
      fieldLabel: "PIN de cliente",
      submit: "Entrar",
      error: "Ese PIN no funcionó. Revísalo y vuelve a intentarlo.",
      footnote: "¿Quieres este sistema para tu negocio?",
      footnoteLink: "Cuéntanos qué necesitas",
      unlockedLine: `${name} está disponible como vista previa privada para clientes.`,
    };
  }

  return {
    cta: "Client preview",
    tagline: "MACS in-house product.",
    kicker: `${name} · MACS in-house product`,
    headline: "Enter your client PIN.",
    body: `${name} is built in-house by MACS and installed and configured for our customers. Enter your PIN to open the private client preview.`,
    fieldLabel: "Client PIN",
    submit: "Enter",
    error: "That PIN didn't work. Check it and try again.",
    footnote: "Want this system for your business?",
    footnoteLink: "Tell us what you need",
    unlockedLine: `${name} is available as a private client preview.`,
  };
}

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
  productId,
}: {
  locale: Locale;
  heroImage?: string;
  name: string;
  productId: string;
}) {
  const t = copyFor(locale, name);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const storageKey = `macs-client-access-${productId}`;

  useEffect(() => {
    if (unlocked) {
      sessionStorage.setItem(storageKey, "granted");
    }
  }, [storageKey, unlocked]);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === "granted") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe session restore
      setUnlocked(true);
    }
  }, [storageKey]);

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
        aria-labelledby={`client-gate-title-${productId}`}
        onClose={() => setError(false)}
      >
        <form className={styles.dialogInner} onSubmit={onSubmit} method="dialog" noValidate>
          <p className="editorial-kicker">{t.kicker}</p>
          <h2 id={`client-gate-title-${productId}`} className={styles.title}>
            {t.headline}
          </h2>
          <p className={styles.body}>{t.body}</p>

          <label className={styles.label} htmlFor={`client-gate-password-${productId}`}>
            {t.fieldLabel}
          </label>
          <input
            id={`client-gate-password-${productId}`}
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
            aria-describedby={error ? `client-gate-error-${productId}` : undefined}
          />
          {error ? (
            <p id={`client-gate-error-${productId}`} className={styles.error} role="alert">
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
