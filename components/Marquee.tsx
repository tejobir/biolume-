"use client";

import { useEffect, useRef } from "react";
import {
  useReducedMotion,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { Sparkle } from "./Sparkle";

const words = [
  "Dental Implants",
  "Laser Dentistry",
  "Smile Makeover",
  "Orthodontics",
  "Root Canal",
  "Gum Care",
  "Pediatric Dentistry",
  "Emergency Care",
  "Preventive",
  "Restorative",
  "Navi Mumbai",
];

export function Marquee() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothedVelocity = useSpring(scrollVelocity, {
    damping: 70,
    stiffness: 240,
  });

  const items = [...words, ...words, ...words];

  /**
   * Hand-rolled marquee with scroll-velocity coupling.
   *
   * The track drifts left at a base cadence (one full loop ≈ 38s).
   * As the user scrolls, the spring-smoothed scroll velocity is added
   * as a boost — scrolling down briefly accelerates the marquee forward;
   * scrolling up gently slows it. Decays back to baseline when scrolling stops.
   */
  useEffect(() => {
    if (reduce) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let last = performance.now();
    let position = 0; // percent of width, range 0 to -33.333
    const basePctPerMs = -33.333 / 38000;
    // px/sec → pct/ms coupling. Tuned: ~800px/sec doubles the speed.
    const couplingCoefficient = 0.0000022;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const v = smoothedVelocity.get();
      const boost = -v * couplingCoefficient;
      position += (basePctPerMs + boost) * dt;
      if (position <= -33.333) position += 33.333;
      if (position >= 0) position -= 33.333;
      track.style.transform = `translate3d(${position}%, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, smoothedVelocity]);

  return (
    <section
      aria-label="Biolume practice values"
      className="relative bg-teal text-offwhite overflow-hidden py-6 md:py-8"
    >
      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-teal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-teal to-transparent" />

      <div
        ref={trackRef}
        className="flex items-center gap-12 whitespace-nowrap will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-12 flex-shrink-0">
            <span className="uppercase font-light tracking-[0.08em] text-[clamp(1.3rem,2.6vw,2rem)] leading-none">
              {w}
            </span>
            <Sparkle size={18} strokeWidth={1.2} className="text-mint flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
