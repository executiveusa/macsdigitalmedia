import "server-only";

import { getSupabaseAdmin } from "@/lib/supabase-admin";
import {
  managedContentKeys,
  managedContentLocales,
  type ManagedContentInput,
  type ManagedContentKey,
  type ManagedContentLocale,
} from "@/lib/site-content-contract";

export type ManagedContentRecord = {
  key: ManagedContentKey;
  locale: ManagedContentLocale;
  title: string;
  body: string;
  ctaLabel: string | null;
  ctaHref: string | null;
  enabled: boolean;
  version: number;
  updatedBy: string;
  updatedAt: string;
};

type ManagedContentRow = {
  content_key: ManagedContentKey;
  locale: ManagedContentLocale;
  title: string;
  body: string;
  cta_label: string | null;
  cta_href: string | null;
  enabled: boolean;
  version: number;
  updated_by: string;
  updated_at: string;
};

function mapRow(row: ManagedContentRow): ManagedContentRecord {
  return {
    key: row.content_key,
    locale: row.locale,
    title: row.title,
    body: row.body,
    ctaLabel: row.cta_label,
    ctaHref: row.cta_href,
    enabled: row.enabled,
    version: row.version,
    updatedBy: row.updated_by,
    updatedAt: row.updated_at,
  };
}

function mapSnapshot(value: unknown): ManagedContentRecord {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Managed content update returned an invalid snapshot.");
  }

  const snapshot = value as Record<string, unknown>;
  const key = snapshot.key;
  const locale = snapshot.locale;

  if (
    typeof key !== "string"
    || !managedContentKeys.includes(key as ManagedContentKey)
    || typeof locale !== "string"
    || !managedContentLocales.includes(locale as ManagedContentLocale)
    || typeof snapshot.title !== "string"
    || typeof snapshot.body !== "string"
    || !(typeof snapshot.ctaLabel === "string" || snapshot.ctaLabel === null)
    || !(typeof snapshot.ctaHref === "string" || snapshot.ctaHref === null)
    || typeof snapshot.enabled !== "boolean"
    || typeof snapshot.version !== "number"
    || typeof snapshot.updatedBy !== "string"
    || typeof snapshot.updatedAt !== "string"
  ) {
    throw new Error("Managed content update returned an invalid snapshot.");
  }

  return {
    key: key as ManagedContentKey,
    locale: locale as ManagedContentLocale,
    title: snapshot.title,
    body: snapshot.body,
    ctaLabel: snapshot.ctaLabel,
    ctaHref: snapshot.ctaHref,
    enabled: snapshot.enabled,
    version: snapshot.version,
    updatedBy: snapshot.updatedBy,
    updatedAt: snapshot.updatedAt,
  };
}

const selection = [
  "content_key",
  "locale",
  "title",
  "body",
  "cta_label",
  "cta_href",
  "enabled",
  "version",
  "updated_by",
  "updated_at",
].join(",");

export async function getManagedAnnouncement(locale: ManagedContentLocale) {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("site_content_blocks")
      .select(selection)
      .eq("content_key", "home-announcement")
      .eq("locale", locale)
      .eq("enabled", true)
      .maybeSingle();

    if (error) {
      console.warn("Managed announcement is unavailable.");
      return null;
    }

    return data ? mapRow(data as ManagedContentRow) : null;
  } catch {
    console.warn("Managed announcement is unavailable.");
    return null;
  }
}

export async function listManagedContent() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("site_content_blocks")
    .select(selection)
    .order("content_key")
    .order("locale");

  if (error) throw error;
  return (data || []).map((row) => mapRow(row as ManagedContentRow));
}

export async function upsertManagedContent(
  input: ManagedContentInput,
  actor: string,
  idempotencyKey: string,
) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.rpc("macs_upsert_site_content", {
    p_content_key: input.key,
    p_locale: input.locale,
    p_title: input.title,
    p_body: input.body,
    p_cta_label: input.ctaLabel,
    p_cta_href: input.ctaHref,
    p_enabled: input.enabled,
    p_revision_note: input.revisionNote,
    p_idempotency_key: idempotencyKey,
    p_actor: actor,
  });

  if (error) throw error;
  return mapSnapshot(Array.isArray(data) ? data[0] : data);
}
