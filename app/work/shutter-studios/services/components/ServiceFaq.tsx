const faqs = [
  {
    question: "Do you travel outside Port Harcourt?",
    answer:
      "Yes. We've shot weddings across Nigeria — Lagos, Abuja, Calabar, Enugu, Kano. Travel costs are added to the base package and discussed during your consultation.",
  },
  {
    question: "What's the booking process?",
    answer:
      "It starts with a conversation — either a 30-minute call or a written inquiry. Once we've talked through what you need, we send a detailed proposal. A 30% deposit secures your date.",
  },
  {
    question: "How long after the shoot do we receive our photos?",
    answer:
      "Wedding galleries are delivered within four weeks. Portraits and commercial work are typically delivered within two weeks. Sneak peeks are shared within 48 hours.",
  },
  {
    question: "Can we request specific shots?",
    answer:
      "Absolutely. Every shoot starts with a conversation about what you're hoping to capture. We balance your specific requests with documentary moments that happen organically.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For weddings, we accept payment in three installments — deposit, midpoint, and balance before the wedding date. For smaller packages, a 50/50 split is standard.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-[var(--color-dark-elevated)]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
          Common Questions
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-12">
          What people <span className="italic">usually ask.</span>
        </h2>

        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="pb-10 border-b border-[var(--color-cream)]/10 last:border-b-0"
            >
              <p className="font-mono text-xs text-[var(--color-muted)] mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-cream)] leading-tight mb-4">
                {faq.question}
              </h3>
              <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
