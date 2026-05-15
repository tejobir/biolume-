"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

type Tile = {
  label: string;
  caption: string;
  number: string;
  gradient: string;
  span: string;
  aspect?: string;
};

const tiles: Tile[] = [
  {
    label: "Operatory",
    caption: "The chair, redesigned for stillness.",
    number: "01",
    gradient: "from-teal via-teal-light to-plum",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    label: "Smile Studio",
    caption: "Light-balanced, mirror-fitted, considered.",
    number: "02",
    gradient: "from-mint/50 via-offwhite to-greige/40",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    label: "Sterilisation",
    caption: "Visible, audited, Class-B.",
    number: "03",
    gradient: "from-plum via-plum/95 to-teal/60",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    label: "Reception",
    caption: "A waiting room you'll forget you waited in.",
    number: "04",
    gradient: "from-greige/40 via-cream to-mint/30",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Imaging",
    caption: "Digital, low-radiation, sharp.",
    number: "05",
    gradient: "from-teal/80 via-plum to-mint/30",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    label: "Consultation",
    caption: "Where treatment plans are drawn with you.",
    number: "06",
    gradient: "from-mint/40 via-teal/30 to-offwhite",
    span: "md:col-span-4 md:row-span-1",
  },
];

export function Studio() {
  return (
    <section id="studio" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal/80">
                <span className="inline-block h-px w-8 bg-teal/40 align-middle mr-3" />
                Inside the Studio
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-plum text-balance">
                Six rooms, one
                <em className="italic text-teal"> standard</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-7 lg:pt-10">
            <p className="text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
              Every corner of Bio Lume — from the chair to the sterilisation bay — is designed
              around a single idea: that good dentistry feels like nothing more than
              good hospitality. Take a look around.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[260px_260px_260px] gap-4 lg:gap-5 auto-rows-[260px]"
        >
          {tiles.map((t) => (
            <motion.figure
              key={t.number}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl border border-plum/10 cursor-pointer ${t.span}`}
            >
              {/* Gradient placeholder background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${t.gradient} transition-transform duration-[1200ms] ease-out group-hover:scale-105`}
              />
              <div className="absolute inset-0 grain opacity-50" />

              {/* Vignette overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />

              {/* Decorative circle for hero tile */}
              {t.number === "01" && (
                <motion.div
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="absolute top-6 right-6 h-24 w-24 rounded-full border border-cream/15 flex items-center justify-center"
                >
                  <div className="h-16 w-16 rounded-full border border-cream/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-mint" />
                  </div>
                </motion.div>
              )}

              {/* Number */}
              <div className="absolute top-5 left-5 text-cream/80 font-display text-sm tracking-wide mix-blend-screen">
                {t.number}
              </div>

              {/* Bottom label */}
              <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display text-xl md:text-2xl text-cream leading-tight">
                      {t.label}
                    </div>
                    <div
                      className="text-[12.5px] text-cream/70 mt-1.5 max-w-[260px] leading-snug overflow-hidden transition-[max-height,opacity] duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                    >
                      {t.caption}
                    </div>
                  </div>
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream backdrop-blur-sm transition-all duration-500 group-hover:bg-cream group-hover:text-plum">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
