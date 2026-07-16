create extension if not exists pgcrypto;

create table if not exists public.site_content_blocks (
  content_key text not null,
  locale text not null,
  title text not null,
  body text not null,
  cta_label text,
  cta_href text,
  enabled boolean not null default false,
  version integer not null default 1,
  updated_by text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (content_key, locale),
  constraint site_content_key_allowlist check (content_key in ('home-announcement')),
  constraint site_content_locale_allowlist check (locale in ('en', 'es-MX')),
  constraint site_content_title_length check (char_length(title) between 4 and 120),
  constraint site_content_body_length check (char_length(body) between 10 and 500),
  constraint site_content_cta_label_length check (cta_label is null or char_length(cta_label) between 2 and 80),
  constraint site_content_cta_href_length check (cta_href is null or char_length(cta_href) between 1 and 500),
  constraint site_content_cta_pair check (
    (cta_label is null and cta_href is null)
    or (cta_label is not null and cta_href is not null)
  ),
  constraint site_content_cta_href_safe check (
    cta_href is null
    or ((left(cta_href, 1) = '/') and (left(cta_href, 2) <> '//'))
    or (left(cta_href, 8) = 'https://')
  ),
  constraint site_content_version_positive check (version > 0),
  constraint site_content_updated_by_length check (char_length(updated_by) between 2 and 80)
);

create table if not exists public.site_content_revisions (
  id uuid primary key default gen_random_uuid(),
  content_key text not null,
  locale text not null,
  version integer not null,
  snapshot jsonb not null,
  revision_note text not null,
  idempotency_key text not null unique,
  actor text not null,
  created_at timestamptz not null default now(),
  constraint site_content_revision_key_allowlist check (content_key in ('home-announcement')),
  constraint site_content_revision_locale_allowlist check (locale in ('en', 'es-MX')),
  constraint site_content_revision_version_positive check (version > 0),
  constraint site_content_revision_note_length check (char_length(revision_note) between 4 and 240),
  constraint site_content_revision_idempotency_length check (char_length(idempotency_key) between 16 and 128),
  constraint site_content_revision_actor_length check (char_length(actor) between 2 and 80)
);

create index if not exists site_content_blocks_enabled_idx
  on public.site_content_blocks (enabled, content_key, locale);

create index if not exists site_content_revisions_lookup_idx
  on public.site_content_revisions (content_key, locale, created_at desc);

drop trigger if exists site_content_blocks_set_updated_at
  on public.site_content_blocks;

create trigger site_content_blocks_set_updated_at
before update on public.site_content_blocks
for each row
execute function public.macs_set_updated_at();

alter table public.site_content_blocks enable row level security;
alter table public.site_content_blocks force row level security;
alter table public.site_content_revisions enable row level security;
alter table public.site_content_revisions force row level security;

revoke all on table public.site_content_blocks from public, anon, authenticated;
revoke all on table public.site_content_revisions from public, anon, authenticated;
grant select, insert, update on table public.site_content_blocks to service_role;
grant select, insert on table public.site_content_revisions to service_role;

create or replace function public.macs_upsert_site_content(
  p_content_key text,
  p_locale text,
  p_title text,
  p_body text,
  p_cta_label text,
  p_cta_href text,
  p_enabled boolean,
  p_revision_note text,
  p_idempotency_key text,
  p_actor text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  existing_revision public.site_content_revisions;
  result_row public.site_content_blocks;
  result_snapshot jsonb;
begin
  select *
    into existing_revision
    from public.site_content_revisions
   where idempotency_key = p_idempotency_key;

  if found then
    return existing_revision.snapshot;
  end if;

  insert into public.site_content_blocks (
    content_key,
    locale,
    title,
    body,
    cta_label,
    cta_href,
    enabled,
    version,
    updated_by
  )
  values (
    p_content_key,
    p_locale,
    p_title,
    p_body,
    p_cta_label,
    p_cta_href,
    p_enabled,
    1,
    p_actor
  )
  on conflict (content_key, locale)
  do update set
    title = excluded.title,
    body = excluded.body,
    cta_label = excluded.cta_label,
    cta_href = excluded.cta_href,
    enabled = excluded.enabled,
    version = public.site_content_blocks.version + 1,
    updated_by = excluded.updated_by
  returning * into result_row;

  result_snapshot := jsonb_build_object(
    'key', result_row.content_key,
    'locale', result_row.locale,
    'title', result_row.title,
    'body', result_row.body,
    'ctaLabel', result_row.cta_label,
    'ctaHref', result_row.cta_href,
    'enabled', result_row.enabled,
    'version', result_row.version,
    'updatedBy', result_row.updated_by,
    'updatedAt', result_row.updated_at
  );

  insert into public.site_content_revisions (
    content_key,
    locale,
    version,
    snapshot,
    revision_note,
    idempotency_key,
    actor
  )
  values (
    result_row.content_key,
    result_row.locale,
    result_row.version,
    result_snapshot,
    p_revision_note,
    p_idempotency_key,
    p_actor
  );

  return result_snapshot;
exception
  when unique_violation then
    select *
      into existing_revision
      from public.site_content_revisions
     where idempotency_key = p_idempotency_key;

    return existing_revision.snapshot;
end;
$$;

revoke all on function public.macs_upsert_site_content(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean,
  text,
  text,
  text
) from public, anon, authenticated;

grant execute on function public.macs_upsert_site_content(
  text,
  text,
  text,
  text,
  text,
  text,
  boolean,
  text,
  text,
  text
) to service_role;

comment on table public.site_content_blocks is
  'Allowlisted public website content managed by an authenticated site-operations agent.';

comment on table public.site_content_revisions is
  'Immutable audit trail for agent-managed public website content changes.';
