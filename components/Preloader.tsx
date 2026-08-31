"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Brief branded splash shown once per browser session, on the homepage
 * only. Renders nothing server-side and nothing for reduced-motion
 * users — it's a decorative flourish, never something real content or
 * SEO waits behind.
 */
export function Preloader() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("biolume-splash-shown")) return;

    sessionStorage.setItem("biolume-splash-shown", "1");
    setShow(true);
    const timer = window.setTimeout(() => setShow(false), 1300);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  useEffect(() => {
    if (!show) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-teal"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-[220px] sm:w-[260px]"
          >
            <Image
              src="/biolume-logo-loading.png"
              alt="Biolume Dental Care"
              width={1200}
              height={522}
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
