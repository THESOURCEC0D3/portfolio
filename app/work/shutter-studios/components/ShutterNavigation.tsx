"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShutterNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/work/shutter-studios", label: "Home" },
    { href: "/work/shutter-studios/portfolio", label: "Portfolio" },
    { href: "/work/shutter-studios/about", label: "About" },
    { href: "/work/shutter-studios/services", label: "Services" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,5,5,0.5)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            href="/work/shutter-studios"
            className="font-serif text-xl text-[var(--color-cream)]"
          >
            Shutter Studios
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/work/shutter-studios/contact"
              className="font-mono text-xs px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full hover:bg-[var(--color-cream)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-[var(--color-cream)] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-dark)] md:hidden pt-24">
          <nav className="flex flex-col items-center gap-8 p-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-[var(--color-cream)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/work/shutter-studios/contact"
              className="font-mono text-sm px-8 py-3 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full mt-4"
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
