import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { addressOneLine, doctor, siteUrl } from "@/lib/doctor";

export const metadata: Metadata = {
  title: "Contact Us — Dentist Near Me in Vashi, Navi Mumbai | Biolume Dental Care",
  description:
    "Book an appointment at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai. Call, WhatsApp, or send a message — Dr. Dishani Chordia's team replies within the hour.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Biolume Dental Care — Sector 19B, Vashi",
    description:
      "Get directions, call, WhatsApp, or book an appointment at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai.",
    url: "/contact/",
    siteName: "Biolume Dental Care",
    type: "website",
    images: [
      {
        url: "/biolume-social-share.jpg",
        width: 4500,
        height: 4500,
        alt: "Biolume Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Biolume Dental Care — Sector 19B, Vashi",
    description:
      "Get directions, call, WhatsApp, or book an appointment at Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai.",
    images: ["/biolume-social-share.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
      ],
    },
    {
      "@type": "Dentist",
      name: doctor.clinic,
      url: siteUrl,
      telephone: doctor.phoneVcard,
      email: doctor.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: addressOneLine,
        addressLocality: doctor.address.locality,
        addressRegion: doctor.address.region,
        postalCode: doctor.address.postalCode,
        addressCountry: "IN",
      },
      hasMap: doctor.directionsHref,
    },
  ],
};

export default function ContactPage() {
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
            Contact
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] tracking-tight text-plum text-balance max-w-2xl">
            Find us in Sector 19B, Vashi.
          </h1>
          <p className="mt-6 text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
            Call, WhatsApp, or send a message below — we typically confirm
            appointments within the hour.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
