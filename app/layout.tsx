import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased bg-offwhite text-plum">{children}</body>
    </html>
  );
}
