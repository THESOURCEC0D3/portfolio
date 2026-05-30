import Link from "next/link";

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[var(--color-pf-dark)] border-t border-[var(--color-pf-cream)]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-10 ">
        <div className="mb-20 md:mb-24">
          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-[var(--color-pf-orange)] leading-[0.9] tracking-tight uppercase wrap-break-word">
            Jonathan
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 pb-16 border-b border-[var(--color-pf-cream)]/10">
          <div>
            <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#work"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/work/shutter-studios"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  Shutter Studios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-4">
              Elsewhere
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/your_ig_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/CodeScientistJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/2349072913605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:jonathantamunoiduari@gmail.com"
                  className="text-sm text-[var(--color-pf-cream)] hover:text-[var(--color-pf-orange)] transition-colors break-all"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="font-mono text-xs text-[var(--color-pf-muted)]">
            © {currentYear} Jonathan Precious. Built in Port Harcourt.
          </p>
        </div>
      </div>
    </footer>
  );
}