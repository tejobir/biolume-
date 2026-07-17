"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Sparkle } from "./Sparkle";

const easeExpo = [0.16, 1, 0.3, 1] as const;

/* Brand tagline — "words can keep switching" per the client's content deck. */
const rotatingWords = ["Smiles", "Laughs", "Grins"];

function RotatingWord() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="underline underline-offset-[6px] decoration-mint decoration-2">
        {rotatingWords[0]}
      </span>
    );
  }

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Widest word reserves the space so the line doesn't reflow */}
      <span className="invisible col-start-1 row-start-1 underline underline-offset-[6px] decoration-2">
        {rotatingWords.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: easeExpo }}
          className="col-start-1 row-start-1 underline underline-offset-[6px] decoration-mint decoration-2"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: easeExpo },
  });

  return (
    <section id="top" className="relative bg-offwhite pt-20 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-6">
          {/* Image block — starts flush under the nav, offset from the left edge */}
          <motion.div
            {...rise(0.1)}
            className="relative col-span-12 md:col-span-7 md:col-start-1 h-[58vh] min-h-[380px] md:h-[76vh] md:min-h-[520px] md:max-h-[820px]"
          >
            <Image
              src="/ai-generated-young-woman-smiling-during-a-dental-check-up-photo.jpeg"
              alt="Patient smiling during a dental check-up at Biolume Dental Care, Vashi"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-top"
            />
            {/* Soft scrim so the overlaid headline stays legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-plum/45 via-plum/5 to-transparent" />

            {/* Overlaid headline, template-style: white uppercase on the image */}
            <h1 className="absolute top-8 left-6 md:top-12 md:left-10 lg:left-14 text-offwhite uppercase font-medium leading-[1.06] tracking-[0.02em] text-[clamp(2rem,5.2vw,4.2rem)] max-w-[10ch]">
              Boutique dental studio
            </h1>
          </motion.div>

          {/* Right column — statement on cream */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end pb-2 md:pb-16 pt-10 md:pt-0 md:pl-6 lg:pl-10">
            <motion.div {...rise(0.35)} className="relative">
              <Sparkle
                size={30}
                strokeWidth={1}
                className="hidden md:block absolute -top-16 right-0 text-mint"
              />
              <p className="uppercase text-teal font-medium leading-[1.25] tracking-[0.02em] text-[clamp(1.6rem,3.4vw,2.8rem)] text-balance">
                <RotatingWord /> that deserve to last.
              </p>
            </motion.div>

            <motion.p
              {...rise(0.5)}
              className="mt-6 text-[14px] leading-[1.8] text-plum/80 max-w-sm"
            >
              Dr. Dishani Jain &middot; BDS, Implantologist &amp; Laser Specialist.
              Honest, unhurried dentistry in the heart of Vashi, Navi Mumbai.
            </motion.p>

            <motion.div {...rise(0.62)} className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center border border-teal bg-teal px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-offwhite hover:bg-transparent hover:text-teal transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="text-[11px] uppercase tracking-[0.18em] text-plum/70 hover:text-teal underline underline-offset-[6px] decoration-plum/25 hover:decoration-teal transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 focus-visible:rounded"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
