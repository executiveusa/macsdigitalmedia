"use client";

import Image from "next/image";
import Link from "next/link";
import { useSitePreferences } from "@/components/site-preferences";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  const { copy } = useSitePreferences();
  const common = copy.common;

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link href="/" className="footer-brand" aria-label={common.homeLabel}>
            <Image
              src="/logo.png"
              alt="MACS Digital Media"
              width={500}
              height={378}
              className="footer-logo"
            />
          </Link>
          <p className="site-footer__statement">{common.footerStatement}</p>
        </div>
        <div>
          <h2 className="site-footer__heading">{common.explore}</h2>
          <nav className="footer-navigation" aria-label={common.footerNav}>
            <Link href="/maxx">{common.maxx}</Link>
            <Link href="/founding-launch">{common.launch}</Link>
            <Link href="/website-rescue">{common.rescue}</Link>
            <Link href="/small-business">{common.smallBusiness}</Link>
            <Link href="/apply">{common.apply}</Link>
          </nav>
        </div>
        <div>
          <h2 className="site-footer__heading">{common.operatingPrinciple}</h2>
          <p className="site-footer__statement">{common.principleStatement}</p>
          <a className="footer-back-to-top" href="#main-content">
            {common.backToTop}
            <span aria-hidden="true"> ↑</span>
          </a>
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
