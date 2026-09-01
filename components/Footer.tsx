"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { servicePages } from "@/lib/servicePages";
import { doctor } from "@/lib/doctor";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#doctor", label: "Doctor" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-offwhite border-t border-plum/10">
      <div className="container-x py-16 md:py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          <Image
            src="/biolume-logo.png"
            alt="Biolume Dental Care"
            width={1400}
            height={368}
            className="h-auto w-[300px] md:w-[440px]"
          />
        </motion.div>

        <div className="mt-14 grid md:grid-cols-12 gap-10 pt-10 border-t border-plum/12">
          <div className="md:col-span-5">
            <p className="text-[14px] leading-[1.75] text-plum/80 max-w-sm">
              A contemporary dental studio in {doctor.address.locality}. Led by
              Dr.&nbsp;Dishani&nbsp;Jain, implantologist and laser specialist.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {(
                [
                  { icon: <Phone size={14} strokeWidth={1.6} />, label: "Call", href: doctor.phoneHref },
                  { icon: <MessageCircle size={14} strokeWidth={1.6} />, label: "WhatsApp", href: doctor.whatsappHref },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                    label: "Instagram",
                    href: "#",
                  },
                ] as { icon: ReactNode; label: string; href: string }[]
              ).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-plum/15 text-plum/75 hover:bg-teal hover:text-offwhite hover:border-teal transition-all duration-300 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-teal/85 mb-4">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-plum/80 hover:text-teal transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[14px] text-plum/80 hover:text-teal transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-teal/85 mb-4">
              Treatments
            </div>
            <ul className="space-y-2.5">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] text-plum/75 hover:text-teal transition-colors leading-snug"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-teal/85 mb-4">
              Studio
            </div>
            <address className="not-italic text-[14px] leading-[1.75] text-plum/80">
              {doctor.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <a
                href={doctor.phoneHref}
                className="hover:text-teal transition-colors cursor-pointer"
              >
                {doctor.phoneDisplay}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-plum/12 flex flex-wrap items-center justify-between gap-4 text-[12px] text-plum/60">
          <div>© {new Date().getFullYear()} Biolume Dental Care. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-teal transition-colors cursor-pointer">
              Privacy
            </a>
            <a href="#" className="hover:text-teal transition-colors cursor-pointer">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
