"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const pillars = [
  {
    k: "01",
    t: "See What's Happening",
    d: "Intraoral cameras and digital X-rays let you see exactly what's going on in your mouth — making it easier to understand your treatment and catch issues early.",
  },
  {
    k: "02",
    t: "Infection Control, Uncompromised",
    d: "Hospital-grade sterilisation protocols with autoclaved instruments, sealed packaging, and single-use kits. Every visit is held to the same standard.",
  },
  {
    k: "03",
    t: "Minimally Invasive by Default",
    d: "From ultrasonic scaling to laser gum treatment and 3D implant planning, every tool we use is chosen to give better results with less discomfort and faster healing.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left label */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow text-teal/80">
                <span className="eyebrow-rule" />
                The Clinic
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-plum text-balance">
                A practice built on <em className="italic text-teal not-italic-only">precision</em>,
                comfort, and quiet care.
              </h2>
            </Reveal>
          </div>

          {/* Right copy + pillars */}
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="text-[15.5px] leading-[1.8] text-plum/65 max-w-2xl text-pretty">
                Biolume Dental Care is a contemporary clinic in Navi Mumbai built on two
                principles: clinical quality and ethical treatment. Every appointment is
                unhurried, every plan is explained in full, and every decision is made in
                your long-term interest — not the other way around.
              </p>
            </Reveal>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-14 space-y-10"
            >
              {pillars.map((p) => (
                <motion.li
                  key={p.k}
                  variants={staggerItem}
                  className="group grid grid-cols-[auto_1fr] gap-7 md:gap-10 border-t border-plum/10 pt-7"
                >
                  <div className="font-display text-2xl text-teal/70 group-hover:text-teal transition-colors">
                    <span className="inline-flex flex-col">
                      <span>{p.k}</span>
                      <span className="index-underline w-7" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-plum tracking-tight">{p.t}</h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-plum/65 max-w-lg">
                      {p.d}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
