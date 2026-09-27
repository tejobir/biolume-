"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.4,
  });

  // Hidden via CSS (not a JS check) so server and client markup match.
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="motion-reduce:hidden fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-teal via-mint to-teal"
    />
  );
}
