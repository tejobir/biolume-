"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const gallery = [
  { src: "/clinic/treatment-room.webp", w: 1600, h: 1064, caption: "Consultation & treatment room" },
  { src: "/clinic/waiting-lounge.webp", w: 1064, h: 1600, caption: "Waiting lounge" },
  { src: "/clinic/opg-xray.webp", w: 1064, h: 1600, caption: "Digital OPG X-ray" },
  { src: "/clinic/lounge.webp", w: 1600, h: 1064, caption: "Patient lounge" },
  { src: "/clinic/treatment-suite.webp", w: 1064, h: 1600, caption: "Treatment suite" },
  { src: "/clinic/consultation-room.webp", w: 1600, h: 1064, caption: "Consultation room" },
  { src: "/clinic/doctor-desk.webp", w: 1064, h: 1600, caption: "Doctor's desk" },
  { src: "/clinic/corridor.webp", w: 1064, h: 1600, caption: "Corridor" },
];

/*
 * Full-bleed image band — the template's mid-page statement break.
 * One photograph, one line, one action. Followed by a tour of the clinic.
 */
export function Studio() {
  return (
    <section id="studio" className="relative">
      <div className="relative h-[64vh] min-h-[440px] max-h-[760px] overflow-hidden">
        <Image
          src="/clinic/treatment-room-city-view.webp"
          alt="Treatment room overlooking Vashi at Biolume Dental Care"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Pine wash for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal/85 via-teal/25 to-teal/10" />

        <div className="absolute inset-0 flex items-end">
          <div className="container-x w-full pb-12 md:pb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <h2 className="font-display text-offwhite font-medium leading-[1.12] tracking-[0.02em] text-[clamp(1.7rem,4vw,3.2rem)] max-w-[16ch] text-balance">
                You&rsquo;re exactly where you&rsquo;re meant to be
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#contact"
                className="inline-flex items-center border border-offwhite px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-offwhite hover:bg-offwhite hover:text-teal transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70"
              >
                Book Now
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Inside the studio — natural-ratio masonry of the clinic */}
      <div className="bg-offwhite py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <Reveal>
              <h2 className="font-display text-teal font-medium leading-[1.15] tracking-[0.02em] text-[clamp(1.5rem,2.8vw,2.3rem)] text-balance">
                Inside the studio
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 text-[14px] leading-[1.85] text-plum/80 text-pretty">
                Calm, light-filled rooms and modern equipment, designed so every
                visit feels unhurried and comfortable.
              </p>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6"
          >
            {gallery.map((g) => (
              <motion.figure
                key={g.src}
                variants={staggerItem}
                className="group mb-5 md:mb-6 break-inside-avoid"
              >
                <div className="overflow-hidden">
                  <Image
                    src={g.src}
                    alt={`${g.caption} at Biolume Dental Care, Vashi`}
                    width={g.w}
                    height={g.h}
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-plum/60">
                  {g.caption}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
