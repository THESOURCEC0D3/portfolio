import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/shutter-studios/hero/hero-about.png"
              alt="Shutter Studios — three women in traditional Nigerian dress"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
              The Studio
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-8">
              Photographs that hold their{" "}
              <span className="italic">weight.</span>
            </h2>

            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
              Shutter Studios is a Port Harcourt photography practice built
              around one belief: that the photographs from your most important
              days should still move you years later. Not just look good. Move
              you.
            </p>

            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-10">
              We shoot weddings, portraits, and brand work across Nigeria, with
              a small team that brings craft and care to every frame.
            </p>

            <Link
              href="/work/shutter-studios/about"
              className="font-mono text-xs text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[var(--color-cream)] hover:border-[var(--color-cream)] transition-colors"
            >
              More about the studio →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
