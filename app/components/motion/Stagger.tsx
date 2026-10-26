"use client";

import { stagger as staggerDelay } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { DIST, DUR, EASE, STAGGER, VIEWPORT } from "./tokens";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
  delay?: number;
  stagger?: number;
};

// Watches for the group to scroll into view, then plays each StaggerItem
// inside it one after another. The items don't need their own triggers:
// the "show" variant name flows down to them automatically.
export default function Stagger({
  children,
  className,
  as = "div",
  delay = 0,
  stagger = STAGGER.base,
}: StaggerProps) {
  const Tag = as === "ul" ? m.ul : m.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: staggerDelay(stagger, { startDelay: delay }),
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

// A 1px rule that draws itself left to right as part of a StaggerItem.
// Its parent needs `relative` positioning.
export function DrawLine({ className }: { className?: string }) {
  return (
    <m.span
      aria-hidden
      className={`absolute top-0 left-0 right-0 h-px origin-left ${className ?? ""}`}
      variants={{
        hidden: { scaleX: 0 },
        show: { scaleX: 1, transition: { duration: DUR.slow, ease: EASE } },
      }}
    />
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
  y?: number;
};

export function StaggerItem({
  children,
  className,
  as = "div",
  y = DIST.sm,
}: StaggerItemProps) {
  const Tag = as === "li" ? m.li : as === "span" ? m.span : m.div;

  return (
    <Tag
      data-reveal
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: DUR.base, ease: EASE },
        },
      }}
    >
      {children}
    </Tag>
  );
}
