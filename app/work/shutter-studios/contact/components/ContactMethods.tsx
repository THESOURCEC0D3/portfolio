import Link from "next/link";

export default function ContactMethods() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="border-t border-[var(--color-cream)]/20 pt-8">
            <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
              By Form
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] leading-tight mb-4">
              Tell us in detail
            </h3>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
              For couples and clients who want to share the full picture in writing. We'll come back to you with a detailed proposal within one business day.
            </p>
            <Link
              href="#inquiry-form"
              className="font-mono text-xs text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[var(--color-cream)] hover:border-[var(--color-cream)] transition-colors"
            >
              Open the form →
            </Link>
          </div>

          <div className="border-t border-[var(--color-cream)]/20 pt-8">
            <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
              On WhatsApp
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-cream)] leading-tight mb-4">
              Send us a message
            </h3>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
              The fastest way to reach us. Send a voice note or a few lines about what you're planning, and we'll pick up from there.
            </p>
            <a
              href="https://wa.me/2349072913605"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[var(--color-cream)] hover:border-[var(--color-cream)] transition-colors"
            >
              Open WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}