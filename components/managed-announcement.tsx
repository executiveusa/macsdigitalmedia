import Link from "next/link";
import { getManagedAnnouncement } from "@/lib/managed-content";
import type { ManagedContentLocale } from "@/lib/site-content-contract";

export async function ManagedAnnouncement({ locale }: { locale: ManagedContentLocale }) {
  const announcement = await getManagedAnnouncement(locale);
  if (!announcement) return null;

  return (
    <section className="managed-announcement" aria-labelledby="managed-announcement-title">
      <div className="shell managed-announcement__inner">
        <div>
          <p className="managed-announcement__label">
            {locale === "es-MX" ? "Actualización de MACS" : "MACS update"}
          </p>
          <h2 id="managed-announcement-title">{announcement.title}</h2>
          <p>{announcement.body}</p>
        </div>

        {announcement.ctaLabel && announcement.ctaHref ? (
          <Link className="button button--secondary managed-announcement__cta" href={announcement.ctaHref}>
            {announcement.ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
