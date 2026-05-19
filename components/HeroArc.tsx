"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A signature graphite-line flourish behind the hero headline.
 * Drawn once on first load, after the H1 has settled. Acts as
 * a draftsman's mark — the kind of stroke a practitioner makes
 * on a consultation card to underline a finding.
 *
 * Path is hand-tuned with intentionally imperfect control points
 * so the arc reads as drawn, not generated.
 */
export function HeroArc() {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="hero-arc-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5EBF8A" stopOpacity="0" />
          <stop offset="18%" stopColor="#5EBF8A" stopOpacity="0.55" />
          <stop offset="62%" stopColor="#8FD4AC" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#5EBF8A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/*
       * Long flourish arc: starts off-screen left, sweeps under the H1,
       * dips slightly mid-page, rises off-screen right.
       * Control points are deliberately uneven so the line breathes.
       */}
      <motion.path
        d="
          M -40 760
          C 160 720, 360 690, 520 705
          S 820 770, 980 740
          S 1280 660, 1480 695
          S 1640 760, 1700 740
        "
        fill="none"
        stroke="url(#hero-arc-gradient)"
        strokeWidth={1.2}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? { pathLength: 1, opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.55 }}
        transition={{
          pathLength: { duration: 2.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.6, delay: 1.4 },
        }}
      />

      {/* A second, much fainter shadow stroke that runs slightly offset —
          a true graphite line is never single-weight. */}
      <motion.path
        d="
          M -40 766
          C 160 728, 360 698, 520 712
          S 820 778, 980 748
          S 1280 668, 1480 702
          S 1640 766, 1700 746
        "
        fill="none"
        stroke="#1A6E7E"
        strokeOpacity={0.12}
        strokeWidth={0.6}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? { pathLength: 1, opacity: 0.12 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.12 }}
        transition={{
          pathLength: { duration: 2.8, delay: 1.55, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.6, delay: 1.55 },
        }}
      />

      {/* Anchor dot — small mint mark at the right terminus of the arc,
          like the signature dot in the logo lockup. */}
      <motion.circle
        cx={1478}
        cy={696}
        r={4}
        fill="#5EBF8A"
        initial={reduce ? { scale: 1, opacity: 0.85 } : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 0.5, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "1478px 696px" }}
      />
    </svg>
  );
}
