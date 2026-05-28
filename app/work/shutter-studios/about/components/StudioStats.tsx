const stats = [
  { value: "120+", label: "Weddings shot" },
  { value: "14", label: "Nigerian states" },
  { value: "6 yrs", label: "In practice" },
  { value: "3", label: "Team members" },
];

export default function StudioStats() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--color-cream)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl md:text-6xl text-[var(--color-cream)] mb-2">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
