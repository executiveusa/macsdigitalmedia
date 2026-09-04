"use client";

import Image from "next/image";
import Link from "next/link";
import { useSitePreferences } from "@/components/site-preferences";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.79-4.695 4.533-4.695 1.313 0 2.686.236 2.686.236v2.973h-1.513c-1.49 0-1.956.932-1.956 1.889v2.256h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849C2.381 3.924 3.896 2.38 7.151 2.232 8.417 2.175 8.797 2.163 12 2.163ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947C23.732 2.699 21.31.273 16.948.073 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
] as const;

export function SiteFooter() {
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const spanish = locale === "es-MX";

  const navigation = [
    { href: "/programs", label: spanish ? "Programas" : "Programs" },
    { href: "/work", label: spanish ? "Trabajo" : "Work" },
    { href: "/story", label: spanish ? "Historia" : "Story" },
    { href: "/built-here", label: spanish ? "Hecho aquí" : "Built Here" },
    { href: "/notes", label: spanish ? "Notas" : "Notes" },
    { href: "/apply", label: spanish ? "Cuéntanos qué está atorado" : "Tell us what's important" },
  ];

  return (
    <footer className="editorial-footer">
      <div className="editorial-footer__inner">
        <div className="editorial-footer__top">
          <div className="editorial-footer__brand">
            <Link href="/" aria-label={common.homeLabel}>
              <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} />
            </Link>
            <p>{spanish ? "Padre e hijo. Sistemas que funcionan. Control que se queda contigo." : "Father and son. Systems that work. Change you can measure."}</p>
            <div className="editorial-footer__social" aria-label={spanish ? "Redes sociales" : "Social media"}>
              {socialLinks.map((social) => (
                <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label} title={`${social.label} profile URL pending`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="editorial-footer__nav" aria-label={common.footerNav}>
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>

          <div className="editorial-footer__meta">
            <span>Pacific Northwest</span>
            <span>Seattle · Washington</span>
            <Link href="/privacy">{common.privacy}</Link>
            <Link href="/accessibility">{common.accessibility}</Link>
            <a href="#main-content">{common.backToTop} ↑</a>
          </div>
        </div>

        <div className="editorial-footer__bottom">
          <span>© {currentYear} MACS Digital Media</span>
          <span>{spanish ? "Relaciones antes que encierro." : "Bespoke Software. Sovereign Solutions."}</span>
        </div>
      </div>
    </footer>
  );
}
