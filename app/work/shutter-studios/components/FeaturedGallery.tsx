import Image from "next/image";
import Link from "next/link";

const featuredImages = [
  {
    src: "/images/shutter-studios/weddings/wedding-01.jpg",
    alt: "Groom kissing bride's henna-decorated hand",
    span: "tall",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-12.jpg" /* placeholder, we'll fix */,
    alt: "Yoruba couple in traditional gold aso oke",
    span: "short",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-09.jpg",
    alt: "Church wedding couple in blue suit",
    span: "short",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-03.jpg",
    alt: "Northern couple foreheads together",
    span: "tall",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-11.jpg",
    alt: "Man in the middle of a group of men looking at the camera.",
    span: "tall",
  },
  {
    src: "/images/shutter-studios/weddings/wedding-05.jpg",
    alt: "First dance with sparklers",
    span: "short",
  },
];

export default function FeaturedGallery() {
  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="font-mono text-xs text-[var(--color-gold)] mb-6">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] leading-[1.1] tracking-tight max-w-2xl">
              A small <span className="italic">slice</span> of the archive.
            </h2>
          </div>

          <Link
            href="/work/shutter-studios/portfolio"
            className="font-mono text-xs text-[var(--color-gold)] border-b border-[var(--color-gold)] pb-1 hover:text-[var(--color-cream)] hover:border-[var(--color-cream)] transition-colors self-start md:self-end whitespace-nowrap"
          >
            See full portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {featuredImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden ${
                image.span === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"
              }`}
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
