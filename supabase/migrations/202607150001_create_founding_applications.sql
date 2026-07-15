create extension if not exists pgcrypto;

create table if not exists public.founding_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'new' check (
    status in ('new', 'reviewing', 'qualified', 'not_fit', 'contacted', 'archived')
  ),
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (char_length(email) between 5 and 254),
  phone text,
  organization_name text not null check (char_length(organization_name) between 2 and 180),
  website text,
  washington_location text not null check (char_length(washington_location) between 2 and 160),
  organization_type text not null check (
    organization_type in ('nonprofit', 'social-purpose', 'small-business')
  ),
  staff_size text not null check (
    staff_size in ('1-2', '3-10', '11-25', '26-50', '51+')
  ),
  operational_problem text not null check (char_length(operational_problem) between 30 and 3000),
  desired_result text not null check (char_length(desired_result) between 30 and 3000),
  decision_maker_available boolean not null default false,
  consent_to_contact boolean not null default false,
  source_url text,
  referrer text,
  user_agent text,
  request_fingerprint text not null,
  internal_notes text,
  assigned_to uuid references auth.users(id) on delete set null
);

alter table public.founding_applications enable row level security;

revoke all on table public.founding_applications from anon, authenticated;

create index if not exists founding_applications_created_at_idx
  on public.founding_applications (created_at desc);

create index if not exists founding_applications_status_idx
  on public.founding_applications (status, created_at desc);

create index if not exists founding_applications_email_idx
  on public.founding_applications (lower(email));

create index if not exists founding_applications_fingerprint_idx
  on public.founding_applications (request_fingerprint, created_at desc);

comment on table public.founding_applications is
  'Private intake records submitted through the MACS Washington Founding Launch application.';

comment on column public.founding_applications.request_fingerprint is
  'Server-generated HMAC used only for short-window abuse control; raw IP addresses are not stored.';
