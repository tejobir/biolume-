"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const pillars = [
  {
    k: "01",
    t: "Considered Architecture",
    d: "A calm, light-filled studio designed to slow the visit down: warm woods, soft acoustics, no clinical glare.",
  },
  {
    k: "02",
    t: "Sterilisation, Visible",
    d: "Class-B autoclaved instruments, sealed packaging, single-use kits. Cleanliness you can watch in real time.",
  },
  {
    k: "03",
    t: "Technology, Quiet",
    d: "Digital imaging, diode laser, intra-oral scanning: advanced tools we'd rather use than mention.",
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
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal/80">
                <span className="inline-block h-px w-8 bg-teal/40 align-middle mr-3" />
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
                Bio Lume is a contemporary dental studio in the heart of Navi Mumbai, founded
                on the belief that exceptional dentistry should feel uncomplicated. Each
                appointment is unhurried, each plan is bespoke, and every interaction is held
                to a standard that makes returning easy.
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
                    {p.k}
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
