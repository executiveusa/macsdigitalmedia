export const needs = ["fix", "improve", "build", "automate", "unsure"] as const;
export const timings = ["now", "month", "quarter", "exploring"] as const;

type Need = (typeof needs)[number];
type Timing = (typeof timings)[number];

export type FoundingApplication = {
  name: string;
  email: string;
  need: Need;
  context: string;
  website: string | null;
  timing: Timing;
  consent: true;
  sourceUrl: string | null;
  referrer: string | null;
  startedAt: number;
};

type ValidationResult =
  | { ok: true; data: FoundingApplication; honeypotTriggered: boolean }
  | { ok: false; errors: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function optionalUrl(value: unknown) {
  const candidate = text(value, 500);
  if (!candidate) return null;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function validateFoundingApplication(input: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: { form: "The request could not be read." } };
  }

  const payload = input as Record<string, unknown>;
  const name = text(payload.name, 120);
  const email = text(payload.email, 254).toLowerCase();
  const need = text(payload.need, 40) as Need;
  const context = text(payload.context, 3000);
  const rawWebsite = text(payload.website, 500);
  const website = optionalUrl(payload.website);
  const timing = text(payload.timing, 40) as Timing;
  const consent = payload.consent === true;
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : Number.NaN;
  const honeypotTriggered = text(payload.company, 200).length > 0;

  if (name.length < 2) errors.name = "Enter your name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (!needs.includes(need)) errors.need = "Select what you need help with.";
  if (context.length < 10) errors.context = "Tell us a little more about what matters right now.";
  if (rawWebsite && !website) errors.website = "Enter a complete website address beginning with http:// or https://.";
  if (!timings.includes(timing)) errors.timing = "Select a timing.";
  if (!consent) errors.consent = "Confirm that MACS may use this information to review and respond to your request.";

  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 3000 || elapsed > 86_400_000) {
    errors.form = "Please reload the page and try again.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    honeypotTriggered,
    data: {
      name,
      email,
      need,
      context,
      website,
      timing,
      consent: true,
      sourceUrl: optionalUrl(payload.sourceUrl),
      referrer: optionalUrl(payload.referrer),
      startedAt,
    },
  };
}
