"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = [
  "Precision",
  "Comfort",
  "Implantology",
  "Laser Dentistry",
  "Smile Design",
  "Sterilised",
  "Unhurried",
  "Considered",
  "Navi Mumbai",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const items = [...words, ...words, ...words];

  return (
    <section
      aria-label="Bio Lume practice values"
      className="relative bg-plum text-cream border-y border-plum/40 overflow-hidden py-7 md:py-9"
    >
      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-plum to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-plum to-transparent" />

      <motion.div
        animate={reduce ? {} : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap will-change-transform"
      >
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-12 flex-shrink-0">
            <span className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none tracking-tight">
              {w}
            </span>
            <span aria-hidden className="text-mint text-2xl">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
