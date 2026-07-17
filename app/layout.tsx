import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/*
 * DAZZLE Unicase Medium — the brand's official display face, provided
 * by the designer. Used sparingly (logo wordmark only) per brand
 * guidelines. It is a unicase typeface: upper- and lowercase share the
 * same height with the signature circular 'e'.
 */
const logo = localFont({
  src: "./fonts/DazzleUnicase-Medium.otf",
  variable: "--font-logo",
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
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
