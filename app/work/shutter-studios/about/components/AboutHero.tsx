export default function AboutHero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          The Studio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8 max-w-4xl">
          A small studio with a <span className="italic">long memory.</span>
        </h1>
        <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-2xl">
          Shutter Studios is a Port Harcourt photography practice founded around
          one quiet belief — that the photographs from your most important days
          should still hold their weight years from now.
        </p>
      </div>
    </section>
  );
}
