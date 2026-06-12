

export default function ContactSection() {
  return (
    <>
    <section
      id="contact"
      className="bg-[var(--color-pf-dark)] py-24 md:py-26 px-6 md:px-10 border-t border-[var(--color-pf-cream)]/10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="font-mono text-xs text-[var(--color-pf-orange)] mb-6">
            Let's Build Something
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-pf-cream)] leading-[1.05] tracking-tight max-w-3xl">
            Got a business that deserves a <span className="italic">real</span> website?
          </h2>
          <p className="text-[var(--color-pf-muted)] text-base md:text-lg leading-relaxed max-w-2xl mt-8">
            Send me a message — a few lines about your business is enough to start. I respond within one business day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 md:p-10 rounded-2xl bg-[var(--color-pf-orange)] text-[var(--color-pf-dark)] hover:bg-[var(--color-pf-cream)] transition-colors"
          >
            <p className="font-mono text-xs mb-3 opacity-70">
              Preferred
            </p>
            <h3 className="font-serif text-2xl md:text-3xl mb-2">
              Message on WhatsApp
            </h3>
            <p className="font-mono text-xs opacity-70">
              Tap to open chat →
            </p>
          </a>

            <a
         href="mailto:jonathantamunoiduari@gmail.com"
            className="group block p-8 md:p-10 rounded-2xl border border-[var(--color-pf-cream)]/20 text-[var(--color-pf-cream)] hover:border-[var(--color-pf-cream)]/40 transition-colors"
          >
            <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-3">
              Or by email
            </p>
            <h3 className="font-serif text-2xl md:text-3xl mb-2">
              Send a message
            </h3>
            <p className="font-mono text-xs text-[var(--color-pf-muted)] break-all">
              jonathantamunoiduari@gmail.com →
            </p>
          </a>
        </div>

     
      </div>
    </section>
    </>
  );
}