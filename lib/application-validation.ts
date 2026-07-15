export const organizationTypes = ["nonprofit", "social-purpose", "small-business"] as const;
export const staffSizes = ["1-2", "3-10", "11-25", "26-50", "51+"] as const;

type OrganizationType = (typeof organizationTypes)[number];
type StaffSize = (typeof staffSizes)[number];

export type FoundingApplication = {
  name: string;
  email: string;
  phone: string | null;
  organization: string;
  website: string | null;
  location: string;
  organizationType: OrganizationType;
  staffSize: StaffSize;
  problem: string;
  result: string;
  decisionMaker: true;
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

function optionalText(value: unknown, maxLength: number) {
  const candidate = text(value, maxLength);
  return candidate || null;
}

export function validateFoundingApplication(input: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, errors: { form: "The application could not be read." } };
  }

  const payload = input as Record<string, unknown>;
  const name = text(payload.name, 120);
  const email = text(payload.email, 254).toLowerCase();
  const phone = optionalText(payload.phone, 40);
  const organization = text(payload.organization, 180);
  const rawWebsite = text(payload.website, 500);
  const website = optionalUrl(payload.website);
  const location = text(payload.location, 160);
  const organizationType = text(payload.organizationType, 40) as OrganizationType;
  const staffSize = text(payload.staffSize, 20) as StaffSize;
  const problem = text(payload.problem, 3000);
  const result = text(payload.result, 3000);
  const decisionMaker = payload.decisionMaker === true;
  const consent = payload.consent === true;
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : Number.NaN;
  const honeypotTriggered = text(payload.company, 200).length > 0;

  if (name.length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(email)) errors.email = "Enter a valid email address.";
  if (organization.length < 2) errors.organization = "Enter the organization name.";
  if (rawWebsite && !website) errors.website = "Enter a complete website address beginning with http:// or https://.";
  if (location.length < 2) errors.location = "Enter the Washington city or service area.";
  if (!organizationTypes.includes(organizationType)) errors.organizationType = "Select an organization type.";
  if (!staffSizes.includes(staffSize)) errors.staffSize = "Select the approximate staff size.";
  if (problem.length < 30) errors.problem = "Describe the operational problem in at least 30 characters.";
  if (result.length < 30) errors.result = "Describe the desired 90-day result in at least 30 characters.";
  if (!decisionMaker) errors.decisionMaker = "Confirm that a decision-maker can participate.";
  if (!consent) errors.consent = "Confirm that MACS may use this information to review and respond to the application.";

  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || elapsed < 3000 || elapsed > 86_400_000) {
    errors.form = "Please reload the application page and try again.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    honeypotTriggered,
    data: {
      name,
      email,
      phone,
      organization,
      website,
      location,
      organizationType,
      staffSize,
      problem,
      result,
      decisionMaker: true,
      consent: true,
      sourceUrl: optionalUrl(payload.sourceUrl),
      referrer: optionalUrl(payload.referrer),
      startedAt,
    },
  };
}
