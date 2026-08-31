/*
 * vCard 3.0 generation + cross-browser download, entirely client-side.
 *
 * vCard 3.0 (RFC 2426) rather than 4.0 on purpose: 3.0 is what iOS
 * Contacts, Android Contacts and Google Contacts all import without
 * complaint. The file is built from lib/doctor.ts — the same data the
 * visiting card renders — so the page and the saved contact can never
 * drift apart.
 */

import { doctor } from "./doctor";

/** Escape a value per RFC 2426 (backslash, comma, semicolon, newline). */
function esc(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

/**
 * Fold a content line to 75 octets per RFC 2426, continuing with a single
 * leading space. Folding is counted in bytes (not characters) and never
 * splits a multi-byte sequence, which matters for the base64 PHOTO blob
 * and for any non-ASCII text.
 */
function fold(line: string): string {
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= 75) return line;

  const out: string[] = [];
  let chunk = "";
  let chunkBytes = 0;
  let limit = 75;

  for (const char of line) {
    const size = encoder.encode(char).length;
    if (chunkBytes + size > limit) {
      out.push(chunk);
      chunk = "";
      chunkBytes = 0;
      limit = 74; // continuation lines carry a leading space
    }
    chunk += char;
    chunkBytes += size;
  }
  if (chunk) out.push(chunk);

  return out.map((c, i) => (i === 0 ? c : " " + c)).join("\r\n");
}

/**
 * Build the vCard text.
 *
 * @param photoBase64 Optional base64 JPEG (no `data:` prefix) embedded as
 *   the contact photo. Omitted silently when unavailable — a vCard without
 *   a photo still imports perfectly.
 */
export function buildVCard(photoBase64?: string): string {
  const { address } = doctor;

  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    // N is structured: Family;Given;Additional;Prefix;Suffix
    `N:${esc(doctor.lastName)};${esc(doctor.firstName)};;${esc(doctor.prefix)};${esc(doctor.suffix)}`,
    `FN:${esc(doctor.fullName)}`,
    `TITLE:${esc(doctor.specialization)}`,
    // ORG is structured: organisation;unit
    `ORG:${esc(doctor.clinic)};${esc("Dentistry")}`,
    // One number serves both call and WhatsApp; a single TEL keeps Contacts
    // from listing the same number twice. CELL first so iOS labels it "mobile".
    `TEL;TYPE=CELL,VOICE,WORK:${doctor.phoneVcard}`,
    `EMAIL;TYPE=INTERNET,WORK,PREF:${esc(doctor.email)}`,
    `URL:${esc(doctor.website)}`,
    // ADR is structured: PO box;Extended;Street;Locality;Region;Postal;Country
    `ADR;TYPE=WORK:;;${esc(address.street)};${esc(address.locality)};${esc(address.region)};${esc(address.postalCode)};${esc(address.country)}`,
    `LABEL;TYPE=WORK:${esc(doctor.addressLines.join("\n"))}`,
    `NOTE:${esc(`${doctor.role}, ${doctor.clinic}. ${doctor.shortBio} Digital card: ${doctor.website}/dr-dishani-jain/`)}`,
    // CATEGORIES is itself a comma-separated list, so the separator here is
    // structural and must not be escaped the way a text value would be.
    "CATEGORIES:Dentist,Healthcare",
  ];

  if (photoBase64) {
    lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`);
  }

  lines.push(`REV:${new Date().toISOString().replace(/\.\d{3}Z$/, "Z")}`);
  lines.push("END:VCARD");

  // CRLF terminators, including a trailing one — required by RFC 2426 and
  // expected by the stricter Android importers.
  return lines.map(fold).join("\r\n") + "\r\n";
}

/** e.g. `Dr-Dishani-Jain.vcf` — safe on every filesystem. */
export const vcardFileName =
  doctor.fullName.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") + ".vcf";

/**
 * Fetch the doctor's portrait and return a square, downscaled base64 JPEG
 * suitable for embedding in the vCard (~30–60 KB). The image is same-origin,
 * so the canvas never taints. Resolves to `undefined` on any failure — the
 * caller then simply ships a photo-less vCard.
 *
 * Call this ahead of time (on mount): the download itself has to stay
 * synchronous inside the click handler or iOS Safari blocks it.
 */
export function loadContactPhoto(size = 400): Promise<string | undefined> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(undefined);
      return;
    }

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    const timer = window.setTimeout(() => resolve(undefined), 6000);

    img.onload = () => {
      window.clearTimeout(timer);
      try {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(undefined);
          return;
        }

        // Centre-crop to a square, biased upward so the face stays in frame
        const side = Math.min(img.naturalWidth, img.naturalHeight);
        const sx = (img.naturalWidth - side) / 2;
        const sy = Math.min((img.naturalHeight - side) / 2, img.naturalHeight * 0.08);
        ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);

        const base64 = canvas.toDataURL("image/jpeg", 0.82).split(",")[1];
        resolve(base64 && base64.length > 0 ? base64 : undefined);
      } catch {
        resolve(undefined);
      }
    };
    img.onerror = () => {
      window.clearTimeout(timer);
      resolve(undefined);
    };
    img.src = doctor.photo;
  });
}

/**
 * Trigger the .vcf download.
 *
 * Must be called synchronously from a user gesture — nothing awaited before
 * it — or iOS Safari treats the resulting navigation as programmatic and
 * blocks it. Hence the pre-loaded photo argument.
 *
 * Behaviour by platform:
 *  - Android Chrome: blob URL + `download` saves the file; tapping the
 *    download notification opens the Contacts importer.
 *  - iOS Safari 13+: honours `download` on a blob URL — the file lands in
 *    Downloads and tapping it opens the "Add to Contacts" sheet.
 *  - Any browser without `download` support (iOS 12 and older): the blob
 *    URL is opened directly, which Safari hands on to Contacts.
 * The object URL is revoked on a delay, never immediately: iOS reads the
 * blob after the click returns, and an eager revoke yields an empty file.
 */
export function downloadVCard(photoBase64?: string): void {
  const vcard = buildVCard(photoBase64);

  // BOM-free UTF-8 — iOS Contacts chokes on a BOM ahead of BEGIN:VCARD.
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  if ("download" in a) {
    a.href = url;
    a.download = vcardFileName;
    a.rel = "noopener";
    a.style.display = "none";
    // Must be in the document for the click to dispatch on Firefox/Android.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.location.href = url;
  }

  window.setTimeout(() => URL.revokeObjectURL(url), 15000);
}
