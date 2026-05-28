import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Reach the Studio
        </p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8">
          Tell us about your <span className="italic">day.</span>
        </h2>
        <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Every project starts with a conversation. We'll get back to you within
          one business day.
        </p>
        <Link
          href="/work/shutter-studios/contact"
          className="font-mono text-xs px-8 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-full hover:bg-[var(--color-cream)] transition-colors inline-block"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
