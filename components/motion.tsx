"use client";

import {
  AnimatePresence,
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: "soft" | "standard" | "strong";
}) {
  return <div className={className ? `reveal ${className}` : "reveal"}>{children}</div>;
}

export function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [0, 48]);
  const scale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1.01, 1.045]);

  return (
    <div ref={ref} className="editorial-hero__motion-frame">
      <m.div className="editorial-hero__motion-layer" style={{ y, scale }}>
        {children}
      </m.div>
    </div>
  );
}

export function HeroCopyMotion({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className="editorial-hero__copy-motion"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: easing }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.44, ease: easing }}
    >
      {children}
    </m.div>
  );
}

/**
 * Motion.dev UI (@motion/button-rolling-text) inspired tactile CTA link.
 * Pure transform transition on hover/focus; static under reduced-motion.
 */
export function RollingTextLink({
  href,
  label,
  trailing = "↗",
  className = "macs-btn macs-btn--primary",
}: {
  href: string;
  label: string;
  trailing?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      className={className}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <span className="macs-roll" aria-label={label}>
        <m.span
          className="macs-roll__layer"
          animate={reduceMotion ? { y: "0%" } : { y: active ? "-115%" : "0%" }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: easing }}
        >
          {label}
        </m.span>
        <m.span
          className="macs-roll__layer macs-roll__layer--clone"
          aria-hidden="true"
          animate={reduceMotion ? { y: "115%" } : { y: active ? "0%" : "115%" }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: easing }}
        >
          {label}
        </m.span>
      </span>
      {trailing ? (
        <span className="macs-btn__arrow" aria-hidden="true">
          {trailing}
        </span>
      ) : null}
    </Link>
  );
}

/**
 * Motion.dev UI (@motion/faq-plus-minus) inspired accessible disclosure list.
 */
export function FaqAccordion({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="macs-faq" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `macs-faq-panel-${index}`;
        const buttonId = `macs-faq-trigger-${index}`;

        return (
          <div className="macs-faq__item" key={item.question} role="listitem">
            <button
              id={buttonId}
              type="button"
              className="macs-faq__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="macs-faq__question">{item.question}</span>
              <span className="macs-faq__icon" aria-hidden="true">
                <span className="macs-faq__bar macs-faq__bar--h" />
                <m.span
                  className="macs-faq__bar macs-faq__bar--v"
                  animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: easing }}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="macs-faq__panel"
                  initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, ease: easing }}
                >
                  <p className="macs-faq__answer">{item.answer}</p>
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
