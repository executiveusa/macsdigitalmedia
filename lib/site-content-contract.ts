export const managedContentKeys = ["home-announcement"] as const;
export const managedContentLocales = ["en", "es-MX"] as const;

export type ManagedContentKey = (typeof managedContentKeys)[number];
export type ManagedContentLocale = (typeof managedContentLocales)[number];

export type ManagedContentInput = {
  key: ManagedContentKey;
  locale: ManagedContentLocale;
  title: string;
  body: string;
  ctaLabel: string | null;
  ctaHref: string | null;
  enabled: boolean;
  revisionNote: string;
};

export type ManagedContentValidation =
  | { ok: true; data: ManagedContentInput }
  | { ok: false; errors: Record<string, string> };

function text(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function isSafeManagedHref(value: string) {
  if (value.startsWith("/") && !value.startsWith("//")) return true;

  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function validateManagedContent(input: unknown): ManagedContentValidation {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: { form: "Content payload must be a JSON object." } };
  }

  const payload = input as Record<string, unknown>;
  const key = text(payload.key, 80) as ManagedContentKey;
  const locale = text(payload.locale, 10) as ManagedContentLocale;
  const title = text(payload.title, 120);
  const body = text(payload.body, 500);
  const ctaLabel = text(payload.ctaLabel, 80) || null;
  const ctaHref = text(payload.ctaHref, 500) || null;
  const enabled = payload.enabled === true;
  const revisionNote = text(payload.revisionNote, 240);

  if (!managedContentKeys.includes(key)) errors.key = "Content key is not allowlisted.";
  if (!managedContentLocales.includes(locale)) errors.locale = "Locale must be en or es-MX.";
  if (title.length < 4) errors.title = "Title must contain at least 4 characters.";
  if (body.length < 10) errors.body = "Body must contain at least 10 characters.";
  if (revisionNote.length < 4) errors.revisionNote = "Revision note must explain the change.";

  if ((ctaLabel && !ctaHref) || (!ctaLabel && ctaHref)) {
    errors.cta = "CTA label and destination must be provided together.";
  }

  if (ctaHref && !isSafeManagedHref(ctaHref)) {
    errors.ctaHref = "CTA destination must be an internal path or an HTTPS URL.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      key,
      locale,
      title,
      body,
      ctaLabel,
      ctaHref,
      enabled,
      revisionNote,
    },
  };
}
