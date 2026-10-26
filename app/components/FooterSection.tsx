import Link from "next/link";
import Reveal, { MaskReveal } from "./motion/Reveal";
import Stagger, { StaggerItem } from "./motion/Stagger";

const linkClass =
  "text-sm text-pf-cream hover:text-pf-orange transition-colors duration-300 ease-editorial";

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-[#1a1a1a] to-pf-dark border-t border-pf-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-10 ">
        <MaskReveal className="mb-20 md:mb-24">
          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-pf-orange leading-[0.9] tracking-tight uppercase wrap-break-word">
            Jonathan
          </h2>
        </MaskReveal>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16 pb-16 border-b border-pf-cream/10">
          <StaggerItem>
            <p className="font-mono text-xs text-pf-muted mb-4">Navigate</p>
            <ul className="space-y-3">
              <li>
                <Link href="#work" className={linkClass}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="#about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/work/shutter-studios" className={linkClass}>
                  Shutter Studios
                </Link>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-xs text-pf-muted mb-4">Elsewhere</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/jonathanprecious.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/CodeScientistJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  X
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <p className="font-mono text-xs text-pf-muted mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/2348065429005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:jonathantamunoiduari@gmail.com"
                  className={`${linkClass} break-all`}
                >
                  Email
                </a>
              </li>
            </ul>
          </StaggerItem>
        </Stagger>

        <Reveal y={0}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="font-mono text-xs text-pf-muted">
              © {currentYear} Jonathan Precious. Built in Port Harcourt.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
