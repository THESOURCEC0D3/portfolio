import Image from "next/image";
import Footer from "../components/Footer";

const weddings = [
  {
    src: "/images/shutter-studios/weddings/wedding-01.jpg",
    alt: "Groom kissing bride's henna hand",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-02.jpg",
    alt: "Northern bride in white gown",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-03.jpg",
    alt: "Northern couple foreheads together",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-04.jpg",
    alt: "Couple in white tuxedo and dress",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-05.jpg",
    alt: "First dance with sparklers",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-06.jpg",
    alt: "Groom kissing bride with tiara",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-07.jpg",
    alt: "Yoruba couple in gold aso oke",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-08.jpg",
    alt: "Igbo couple in green and red traditional",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-09.jpg",
    alt: "Yoruba couple in fuchsia",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-10.jpg",
    alt: "Couple at church wedding in blue suit",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-11.jpg",
    alt: "Couple at church wedding in blue suit",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-12.jpg",
    alt: "Couple at church wedding in blue suit",
  },
];

const portraits = [
  {
    src: "/images/shutter-studios/portraits/portrait-01.jpg",
    alt: "Two women in red gele",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-02.jpg",
    alt: "Four women in colorful headwraps",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-03.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-04.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-05.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-06.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-07.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-08.jpg",
    alt: "Woman in blue ankara with sunglasses",
  },
  {
    src: "/images/shutter-studios/portraits/portrait-09.jpg",
    alt: "Woman in blue ankara with sunglasses",
  }
];

const events = [
  {
    src: "/images/shutter-studios/events/event-01.jpg",
    alt: "Groomsmen in white agbada",
  },
  {
    src: "/images/shutter-studios/events/event-02.jpg",
    alt: "Man at decorated event",
  },
  {
    src: "/images/shutter-studios/events/event-03.jpg",
    alt: "Couple on staircase in black",
  },
  {
    src: "/images/shutter-studios/events/event-04.jpg",
    alt: "Couple on staircase in black",
  },
  {
    src: "/images/shutter-studios/events/event-05.jpg",
    alt: "Couple on staircase in black",
  },
  {
    src: "/images/shutter-studios/events/event-06.jpg",
    alt: "Couple on staircase in black",
  },
];

function GallerySection({
  label,
  title,
  description,
  images,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <section className="py-10 md:py-18 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="font-mono text-xs text-[var(--color-gold)] mb-4">
            {label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-cream)] leading-[1.1] tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--color-dark)]">
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
            The Archive
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[1.05] tracking-tight mb-8 max-w-4xl">
            A working <span className="italic">archive</span> of moments worth
            keeping.
          </h1>
          <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-xl">
            Selected work across weddings, portraits, and events — shot across
            Nigeria, edited with care.
          </p>
        </div>
      </section>

      <section className=" px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/shutter-studios/hero/hero-portfolio.jpg"
              alt="Featured portfolio image — Igbo bride with coral crown"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <GallerySection
        label="Weddings"
        title={
          <>
            The <span className="italic">ceremony</span>, the people, the day.
          </>
        }
        description="Full-day wedding coverage across Nigerian traditions — Yoruba, Igbo, Hausa, Edo, and contemporary Christian and Muslim ceremonies. Documented as it unfolds, not as it's posed."
        images={weddings}
      />

      <GallerySection
        label="Portraits"
        title={
          <>
            People, <span className="italic">held still.</span>
          </>
        }
        description="Studio and outdoor portrait sessions. Editorial direction, considered styling, and the time to make something that doesn't look like everyone else's photographs."
        images={portraits}
      />

      <GallerySection
        label="Events"
        title={
          <>
            Coverage of the <span className="italic">in-between</span>.
          </>
        }
        description="Engagements, anniversaries, family gatherings, brand activations, and the gatherings that don't have a name yet. Discreet, prepared, and present."
        images={events}
      />

      <Footer />
    </main>
  );
}
