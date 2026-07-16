import assert from "node:assert/strict";
import test from "node:test";

import {
  isSafeManagedHref,
  validateManagedContent,
} from "../../lib/site-content-contract.ts";

const validPayload = {
  key: "home-announcement",
  locale: "en",
  title: "Founding cohort applications are open",
  body: "Washington organizations can now apply for the next MACS founding cohort.",
  ctaLabel: "Apply now",
  ctaHref: "/apply",
  enabled: true,
  revisionNote: "Open the next cohort application window.",
};

test("accepts allowlisted managed content with an internal CTA", () => {
  const result = validateManagedContent(validPayload);
  assert.equal(result.ok, true);
  if (!result.ok) return;

  assert.equal(result.data.key, "home-announcement");
  assert.equal(result.data.locale, "en");
  assert.equal(result.data.ctaHref, "/apply");
  assert.equal(result.data.enabled, true);
});

test("accepts an HTTPS CTA and optional CTA omission", () => {
  const external = validateManagedContent({
    ...validPayload,
    locale: "es-MX",
    ctaHref: "https://www.macsdigitalmedia.com/apply",
  });
  assert.equal(external.ok, true);

  const withoutCta = validateManagedContent({
    ...validPayload,
    ctaLabel: null,
    ctaHref: null,
    enabled: false,
  });
  assert.equal(withoutCta.ok, true);
});

test("rejects non-object payloads and unallowlisted identifiers", () => {
  assert.deepEqual(validateManagedContent(null), {
    ok: false,
    errors: { form: "Content payload must be a JSON object." },
  });
  assert.equal(validateManagedContent([]).ok, false);

  const result = validateManagedContent({
    ...validPayload,
    key: "homepage-html",
    locale: "fr",
  });
  assert.equal(result.ok, false);
  if (result.ok) return;

  assert.equal(result.errors.key, "Content key is not allowlisted.");
  assert.equal(result.errors.locale, "Locale must be en or es-MX.");
});

test("rejects missing, short, and oversized copy", () => {
  const result = validateManagedContent({
    ...validPayload,
    title: "abc",
    body: "short",
    ctaLabel: "x".repeat(81),
    revisionNote: "x".repeat(241),
  });
  assert.equal(result.ok, false);
  if (result.ok) return;

  assert.match(result.errors.title, /4–120/);
  assert.match(result.errors.body, /10–500/);
  assert.match(result.errors.ctaLabel, /2–80/);
  assert.match(result.errors.revisionNote, /4–240/);
});

test("requires complete CTAs and blocks unsafe destinations", () => {
  const missingHref = validateManagedContent({
    ...validPayload,
    ctaHref: null,
  });
  assert.equal(missingHref.ok, false);
  if (!missingHref.ok) assert.match(missingHref.errors.cta, /provided together/);

  const unsafeHref = validateManagedContent({
    ...validPayload,
    ctaHref: "http://example.com",
  });
  assert.equal(unsafeHref.ok, false);
  if (!unsafeHref.ok) assert.match(unsafeHref.errors.ctaHref, /internal path or an HTTPS URL/);

  const tooLongHref = validateManagedContent({
    ...validPayload,
    ctaHref: `https://example.com/${"x".repeat(500)}`,
  });
  assert.equal(tooLongHref.ok, false);
  if (!tooLongHref.ok) assert.match(tooLongHref.errors.ctaHref, /500 characters/);
});

test("safe-link helper accepts only internal or HTTPS destinations", () => {
  assert.equal(isSafeManagedHref("/apply"), true);
  assert.equal(isSafeManagedHref("https://www.macsdigitalmedia.com/apply"), true);
  assert.equal(isSafeManagedHref("//attacker.example/path"), false);
  assert.equal(isSafeManagedHref("http://attacker.example"), false);
  assert.equal(isSafeManagedHref("javascript:alert(1)"), false);
  assert.equal(isSafeManagedHref("not a url"), false);
});
