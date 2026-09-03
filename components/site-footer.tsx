"use client";

import Image from "next/image";
import Link from "next/link";
import { useSitePreferences } from "@/components/site-preferences";

const currentYear = new Date().getFullYear();

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
          <span>{spanish ? "Relaciones antes que encierro." : "Bespoke Software Sovereign Solutions."}</span>
        </div>
      </div>
    </footer>
  );
}
