"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const pillars = [
  {
    t: "See What's Happening",
    d: "Intraoral cameras and digital X-rays let you see exactly what's going on in your mouth — making it easier to understand your treatment and catch issues early.",
  },
  {
    t: "Infection Control, Uncompromised",
    d: "Hospital-grade sterilisation protocols with autoclaved instruments, sealed packaging, and single-use kits. Every visit is held to the same standard.",
  },
  {
    t: "Minimally Invasive by Default",
    d: "From ultrasonic scaling to laser gum treatment and 3D implant planning, every tool we use is chosen to give better results with less discomfort and faster healing.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-offwhite">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6 gap-y-12 items-start">
          {/* Image collage — offset pair, template-style */}
          <div className="col-span-12 md:col-span-5 relative">
            <Reveal>
              <div className="relative aspect-[3/4] w-[82%]">
                <Image
                  src="https://images.pexels.com/photos/6627594/pexels-photo-6627594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
                  alt="Restorative treatment in progress at Biolume Dental Care"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 82vw, 34vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="absolute -bottom-10 right-0 w-[46%]">
              <div className="relative aspect-square border-[6px] border-offwhite">
                <Image
                  src="https://images.pexels.com/photos/6502742/pexels-photo-6502742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
                  alt="Routine dental check-up at the Biolume studio"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 40vw, 18vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Copy — heading + twin text columns */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-8">
            <Reveal>
              <h2 className="font-display text-teal font-medium leading-[1.15] tracking-[0.02em] text-[clamp(1.5rem,2.8vw,2.3rem)] text-balance">
                About Biolume Dental Care
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                <p className="text-[14px] leading-[1.85] text-plum/80 text-pretty">
                  Biolume Dental Care is a contemporary clinic in Navi Mumbai built on
                  two principles: clinical quality and ethical treatment. Every
                  appointment is unhurried and every plan is explained in full.
                </p>
                <p className="text-[14px] leading-[1.85] text-plum/80 text-pretty">
                  Every decision is made in your long-term interest — not the other
                  way around. The studio pairs modern methods with minimally invasive
                  technology, so care stays comfortable from the first visit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pillars — quiet three-column row */}
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-24 md:mt-28 grid md:grid-cols-3 gap-10 md:gap-8 border-t border-plum/15 pt-10"
        >
          {pillars.map((p) => (
            <motion.li key={p.t} variants={staggerItem}>
              <h3 className="text-[12px] uppercase tracking-[0.16em] font-semibold text-teal">
                {p.t}
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.8] text-plum/75 text-pretty">
                {p.d}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
