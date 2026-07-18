"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import type { ServicePage } from "@/lib/servicePages";

// ── FAQ accordion ────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-plum/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal/50 focus-visible:rounded"
      >
        <span className="text-[1rem] font-semibold leading-snug text-plum pr-2 group-hover:text-teal transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`flex-shrink-0 mt-0.5 text-plum/50 transition-transform duration-300 ${open ? "rotate-180 text-teal" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-[15px] leading-[1.8] text-plum/70 text-pretty">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Breadcrumb ───────────────────────────────────────────────────────────────

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-plum/55 tracking-wide">
      <Link href="/" className="hover:text-teal transition-colors">Home</Link>
      <span className="text-plum/30">/</span>
      <Link href="/services" className="hover:text-teal transition-colors">Services</Link>
      <span className="text-plum/30">/</span>
      <span className="text-plum/80">{title}</span>
    </nav>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function ServicePageContent({ page }: { page: ServicePage }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[400px] max-h-[680px] overflow-hidden">
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum/60 via-plum/20 to-plum/80" />

        <div className="relative z-10 container-x h-full flex flex-col justify-end pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10.5px] uppercase tracking-[0.22em] text-mint/90 mb-4"
          >
            Our Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-cream text-balance max-w-3xl"
          >
            {page.h1}
          </motion.h1>
        </div>

        {/* Pexels attribution */}
        <div className="absolute bottom-3 right-4 z-10 text-[10px] text-white/40">
          Photo by{" "}
          <a
            href={page.heroPhotographerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors underline underline-offset-2"
          >
            {page.heroPhotographer}
          </a>{" "}
          on Pexels
        </div>
      </section>

      {/* ── Breadcrumb + Back link ── */}
      <div className="container-x mt-8 flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb title={page.title} />
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[12.5px] text-plum/60 hover:text-teal transition-colors"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          All Services
        </Link>
      </div>

      {/* ── Intro ── */}
      <section className="container-x mt-14 md:mt-18 max-w-3xl">
        <Reveal>
          <p className="text-[16px] leading-[1.85] text-plum/80 text-pretty font-light">
            {page.intro[0]}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 text-[16px] leading-[1.85] text-plum/70 text-pretty font-light">
            {page.intro[1]}
          </p>
        </Reveal>
      </section>

      {/* ── H2 Sections ── */}
      <section className="container-x mt-16 md:mt-20 max-w-3xl space-y-14">
        {page.sections.map((s, i) => (
          <Reveal key={i} delay={0.04 * i}>
            <div>
              <h2 className="font-display text-[1.5rem] md:text-[1.75rem] text-plum tracking-tight leading-snug mb-4">
                {s.heading}
              </h2>
              <p className="text-[15.5px] leading-[1.85] text-plum/70 text-pretty">{s.body}</p>
              {s.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-[15px] text-plum/70">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-teal flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── FAQ ── */}
      <section className="container-x mt-20 md:mt-24 max-w-3xl">
        <Reveal>
          <div className="eyebrow text-teal/80 mb-8">
            <span className="eyebrow-rule" />
            Common Questions
          </div>
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] text-plum tracking-tight leading-snug mb-10">
            Frequently asked questions
          </h2>
        </Reveal>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {page.faqs.map((faq, i) => (
            <motion.div key={i} variants={staggerItem}>
              <FaqItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
          <div className="border-t border-plum/10" />
        </motion.div>
      </section>

      {/* ── CTA block ── */}
      <section className="mt-20 md:mt-24 surface-warm-mint">
        <div className="container-x py-20 md:py-24 max-w-3xl">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-plum tracking-tight leading-snug text-balance">
              {page.ctaHeading}
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.8] text-plum/70 max-w-xl text-pretty">
              {page.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-plum text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-teal transition-colors duration-300"
              >
                Book a Consultation
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-plum/65 hover:text-teal underline underline-offset-[6px] decoration-plum/20 hover:decoration-teal transition-colors"
              >
                View all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
