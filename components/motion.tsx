"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      key={pathname}
      className="page-transition"
      initial={reduceMotion ? false : { opacity: 0.985 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.14, ease: easing }}
    >
      {children}
    </m.div>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className ? `reveal ${className}` : "reveal"}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0.985, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, ease: easing }}
    >
      {children}
    </m.div>
  );
}
