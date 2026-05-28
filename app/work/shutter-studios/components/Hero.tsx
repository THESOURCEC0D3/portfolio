import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/shutter-studios/hero/hero-main.jpg"
          alt="Shutter Studios — Nigerian wedding photography"
          fill
          priority
          className="object-cover object-[70%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.4)] via-[rgba(5,5,5,0.2)] to-[rgba(5,5,5,0.7)]" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
              Now booking 2026 weddings
            </p>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8">
              Captured the way it <span className="italic">felt.</span>
            </h1>

            <p className="text-[var(--color-cream)] text-base md:text-lg max-w-md mb-10 leading-relaxed">
              A Port Harcourt photography studio. Weddings, portraits, and brand
              work across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work/shutter-studios/contact"
                className="font-mono text-xs px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full hover:bg-[var(--color-cream)] transition-colors text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work/shutter-studios/portfolio"
                className="font-mono text-xs px-7 py-3.5 border border-[var(--color-cream)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-dark)] transition-colors text-center"
              >
                See Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}