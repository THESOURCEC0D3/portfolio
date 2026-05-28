import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-[var(--color-dark)] border-t border-[var(--color-cream)]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            src="/images/shutter-studios/hero/hero-services.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)] via-transparent to-[var(--color-dark)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10">
          <div className="mb-20 md:mb-32">
            <p className="font-mono text-xs text-[var(--color-gold)] mb-8">
              Shutter Studios
            </p>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-[var(--color-cream)] leading-[0.95] tracking-tight">
              See you on the <span className="italic">other side</span> of the
              lens.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 pb-16 border-b border-[var(--color-cream)]/10">
            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
                Studio
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work/shutter-studios/portfolio"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/shutter-studios/about"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/shutter-studios/services"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/work/shutter-studios/contact"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/2349072913605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
                Elsewhere
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-4">
                Studio
              </p>
              <p className="text-sm text-[var(--color-cream)] leading-relaxed">
                Port Harcourt,
                <br />
                Rivers State,
                <br />
                Nigeria.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="font-mono text-xs text-[var(--color-muted)]">
              © {currentYear} Shutter Studios. All rights reserved.
            </p>
            <p className="font-mono text-xs text-[var(--color-muted)]">
              Designed and built by{" "}
              <a
                href="/"
                className="text-[var(--color-gold)] hover:text-[var(--color-cream)] transition-colors"
              >
                Jonathan Precious
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}