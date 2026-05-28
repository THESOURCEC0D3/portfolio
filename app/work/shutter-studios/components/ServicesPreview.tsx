import Link from "next/link";

const services = [
  {
    label: "Weddings",
    description:
      "Full-day coverage from preparation to reception. Traditional and white weddings, in Port Harcourt and across Nigeria.",
    startingPrice: "₦450,000",
  },
  {
    label: "Portraits",
    description:
      "Studio and outdoor portrait sessions for individuals, couples, and families. Editorial direction and styling guidance included.",
    startingPrice: "₦85,000",
  },
  {
    label: "Brand & Editorial",
    description:
      "Commercial photography for fashion brands, creative businesses, and editorial campaigns. Half-day and full-day shoots.",
    startingPrice: "₦180,000",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[var(--color-dark-elevated)] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight">
            Built around the <span className="italic">moments</span> that
            matter.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-16">
          {services.map((service) => (
            <div
              key={service.label}
              className="border-t border-[var(--color-cream)]/20 pt-8"
            >
              <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
                {service.label}
              </p>
              <p className="text-[var(--color-cream)] text-base md:text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                Starting at {service.startingPrice}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/work/shutter-studios/services"
          className="font-mono text-xs text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[var(--color-cream)] hover:border-[var(--color-cream)] transition-colors"
        >
          See full pricing and packages →
        </Link>
      </div>
    </section>
  );
}
