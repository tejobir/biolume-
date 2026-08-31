"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
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

function Breadcrumb({ title, dark }: { title: string; dark?: boolean }) {
  const linkClass = dark
    ? "text-offwhite/65 hover:text-mint transition-colors"
    : "text-plum/55 hover:text-teal transition-colors";
  const sepClass = dark ? "text-offwhite/30" : "text-plum/30";
  const currentClass = dark ? "text-offwhite/90" : "text-plum/80";
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] tracking-wide">
      <Link href="/" className={linkClass}>Home</Link>
      <span className={sepClass}>/</span>
      <Link href="/services" className={linkClass}>Services</Link>
      <span className={sepClass}>/</span>
      <span className={currentClass}>{title}</span>
    </nav>
  );
}

// ── Numbered step list ("What happens at your appointment") ────────────────

function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="mt-10 border-t border-offwhite/15">
      {steps.map((step, i) => (
        <div key={step.title} className="flex gap-5 border-b border-offwhite/15 py-6 sm:gap-8">
          <span className="font-display shrink-0 text-[13px] tracking-[0.08em] text-mint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[15.5px] font-semibold tracking-wide text-offwhite">{step.title}</h3>
            <p className="mt-1.5 text-[14.5px] leading-[1.75] text-offwhite/75 text-pretty">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export function ServicePageContent({ page }: { page: ServicePage }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[520px] overflow-hidden py-28 md:py-32">
        <Image
          src={page.heroImage}
          alt={page.heroImageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum/70 via-plum/45 to-plum/85" />

        <div className="relative z-10 container-x flex h-full flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Breadcrumb title={page.title} dark />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-[10.5px] uppercase tracking-[0.24em] text-mint/90"
          >
            Treatment
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-4 max-w-3xl text-balance text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-cream"
          >
            {page.h1}
          </motion.h1>
          {page.tagline && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-pretty text-[15px] leading-[1.75] text-cream/85"
            >
              {page.tagline}
            </motion.p>
          )}
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

      {/* ── Intro (+ highlight card, if this page has one) ── */}
      <section className="container-x mt-14 md:mt-18">
        <div className={page.highlightCard ? "grid gap-10 lg:grid-cols-12 lg:gap-14" : "max-w-3xl"}>
          <div className={page.highlightCard ? "lg:col-span-7" : ""}>
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
            <Reveal delay={0.1}>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-[12.5px] text-plum/60 hover:text-teal transition-colors"
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                All Services
              </Link>
            </Reveal>
          </div>

          {page.highlightCard && (
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="border border-plum/12 bg-cream p-7 shadow-soft md:p-8">
                <h2 className="font-display text-[1.2rem] leading-snug tracking-tight text-plum">
                  {page.highlightCard.heading}
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {page.highlightCard.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                        <Check size={12} strokeWidth={2.2} />
                      </span>
                      <span className="text-[14px] leading-[1.6] text-plum/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── What happens at your appointment ── */}
      {page.appointmentSteps && (
        <section className="mt-20 bg-teal py-20 md:mt-24 md:py-24">
          <div className="container-x max-w-3xl">
            <Reveal>
              <div className="eyebrow text-mint/90">
                <span className="eyebrow-rule" />
                The Visit
              </div>
              <h2 className="font-display mt-5 text-[clamp(1.7rem,3.5vw,2.5rem)] leading-snug tracking-tight text-cream text-balance">
                What happens at your appointment
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-[1.75] text-cream/75 text-pretty">
                So there are no surprises, here is the sequence {page.title.toLowerCase()} follows at Biolume Dental Care.
              </p>
            </Reveal>
            <StepList steps={page.appointmentSteps} />
          </div>
        </section>
      )}

      {/* ── Aftercare ── */}
      {page.aftercare && (
        <section className="container-x mt-20 md:mt-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow text-teal/80">
                <span className="eyebrow-rule" />
                Recovery
              </div>
              <h2 className="font-display mt-5 text-[clamp(1.5rem,3vw,2.2rem)] leading-snug tracking-tight text-plum">
                Aftercare
              </h2>
              <p className="mt-4 text-[14.5px] leading-[1.75] text-plum/70 text-pretty">
                {page.aftercare.intro}
              </p>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-7">
              <ul className="space-y-4">
                {page.aftercare.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                    <span className="text-[14.5px] leading-[1.75] text-plum/80 text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── H2 Sections (in-depth reference material) ── */}
      <section className="container-x mt-20 md:mt-24 max-w-3xl">
        <Reveal>
          <div className="eyebrow text-teal/80 mb-10">
            <span className="eyebrow-rule" />
            In Depth
          </div>
        </Reveal>
        <div className="space-y-14">
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
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-4 inline-flex items-center gap-2 text-[13px] text-teal hover:text-plum transition-colors underline underline-offset-4 decoration-teal/30 hover:decoration-plum/30"
                  >
                    {s.link.label}
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
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
