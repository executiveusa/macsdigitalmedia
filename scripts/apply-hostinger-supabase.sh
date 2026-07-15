#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${SUPABASE_DB_URL:-}" ]]; then
  echo "SUPABASE_DB_URL is required." >&2
  exit 1
fi

if ! command -v psql >/dev/null 2>&1; then
  echo "psql is required to apply the Supabase migrations." >&2
  exit 1
fi

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

shopt -s nullglob
migrations=(supabase/migrations/*.sql)

if (( ${#migrations[@]} == 0 )); then
  echo "No Supabase migrations were found." >&2
  exit 1
fi

for migration in "${migrations[@]}"; do
  echo "Applying $(basename "$migration")"
  psql "$SUPABASE_DB_URL" -X -1 -v ON_ERROR_STOP=1 -f "$migration"
done

psql "$SUPABASE_DB_URL" -X -1 -v ON_ERROR_STOP=1 <<'SQL'
do $$
begin
  if to_regclass('public.founding_applications') is null then
    raise exception 'public.founding_applications was not created';
  end if;
end;
$$;
SQL

echo "MACS Supabase migrations applied successfully."
