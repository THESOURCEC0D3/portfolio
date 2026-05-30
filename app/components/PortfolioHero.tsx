import Image from "next/image";
import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section className="min-h-screen bg-[var(--color-pf-dark)] flex items-center px-6 md:px-10 pt-28 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="font-mono text-sm md:text-lg text-[var(--color-pf-orange)] mb-2">
              Hi, I'm Jonathan Precious
            </p>
            <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-6">
              Web Developer · Port Harcourt
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-pf-cream)] leading-[1.1] tracking-tight mb-8">
              I build modern websites that make businesses{" "}
              <span className="italic">stand out</span> online.
            </h1>

            <p className="text-[var(--color-pf-muted)] text-base md:text-lg leading-relaxed max-w-md mb-10">
              Fast, mobile-first websites for businesses across Nigeria —
              designed to build trust and turn visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#work"
                className="font-mono text-xs px-7 py-3.5 bg-[var(--color-pf-orange)] text-[var(--color-pf-dark)] rounded-full hover:bg-[var(--color-pf-cream)] transition-colors text-center"
              >
                See My Work
              </Link>
              <Link
                href="#contact"
                className="font-mono text-xs px-7 py-3.5 border border-[var(--color-pf-cream)]/40 text-[var(--color-pf-cream)] rounded-full hover:bg-[var(--color-pf-cream)] hover:text-[var(--color-pf-dark)] transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden">
              <Image
                src="/images/jonathan.jpg"
                alt="Jonathan Precious, web developer in Port Harcourt"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
