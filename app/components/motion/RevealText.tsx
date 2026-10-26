"use client";

import { stagger as staggerDelay } from "motion/react";
import * as m from "motion/react-m";
import { DUR, EASE, STAGGER, VIEWPORT } from "./tokens";

type Segment = string | { text: string; italic?: boolean };

type RevealTextProps = {
  segments: Segment[];
  as?: "h2" | "h3";
  className?: string;
  delay?: number;
  stagger?: number;
};

// A heading whose words rise one by one out of their own masks when it
// scrolls into view. Words (not lines) are animated so the heading still
// wraps naturally at every screen size.
export default function RevealText({
  segments,
  as = "h2",
  className,
  delay = 0,
  stagger = STAGGER.tight,
}: RevealTextProps) {
  const Tag = as === "h3" ? m.h3 : m.h2;

  const words = segments.flatMap((segment) => {
    const { text, italic = false } =
      typeof segment === "string" ? { text: segment } : segment;
    return text.split(" ").map((word) => ({ word, italic }));
  });

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
      {words.map(({ word, italic }, i) => (
        <span key={i}>
          {/* Outer span is the mask; padding keeps descenders (and the
              italic overhang) from being clipped */}
          <span
            className={`inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em] ${
              italic ? "pr-[0.08em] -mr-[0.08em]" : ""
            }`}
          >
            <m.span
              data-reveal
              className={`inline-block ${italic ? "italic" : ""}`}
              variants={{
                hidden: { opacity: 0, y: "105%" },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DUR.slow, ease: EASE },
                },
              }}
            >
              {word}
            </m.span>
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}
