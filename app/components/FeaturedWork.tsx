import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Project = {
  name: string;
  href: string;
  displayUrl: string;
  image: string;
  alt: string;
  // "contain" shows the whole screenshot; "cover" fills the frame and crops
  imageFit: "contain" | "cover";
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "NAYA",
    href: "https://naya-care.vercel.app/",
    displayUrl: "naya-care.vercel.app",
    image: "/images/naya-preview.png",
    alt: "NAYA — personal-care storefront",
    imageFit: "contain",
    description:
      "A storefront for a local personal-care brand, with a product catalogue across skincare, hair care, body care, fragrance and grooming, individual product pages, and an order list that sends the whole order in one WhatsApp message.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion"],
  },
  {
    name: "Haven Shortlets",
    href: "https://haven-shortlets.vercel.app/",
    displayUrl: "haven-shortlets.vercel.app",
    image: "/images/haven-shortlets-preview.jpg",
    alt: "Haven Shortlets — your trusted shortlet company",
    imageFit: "contain",
    description:
      "A short-let apartment booking platform serving Port Harcourt, offering verified, reliable accommodations for visiting professionals and travelers. Guests can browse listings and book directly through the site.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Shutter Studios",
    href: "/work/shutter-studios",
    displayUrl: "jonathanprecious.com.ng/work/shutter-studios",
    image: "/images/shutter-studios-preview.jpg",
    alt: "Shutter Studios — photography studio website",
    imageFit: "cover",
    description:
      "A complete five-page website for a Nigerian photography studio — homepage, portfolio gallery, about, services, and contact. Designed with an editorial, image-led aesthetic and built mobile-first for fast loading on Nigerian networks.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Meridian Properties",
    href: "https://meridian-properties-mu.vercel.app/",
    displayUrl: "meridian-properties-mu.vercel.app",
    image: "/images/meridian-properties-preview.jpg",
    alt: "Meridian Properties — Port Harcourt real estate website",
    imageFit: "cover",
    description:
      "A real-estate website for a Port Harcourt property agency, built to showcase verified listings for sale, rent, and short-let across areas like GRA, Woji, and Eliozu. Designed to convert visitors into buyers.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
];

// Internal routes use Next's <Link> for client-side navigation;
// external sites open in a new tab.
function ProjectLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-pf-dark py-24 md:py-26 px-6 md:px-10 border-t border-pf-cream/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="font-mono text-xs text-pf-orange mb-6">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pf-cream leading-[1.1] tracking-tight">
            Work I&apos;m <span className="italic">proud</span> to show.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project) => (
            <div key={project.name} className="group">
              <ProjectLink
                href={project.href}
                className="block relative rounded-xl overflow-hidden border border-pf-cream/10 bg-pf-dark-elevated"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-pf-cream/10">
                  <span className="w-3 h-3 rounded-full bg-pf-cream/20" />
                  <span className="w-3 h-3 rounded-full bg-pf-cream/20" />
                  <span className="w-3 h-3 rounded-full bg-pf-cream/20" />
                  <span className="font-mono text-[10px] text-pf-muted ml-4">
                    {project.displayUrl}
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className={`${
                      project.imageFit === "cover"
                        ? "object-cover object-top"
                        : "object-contain"
                    } group-hover:scale-[1.02] transition-transform duration-700`}
                    sizes="100vw"
                  />
                </div>
              </ProjectLink>

              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-10">
                <div className="md:col-span-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-pf-cream mb-4">
                    {project.name}
                  </h3>
                  <p className="text-pf-muted text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ProjectLink
                    href={project.href}
                    className="font-mono text-xs text-pf-orange border-b border-pf-orange pb-1 hover:text-pf-cream hover:border-pf-cream transition-colors"
                  >
                    View the live site →
                  </ProjectLink>
                </div>

                <div>
                  <p className="font-mono text-xs text-pf-muted mb-4">
                    Built with
                  </p>
                  <ul className="space-y-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="font-mono text-xs text-pf-cream"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
