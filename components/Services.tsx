"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const services = [
  {
    name: "Preventive Dentistry",
    blurb:
      "Regular check-ups, cleanings, fluoride, and sealants — backed by intraoral cameras and digital X-rays so you can see exactly what's happening.",
    slug: "preventive-dentistry-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6502742/pexels-photo-6502742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Restorative Dentistry",
    blurb:
      "Nano-hybrid composites, crowns, bridges, and full mouth rehabilitation that blend naturally. Magnification ensures every detail is precise.",
    image: "https://images.pexels.com/photos/6627594/pexels-photo-6627594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Root Canal Treatment",
    blurb:
      "Root canal treatment with magnification and modern rotary tools — quick, comfortable, and with a higher success rate than traditional methods.",
    slug: "root-canal-treatment-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6627706/pexels-photo-6627706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Periodontics",
    blurb:
      "Deep cleaning with advanced ultrasonic scaling and air-polishing — more effective and more comfortable than traditional gum treatment.",
    image: "https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Prosthodontics",
    blurb:
      "Dentures and implant-supported dentures designed using digital scanning for a natural fit and function from day one.",
    image: "https://images.pexels.com/photos/6627589/pexels-photo-6627589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Dental Implants",
    blurb:
      "3D CBCT imaging lets us plan every implant with precision — bone, nerves, and positioning checked beforehand for safer, predictable results.",
    specialty: true,
    slug: "dental-implants-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Laser Dentistry",
    blurb:
      "Less bleeding, less swelling, faster healing — often without stitches. A more comfortable option for gum treatments, minor surgery, and select cavity cases.",
    specialty: true,
    slug: "laser-dentistry-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Orthodontics",
    blurb:
      "Braces and clear aligners planned from digital scans — no messy impressions, more accurate fit, and a more comfortable process.",
    slug: "orthodontics-braces-aligners-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Smile Makeover",
    blurb:
      "Whitening, veneers, bonding, and gum contouring combined into one tailored plan — with a preview of the expected result before we begin.",
    slug: "smile-makeover-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6812494/pexels-photo-6812494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pediatric Dentistry",
    blurb:
      "Gentle cleanings, sealants, and low-radiation X-rays designed for young patients — making every visit easy and fear-free.",
    image: "https://images.pexels.com/photos/7800561/pexels-photo-7800561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "TMJ / TMD Management",
    blurb:
      "Jaw pain and clicking diagnosed with imaging, treated with bite correction and night guards for lasting relief.",
    image: "https://images.pexels.com/photos/5624170/pexels-photo-5624170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Emergency Dentistry",
    blurb:
      "Same-day care for sudden pain, injury, or infection — with quick imaging so you get answers and treatment without delay.",
    image: "https://images.pexels.com/photos/4971505/pexels-photo-4971505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const INITIAL_COUNT = 6;

export function Services() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? services : services.slice(0, INITIAL_COUNT);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-offwhite">
      <div className="container-x">
        {/* Centered heading, template-style */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <Reveal>
            <h2 className="uppercase text-teal font-medium leading-[1.15] tracking-[0.02em] text-[clamp(1.5rem,2.8vw,2.3rem)] text-balance">
              A complete range of dental care
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 text-[14px] leading-[1.85] text-plum/80 text-pretty">
              From preventive cleanings to advanced implantology and laser dentistry,
              every treatment follows two simple principles: clinical quality and
              ethical care.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-6 gap-y-14"
        >
          {visible.map((s) => (
            <motion.article key={s.name} variants={staggerItem} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.name} at Biolume Dental Care, Vashi`}
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
                {"specialty" in s && s.specialty && (
                  <span className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.2em] text-offwhite border border-offwhite/70 px-2.5 py-1 bg-teal/70">
                    Specialty
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-[13px] uppercase tracking-[0.16em] font-semibold text-teal">
                {s.name}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.75] text-plum/75 text-pretty">
                {s.blurb}
              </p>

              {"slug" in s && s.slug && (
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-4 inline-block text-[10.5px] uppercase tracking-[0.18em] text-plum/70 hover:text-teal underline underline-offset-4 decoration-plum/25 hover:decoration-teal transition-colors"
                >
                  View details
                </Link>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Expand / collapse */}
        <AnimatePresence initial={false}>
          {!expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-16 flex flex-col items-center gap-3"
            >
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center border border-teal px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-teal hover:bg-teal hover:text-offwhite transition-colors duration-300 cursor-pointer"
              >
                View all {services.length} services
              </button>
              <span className="text-[12px] text-plum/60">
                {services.length - INITIAL_COUNT} more treatments
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {expanded && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setExpanded(false)}
              className="text-[11px] uppercase tracking-[0.18em] text-plum/60 hover:text-teal transition-colors underline underline-offset-4 decoration-plum/25 hover:decoration-teal cursor-pointer"
            >
              Show less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
