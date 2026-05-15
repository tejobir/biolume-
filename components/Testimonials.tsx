"use client";

import { motion } from "framer-motion";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    quote:
      "Six months of consultations and I’d resigned to losing two molars. Dr. Dishani’s implant plan saved them. Calmest dental visit of my life.",
    name: "Aarav Mehta",
    initials: "AM",
    detail: "Implant Patient · Vashi",
    avatarFrom: "from-teal",
    avatarTo: "to-mint",
  },
  {
    quote:
      "Brought my eight-year-old in dreading a meltdown. She walked out clutching a sticker, asking when we’re coming back. That’s a magic trick.",
    name: "Priya Shenoy",
    initials: "PS",
    detail: "Parent · Nerul",
    avatarFrom: "from-mint",
    avatarTo: "to-teal-light",
  },
  {
    quote:
      "I came for whitening, stayed for the consultation. They redesigned my smile in restrained, beautiful proportions: exactly what I wanted.",
    name: "Kabir Sethi",
    initials: "KS",
    detail: "Smile Design · Belapur",
    avatarFrom: "from-plum",
    avatarTo: "to-teal",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 bg-plum text-cream overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-mint/10 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.22em] text-mint">
                <span className="inline-block h-px w-8 bg-mint/40 align-middle mr-3" />
                Patient Stories
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-tight text-cream text-balance">
                Quiet praise from the
                <em className="italic text-mint"> people who matter</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <div className="flex -space-x-3">
                {["from-teal to-mint", "from-mint to-teal-light", "from-plum to-teal", "from-greige to-mint"].map(
                  (g, i) => (
                    <div
                      key={i}
                      className={`h-11 w-11 rounded-full bg-gradient-to-br ${g} ring-2 ring-plum`}
                    />
                  ),
                )}
                <div className="h-11 w-11 rounded-full bg-cream text-plum ring-2 ring-plum flex items-center justify-center text-[11px] font-medium">
                  200+
                </div>
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      strokeWidth={1.5}
                      className="fill-mint text-mint"
                    />
                  ))}
                </div>
                <div className="text-[12px] text-cream/65 mt-1">
                  4.9 from 200+ reviews
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-7"
        >
          {stories.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="group relative rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 backdrop-blur-sm hover:bg-cream/[0.06] hover:border-mint/30 transition-all duration-500"
            >
              <Quote size={22} strokeWidth={1.3} className="text-mint/70 mb-6" />
              <blockquote className="font-display text-[19.5px] leading-[1.55] text-cream/90 text-balance">
                &#8220;{t.quote}&#8221;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-cream/10 flex items-center gap-3.5">
                {/* Avatar placeholder */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${t.avatarFrom} ${t.avatarTo} flex items-center justify-center font-display text-sm text-cream`}
                  >
                    {t.initials}
                  </div>
                  <div className="absolute inset-0 rounded-full ring-1 ring-cream/15" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={10}
                        strokeWidth={1.5}
                        className="fill-mint text-mint"
                      />
                    ))}
                  </div>
                  <div className="text-[13.5px] text-cream truncate">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-cream/45 mt-0.5 truncate">
                    {t.detail}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
