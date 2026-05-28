import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[var(--color-dark)] py-32 md:py-40 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Reach the Studio
        </p>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8">
          Let's have a <span className="italic">conversation.</span>
        </h2>

        <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Tell us about your day — the people, the place, the feeling you want to remember. We'll get back to you within one business day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/work/shutter-studios/contact"
            className="font-mono text-xs px-8 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full hover:bg-[var(--color-cream)] transition-colors w-full sm:w-auto text-center"
          >
            Book a Consultation
          </Link>
          <a
            href="https://wa.me/2349072913605"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-8 py-4 border border-[var(--color-cream)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-cream)] hover:text-[var(--color-dark)] transition-colors w-full sm:w-auto text-center"
            >
         
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}