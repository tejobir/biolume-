"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import {
  Sparkles,
  Bone,
  Scan,
  Baby,
  Wrench,
  Zap,
  Shield,
  Heart,
  Layers,
  AlignCenter,
  AlertCircle,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    name: "Preventive Dentistry",
    blurb:
      "Regular check-ups, cleanings, fluoride, and sealants — backed by intraoral cameras and digital X-rays so you can see exactly what's happening.",
    slug: "preventive-dentistry-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6502742/pexels-photo-6502742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Wrench,
    name: "Restorative Dentistry",
    blurb:
      "Nano-hybrid composites, crowns, bridges, and full mouth rehabilitation that blend naturally. Magnification ensures every detail is precise.",
    image: "https://images.pexels.com/photos/6627594/pexels-photo-6627594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Activity,
    name: "Root Canal Treatment",
    blurb:
      "Root canal treatment with magnification and modern rotary tools — quick, comfortable, and with a higher success rate than traditional methods.",
    slug: "root-canal-treatment-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6627706/pexels-photo-6627706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Heart,
    name: "Periodontics",
    blurb:
      "Deep cleaning with advanced ultrasonic scaling and air-polishing — more effective and more comfortable than traditional gum treatment.",
    image: "https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Layers,
    name: "Prosthodontics",
    blurb:
      "Dentures and implant-supported dentures designed using digital scanning for a natural fit and function from day one.",
    image: "https://images.pexels.com/photos/6627589/pexels-photo-6627589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Bone,
    name: "Dental Implants",
    blurb:
      "3D CBCT imaging lets us plan every implant with precision — bone, nerves, and positioning checked beforehand for safer, predictable results.",
    specialty: true,
    slug: "dental-implants-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Zap,
    name: "Laser Dentistry",
    blurb:
      "Less bleeding, less swelling, faster healing — often without stitches. A more comfortable option for gum treatments, minor surgery, and select cavity cases.",
    specialty: true,
    slug: "laser-dentistry-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: AlignCenter,
    name: "Orthodontics",
    blurb:
      "Braces and clear aligners planned from digital scans — no messy impressions, more accurate fit, and a more comfortable process.",
    slug: "orthodontics-braces-aligners-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/28407749/pexels-photo-28407749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Sparkles,
    name: "Smile Makeover",
    blurb:
      "Whitening, veneers, bonding, and gum contouring combined into one tailored plan — with a preview of the expected result before we begin.",
    slug: "smile-makeover-vashi-navi-mumbai",
    image: "https://images.pexels.com/photos/6812494/pexels-photo-6812494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Baby,
    name: "Pediatric Dentistry",
    blurb:
      "Gentle cleanings, sealants, and low-radiation X-rays designed for young patients — making every visit easy and fear-free.",
    image: "https://images.pexels.com/photos/7800561/pexels-photo-7800561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: Scan,
    name: "TMJ / TMD Management",
    blurb:
      "Jaw pain and clicking diagnosed with imaging, treated with bite correction and night guards for lasting relief.",
    image: "https://images.pexels.com/photos/5624170/pexels-photo-5624170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    icon: AlertCircle,
    name: "Emergency Dentistry",
    blurb:
      "Same-day care for sudden pain, injury, or infection — with quick imaging so you get answers and treatment without delay.",
    image: "https://images.pexels.com/photos/4971505/pexels-photo-4971505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export function Services() {
  return (
    <section id="services" className="surface-warm-teal relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow text-teal/80">
                <span className="eyebrow-rule" />
                Treatments
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-plum text-balance">
                A complete <em className="italic text-teal">range</em> of dental care.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-7 lg:pt-10">
            <p className="text-[15.5px] leading-[1.8] text-plum/65 max-w-xl text-pretty">
              From preventive cleanings to advanced implantology and laser dentistry, every
              treatment at Biolume follows two simple principles: clinical quality and ethical
              care. Below is everything we offer.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-plum/10 border border-plum/10 rounded-2xl overflow-hidden"
        >
          {services.map((s) => (
            <motion.article
              key={s.name}
              variants={staggerItem}
              className="group relative flex flex-col bg-offwhite transition-colors duration-500 hover:bg-cream overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.name} at Biolume Dental Care, Vashi`}
                  fill
                  quality={75}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient so badge stays readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />

                {/* Specialty badge — floated over image */}
                {"specialty" in s && s.specialty && (
                  <span className="absolute top-3 right-3 text-[9.5px] uppercase tracking-[0.18em] text-mint border border-mint/50 rounded-full px-2.5 py-1 bg-plum/60 backdrop-blur-sm">
                    Specialty
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="relative flex flex-col flex-1 p-7 md:p-8">
                {/* Draftsman's contour */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full text-teal/30"
                  viewBox="0 0 400 220"
                  preserveAspectRatio="none"
                >
                  <path
                    className="contour-path"
                    style={{ ["--contour-length" as string]: "800" }}
                    d="M 18 8 L 16 210 Q 17 218 24 218 L 376 218 Q 384 218 384 210 L 382 8"
                  />
                </svg>

                <div className="relative flex items-start justify-between mb-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/8 text-teal transition-all duration-500 group-hover:bg-teal group-hover:text-cream">
                    <s.icon size={18} strokeWidth={1.4} />
                  </span>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    className="text-plum/25 transition-all duration-500 group-hover:text-teal group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <h3 className="relative font-display text-[1.2rem] text-plum tracking-tight leading-tight">
                  {s.name}
                </h3>
                <p className="relative mt-3 text-[13.5px] leading-[1.7] text-plum/60 text-pretty flex-1">
                  {s.blurb}
                </p>

                {"slug" in s && s.slug && (
                  <Link
                    href={`/services/${s.slug}`}
                    className="relative mt-4 inline-flex items-center gap-1.5 text-[12px] tracking-wide text-teal hover:text-teal/70 transition-colors"
                  >
                    View details
                    <ArrowUpRight size={12} strokeWidth={1.7} />
                  </Link>
                )}

                {/* Bottom hover line */}
                <span className="absolute bottom-0 left-7 right-7 h-px bg-teal scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
