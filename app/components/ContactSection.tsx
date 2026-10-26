import Reveal from "./motion/Reveal";
import RevealText from "./motion/RevealText";
import Stagger, { StaggerItem } from "./motion/Stagger";
import { STAGGER } from "./motion/tokens";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-pf-dark py-24 md:py-26 px-6 md:px-10 border-t border-pf-cream/10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <Reveal y={12}>
            <p className="font-mono text-xs text-pf-orange mb-6">
              Let&apos;s Build Something
            </p>
          </Reveal>
          <RevealText
            segments={[
              "Got a business that deserves a",
              { text: "real", italic: true },
              "website?",
            ]}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-pf-cream leading-[1.05] tracking-tight max-w-3xl"
          />
          <Reveal delay={0.2}>
            <p className="text-pf-muted text-base md:text-lg leading-relaxed max-w-2xl mt-8">
              Send me a message — a few lines about your business is enough to
              start. I respond within one business day.
            </p>
          </Reveal>
        </div>

        <Stagger
          stagger={STAGGER.loose}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          <StaggerItem y={24}>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 md:p-10 rounded-2xl bg-pf-orange text-pf-dark hover:bg-pf-cream transition duration-400 ease-editorial motion-safe:hover:-translate-y-1"
            >
              <p className="font-mono text-xs mb-3 opacity-70">Preferred</p>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">
                Message on WhatsApp
              </h3>
              <p className="font-mono text-xs opacity-70">
                Tap to open chat{" "}
                <span className="inline-block transition-transform duration-300 ease-editorial motion-safe:group-hover:translate-x-1">
                  →
                </span>
              </p>
            </a>
          </StaggerItem>

          <StaggerItem y={24}>
            <a
              href="mailto:jonathantamunoiduari@gmail.com"
              className="group block p-8 md:p-10 rounded-2xl border border-pf-cream/20 text-pf-cream hover:border-pf-cream/40 transition duration-400 ease-editorial motion-safe:hover:-translate-y-1"
            >
              <p className="font-mono text-xs text-pf-muted mb-3">
                Or by email
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">
                Send a message
              </h3>
              <p className="font-mono text-xs text-pf-muted break-all">
                jonathantamunoiduari@gmail.com{" "}
                <span className="inline-block transition-transform duration-300 ease-editorial motion-safe:group-hover:translate-x-1">
                  →
                </span>
              </p>
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
