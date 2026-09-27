"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) videoRef.current?.pause();
  }, [reduce]);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: easeExpo },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[620px] h-[100svh] max-h-[1000px] items-end overflow-hidden bg-teal"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/biolume-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Scrim keeps white type legible over any frame of the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/35 to-plum/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-plum/50 via-transparent to-transparent" />
        {/* Soft top fade so the transparent navbar stays readable */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-plum/40 to-transparent" />
      </div>

      <div className="container-x relative w-full pb-16 md:pb-24">
        <div className="max-w-2xl">
          <motion.h1
            {...rise(0.25)}
            className="font-display text-offwhite font-medium leading-[1.08] tracking-[0.01em] text-balance text-[clamp(2.1rem,4.4vw,3.6rem)]"
          >
            Boutique dental studio in Vashi
          </motion.h1>

          <motion.p
            {...rise(0.4)}
            className="mt-5 italic text-offwhite/90 leading-[1.4] text-[clamp(1.05rem,1.6vw,1.3rem)]"
          >
            <RotatingWord /> that deserve to last.
          </motion.p>

          <motion.p
            {...rise(0.5)}
            className="mt-3 text-[13px] tracking-wide text-offwhite/70"
          >
            Dr. Dishani Chordia &middot; Implantologist &amp; Laser Specialist
          </motion.p>

          <motion.div {...rise(0.62)} className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center border border-offwhite bg-offwhite px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-teal hover:bg-transparent hover:text-offwhite transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="text-[11px] uppercase tracking-[0.18em] text-offwhite/80 hover:text-offwhite underline underline-offset-[6px] decoration-offwhite/30 hover:decoration-offwhite transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offwhite/60 focus-visible:rounded"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
