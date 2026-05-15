"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "Clinic" },
  { href: "#doctor", label: "Doctor" },
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-offwhite/80 backdrop-blur-xl border-b border-plum/5"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <a href="#top" className="group flex items-baseline gap-1">
            <span className="font-display text-2xl text-plum tracking-tight">Bio</span>
            <span className="font-display text-2xl italic text-teal tracking-tight">Lume</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-mint translate-y-[-2px] transition-transform group-hover:scale-125" />
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm tracking-wide hover:text-teal transition-colors duration-200 cursor-pointer",
                  scrolled ? "text-plum/70" : "text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-plum text-cream px-5 py-2.5 text-sm tracking-wide hover:bg-teal transition-colors duration-300 cursor-pointer"
          >
            Book a Visit
            <span className="h-1 w-1 rounded-full bg-mint" />
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 -mr-2 text-plum cursor-pointer"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-plum/95 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between h-20 container-x">
              <span className="font-display text-2xl text-cream">
                Bio<span className="italic text-mint"> Lume</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-cream cursor-pointer"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
              className="container-x mt-12 flex flex-col gap-8"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="font-display text-4xl text-cream hover:text-mint transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                className="mt-6 inline-flex w-fit rounded-full bg-mint text-plum px-6 py-3 text-sm tracking-wide"
              >
                Book a Visit
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
