"use client";

import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
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

type HeaderMode = "top" | "up" | "down";

export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const { copy, locale } = useSitePreferences();
  const common = copy.common;
  const [open, setOpen] = useState(false);
  const [headerMode, setHeaderMode] = useState<HeaderMode>("top");
  const previousY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const spanish = locale === "es-MX";
  const navigation = [
    { href: "/programs", label: spanish ? "Programas" : "Programs" },
    { href: "/work", label: spanish ? "Trabajo" : "Work" },
    { href: "/story", label: spanish ? "Historia" : "Story" },
    { href: "/built-here", label: spanish ? "Hecho aquí" : "Built Here" },
  ];
  const fitLabel = spanish ? "Cuéntanos qué está atorado" : "Tell us what's important";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (open) return;
    const previous = previousY.current;
    const delta = latest - previous;

    if (latest < 36) {
      setHeaderMode("top");
    } else if (delta > 2) {
      setHeaderMode("down");
    } else if (delta < -2) {
      setHeaderMode("up");
    }

    previousY.current = latest;
  });

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

  const isTop = headerMode === "top";
  const isDown = headerMode === "down";

  return (
    <header
      className={`editorial-header editorial-header--${headerMode}${open ? " editorial-header--menu-open" : ""}`}
      data-scroll-mode={headerMode}
    >
      <m.div
        className="editorial-header__inner"
        animate={
          reduceMotion || open
            ? { y: 0 }
            : { y: isDown ? -6 : 0 }
        }
        transition={{ type: "spring", stiffness: 430, damping: 36, mass: 0.45 }}
      >
        <m.div
          className="editorial-brand__motion"
          animate={
            reduceMotion || open
              ? { scale: 1, y: 0 }
              : { scale: isTop ? 1 : isDown ? 0.88 : 0.94, y: isTop ? 0 : -2 }
          }
          transition={{ type: "spring", stiffness: 480, damping: 34, mass: 0.42 }}
        >
          <Link className="editorial-brand" href="/" aria-label={common.homeLabel} onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="MACS Digital Media" width={500} height={378} priority />
          </Link>
        </m.div>

        <m.div
          className="editorial-header__actions"
          animate={
            reduceMotion || open
              ? { scale: 1, y: 0 }
              : { scale: isTop ? 1 : 0.97, y: isTop ? 0 : -1 }
          }
          transition={{ type: "spring", stiffness: 440, damping: 34, mass: 0.44 }}
        >
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
        </m.div>
      </m.div>

      <AnimatePresence>
        {open ? (
          <m.nav
            ref={menuRef}
            id="editorial-primary-navigation"
            className="editorial-menu"
            aria-label={common.primaryNav}
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="editorial-menu__inner">
              <div className="editorial-menu__primary">
                {navigation.map((item, index) => (
                  <m.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.48,
                      delay: reduceMotion ? 0 : 0.045 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </m.div>
                ))}
              </div>
              <m.div
                className="editorial-menu__meta"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : 0.16 }}
              >
                <Link
                  className="editorial-menu__mobile-cta"
                  href="/apply"
                  onClick={() => setOpen(false)}
                >
                  {fitLabel} ↗
                </Link>
                <PreferenceControls showTheme={false} />
              </m.div>
            </div>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
