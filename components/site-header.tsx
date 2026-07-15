"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/maxx", label: "Agent MAXX" },
  { href: "/founding-launch", label: "Founding launch" },
  { href: "/website-rescue", label: "Website rescue" },
  { href: "/small-business", label: "Small business" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
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
          <Image
            src="/logo.png"
            alt="MACS Digital Media"
            width={500}
            height={378}
            className="brand-logo"
            priority
          />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="menu-button__label">{open ? "Close menu" : "Menu"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${open ? " primary-navigation--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const isCurrent = item.href.startsWith("/#") ? false : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="button button--small button--primary"
            href="/apply"
            aria-current={pathname === "/apply" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Apply for a founding spot
          </Link>
        </nav>
      </div>
    </header>
  );
}
