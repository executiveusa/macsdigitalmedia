"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/#what-we-build", label: "What we build" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#founding-offer", label: "Founding offer" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-link" href="/" aria-label="MACS Digital Media home" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="MACS Digital Media"
            width={500}
            height={378}
            className="brand-logo"
          />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-button__label">Menu</span>
          <span aria-hidden="true" className="menu-button__icon">
            {open ? "×" : "☰"}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${open ? " primary-navigation--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button--small button--primary" href="/apply" onClick={() => setOpen(false)}>
            Apply for a founding spot
          </Link>
        </nav>
      </div>
    </header>
  );
}
