import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/shutter-studios/hero/hero-about.jpg"
              alt="Shutter Studios founder portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
              The Founder
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-8">
              For the photographs we{" "}
              <span className="italic">wish we had.</span>
            </h2>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
              The studio was founded with a simple frustration in mind. Across
              most Nigerian families, the most important days — weddings, naming
              ceremonies, milestone birthdays — are documented in a hurry, by
              photographers who treat the work as transactional rather than
              something worth caring about decades later.
            </p>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              Shutter Studios was built to do that work differently. To shoot
              with patience, to edit with care, and to deliver photographs that
              a family will still want to look at twenty years from now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
