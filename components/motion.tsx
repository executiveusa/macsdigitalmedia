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
import { usePathname } from "next/navigation";
import { useRef, type CSSProperties, type ReactNode } from "react";

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
      initial={reduceMotion ? false : { opacity: 0.72, y: 12, scale: 0.998 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: easing }}
    >
      {children}
    </m.div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  intensity = "standard",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: "soft" | "standard" | "strong";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 94%", "end 18%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 26,
    mass: 0.42,
    restDelta: 0.001,
  });

  const distance = intensity === "strong" ? 72 : intensity === "soft" ? 28 : 48;
  const exitLift = intensity === "strong" ? -20 : intensity === "soft" ? -8 : -14;

  const y = useTransform(
    progress,
    [0, 0.34, 1],
    reduceMotion ? [0, 0, 0] : [distance, 0, exitLift],
  );
  const scale = useTransform(
    progress,
    [0, 0.34, 1],
    reduceMotion ? [1, 1, 1] : [0.982, 1, 0.998],
  );
  const opacity = useTransform(
    progress,
    [0, 0.18, 1],
    reduceMotion ? [1, 1, 1] : [0.38, 1, 1],
  );
  const kickerY = useTransform(
    progress,
    [0, 0.28, 1],
    reduceMotion ? ["0px", "0px", "0px"] : ["18px", "0px", "-3px"],
  );
  const headingY = useTransform(
    progress,
    [0, 0.34, 1],
    reduceMotion ? ["0px", "0px", "0px"] : ["42px", "0px", "-9px"],
  );
  const copyY = useTransform(
    progress,
    [0, 0.38, 1],
    reduceMotion ? ["0px", "0px", "0px"] : ["28px", "0px", "-5px"],
  );
  const mediaY = useTransform(
    progress,
    [0, 0.42, 1],
    reduceMotion ? ["0px", "0px", "0px"] : ["18px", "0px", "-7px"],
  );

  return (
    <m.div
      ref={ref}
      className={className ? `reveal motion-scene ${className}` : "reveal motion-scene"}
      style={{
        y,
        scale,
        opacity,
        "--motion-kicker-y": kickerY,
        "--motion-heading-y": headingY,
        "--motion-copy-y": copyY,
        "--motion-media-y": mediaY,
      } as CSSProperties}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
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
