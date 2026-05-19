"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { HeroArc } from "./HeroArc";

const headline = ["Quiet", "luxury", "for", "your", "smile."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden h-screen min-h-[620px] max-h-[1020px]"
    >
      {/* Background image */}
      <Image
        src="/ai-generated-young-woman-smiling-during-a-dental-check-up-photo.jpeg"
        alt="Patient smiling during a dental check-up at Bio Lume"
        fill
        priority
        quality={90}
        className="object-cover object-top"
      />

      {/* Layered gradient overlay — top dark for nav, bottom dark for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-plum/70 via-plum/20 to-plum/85" />

      {/* Subtle teal tint at the very top edge */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-teal/30 to-transparent" />

      {/* Draftsman's flourish — drawn after the headline settles */}
      <HeroArc />

      {/* Content — pinned to bottom third */}
      <div className="relative z-10 container-x h-full flex flex-col justify-end pb-24 md:pb-32">
        {/* H1 — recedes on scroll-out via scroll-driven CSS */}
        <h1 className="hero-recede font-display text-[clamp(2.8rem,7vw,6rem)] leading-[1.0] tracking-tightest text-cream text-balance">
          {headline.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0"
            >
              <motion.span
                initial={reduce ? { y: 0 } : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${word === "luxury" ? "italic text-mint" : ""}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-[clamp(0.95rem,1.5vw,1.2rem)] leading-[1.7] text-white/80 font-sans font-light tracking-[0.05em] max-w-xl"
        >
          Dr. Dishani Jain · BDS, Implantologist &amp; Laser Specialist
          <span className="mx-2 opacity-50">·</span>
          Navi Mumbai
        </motion.h2>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-cream text-plum px-7 py-3.5 text-sm tracking-wide hover:bg-mint hover:text-cream transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-2 focus-visible:ring-offset-plum/50"
          >
            Book an Appointment
            <ArrowDownRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#services"
            className="text-sm tracking-wide text-white/70 hover:text-white underline underline-offset-[6px] decoration-white/30 hover:decoration-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:rounded"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
