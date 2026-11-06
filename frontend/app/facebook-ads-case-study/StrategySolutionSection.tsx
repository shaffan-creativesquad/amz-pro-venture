"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const strategies = [
  {
    title: "Correct Campaign Objective",
    body: "The account was immediately shifted to Meta Lead Generation campaigns, replacing traffic and messenger campaigns that had been underperforming for three years.",
  },
  {
    title: "Campaign Separation",
    body: "Two dedicated campaigns were established — one for prospecting and one for retargeting — each with independent ad sets, unique messaging, audiences, and optimization strategies.",
  },
  {
    title: "Audience Targeting",
    body: "A structured targeting system was developed that delivered an immediate reach of 158,741 people, with segmented audiences built from interest stacking, lookalikes, and retargeting pools.",
  },
  {
    title: "Systems for Scale",
    body: "A consistent testing framework was introduced for creatives, copy, and budget allocation, allowing continuous refinement and performance scaling without disrupting the lead flow.",
  },
];

export default function StrategySolutionSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-24 items-center">

        {/* LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-1"
        >
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            The Strategy &amp; Solution
          </h2>

          <p className="text-[#67768e] text-[15px] leading-relaxed mb-4">
            Like many successful Facebook Ads agency case studies for e-commerce and lead generation, the transformation started with rebuilding the account from the ground up around one clear objective: generating qualified leads at scale.
          </p>

          <p className="text-[#000000] font-bold text-[15px] mb-5">
            Instead of managing assets broadly, we focused on campaign structure, audience segmentation, and ongoing refinement:
          </p>

          <ul className="space-y-6 mb-10">
            {strategies.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-[#000000] text-[15px] mb-1">{item.title}</p>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

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
          className="flex-shrink-0 w-full lg:w-[460px]"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/facebook-ads-case-study-1024x1024.webp"
              alt="Facebook Ads Strategy – 908 Leads in 3 Months"
              width={460}
              height={460}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
