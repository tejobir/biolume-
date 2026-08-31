import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/lib/doctor";

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
  title: "Bio Lume Dental Clinic — Dr. Dishani Jain | Navi Mumbai",
  description:
    "Premium dental care in Navi Mumbai. Implantology, laser dentistry, cosmetic & restorative treatments led by Dr. Dishani Jain, BDS — 6+ years of experience.",
  keywords: [
    "dentist Navi Mumbai",
    "dental implants",
    "laser dentistry",
    "cosmetic dentistry",
    "Dr. Dishani Jain",
    "Bio Lume Dental",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${logo.variable}`}>
      <body className="font-sans antialiased bg-offwhite text-plum">{children}</body>
    </html>
  );
}
