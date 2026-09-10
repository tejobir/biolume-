import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { addressOneLine, doctor, siteUrl } from "@/lib/doctor";

/*
 * Nunito — the brand's supporting typeface, self-hosted from the
 * official variable font files (upright + italic, full weight axis).
 */
const body = localFont({
  src: [
    {
      path: "./fonts/Nunito-Variable.ttf",
      weight: "200 1000",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Italic-Variable.ttf",
      weight: "200 1000",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

/*
 * DAZZLE Unicase — the brand's official display face, provided by the
 * designer (Thin/Light/Medium/Bold). Used sparingly (logo wordmark
 * only) per brand guidelines, always lowercase to get the signature
 * circular 'e'. Upper- and lowercase share the same height.
 */
const logo = localFont({
  src: [
    { path: "./fonts/DazzleUnicase-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/DazzleUnicase-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/DazzleUnicase-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/DazzleUnicase-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Best Dentist in Vashi, Navi Mumbai | Biolume Dental Care",
  description:
    "Searching for a dentist near me? Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai offers implants, laser dentistry, aligners & smile makeovers led by Dr. Dishani Chordia, BDS — 6+ years of experience. Book your visit today.",
  keywords: [
    "dentist near me",
    "dentist in Vashi",
    "dentist Navi Mumbai",
    "dental clinic Sector 19B Vashi",
    "dental implants",
    "laser dentistry",
    "cosmetic dentistry",
    "Dr. Dishani Chordia",
    "Biolume Dental Care",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Dentist in Vashi, Navi Mumbai | Biolume Dental Care",
    description:
      "Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai — implants, laser dentistry, aligners & smile makeovers led by Dr. Dishani Chordia, BDS.",
    url: siteUrl,
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
    title: "Best Dentist in Vashi, Navi Mumbai | Biolume Dental Care",
    description:
      "Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai — implants, laser dentistry, aligners & smile makeovers led by Dr. Dishani Chordia, BDS.",
    images: ["/biolume-social-share.jpg"],
  },
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${logo.variable}`}>
      <body className="font-sans antialiased bg-offwhite text-plum">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
