"use client";

import { AnimatePresence, stagger } from "motion/react";
import * as m from "motion/react-m";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DUR, EASE } from "./motion/tokens";

export default function PortfolioNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
  ];

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const menuItem = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
  };

  return (
    <>
      <header className="pf-intro-fade fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.4)] backdrop-blur-md border-b border-pf-cream/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl text-pf-orange tracking-tight"
          >
            JP
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-pf-cream hover:text-pf-orange transition-colors duration-300 ease-editorial"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-xs px-5 py-2.5 bg-pf-orange text-pf-dark rounded-full hover:bg-pf-cream transition duration-300 ease-editorial motion-safe:hover:-translate-y-px"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-pf-cream text-2xl cursor-pointer w-8 h-8 grid place-items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* mode="wait" lets the old icon fade out before the new one fades in */}
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? "✕" : "☰"}
              </m.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* AnimatePresence keeps the menu mounted long enough to play its exit */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            key="mobile-menu"
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-pf-dark md:hidden pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: DUR.fast } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <m.nav
              className="flex flex-col items-center gap-8 p-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    delayChildren: stagger(0.06, { startDelay: 0.2 }),
                  },
                },
              }}
            >
              {links.map((link) => (
                <m.div key={link.href} variants={menuItem}>
                  <Link
                    href={link.href}
                    className="font-mono text-sm text-pf-cream"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <m.div variants={menuItem} className="mt-4">
                <Link
                  href="#contact"
                  className="inline-block font-mono text-sm px-8 py-3 bg-pf-orange text-pf-dark rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </m.div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
