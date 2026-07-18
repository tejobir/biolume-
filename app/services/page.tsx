import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicePages } from "@/lib/servicePages";

export const metadata: Metadata = {
  title: "Dental Services in Vashi, Navi Mumbai | Biolume Dental Care",
  description:
    "Browse all dental treatments at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai — implants, laser dentistry, smile makeover, braces, root canal, and preventive care.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dental Services in Vashi, Navi Mumbai | Biolume Dental Care",
    description:
      "Browse all dental treatments at Biolume Dental Care, Sector 19B, Vashi — led by Dr. Dishani Jain, implantologist and laser specialist.",
    url: "/services",
    siteName: "Biolume Dental Care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services in Vashi, Navi Mumbai | Biolume Dental Care",
    description: "Browse all treatments at Biolume Dental Care, Vashi — implants, laser, smile design, aligners, root canal, and more.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://biolumedental.in/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://biolumedental.in/services" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Dental Services at Biolume Dental Care",
      itemListElement: servicePages.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://biolumedental.in/services/${s.slug}`,
        name: s.title,
      })),
    },
  ],
};

export default function ServicesHub() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 surface-warm-teal">
        <div className="container-x">
          <div className="text-[11px] uppercase tracking-[0.22em] text-teal/80 mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-teal/50" />
            Treatments
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-plum text-balance max-w-2xl">
            Every service we offer — and why it matters.
          </h1>
          <p className="mt-6 text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
            Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai — led by Dr. Dishani Jain, BDS,
            Fellowship in Implantology and Laser Dentistry.
          </p>
        </div>
      </section>

      {/* Service cards grid */}
      <section className="container-x py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePages.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-plum/8 bg-cream hover:border-teal/30 transition-colors duration-300 shadow-soft"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={s.heroImage}
                  alt={s.heroImageAlt}
                  fill
                  quality={75}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-7">
                <h2 className="text-[13px] uppercase tracking-[0.16em] font-semibold text-teal group-hover:text-plum transition-colors">
                  {s.title}
                </h2>
                <p className="mt-3 text-[14px] leading-[1.7] text-plum/60 text-pretty flex-1">
                  {s.metaDescription.replace(/\s*Book now\.?\s*$/i, "").replace(/\s*Book a consultation\.?\s*$/i, "").replace(/\s*Book your next visit\.?\s*$/i, "")}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-teal font-medium tracking-wide">
                  Learn More
                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="surface-warm-mint">
        <div className="container-x py-20 md:py-24 text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-plum tracking-tight leading-snug">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-[15.5px] text-plum/65 max-w-lg mx-auto text-pretty">
            Book a general consultation at Biolume Dental Care, Sector 19B, Vashi. We will
            assess your teeth, answer your questions, and recommend only what you actually need.
          </p>
          <Link
            href="/#contact"
            className="mt-8 group inline-flex items-center gap-3 rounded-full bg-plum text-cream px-8 py-4 text-sm tracking-wide hover:bg-teal transition-colors duration-300"
          >
            Book a Consultation
            <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
