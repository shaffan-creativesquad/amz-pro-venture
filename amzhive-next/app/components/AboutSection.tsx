"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ArrowIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #030060 0%, #060097 40%, #08009e 60%, #040070 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content - animates from left */}
        <motion.div
          className="flex-1 text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            className="inline-block border border-white/20 rounded-xl px-5 py-3 mb-6"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-1">THE E-COMMERCE</div>
            <div className="text-lg font-bold text-white">WEB DESIGN EXPERTS</div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-[var(--font-jakarta)]"
          >
            <span className="text-white">Unlocking </span>
            <span style={{ color: "#ffcd57" }}>the Power of Online Growth</span>
          </h2>

          <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-[520px]">
            AMZHIVE stands as your premier digital marketing and web design agency, specializing in WooCommerce and Shopify e-commerce solutions tailored for exponential growth. Based in the vibrant heart of Miami, Florida, our team comprises seasoned website designers, developers, and marketing aficionados, poised to elevate your online presence to unprecedented heights.
          </p>

          <div className="flex items-center gap-3 mb-6 text-sm font-semibold">
            <Link href="/social-media-marketing" className="text-[#ffcd57] hover:text-white transition-colors">
              Marketing
            </Link>
            <span className="w-px h-4 bg-white/40" />
            <Link href="/contact-us" className="text-white/80 hover:text-white transition-colors">
              Tell us about your project
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
            >
              <ArrowIcon color="white" />
              ABOUT
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
            >
              <ArrowIcon color="white" />
              CONTACT
            </Link>
          </div>
        </motion.div>

        {/* Right: GIF */}
        <motion.div
          className="flex-shrink-0 hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src="#"
            alt="E-Commerce Experts"
            width={460}
            height={278}
            unoptimized
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
