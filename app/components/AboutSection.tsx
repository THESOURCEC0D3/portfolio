const services = [
  {
    title: "Business Websites",
    description:
      "Clean, modern sites that make small and growing businesses look established and trustworthy online.",
  },
  {
    title: "Landing Pages",
    description:
      "Fast, focused pages built to turn visitors into inquiries, bookings, and customers.",
  },
  {
    title: "Mobile-First Builds",
    description:
      "Every site is built for the phone first — because that's where most Nigerian customers actually are.",
  },
];

const stack = ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--color-pf-dark-elevated)] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <div>
            <p className="font-mono text-xs text-[var(--color-pf-orange)] mb-6">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-pf-cream)] leading-[1.1] tracking-tight">
              A developer who actually <span className="italic">cares</span> how
              it turns out.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[var(--color-pf-muted)] text-base md:text-lg leading-relaxed mb-6">
              I'm Jonathan, a web developer based in Port Harcourt. I build
              modern, fast websites for businesses across Nigeria — the kind of
              sites that make a business look as serious online as it is in
              person.
            </p>
            <p className="text-[var(--color-pf-muted)] text-base md:text-lg leading-relaxed">
              I care about the details most developers skip: how fast a page
              loads on mobile data, how easy it is for a customer to reach you,
              and whether the whole thing actually looks good. Every project I
              take on, I build like it's my own.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-t border-[var(--color-pf-cream)]/20 pt-6"
            >
              <h3 className="font-serif text-xl md:text-2xl text-[var(--color-pf-cream)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-pf-muted)] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-5">
            Tools I build with
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-[var(--color-pf-cream)] border border-[var(--color-pf-cream)]/20 rounded-full px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
