// Shared motion values for the portfolio. Keep these in sync with the
// --pf-* motion variables in app/globals.css.

// Soft expo-out: fast start, long gentle settle
export const EASE = [0.22, 1, 0.36, 1] as const;

// Seconds
export const DUR = { fast: 0.3, base: 0.6, slow: 0.9, slower: 1.2 } as const;

// Pixels, used for translateY only
export const DIST = { sm: 12, md: 24, lg: 40 } as const;

// Seconds between siblings
export const STAGGER = { tight: 0.05, base: 0.08, loose: 0.12 } as const;

// Animate once, when 20% of the element is visible. No shrunken bottom
// margin: content at the very end of the page could never scroll past it.
export const VIEWPORT = { once: true, amount: 0.2 } as const;
