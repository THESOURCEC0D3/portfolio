export default function ContactHero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Reach the Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8 max-w-4xl">
          Let's have a <span className="italic">conversation.</span>
        </h1>
        <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-2xl">
          Every project starts with a conversation. Tell us about your day — the
          people, the place, the feeling you want to remember. We respond within
          one business day.
        </p>
      </div>
    </section>
  );
}
