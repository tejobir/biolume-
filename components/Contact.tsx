"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Clock, MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { doctor } from "@/lib/doctor";

const schema = z.object({
  name: z.string().min(2, "Please share your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .regex(/^[0-9+\-\s()]+$/, "Numbers only"),
  email: z.string().email("Valid email please").or(z.literal("")).optional(),
  service: z.string().min(1, "Choose a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Consultation",
  "Dental Implants",
  "Laser Treatment",
  "Smile Design",
  "Aligners / Ortho",
  "Root Canal / Restorative",
  "Paediatric Visit",
  "Other",
];

const clinicInfo = [
  {
    icon: MapPin,
    label: "Studio",
    value: doctor.addressLines.join("\n"),
  },
  {
    icon: Phone,
    label: "Speak with us",
    value: doctor.phoneDisplay,
    href: doctor.phoneHref,
  },
  {
    icon: Mail,
    label: "Write to us",
    value: doctor.email,
    href: doctor.emailHref,
  },
  {
    icon: Clock,
    label: "Hours",
    value: doctor.hours.join("\n"),
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const text = encodeURIComponent(
      `New appointment request from ${data.name}\n\nPhone: ${data.phone}\nEmail: ${data.email || "—"}\nService: ${data.service}\nMessage: ${data.message || "—"}`,
    );
    window.open(`${doctor.whatsappHref}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      reset();
    }, 4000);
  };

  return (
    <section id="contact" className="surface-warm-mint relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-display text-teal font-medium leading-[1.15] tracking-[0.02em] text-[clamp(1.5rem,2.8vw,2.3rem)] text-balance">
                Book a chair. We&rsquo;ll handle the rest.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.05} className="lg:col-span-6 lg:pt-4">
            <p className="text-[14px] leading-[1.85] text-plum/80 max-w-lg text-pretty">
              Share a few details and we&rsquo;ll confirm an appointment over WhatsApp
              within the hour. No automated funnels, no forms within forms.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(
                "border border-plum/12 bg-cream p-7 md:p-10 shadow-soft",
                sent && "form-flash-mint",
              )}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Aarav Mehta"
                    className="field-input"
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                <Field label="Email (optional)" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    placeholder="you@example.com"
                    className="field-input"
                  />
                </Field>
                <Field label="Service" error={errors.service?.message}>
                  <select
                    {...register("service")}
                    defaultValue=""
                    className="field-input cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message (optional)" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Briefly describe what you'd like to address."
                  className="field-input resize-none"
                />
              </Field>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[12.5px] text-plum/65 max-w-xs">
                  Your information stays with our front desk. Never shared.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting || sent}
                  className="group inline-flex items-center gap-3 border border-teal bg-teal text-offwhite px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] hover:bg-transparent hover:text-teal transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={15} strokeWidth={1.6} /> Opening WhatsApp…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="flex items-center gap-2"
                      >
                        Send Request
                        <ArrowRight
                          size={15}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <style jsx>{`
                .field-input {
                  width: 100%;
                  background: #efeae4;
                  border: 1px solid rgba(81, 58, 50, 0.14);
                  padding: 0.85rem 1rem;
                  font-size: 14.5px;
                  font-family: inherit;
                  color: #513a32;
                  outline: none;
                  transition: border-color 0.25s ease, background-color 0.25s ease,
                    box-shadow 0.25s ease;
                }
                .field-input:focus-visible {
                  border-color: #146155;
                  background: #efeae4;
                  box-shadow: 0 0 0 3px rgba(20, 97, 85, 0.14);
                }
                .field-input::placeholder {
                  color: rgba(81, 58, 50, 0.45);
                }
              `}</style>
            </form>
          </Reveal>

          {/* Info + Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.05}>
              <div className="border border-plum/12 bg-cream p-7 md:p-8 shadow-soft">
                <ul className="space-y-6">
                  {clinicInfo.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-teal/8 text-teal flex-shrink-0">
                        <item.icon size={15} strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal/85">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-[14.5px] text-plum hover:text-teal transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="mt-1 text-[14.5px] text-plum/85 whitespace-pre-line leading-relaxed">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden border border-plum/12 shadow-soft aspect-[5/4]">
                <iframe
                  title="Biolume Dental Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823914!2d72.92!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1cdd11b6d3b%3A0xc60660ddd1c1bea4!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.15) contrast(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.16em] text-plum/70 block mb-2">
        {label}
      </span>
      {children}
      {error && <span className="block text-[12px] text-red-700/80 mt-1.5">{error}</span>}
    </label>
  );
}
