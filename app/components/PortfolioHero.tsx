import Image from "next/image";
import Link from "next/link";

// The h1 is split into words so each one can rise out of its own mask.
const headline = [
  { text: "I build modern websites that make businesses" },
  { text: "stand out", italic: true },
  { text: "online." },
];

// ms before the first word starts, then the gap between each word
const HEADLINE_START = 160;
const WORD_STEP = 40;

export default function PortfolioHero() {
  let wordIndex = 0;

  return (
    <section className="min-h-screen bg-pf-dark flex items-center px-6 md:px-10 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="pf-intro-rise font-mono text-sm md:text-lg text-pf-orange mb-2">
              Hi, I&apos;m Jonathan Precious
            </p>
            <p className="pf-intro-rise [animation-delay:80ms] font-mono text-xs text-pf-muted mb-6">
              Web Developer · Port Harcourt
            </p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pf-cream leading-[1.1] tracking-tight mb-8">
              {headline.map((segment) =>
                segment.text.split(" ").map((word) => {
                  const delay = HEADLINE_START + wordIndex++ * WORD_STEP;
                  return (
                    <span key={`${word}-${delay}`}>
                      {/* Outer span is the mask; padding keeps descenders
                          (and the italic overhang) from being clipped */}
                      <span
                        className={`inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em] ${
                          segment.italic ? "pr-[0.08em] -mr-[0.08em]" : ""
                        }`}
                      >
                        <span
                          className={`pf-intro-mask inline-block ${
                            segment.italic ? "italic" : ""
                          }`}
                          style={{ animationDelay: `${delay}ms` }}
                        >
                          {word}
                        </span>
                      </span>{" "}
                    </span>
                  );
                })
              )}
            </h1>

            <p className="pf-intro-rise [animation-delay:700ms] text-pf-muted text-base md:text-lg leading-relaxed max-w-md mb-10">
              Fast, mobile-first websites for businesses across Nigeria —
              designed to build trust and turn visitors into customers.
            </p>

            <div className="pf-intro-rise [animation-delay:800ms] flex flex-col sm:flex-row gap-4">
              <Link
                href="#work"
                className="font-mono text-xs px-7 py-3.5 bg-pf-orange text-pf-dark rounded-full hover:bg-pf-cream transition duration-300 ease-editorial motion-safe:hover:-translate-y-0.5 text-center"
              >
                See My Work
              </Link>
              <Link
                href="#contact"
                className="font-mono text-xs px-7 py-3.5 border border-pf-cream/40 text-pf-cream rounded-full hover:bg-pf-cream hover:text-pf-dark transition duration-300 ease-editorial motion-safe:hover:-translate-y-0.5 text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-3/4 w-full max-w-md mx-auto overflow-hidden">
              {/* Only scale animates, never opacity, so the portrait (the
                  page's LCP element) is visible from the first frame */}
              <div className="pf-intro-settle absolute inset-0">
                <Image
                  src="/images/jonathan.jpg"
                  alt="Jonathan Precious, web developer in Port Harcourt"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
