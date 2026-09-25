"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { servicePages } from "@/lib/servicePages";
import { Sparkle } from "./Sparkle";

const anchorLinks = [
  { href: "/#about", label: "About" },
  { href: "/#doctor", label: "Doctor" },
  { href: "/#studio", label: "Studio" },
  { href: "/#testimonials", label: "Stories" },
];

const mobileAllLinks = [
  { href: "/#about", label: "About" },
  { href: "/#doctor", label: "Doctor" },
  { href: "/#studio", label: "Studio" },
  { href: "/#testimonials", label: "Stories" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Transparent over the homepage hero video; solid cream everywhere else.
  const solid = scrolled || pathname !== "/";
  const linkCls = cn(
    "text-[11.5px] uppercase tracking-[0.18em] transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:rounded",
    solid
      ? "text-plum/75 hover:text-teal focus-visible:ring-teal/50"
      : "text-offwhite/85 hover:text-offwhite focus-visible:ring-offwhite/60",
  );

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

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow] duration-500",
          solid ? "bg-offwhite" : "bg-transparent",
          scrolled && "shadow-[0_1px_0_0_rgba(81,58,50,0.1)]",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/" aria-label="Biolume Dental Care — home" className="relative inline-flex items-center">
            <Image
              src="/biolume-logo.png"
              alt="Biolume Dental Care"
              width={1400}
              height={368}
              priority
              className={cn(
                "h-11 w-auto md:h-14 transition-opacity duration-500",
                !solid && "opacity-0",
              )}
            />
            {/* Cream logo for the transparent state over the hero video */}
            <Image
              src="/biolume-logo-white.png"
              alt=""
              aria-hidden
              width={1400}
              height={367}
              priority
              className={cn(
                "absolute inset-0 h-11 w-auto md:h-14 transition-opacity duration-500",
                solid && "opacity-0",
              )}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {anchorLinks.slice(0, 2).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={linkCls}
              >
                {l.label}
              </a>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(true)}
                onMouseEnter={() => setServicesOpen(true)}
                className={cn(linkCls, "flex items-center gap-1")}
              >
                Services
                <ChevronDown
                  size={12}
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
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 bg-cream border border-plum/10 shadow-soft overflow-hidden py-2"
                  >
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] text-teal hover:bg-teal/5 transition-colors font-semibold border-b border-plum/8 mb-1"
                    >
                      All Services
                    </Link>
                    {servicePages.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center px-5 py-2 text-[13px] text-plum/80 hover:text-teal hover:bg-teal/5 transition-colors leading-snug"
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
                className={linkCls}
              >
                {l.label}
              </a>
            ))}

            <Link
              href="/contact"
              className={linkCls}
            >
              Contact
            </Link>
          </nav>

          <a
            href="/#contact"
            className={cn(
              "hidden md:inline-flex items-center border px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60 focus-visible:ring-offset-2",
              solid
                ? "border-teal text-teal hover:bg-teal hover:text-offwhite"
                : "border-offwhite/80 text-offwhite hover:bg-offwhite hover:text-teal",
            )}
          >
            Book Now
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "md:hidden p-2 -mr-2 cursor-pointer transition-colors duration-300",
              solid ? "text-teal" : "text-offwhite",
            )}
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
            className="fixed inset-0 z-50 bg-teal md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between h-20 container-x">
              <span className="flex items-center gap-2.5">
                <Sparkle size={18} strokeWidth={1.4} className="text-offwhite" />
                <span className="font-logo text-xl font-medium text-offwhite lowercase tracking-wide">
                  biolume
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-offwhite cursor-pointer"
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
                  className="text-3xl font-light uppercase tracking-[0.08em] text-offwhite hover:text-mint transition-colors focus-visible:outline-none focus-visible:text-mint"
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
                  className="flex items-center gap-3 text-3xl font-light uppercase tracking-[0.08em] text-offwhite hover:text-mint transition-colors focus-visible:outline-none"
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
                      <div className="mt-4 flex flex-col gap-3 pl-2 border-l border-mint/40">
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="text-[13px] uppercase tracking-[0.14em] text-mint hover:text-offwhite transition-colors"
                        >
                          All Services
                        </Link>
                        {servicePages.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-[14px] text-offwhite/80 hover:text-mint transition-colors leading-snug"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light uppercase tracking-[0.08em] text-offwhite hover:text-mint transition-colors focus-visible:outline-none focus-visible:text-mint"
                >
                  Contact
                </Link>
              </motion.div>

              <motion.a
                href="/#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                className="mt-4 inline-flex w-fit border border-offwhite px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-offwhite hover:bg-offwhite hover:text-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
              >
                Book Now
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
