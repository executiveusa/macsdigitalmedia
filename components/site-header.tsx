"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PreferenceControls } from "@/components/preference-controls";
import { useSitePreferences } from "@/components/site-preferences";
import { businessFirstCopy } from "@/lib/business-first-copy";

function MenuIcon({ open }: { open: boolean }) {
  return <span className={`menu-icon${open ? " menu-icon--open" : ""}`} aria-hidden="true"><span /><span /><span /></span>;
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
    .filter((element) => element.getAttribute("aria-hidden") !== "true");
}

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const nav = businessFirstCopy[locale].nav;
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const navigation = [
    { href: "/#method", label: nav.method },
    { href: "/#what-we-fix", label: nav.work },
    { href: "/#about", label: nav.about },
  ];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open || !mobileNavRef.current) return;
    const navigationElement = mobileNavRef.current;
    const firstFrame = window.requestAnimationFrame(() => getFocusableElements(navigationElement)[0]?.focus());
    const containFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = getFocusableElements(navigationElement);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !navigationElement.contains(active))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (active === last || !navigationElement.contains(active))) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", containFocus);
    return () => { window.cancelAnimationFrame(firstFrame); document.removeEventListener("keydown", containFocus); };
  }, [open]);

  const navigationLinks = navigation.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
  ));

  const startLink = (
    <Link className="button button--small button--primary" href="/apply" onClick={() => setOpen(false)}>{nav.start}</Link>
  );

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-link" href="/" aria-label={common.homeLabel} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} className="brand-logo" priority />
        </Link>
        <nav className="primary-navigation primary-navigation--desktop" aria-label={common.primaryNav}>
          {navigationLinks}{startLink}
        </nav>
        <div className="site-header__tools">
          <PreferenceControls />
          <button ref={menuButtonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-primary-navigation" onClick={() => setOpen((current) => !current)}>
            <span className="menu-button__label">{open ? common.closeMenu : common.menu}</span><MenuIcon open={open} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? <>
          <m.button className="mobile-menu-backdrop" type="button" tabIndex={-1} aria-label={common.closeMenu} onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} />
          <m.nav ref={mobileNavRef} id="mobile-primary-navigation" className="primary-navigation primary-navigation--mobile" aria-label={common.primaryNav} initial={reduceMotion ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}>
            {navigationLinks}{startLink}
          </m.nav>
        </> : null}
      </AnimatePresence>
    </header>
  );
}
