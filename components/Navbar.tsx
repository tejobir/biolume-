"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicePages } from "@/lib/servicePages";

const anchorLinks = [
  { href: "/#about", label: "Clinic" },
  { href: "/#doctor", label: "Doctor" },
  { href: "/#studio", label: "Studio" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#contact", label: "Contact" },
];

const mobileAllLinks = [
  { href: "/#about", label: "Clinic" },
  { href: "/#doctor", label: "Doctor" },
  { href: "/#studio", label: "Studio" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const textClass = scrolled ? "text-plum/70" : "text-white";

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
          <Link href="/" className="group flex items-baseline gap-1">
            <span className="font-display text-2xl text-plum tracking-tight">Bio</span>
            <span className="font-display text-2xl italic text-teal tracking-tight">Lume</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-mint translate-y-[-2px] transition-transform group-hover:scale-125" />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {anchorLinks.slice(0, 2).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm tracking-wide hover:text-teal transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 focus-visible:rounded",
                  textClass
                )}
              >
                {l.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className={cn(
                  "flex items-center gap-1 text-sm tracking-wide hover:text-teal transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 focus-visible:rounded",
                  textClass
                )}
              >
                Services
                <ChevronDown
                  size={13}
                  strokeWidth={1.5}
                  className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 rounded-xl bg-offwhite border border-plum/10 shadow-soft overflow-hidden py-2"
                  >
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center px-4 py-2.5 text-[13px] text-plum/60 hover:text-teal hover:bg-teal/5 transition-colors font-medium tracking-wide border-b border-plum/8 mb-1"
                    >
                      All Services
                    </Link>
                    {servicePages.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center px-4 py-2 text-[13px] text-plum/70 hover:text-teal hover:bg-teal/5 transition-colors leading-snug"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {anchorLinks.slice(2).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm tracking-wide hover:text-teal transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 focus-visible:rounded",
                  textClass
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-plum text-cream px-5 py-2.5 text-sm tracking-wide hover:bg-teal transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-plum/95 backdrop-blur-md md:hidden overflow-y-auto"
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
              className="container-x mt-8 flex flex-col gap-6 pb-12"
            >
              {mobileAllLinks.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="font-display text-4xl text-cream hover:text-mint transition-colors focus-visible:outline-none focus-visible:text-mint"
                >
                  {l.label}
                </motion.a>
              ))}

              {/* Mobile Services expand */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center gap-3 font-display text-4xl text-cream hover:text-mint transition-colors focus-visible:outline-none"
                >
                  Services
                  <ChevronDown
                    size={22}
                    strokeWidth={1.5}
                    className={cn("transition-transform duration-300", mobileServicesOpen && "rotate-180 text-mint")}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 flex flex-col gap-3 pl-2 border-l border-mint/30">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="text-[15px] text-mint tracking-wide hover:text-cream transition-colors"
                        >
                          All Services
                        </Link>
                        {servicePages.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-[14px] text-cream/70 hover:text-mint transition-colors leading-snug"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.a
                href="/#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                className="mt-4 inline-flex w-fit rounded-full bg-mint text-plum px-6 py-3 text-sm tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/40"
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
