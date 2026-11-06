"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Onboarding & Store Setup",
    desc: "We handle complete TikTok Shop setup, branding, and listings to get your store retail-ready fast.",
    img: "/Onboarding-and-Store-Setup.jpg",
  },
  {
    title: "Full-Time Management",
    desc: "Our team fully manages your store's operations, marketing, and logistics, so you stay hands-off.",
    img: "/Full-Time-Management.jpg",
  },
  {
    title: "Earn Passive Revenue",
    desc: "Enjoy consistent monthly income while we scale your TikTok Shop presence with proven strategies and systems.",
    img: "/Earn-Passive-Revenue.jpg",
  },
];

export default function PartnerStepsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center font-bold mb-14"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 44px)", color: "#ffffff" }}
        >
          Become Our Partner in <span style={{ color: "#ff9900" }}>3 Easy Steps</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#1e1e1e" }}
            >
              <div className="relative w-full" style={{ height: "200px" }}>
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3
                  className="font-bold text-[17px] mb-2"
                  style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#ffffff" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9ca3af] text-[13.5px] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
