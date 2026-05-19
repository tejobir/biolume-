"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import {
  Sparkles,
  Bone,
  Scan,
  Baby,
  Wrench,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    name: "Dental Implants",
    blurb:
      "Single tooth to full-arch, surgically guided implants placed for a lifetime of comfortable function.",
  },
  {
    icon: Zap,
    name: "Laser Dentistry",
    blurb:
      "Diode laser treatments for gum contouring, sensitivity and minor surgery. Less bleeding, faster healing.",
  },
  {
    icon: Sparkles,
    name: "Smile Design",
    blurb:
      "Veneers, whitening, and contouring composed around your face: restrained, not theatrical.",
  },
  {
    icon: Scan,
    name: "Aligners & Ortho",
    blurb:
      "Clear aligners and metal-free orthodontics. Discreet correction, monitored every two weeks.",
  },
  {
    icon: Wrench,
    name: "Root Canal & Restorative",
    blurb:
      "Pain-free endodontics with single-visit options. Ceramic crowns colour-matched to neighbours.",
  },
  {
    icon: Baby,
    name: "Paediatric Care",
    blurb:
      "Gentle, fear-free visits for children: preventive sealants, fluoride, and habit guidance.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow text-teal/80">
                <span className="eyebrow-rule" />
                Treatments
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-plum text-balance">
                A complete <em className="italic text-teal">curated</em> menu of dental care.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-7 lg:pt-10">
            <p className="text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
              From preventive cleanings to advanced implantology, every treatment at Bio Lume
              follows a single principle: do less, more carefully. Below is what we do best.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-plum/10 border border-plum/10 rounded-2xl overflow-hidden"
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={staggerItem}
              className="group relative bg-offwhite p-9 md:p-10 transition-colors duration-500 hover:bg-cream"
            >
              {/* Draftsman's contour — incomplete frame, hand-drawn feel */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full text-teal/35"
                viewBox="0 0 400 280"
                preserveAspectRatio="none"
              >
                <path
                  className="contour-path"
                  style={{ ["--contour-length" as string]: "920" }}
                  d="M 20 18 L 18 260 Q 19 268 26 268 L 374 269 Q 382 269 382 262 L 384 22"
                />
              </svg>

              <div className="relative flex items-start justify-between mb-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/8 text-teal transition-all duration-500 group-hover:bg-teal group-hover:text-cream">
                  <s.icon size={20} strokeWidth={1.4} />
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className="text-plum/30 transition-all duration-500 group-hover:text-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="relative font-display text-2xl text-plum tracking-tight leading-tight">
                {s.name}
              </h3>
              <p className="relative mt-4 text-[14.5px] leading-[1.7] text-plum/65 text-pretty">
                {s.blurb}
              </p>
              {/* Bottom hover line */}
              <span className="absolute bottom-0 left-9 right-9 h-px bg-teal scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
