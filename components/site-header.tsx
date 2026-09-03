"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PreferenceControls } from "@/components/preference-controls";
import { useSitePreferences } from "@/components/site-preferences";

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.getAttribute("aria-hidden") !== "true");
}

export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const spanish = locale === "es-MX";
  const navigation = [
    { href: "/programs", label: spanish ? "Programas" : "Programs" },
    { href: "/work", label: spanish ? "Trabajo" : "Work" },
    { href: "/story", label: spanish ? "Historia" : "Story" },
    { href: "/built-here", label: spanish ? "Hecho aquí" : "Built Here" },
    { href: "/notes", label: spanish ? "Notas" : "Notes" },
  ];
  const fitLabel = spanish ? "Cuéntanos qué está atorado" : "Tell us what's important";

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
    if (!open || !menuRef.current) return;

    const navigationElement = menuRef.current;
    const focusFirst = window.requestAnimationFrame(() => {
      getFocusableElements(navigationElement)[0]?.focus();
    });

    const containFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = getFocusableElements(navigationElement);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !navigationElement.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !navigationElement.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", containFocus);
    return () => {
      window.cancelAnimationFrame(focusFirst);
      document.removeEventListener("keydown", containFocus);
    };
  }, [open]);

  return (
    <header className="editorial-header">
      <div className="editorial-header__inner">
        <Link className="editorial-brand" href="/" aria-label={common.homeLabel} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} priority />
        </Link>

        <div className="editorial-header__actions">
          <Link className="editorial-header__fit" href="/apply" aria-current={pathname === "/apply" ? "page" : undefined}>
            {fitLabel}
          </Link>
          <button
            ref={menuButtonRef}
            className="editorial-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="editorial-primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span>{open ? common.closeMenu : common.menu}</span>
            <span className="editorial-menu-button__glyph" aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <m.nav
            ref={menuRef}
            id="editorial-primary-navigation"
            className="editorial-menu"
            aria-label={common.primaryNav}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <div className="editorial-menu__inner">
              <div className="editorial-menu__primary">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="editorial-menu__meta">
                <PreferenceControls showTheme={false} />
                <Link href="/apply" onClick={() => setOpen(false)}>{fitLabel} ↗</Link>
                <span>Pacific Northwest</span>
              </div>
            </div>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
