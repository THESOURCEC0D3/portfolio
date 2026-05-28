const packages = [
  {
    label: "Weddings",
    title: "Full-day wedding coverage",
    startingPrice: "₦450,000",
    description:
      "From preparation in the morning to the last dance at the reception. We document the day as it unfolds — ceremony, family portraits, candid moments, and the quiet in-between.",
    includes: [
      "8-10 hours of coverage",
      "Two photographers on the day",
      "350+ edited high-resolution images",
      "Online private gallery for 12 months",
      "Optional second-day traditional ceremony coverage",
    ],
  },
  {
    label: "Portraits",
    title: "Portrait sessions",
    startingPrice: "₦85,000",
    description:
      "Studio or outdoor portrait shoots for individuals, couples, families, and brands. Editorial direction and styling guidance included before the session.",
    includes: [
      "1.5-hour session",
      "Up to 3 outfit changes",
      "30-40 edited images",
      "Studio or location of your choice",
      "Pre-shoot styling consultation",
    ],
  },
  {
    label: "Brand & Editorial",
    title: "Commercial photography",
    startingPrice: "₦180,000",
    description:
      "Photography for fashion brands, creative businesses, and editorial campaigns. Half-day and full-day shoots available with full commercial usage rights.",
    includes: [
      "Half-day or full-day shoots",
      "Concept development and shot list",
      "Up to 60 edited images per half day",
      "Full commercial usage rights",
      "Optional retoucher for advanced edits",
    ],
  },
];

export default function ServicePackages() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20 md:space-y-28">
          {packages.map((pkg) => (
            <div
              key={pkg.label}
              className="grid md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-[var(--color-cream)]/10"
            >
              <div>
                <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
                  {pkg.label}
                </p>
                <p className="font-mono text-xs text-[var(--color-muted)]">
                  Starting at {pkg.startingPrice}
                </p>
              </div>

              <div className="md:col-span-2">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-6">
                  {pkg.title}
                </h2>
                <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-8">
                  {pkg.description}
                </p>

                <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
                  What's included
                </p>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="text-[var(--color-cream)] text-base md:text-lg leading-relaxed flex gap-3"
                    >
                      <span className="text-[var(--color-gold)] font-mono text-xs pt-2">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
