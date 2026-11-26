"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { ArrowUpRight, Star } from "lucide-react";
import { Sparkle } from "./Sparkle";

/**
 * Avatar gradients follow one rule: linear-gradient(140deg,
 * oklch(40% C H), oklch(65% C H)). Only hue varies per avatar —
 * pine, sage, or bark — so the palette stays a system.
 */
const avatarGradient = (hue: number, chroma: number) =>
  `linear-gradient(140deg, oklch(40% ${chroma} ${hue}) 0%, oklch(65% ${chroma} ${hue}) 100%)`;

/**
 * Google rating + reviews — copied from the clinic's Google Business Profile
 * (operator-supplied, 26 Nov 2026). Quotes are verbatim; do not edit the wording.
 * Never turn these into Review / aggregateRating JSON-LD (hub rule,
 * enforced by scripts/check-schema.mjs).
 */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Biolume+Dental+Care/@19.0841439,73.0044679,17z/data=!3m1!5s0x3be7c13aeb8b8827:0x6d541509a1cfe714!4m8!3m7!1s0x3be7c167a1a9991d:0xab0d7fd485f9734a!8m2!3d19.0841388!4d73.0070428!9m1!1b1!16s%2Fg%2F11zfb8d40x?entry=ttu";

const reviews = [
  {
    quote:
      "I visited Biolume Dental Care in Vashi for laser dental treatment and had a good experience. The dentist explained the procedure beforehand and answered my questions patiently, which helped me feel more comfortable. The clinic was clean, and the staff were welcoming. It’s nice to have modern dental treatment options available locally in Vashi. I’d recommend booking a consultation if you’re considering laser dentistry. Thank you Dr. Dishani!",
    name: "Gaurav Jain",
    initials: "GJ",
    detail: "Laser Dentistry · Google review",
    avatar: avatarGradient(178, 0.07), // Pine
  },
  {
    quote:
      "Have been looking for a good clinic in vashi for a while now. found Biolume dental clinic that provides amazing smile makeovers. the treatment is really smooth and systematic. Dr. Dishani is the sweetest. the clinic too is very aesthetic and clean.",
    name: "Shrishti Soni",
    initials: "SS",
    detail: "Smile Makeover · Google review",
    avatar: avatarGradient(152, 0.06), // Sage
  },
  {
    quote:
      "I went to Biolume Dental Care to get dental implants done. The clinic felt very clean and hygienic during my time there. I am happy with how everything went during the process and the state of the place was definitely something I noticed.",
    name: "Rampadarth Yadav",
    initials: "RY",
    detail: "Dental Implants · Google review",
    avatar: avatarGradient(45, 0.05), // Bark
  },
];

function Stars({ size = 12 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} strokeWidth={1.5} className="fill-mint text-mint" />
      ))}
    </div>
  );
}

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
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-7"
        >
          {reviews.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="relative flex flex-col border border-offwhite/20 p-8 hover:border-mint/60 transition-colors duration-500"
            >
              <div className="mb-5">
                <Stars size={13} />
              </div>
              <blockquote className="text-[16px] font-light leading-[1.75] text-offwhite/95 text-pretty mb-8">
                &#8220;{t.quote}&#8221;
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-offwhite/15 flex items-center gap-3.5">
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

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-8 border-t border-offwhite/15">
            <p className="text-[11px] uppercase tracking-[0.16em] text-offwhite/55">
              Reviews from Google
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13.5px] text-offwhite hover:text-mint transition-colors"
              >
                View all of our Google reviews
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
