"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

// LazyMotion + `m` components ship only the animation features we load
// (domAnimation), instead of everything `motion` can do. `strict` throws if
// a full `motion.*` component sneaks in and undoes that saving.
// reducedMotion="user" skips transform animations (keeping opacity) for
// visitors whose device is set to reduce motion.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
