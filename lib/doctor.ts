/*
 * Single source of truth for the doctor + clinic contact details.
 *
 * Everything that renders a phone number, an email, an address or a
 * WhatsApp link on this site reads from here — the homepage contact
 * block, the footer, and the digital visiting card at /contact.
 * Update a value once and it changes everywhere, including the .vcf
 * that visitors download from the visiting card. The printed QR code
 * encodes the page URL only, so contact details can change freely
 * without reprinting anything.
 *
 * TODO (client): replace the phone placeholders below with the real
 * clinic number. They intentionally mirror the placeholders that were
 * already on the site so nothing regresses in the meantime.
 */

/** Canonical origin — used for absolute OG/JSON-LD URLs and the vCard. */
export const siteUrl = "https://biolumedental.in";

/**
 * Digits-only, E.164 without the leading "+" — what wa.me expects.
 * DUMMY VALUE — replace with the real clinic number before printing
 * the visiting card or going live.
 */
const phoneE164Digits = "919876543210";

export const doctor = {
  // Identity
  firstName: "Dishani",
  lastName: "Jain",
  prefix: "Dr.",
  fullName: "Dr. Dishani Jain",
  suffix: "BDS",
  specialization: "Implantologist & Laser Dentistry Specialist",
  shortBio:
    "Six years of clinical practice, with Fellowship training in dental implants and laser dentistry. Minimally invasive care, explained fully and planned around you.",
  credentials: [
    "BDS, Maharashtra University of Health Sciences",
    "Fellowship — Dental Implants",
    "Fellowship — Laser Dentistry",
  ],
  photo: "/dr-dishani-jain.jpeg",
  photoAlt: "Dr. Dishani Jain, Lead Dentist at Biolume Dental Care",

  // Clinic
  clinic: "Biolume Dental Care",
  role: "Lead Dentist",

  // Reachability
  phoneDisplay: "+91 98765 43210",
  phoneHref: `tel:+${phoneE164Digits}`,
  whatsappHref: `https://wa.me/${phoneE164Digits}`,
  /** vCard TEL value — international form, no spaces. */
  phoneVcard: `+${phoneE164Digits}`,
  email: "hello@biolumedental.in",
  emailHref: "mailto:hello@biolumedental.in",
  website: siteUrl,
  websiteDisplay: "biolumedental.in",

  // Address — kept as parts so the vCard ADR field can be built properly
  address: {
    street: "Sector 19B, Vashi",
    locality: "Navi Mumbai",
    region: "Maharashtra",
    postalCode: "400703",
    country: "India",
  },
  addressLines: ["Biolume Dental Care", "Sector 19B, Vashi", "Navi Mumbai, Maharashtra 400703"],
  /** Opens the native Maps app on both iOS and Android. */
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Biolume Dental Care, Sector 19B, Vashi, Navi Mumbai, Maharashtra 400703"),

  hours: ["Mon–Sat · 10:00 AM–8:00 PM", "Sunday · By appointment"],

  /*
   * Appointment booking. No Clinicia (or other third-party booking)
   * account is wired into this site yet, so this points at the on-site
   * request form. Swap in the Clinicia URL here when it exists and
   * every "Book Appointment" button follows.
   */
  bookingHref: "/#contact",
} as const;

/** One-line address, for display and for JSON-LD. */
export const addressOneLine = `${doctor.address.street}, ${doctor.address.locality}, ${doctor.address.region} ${doctor.address.postalCode}`;
