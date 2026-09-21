"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSitePreferences } from "@/components/site-preferences";

const currentYear = new Date().getFullYear();

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.getAttribute("aria-hidden") !== "true");
}

export function SiteFooter() {
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const spanish = locale === "es-MX";
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const accessibilityTriggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const navigation = [
    { href: "/programs", label: spanish ? "Programas" : "Programs" },
    { href: "/work", label: spanish ? "Trabajo" : "Work" },
    { href: "/story", label: spanish ? "Historia" : "Story" },
    { href: "/team", label: spanish ? "Equipo" : "Team" },
    { href: "/built-here", label: spanish ? "Hecho aquí" : "Built Here" },
  ];

  useEffect(() => {
    if (!accessibilityOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const trigger = accessibilityTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = getFocusableElements(drawer);
    requestAnimationFrame(() => focusables[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAccessibilityOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const current = getFocusableElements(drawer);
      if (!current.length) return;

      const first = current[0];
      const last = current[current.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !drawer.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !drawer.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      requestAnimationFrame(() => trigger?.focus());
    };
  }, [accessibilityOpen]);

  return (
    <>
      <footer className="editorial-footer">
        <div className="editorial-footer__inner">
          <div className="editorial-footer__top">
            <div className="editorial-footer__brand">
              <Link href="/" aria-label={common.homeLabel}>
                <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} />
              </Link>
            </div>

            <nav className="editorial-footer__nav" aria-label={common.footerNav}>
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
              <Link href="/apply">
                {spanish ? "Cuéntanos qué es importante" : "Tell us what's important"}
              </Link>
            </nav>

            <div className="editorial-footer__meta">
              <span>Seattle, Washington</span>
              <Link href="/privacy">{common.privacy}</Link>
              <button
                ref={accessibilityTriggerRef}
                className="editorial-footer__text-button"
                type="button"
                onClick={() => setAccessibilityOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={accessibilityOpen}
                aria-controls="accessibility-drawer"
              >
                {common.accessibility}
              </button>
            </div>
          </div>

          <div className="editorial-footer__bottom">
            <span>© {currentYear} MACS Digital Media</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {accessibilityOpen ? (
        <m.div
          className="accessibility-drawer"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <m.div
            className="accessibility-drawer__backdrop"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onMouseDown={() => setAccessibilityOpen(false)}
          />
          <m.section
            ref={drawerRef}
            id="accessibility-drawer"
            className="accessibility-drawer__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-drawer-title"
            initial={reduceMotion ? false : { y: 72, scale: 0.985, opacity: 0.86 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 52, scale: 0.99, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 360, damping: 34, mass: 0.62 }
            }
          >
            <div className="accessibility-drawer__header">
              <div>
                <p className="editorial-kicker">{spanish ? "Accesibilidad" : "Accessibility"}</p>
                <h2 id="accessibility-drawer-title">
                  {spanish
                    ? "Queremos que todos puedan usar nuestro sitio."
                    : "We want everyone to be able to use our website."}
                </h2>
              </div>
              <button
                className="accessibility-drawer__close"
                type="button"
                onClick={() => setAccessibilityOpen(false)}
                aria-label={spanish ? "Cerrar" : "Close"}
              >
                ×
              </button>
            </div>

            <div className="accessibility-drawer__body">
              <p>
                {spanish
                  ? "MACS Digital Media trabaja para que nuestro sitio sea claro, fácil de usar y accesible en diferentes dispositivos y formas de navegación."
                  : "MACS Digital Media works to make our website clear, usable and accessible across different devices and ways of browsing."}
              </p>

              <h3>{spanish ? "Lo que hacemos" : "What we do"}</h3>
              <ul>
                <li>{spanish ? "Mantenemos páginas fáciles de leer y navegar." : "Keep pages easy to read and navigate."}</li>
                <li>{spanish ? "Usamos formularios con instrucciones claras." : "Use forms with clear labels and instructions."}</li>
                <li>{spanish ? "Mantenemos acciones importantes accesibles con teclado, mouse o pantalla táctil." : "Keep important actions usable by keyboard, mouse or touchscreen."}</li>
                <li>{spanish ? "Diseñamos para teléfonos, tabletas y computadoras." : "Design for phones, tablets and desktop computers."}</li>
                <li>{spanish ? "Reducimos el movimiento cuando un visitante lo prefiere." : "Reduce motion when a visitor prefers less movement."}</li>
              </ul>

              <h3>{spanish ? "¿Necesitas ayuda?" : "Need help?"}</h3>
              <p>
                {spanish
                  ? "Si algo en el sitio de MACS es difícil de usar, dinos qué pasó y en qué página estabas."
                  : "If something on the MACS website is difficult to use, tell us what happened and which page you were on."}
              </p>
              <a className="editorial-link" href="mailto:macsdigitalmedia@gmail.com">
                macsdigitalmedia@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </m.section>
        </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
