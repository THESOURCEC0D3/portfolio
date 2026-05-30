import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-[var(--color-pf-dark)] py-24 md:py-26 px-6 md:px-10 border-t border-[var(--color-pf-cream)]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="font-mono text-xs text-[var(--color-pf-orange)] mb-6">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-pf-cream)] leading-[1.1] tracking-tight">
            Work I'm <span className="italic">proud</span> to show.
          </h2>
        </div>

        <div className="group">
          <Link
            href="/work/shutter-studios"
            className="block relative rounded-xl overflow-hidden border border-[var(--color-pf-cream)]/10 bg-[var(--color-pf-dark-elevated)]"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-pf-cream)]/10">
              <span className="w-3 h-3 rounded-full bg-[var(--color-pf-cream)]/20" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-pf-cream)]/20" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-pf-cream)]/20" />
              <span className="font-mono text-[10px] text-[var(--color-pf-muted)] ml-4">
                jonathanprecious.com.ng/work/shutter-studios
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/shutter-studios-preview.jpg"
                alt="Shutter Studios — photography studio website"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                sizes="100vw"
              />
            </div>
          </Link>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-10">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-pf-cream)] mb-4">
                Shutter Studios
              </h3>
              <p className="text-[var(--color-pf-muted)] text-base md:text-lg leading-relaxed mb-6">
                A complete five-page website for a Nigerian photography studio —
                homepage, portfolio gallery, about, services, and contact.
                Designed with an editorial, image-led aesthetic and built
                mobile-first for fast loading on Nigerian networks.
              </p>
              <Link
                href="/work/shutter-studios"
                className="font-mono text-xs text-[var(--color-pf-orange)] border-b border-[var(--color-pf-orange)] pb-1 hover:text-[var(--color-pf-cream)] hover:border-[var(--color-pf-cream)] transition-colors"
              >
                View the live site →
              </Link>
            </div>

            <div>
              <p className="font-mono text-xs text-[var(--color-pf-muted)] mb-4">
                Built with
              </p>
              <ul className="space-y-2">
                {["Next.js", "React", "Tailwind CSS", "Vercel"].map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-[var(--color-pf-cream)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
