import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import Stagger, { DrawLine, StaggerItem } from "./motion/Stagger";
import { STAGGER } from "./motion/tokens";

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
      className="bg-pf-dark-elevated py-24 md:py-26 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          <div>
            <Reveal y={12}>
              <p className="font-mono text-xs text-pf-orange mb-6">About</p>
            </Reveal>
            <RevealText
              segments={[
                "A developer who actually",
                { text: "cares", italic: true },
                "how it turns out.",
              ]}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-pf-cream leading-[1.1] tracking-tight"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="text-pf-muted text-base md:text-lg leading-relaxed mb-6">
                I&apos;m Jonathan, a web developer based in Port Harcourt. I
                build modern, fast websites for businesses across Nigeria — the
                kind of sites that make a business look as serious online as it
                is in person.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-pf-muted text-base md:text-lg leading-relaxed">
                I care about the details most developers skip: how fast a page
                loads on mobile data, how easy it is for a customer to reach
                you, and whether the whole thing actually looks good. Every
                project I take on, I build like it&apos;s my own.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger
          stagger={STAGGER.loose}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          {services.map((service) => (
            <StaggerItem key={service.title} className="relative pt-6">
              <DrawLine className="bg-pf-cream/20" />
              <h3 className="font-serif text-xl md:text-2xl text-pf-cream mb-3">
                {service.title}
              </h3>
              <p className="text-pf-muted text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <div>
          <Reveal y={12}>
            <p className="font-mono text-xs text-pf-muted mb-5">
              Tools I build with
            </p>
          </Reveal>
          <Stagger stagger={STAGGER.tight} className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <StaggerItem
                key={tech}
                as="span"
                y={8}
                className="font-mono text-xs text-pf-cream border border-pf-cream/20 rounded-full px-4 py-2"
              >
                {tech}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
