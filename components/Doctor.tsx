"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const credentials = [
  "BDS, Maharashtra University of Health Sciences",
  "Fellowship — Dental Implants",
  "Fellowship — Laser Dentistry",
  "6 Years Clinical Experience",
];

const specialties = [
  "Dental Implants",
  "Laser Dentistry",
  "Smile Design",
  "Endodontics",
  "Pediatric Care",
  "Clear Aligners",
  "Restorative Dentistry",
  "Periodontics",
];

export function Doctor() {
  return (
    <section id="doctor" className="relative py-24 md:py-32 surface-warm-teal">
      <div className="container-x grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-14 items-start">
        {/* Copy */}
        <div className="col-span-12 md:col-span-6 order-2 md:order-1 md:pt-10">
          <Reveal>
            <div className="text-[12px] lowercase tracking-[0.14em] text-teal mb-4">
              meet your doctor
            </div>
            <h2 className="text-plum font-medium leading-[1.2] tracking-[0.01em] text-[clamp(1.6rem,3vw,2.5rem)] text-balance">
              <em className="italic text-teal">Scared</em> of dentists?
              <br />
              So was <em className="italic text-teal">I</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 text-[14px] leading-[1.85] text-plum/80 max-w-xl text-pretty">
              I am the worst patient — I can&rsquo;t bear pain. That&rsquo;s exactly
              why Biolume works the way it does: transparent, unhurried, and minimally
              invasive by default. Six years of clinical practice and Fellowship
              training in dental implants and laser dentistry taught me that the best
              dentistry is the kind you barely feel — care that&rsquo;s explained
              fully, planned around you, and comfortable from the very first visit.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[13px] tracking-[0.06em] text-teal font-semibold">
              — Dr. Dishani Jain
            </p>
          </Reveal>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 border-t border-plum/15"
          >
            {credentials.map((c) => (
              <motion.li
                key={c}
                variants={staggerItem}
                className="border-b border-plum/15 py-3.5 text-[13px] tracking-wide text-plum/85"
              >
                {c}
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.18}>
            <div className="mt-9">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-teal mb-4">
                Areas of Practice
              </div>
              <p className="text-[13px] leading-[2.1] text-plum/70">
                {specialties.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md md:ml-auto">
              <Image
                src="/dr-dishani-jain.jpeg"
                alt="Dr. Dishani Jain, Lead Dentist at Biolume Dental Care"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 36vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.24em] text-mint">
                  Lead Dentist
                </div>
                <div className="mt-1.5 text-offwhite text-xl font-medium tracking-wide">
                  Dr. Dishani Jain
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
