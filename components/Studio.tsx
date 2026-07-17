"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

/*
 * Full-bleed image band — the template's mid-page statement break.
 * One photograph, one line, one action.
 */
export function Studio() {
  return (
    <section id="studio" className="relative h-[64vh] min-h-[440px] max-h-[760px] overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/6812494/pexels-photo-6812494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600"
        alt="Patient with a bright, natural smile at Biolume Dental Care"
        fill
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Pine wash for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal/85 via-teal/25 to-teal/10" />

      <div className="absolute inset-0 flex items-end">
        <div className="container-x w-full pb-12 md:pb-16 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="uppercase text-offwhite font-medium leading-[1.12] tracking-[0.02em] text-[clamp(1.7rem,4vw,3.2rem)] max-w-[16ch] text-balance">
              You&rsquo;re exactly where you&rsquo;re meant to be
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="inline-flex items-center border border-offwhite px-7 py-3 text-[11px] uppercase tracking-[0.2em] text-offwhite hover:bg-offwhite hover:text-teal transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70"
            >
              Book Now
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
