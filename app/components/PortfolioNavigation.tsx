"use client";

import Link from "next/link";
import { useState } from "react";

export default function PortfolioNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.4)] backdrop-blur-md border-b border-[var(--color-pf-cream)]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl text-[var(--color-pf-orange)] tracking-tight"
          >
            JP
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-xs px-5 py-2.5 bg-[var(--color-pf-orange)] text-[var(--color-pf-dark)] rounded-full hover:bg-[var(--color-pf-cream)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-[var(--color-pf-cream)] text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-pf-dark)] md:hidden pt-24">
          <nav className="flex flex-col items-center gap-8 p-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-[var(--color-pf-cream)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="font-mono text-sm px-8 py-3 bg-[var(--color-pf-orange)] text-[var(--color-pf-dark)] rounded-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
