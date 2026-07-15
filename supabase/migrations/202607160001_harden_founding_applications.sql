create or replace function public.macs_set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke all on function public.macs_set_updated_at() from public, anon, authenticated;

drop trigger if exists founding_applications_set_updated_at
  on public.founding_applications;

create trigger founding_applications_set_updated_at
before update on public.founding_applications
for each row
execute function public.macs_set_updated_at();

alter table public.founding_applications force row level security;

comment on function public.macs_set_updated_at() is
  'Maintains updated_at for private MACS application records.';
