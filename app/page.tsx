import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothAnchors } from "@/components/SmoothAnchors";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Doctor } from "@/components/Doctor";
import { Studio } from "@/components/Studio";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { addressOneLine, doctor, siteUrl } from "@/lib/doctor";

/*
 * Dentist (LocalBusiness) JSON-LD lives on the homepage only. In app/layout.tsx
 * it would leak onto every service and blog page. Never add aggregateRating or
 * Review here: scripts/check-schema.mjs fails the build if either appears.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteUrl}/#clinic`,
  name: doctor.clinic,
  url: siteUrl,
  image: `${siteUrl}${doctor.photo}`,
  telephone: doctor.phoneVcard,
  email: doctor.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: addressOneLine,
    addressLocality: doctor.address.locality,
    addressRegion: doctor.address.region,
    postalCode: doctor.address.postalCode,
    addressCountry: "IN",
  },
  hasMap: doctor.directionsHref,
  medicalSpecialty: "Dentistry",
  founder: {
    "@type": "Person",
    name: doctor.fullName,
    jobTitle: doctor.specialization,
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <ScrollProgress />
      <SmoothAnchors />
      <Navbar />
      <Hero />
      <About />
      <Doctor />
      <Studio />
      <Marquee />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
