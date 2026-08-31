"use client";

/*
 * Smart Digital Visiting Card.
 *
 * Reached by scanning the QR code on the printed visiting card, so it is
 * designed phone-first: one column, thumb-height actions, no navigation
 * chrome to get lost in. Every value comes from lib/doctor.ts, which is
 * also what the downloaded .vcf is built from.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserPlus,
} from "lucide-react";
import { doctor } from "@/lib/doctor";
import { downloadVCard, loadContactPhoto } from "@/lib/vcard";
import { Sparkle } from "./Sparkle";
import { cn } from "@/lib/utils";

export function DigitalCard() {
  /*
   * The portrait is decoded to base64 ahead of the tap. iOS Safari only
   * allows a download that happens synchronously inside the gesture, so
   * nothing may be awaited once the button is pressed.
   */
  const [photo, setPhoto] = useState<string | undefined>(undefined);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let alive = true;
    loadContactPhoto().then((data) => {
      if (alive) setPhoto(data);
    });
    return () => {
      alive = false;
    };
  }, []);

  const handleSave = () => {
    downloadVCard(photo);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3500);
  };

  return (
    <main className="min-h-dvh bg-offwhite text-plum">
      <div className="mx-auto w-full max-w-[30rem] px-5 pb-16 pt-8 sm:px-7">
        {/* Wordmark */}
        <a href="/" className="mx-auto block w-[190px] sm:w-[220px]">
          <Image
            src="/biolume-logo.png"
            alt="Biolume Dental Care"
            width={440}
            height={130}
            priority
            className="h-auto w-full"
          />
        </a>

        {/* Identity */}
        <section className="mt-8 border border-plum/12 bg-cream shadow-soft">
          <div className="relative aspect-[4/5] w-full sm:aspect-square">
            <Image
              src={doctor.photo}
              alt={doctor.photoAlt}
              fill
              priority
              quality={90}
              sizes="(max-width: 520px) 100vw, 480px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/85 via-teal/10 to-transparent" />
            <Sparkle
              size={18}
              strokeWidth={1}
              className="absolute right-5 top-5 text-offwhite/70"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-[10px] uppercase tracking-[0.24em] text-mint">
                {doctor.role}
              </div>
              <h1 className="mt-1.5 text-[26px] font-medium leading-tight tracking-wide text-offwhite">
                {doctor.fullName}
                <span className="ml-2 text-[13px] tracking-[0.12em] text-offwhite/75">
                  {doctor.suffix}
                </span>
              </h1>
              <p className="mt-1 text-[13px] leading-snug text-offwhite/85">
                {doctor.specialization}
              </p>
            </div>
          </div>

          <div className="border-t border-plum/12 px-6 py-5">
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal/85">
              {doctor.clinic}
            </div>
            <p className="mt-2 text-[13.5px] leading-[1.75] text-plum/80 text-pretty">
              {doctor.shortBio}
            </p>
          </div>
        </section>

        {/* Primary actions */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <ActionButton
            href={doctor.phoneHref}
            icon={<Phone size={16} strokeWidth={1.6} />}
            label="Call"
            variant="solid"
          />
          <ActionButton
            href={doctor.whatsappHref}
            icon={<MessageCircle size={16} strokeWidth={1.6} />}
            label="WhatsApp"
            variant="solid"
            external
          />
        </div>

        {/* Save Contact — the whole point of the card, so it stands alone */}
        <button
          type="button"
          onClick={handleSave}
          className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2.5 border border-teal bg-teal px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-offwhite transition-colors duration-300 hover:bg-transparent hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite active:opacity-90"
        >
          {saved ? (
            <>
              <Check size={16} strokeWidth={1.8} />
              Contact downloaded
            </>
          ) : (
            <>
              <UserPlus size={16} strokeWidth={1.6} />
              Save Contact
            </>
          )}
        </button>
        <p aria-live="polite" className="mt-2 text-center text-[11.5px] leading-relaxed text-plum/55">
          {saved
            ? "Open the downloaded .vcf file to add it to your phonebook."
            : "Downloads a .vcf card you can add to your phone in one tap."}
        </p>

        {/* Secondary actions */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ActionButton
            href={doctor.bookingHref}
            icon={<CalendarCheck size={16} strokeWidth={1.6} />}
            label="Book Appointment"
            variant="outline"
          />
          <ActionButton
            href={doctor.directionsHref}
            icon={<MapPin size={16} strokeWidth={1.6} />}
            label="Get Directions"
            variant="outline"
            external
          />
          <ActionButton
            href={doctor.emailHref}
            icon={<Mail size={16} strokeWidth={1.6} />}
            label="Email"
            variant="outline"
          />
          <ActionButton
            href={doctor.website}
            icon={<Globe size={16} strokeWidth={1.6} />}
            label="Visit Website"
            variant="outline"
          />
        </div>

        {/* Details */}
        <section className="mt-6 border border-plum/12 bg-cream shadow-soft">
          <DetailRow
            icon={<Phone size={15} strokeWidth={1.6} />}
            label="Phone"
            value={doctor.phoneDisplay}
            href={doctor.phoneHref}
          />
          <DetailRow
            icon={<MessageCircle size={15} strokeWidth={1.6} />}
            label="WhatsApp"
            value={doctor.phoneDisplay}
            href={doctor.whatsappHref}
            external
          />
          <DetailRow
            icon={<Mail size={15} strokeWidth={1.6} />}
            label="Email"
            value={doctor.email}
            href={doctor.emailHref}
          />
          <DetailRow
            icon={<Globe size={15} strokeWidth={1.6} />}
            label="Website"
            value={doctor.websiteDisplay}
            href={doctor.website}
          />
          <DetailRow
            icon={<MapPin size={15} strokeWidth={1.6} />}
            label="Clinic"
            value={doctor.addressLines.join("\n")}
            href={doctor.directionsHref}
            external
          />
          <DetailRow
            icon={<Clock size={15} strokeWidth={1.6} />}
            label="Hours"
            value={doctor.hours.join("\n")}
          />
        </section>

        {/* Credentials */}
        <section className="mt-6">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal/85">
            Qualifications
          </div>
          <ul className="mt-3 border-t border-plum/15">
            {doctor.credentials.map((c) => (
              <li
                key={c}
                className="border-b border-plum/15 py-3 text-[13px] tracking-wide text-plum/85"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-center text-[11.5px] text-plum/55">
          &copy; {new Date().getFullYear()} {doctor.clinic} &middot;{" "}
          {doctor.address.locality}
        </p>
      </div>
    </main>
  );
}

function ActionButton({
  href,
  icon,
  label,
  variant,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant: "solid" | "outline";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex items-center justify-center gap-2.5 px-5 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite active:opacity-90",
        variant === "solid"
          ? "border border-teal bg-teal text-offwhite hover:bg-transparent hover:text-teal"
          : "border border-teal/45 bg-cream text-teal hover:border-teal hover:bg-teal hover:text-offwhite",
      )}
    >
      {icon}
      <span className="whitespace-nowrap">{label}</span>
    </a>
  );
}

function DetailRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <>
      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/8 text-teal">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-teal/85">
          {label}
        </span>
        <span className="mt-1 block whitespace-pre-line text-[14.5px] leading-relaxed text-plum/85">
          {value}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
          className="mt-1 flex-shrink-0 text-plum/35"
          aria-hidden
        />
      )}
    </>
  );

  const rowClass =
    "flex items-start gap-4 border-b border-plum/10 px-6 py-4 last:border-b-0";

  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(rowClass, "cursor-pointer transition-colors hover:bg-teal/[0.04]")}
    >
      {body}
    </a>
  ) : (
    <div className={rowClass}>{body}</div>
  );
}
