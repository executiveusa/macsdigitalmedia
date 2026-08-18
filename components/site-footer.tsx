"use client";

import Image from "next/image";
import Link from "next/link";
import { useSitePreferences } from "@/components/site-preferences";
import { businessFirstCopy } from "@/lib/business-first-copy";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const home = businessFirstCopy[locale];
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link href="/" className="footer-brand" aria-label={common.homeLabel}>
            <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} className="footer-logo" />
          </Link>
          <p className="site-footer__statement">{locale === "es-MX" ? "Primero el negocio. La tecnología sólo cuando se gana su lugar." : "Start with the business. Use technology only when it earns its place."}</p>
        </div>
        <div>
          <h2 className="site-footer__heading">{locale === "es-MX" ? "Explora" : "Explore"}</h2>
          <nav className="footer-navigation" aria-label={common.footerNav}>
            <Link href="/#method">{home.nav.method}</Link>
            <Link href="/#what-we-fix">{home.nav.work}</Link>
            <Link href="/#about">{home.nav.about}</Link>
            <Link href="/maxx">MAXX</Link>
            <Link href="/apply">{home.nav.start}</Link>
          </nav>
        </div>
        <div>
          <h2 className="site-footer__heading">{locale === "es-MX" ? "Principio operativo" : "Operating principle"}</h2>
          <p className="site-footer__statement">{locale === "es-MX" ? "Diagnóstico antes de construir. Prueba antes de prometer. El cliente conserva el control." : "Diagnose before building. Prove before claiming. Keep the client in control."}</p>
          <a className="footer-back-to-top" href="#main-content">{common.backToTop}<span aria-hidden="true"> ↑</span></a>
        </div>
      </div>
      <div className="shell site-footer__legal">
        <span>© {currentYear} MACS Digital Media</span>
        <span>{common.washington}</span>
        <Link href="/privacy">{common.privacy}</Link>
        <Link href="/accessibility">{common.accessibility}</Link>
      </div>
    </footer>
  );
}
