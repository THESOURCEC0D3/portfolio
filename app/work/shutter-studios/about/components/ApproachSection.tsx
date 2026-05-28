const approachItems = [
  {
    number: "01",
    label: "Preparation",
    description:
      "Every shoot starts with a conversation. Before we ever set up a camera, we want to understand who the people are, what the day means, and what kind of photographs you'll actually want to live with afterward.",
  },
  {
    number: "02",
    label: "Presence",
    description:
      "We work quietly. The best wedding and portrait photographs happen when the camera disappears, and when the people in front of it forget it's there. We've built the studio around making that possible.",
  },
  {
    number: "03",
    label: "Patience in the edit",
    description:
      "What separates good wedding photography from forgettable wedding photography is rarely the camera. It's the edit. We spend as much time after the shoot as during it — color, tone, sequencing, the careful work of turning hundreds of frames into a story worth keeping.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-[var(--color-dark-elevated)]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Our Approach
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-12">
          How we <span className="italic">shoot.</span>
        </h2>

        <div className="space-y-12">
          {approachItems.map((item) => (
            <div key={item.number}>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-3">
                {item.number} — {item.label}
              </p>
              <p className="text-[var(--color-cream)] text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
