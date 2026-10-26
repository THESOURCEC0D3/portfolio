"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { DIST, DUR, EASE, VIEWPORT } from "./tokens";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

// Fades and rises its children into place the first time they scroll into view.
export default function Reveal({
  children,
  className,
  delay = 0,
  duration = DUR.base,
  y = DIST.md,
}: RevealProps) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

// Fills its (positioned) parent and eases an image from slightly zoomed in
// to its resting size as it scrolls into view. Scale only: the image is
// never hidden.
export function ImageSettle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      data-reveal
      className={`absolute inset-0 ${className ?? ""}`}
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: DUR.slower, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

// Block-level mask: the child rises up from behind an invisible edge.
// Used for single large words where inline masks would stop text wrapping.
// The visible mask is what gets watched, not the child: the child starts
// clipped out of view, so the browser would report it as never visible.
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = DUR.slower,
}: Omit<RevealProps, "y">) {
  return (
    <m.div
      className={`overflow-hidden ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ ...VIEWPORT, amount: 0.4 }}
    >
      <m.div
        data-reveal
        variants={{
          hidden: { opacity: 0, y: "105%" },
          show: { opacity: 1, y: 0, transition: { duration, ease: EASE, delay } },
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
