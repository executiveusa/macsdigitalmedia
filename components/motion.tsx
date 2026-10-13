"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
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

  const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [0, 74]);
  const scale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1.025, 1.075]);

  return (
    <div ref={ref} className="editorial-hero__motion-frame">
      <m.div className="editorial-hero__motion-layer" style={{ y, scale }}>
        {children}
      </m.div>
    </div>
  );
}

export function HeroCopyMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 96,
    damping: 30,
    mass: 0.52,
    restDelta: 0.001,
  });

  const y = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [0, -42]);
  const scale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1, 0.985]);
  const opacity = useTransform(progress, [0, 0.82, 1], reduceMotion ? [1, 1, 1] : [1, 0.94, 0.82]);

  return (
    <m.div
      ref={ref}
      className="editorial-hero__copy-motion"
      style={{ y, scale, opacity }}
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
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        ease: easing,
      }}
    >
      {children}
    </m.div>
  );
}
