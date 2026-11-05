"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const strategies = [
  {
    title: "Meta Ads Growth Strategy:",
    points: [
      "Paid acquisition campaigns to drive qualified traffic.",
      "Product bundling, promotions, and offers to boost conversions.",
      "Retargeted high-intent shoppers to improve conversion rates.",
    ],
  },
  {
    title: "Email Marketing Engagement:",
    points: [
      "Personalized welcome and customer journey flows.",
      "Recovered abandoned carts to recapture lost revenue.",
      "Converted existing traffic into additional repeat revenue.",
    ],
  },
  {
    title: "Organic Social Growth:",
    points: [
      "Short-form video content strategies to increase brand visibility.",
      "Developed 19k+ organic views, creating additional customer touchpoints.",
    ],
  },
  {
    title: "Shopify Conversion Optimization:",
    points: [
      "Improved product presentation and page structure.",
      "Enhanced customer journeys for a smoother buying experience.",
      "Optimized the store experience to convert more traffic into purchases.",
    ],
  },
];

export default function StrategySection() {
  return (
    <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-24 items-center">

        {/* LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-1"
        >
          <h2
            className="font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            The Strategy &amp; Solution
          </h2>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            AMZ ProVenture implemented a complete growth framework across paid, owned, and organic channels.
          </p>

          <div className="space-y-7 mb-9">
            {strategies.map((s) => (
              <div key={s.title}>
                <p className="text-[#000000] font-bold text-[15px] mb-3">{s.title}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5 w-5 h-5" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#ff9900" />
                        <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#67768e] text-[15px] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/book-a-call"
            className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md overflow-hidden transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-[1.2em]">
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                Join the Ranks of Our Successful Clients
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex items-center gap-2 absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
                Join the Ranks of Our Successful Clients
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex-shrink-0 w-full lg:w-[480px]"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Full-Funnel-Growth-Strategy-Laptop-Mockup-1024x1024.webp"
              alt="The Strategy & Solution"
              width={480}
              height={480}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
