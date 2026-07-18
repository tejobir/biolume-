"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { Star } from "lucide-react";
import { Sparkle } from "./Sparkle";

/**
 * Avatar gradients follow one rule: linear-gradient(140deg,
 * oklch(40% C H), oklch(65% C H)). Only hue varies per avatar —
 * pine, sage, or bark — so the palette stays a system.
 */
const avatarGradient = (hue: number, chroma: number) =>
  `linear-gradient(140deg, oklch(40% ${chroma} ${hue}) 0%, oklch(65% ${chroma} ${hue}) 100%)`;

const stories = [
  {
    quote:
      "Six months of consultations and I'd resigned to losing two molars. Dr. Dishani's implant plan saved them. Calmest dental visit of my life.",
    name: "Aarav Mehta",
    initials: "AM",
    detail: "Implant Patient · Vashi",
    avatar: avatarGradient(178, 0.07), // Pine
  },
  {
    quote:
      "Brought my eight-year-old in dreading a meltdown. She walked out clutching a sticker, asking when we're coming back. That's a magic trick.",
    name: "Priya Shenoy",
    initials: "PS",
    detail: "Parent · Nerul",
    avatar: avatarGradient(152, 0.06), // Sage
  },
  {
    quote:
      "I came for whitening, stayed for the consultation. They redesigned my smile in restrained, beautiful proportions: exactly what I wanted.",
    name: "Kabir Sethi",
    initials: "KS",
    detail: "Smile Design · Belapur",
    avatar: avatarGradient(45, 0.05), // Bark
  },
];

const smallAvatarHues: Array<[number, number]> = [
  [178, 0.07], // Pine
  [152, 0.06], // Sage
  [45, 0.05], // Bark
  [188, 0.065], // Deep pine
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-teal text-offwhite overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-mint/15 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Sparkle size={26} strokeWidth={1.1} className="text-mint mb-6" />
              <h2 className="font-display text-offwhite font-medium leading-[1.15] tracking-[0.02em] text-[clamp(1.5rem,2.8vw,2.3rem)] text-balance">
                Kind words from patients
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="flex items-center gap-5 lg:justify-end">
              <div className="flex -space-x-3">
                {smallAvatarHues.map(([h, c], i) => (
                  <div
                    key={i}
                    className="h-11 w-11 rounded-full ring-2 ring-teal"
                    style={{ backgroundImage: avatarGradient(h, c) }}
                  />
                ))}
                <div className="h-11 w-11 rounded-full bg-offwhite text-teal ring-2 ring-teal flex items-center justify-center text-[11px] font-semibold">
                  200+
                </div>
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      strokeWidth={1.5}
                      className="fill-mint text-mint"
                    />
                  ))}
                </div>
                <div className="text-[12px] text-offwhite/75 mt-1">
                  4.9 from 200+ reviews
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-7"
        >
          {stories.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="relative border border-offwhite/20 p-8 hover:border-mint/60 transition-colors duration-500"
            >
              <blockquote className="text-[16px] font-light leading-[1.75] text-offwhite/95 text-pretty">
                &#8220;{t.quote}&#8221;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-offwhite/15 flex items-center gap-3.5">
                <div className="relative flex-shrink-0">
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center text-[12px] font-semibold text-offwhite"
                    style={{ backgroundImage: t.avatar }}
                  >
                    {t.initials}
                  </div>
                  <div className="absolute inset-0 rounded-full ring-1 ring-offwhite/20" />
                </div>
                <div className="min-w-0">
                  <div className="text-[13.5px] text-offwhite truncate">{t.name}</div>
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-offwhite/60 mt-1 truncate">
                    {t.detail}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
