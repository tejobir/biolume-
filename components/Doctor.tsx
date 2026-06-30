"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { Award, GraduationCap, Stethoscope } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "BDS, Maharashtra University of Health Sciences" },
  { icon: Award, label: "Fellowship — Dental Implants" },
  { icon: Award, label: "Fellowship — Laser Dentistry" },
  { icon: Stethoscope, label: "6 Years Clinical Experience" },
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
    <section id="doctor" className="relative py-28 md:py-36 bg-cream/60">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Portrait — Dr. Dishani Jain */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md">
            {/* Outer mint glow, soft */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-mint/25 to-transparent blur-2xl" />
            <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden border border-plum/10 shadow-soft">
              <Image
                src="/dr-dishani-jain.jpeg"
                alt="Dr. Dishani Jain, Lead Dentist at Biolume Dental Care"
                fill
                quality={90}
                className="object-cover object-top"
              />

              {/* Scrim for label legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent" />

              {/* Subtle right-edge hairline, suggesting depth */}
              <div className="absolute top-7 bottom-24 right-7 w-px bg-cream/15" />

              <div className="absolute inset-0 flex items-end p-7">
                <div className="text-cream">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-mint/95">
                    Lead Dentist
                  </div>
                  <div className="mt-2 font-display text-3xl leading-tight">Dr. Dishani Jain</div>
                </div>
              </div>

              {/* Decorative line — promoted to mint */}
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-7 left-7 right-7 h-px bg-mint/40 origin-left"
              />
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="eyebrow text-teal/80">
              <span className="eyebrow-rule" />
              Meet Your Doctor
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-plum text-balance">
              Six years of <em className="italic text-teal">careful</em>, deliberate dentistry.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
              Dr. Dishani Jain brings six years of dedicated clinical experience to Biolume Dental
              Care, complemented by advanced Fellowship training in dental implants and laser
              dentistry. Her practice is built on two principles: clinical quality and ethical
              treatment. Recognising that dental visits can cause anxiety, she focuses on a
              transparent, patient-first approach — pairing modern methods with minimally invasive
              technology to ensure your care is always straightforward, comfortable, and tailored
              to your long-term health.
            </p>
          </Reveal>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 space-y-4"
          >
            {credentials.map((c, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-teal/8 text-teal">
                  <c.icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-[14.5px] text-plum/80 leading-relaxed pt-1.5">
                  {c.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.22}>
            <div className="mt-12">
              <div className="text-[11px] uppercase tracking-[0.22em] text-plum/55 mb-4">
                Areas of Practice
              </div>
              <div className="flex flex-wrap gap-2.5">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-plum/12 bg-offwhite/60 px-4 py-2 text-xs tracking-wide text-plum/75 hover:border-mint/45 hover:text-mint hover:bg-mint/8 transition-colors duration-300 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
