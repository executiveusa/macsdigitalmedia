# Rollback checkpoint — MACS final design polish

## Exact baseline

- Repository: `executiveusa/macsdigitalmedia`
- Base branch: `main`
- Base commit: `cefeb3dd0ccdcd3adfcfe7d74b8612843b5fbf3c`
- Feature branch: `architect/macs-ms03-final-design-polish`

The base commit is the immutable source snapshot for every modified file. Restore any original file with:

```bash
git show cefeb3dd0ccdcd3adfcfe7d74b8612843b5fbf3c:<path> > <path>
```

Restore the complete source tree with:

```bash
git reset --hard cefeb3dd0ccdcd3adfcfe7d74b8612843b5fbf3c
```

After a squash merge, rollback production with a standard revert of the merge commit.

## Modified baseline files

- `package.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/maxx/page.tsx`
- `app/founding-launch/page.tsx`
- `app/website-rescue/page.tsx`
- `app/small-business/page.tsx`
- `app/apply/page.tsx`
- `app/privacy/page.tsx`
- `app/accessibility/page.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/hero-video.tsx`
- `components/application-form.tsx`
- `tests/e2e/public-site.spec.ts`

## Newly added files

- `app/polish.css`
- `components/site-preferences.tsx`
- `components/preference-controls.tsx`
- `components/motion.tsx`
- `lib/i18n.ts`
- `lib/server-preferences.ts`
- `public/media/macs-hero-poster.svg`
- `openspec/changes/macs-final-design-polish/*`
- `beads/checkpoints/BD-012-human-approval.md`

Delete newly added files when performing a selective rollback.

## Data safety

This change does not alter the Supabase schema, application payload, production records, secrets, or server-side intake route. Database rollback is not required.
