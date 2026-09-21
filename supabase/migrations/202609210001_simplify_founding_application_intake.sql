alter table public.founding_applications
  add column if not exists need text,
  add column if not exists context text,
  add column if not exists timing text;

alter table public.founding_applications
  alter column organization_name drop not null,
  alter column washington_location drop not null,
  alter column organization_type drop not null,
  alter column staff_size drop not null,
  alter column operational_problem drop not null,
  alter column desired_result drop not null,
  alter column decision_maker_available drop not null;

alter table public.founding_applications
  drop constraint if exists founding_applications_organization_type_check,
  drop constraint if exists founding_applications_staff_size_check;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'founding_applications_need_check'
      and conrelid = 'public.founding_applications'::regclass
  ) then
    alter table public.founding_applications
      add constraint founding_applications_need_check
        check (need is null or need in ('fix', 'improve', 'build', 'automate', 'unsure'));
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'founding_applications_timing_check'
      and conrelid = 'public.founding_applications'::regclass
  ) then
    alter table public.founding_applications
      add constraint founding_applications_timing_check
        check (timing is null or timing in ('now', 'month', 'quarter', 'exploring'));
  end if;
end;
$$;

comment on column public.founding_applications.need is
  'What the visitor wants help with on the simplified MACS intake.';

comment on column public.founding_applications.context is
  'Free-text description of what matters most to the visitor right now.';

comment on column public.founding_applications.timing is
  'Visitor-selected timing for the work.';
