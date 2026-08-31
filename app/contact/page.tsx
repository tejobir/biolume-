import type { Metadata } from "next";
import { DigitalCard } from "@/components/DigitalCard";
import { addressOneLine, doctor, siteUrl } from "@/lib/doctor";

/*
 * Digital visiting card — the destination of the QR code printed on
 * Dr. Jain's physical card. The QR encodes this URL and nothing else,
 * so the details below can change without reprinting anything.
 */

const title = `${doctor.fullName} — ${doctor.specialization} | ${doctor.clinic}`;
const description = `Save Dr. Dishani Jain's contact card, call or WhatsApp the clinic, get directions to ${doctor.clinic}, ${doctor.address.street}, ${doctor.address.locality}, or book an appointment.`;
const cardUrl = `${siteUrl}/contact/`;
const ogImage = `${siteUrl}${doctor.photo}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${doctor.fullName} · ${doctor.clinic}`,
    description,
    url: cardUrl,
    siteName: doctor.clinic,
    type: "profile",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        // Actual pixel size of the portrait — WhatsApp lays the preview out
        // from these, so they must match the file.
        width: 853,
        height: 1280,
        alt: doctor.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctor.fullName} · ${doctor.clinic}`,
    description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${cardUrl}#clinic`,
      name: doctor.clinic,
      url: siteUrl,
      telephone: doctor.phoneVcard,
      email: doctor.email,
      image: ogImage,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.address.street,
        addressLocality: doctor.address.locality,
        addressRegion: doctor.address.region,
        postalCode: doctor.address.postalCode,
        addressCountry: "IN",
      },
      hasMap: doctor.directionsHref,
    },
    {
      "@type": "Physician",
      "@id": `${cardUrl}#doctor`,
      name: doctor.fullName,
      honorificPrefix: doctor.prefix,
      honorificSuffix: doctor.suffix,
      jobTitle: doctor.specialization,
      medicalSpecialty: "Dentistry",
      image: ogImage,
      url: cardUrl,
      telephone: doctor.phoneVcard,
      email: doctor.email,
      worksFor: { "@id": `${cardUrl}#clinic` },
      address: {
        "@type": "PostalAddress",
        streetAddress: addressOneLine,
        addressCountry: "IN",
      },
    },
  ],
};

export default function ContactCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DigitalCard />
    </>
  );
}
