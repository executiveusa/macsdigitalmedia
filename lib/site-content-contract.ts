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

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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
  const key = text(payload.key) as ManagedContentKey;
  const locale = text(payload.locale) as ManagedContentLocale;
  const title = text(payload.title);
  const body = text(payload.body);
  const ctaLabel = text(payload.ctaLabel) || null;
  const ctaHref = text(payload.ctaHref) || null;
  const enabled = payload.enabled === true;
  const revisionNote = text(payload.revisionNote);

  if (!managedContentKeys.includes(key)) errors.key = "Content key is not allowlisted.";
  if (!managedContentLocales.includes(locale)) errors.locale = "Locale must be en or es-MX.";
  if (title.length < 4 || title.length > 120) {
    errors.title = "Title must contain 4–120 characters.";
  }
  if (body.length < 10 || body.length > 500) {
    errors.body = "Body must contain 10–500 characters.";
  }
  if (revisionNote.length < 4 || revisionNote.length > 240) {
    errors.revisionNote = "Revision note must contain 4–240 characters.";
  }
  if (ctaLabel && (ctaLabel.length < 2 || ctaLabel.length > 80)) {
    errors.ctaLabel = "CTA label must contain 2–80 characters.";
  }
  if (ctaHref && ctaHref.length > 500) {
    errors.ctaHref = "CTA destination must not exceed 500 characters.";
  }

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
