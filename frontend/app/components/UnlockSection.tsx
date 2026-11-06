"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

const sliderImages = [
  { src: "/WhatsApp Image 2026-11-06 at 7.48.20 PM.jpeg", alt: "Slide 1" },
  { src: "/WhatsApp Image 2026-11-06 at 7.22.39 PM.jpeg", alt: "Slide 2" },
  { src: "/WhatsApp Image 2026-11-06 at 7.24.01 PM.jpeg", alt: "Slide 3" },
  { src: "/WhatsApp Image 2026-11-06 at 7.26.22 PM.jpeg", alt: "Slide 4" },
  { src: "/WhatsApp Image 2026-11-06 at 7.27.42 PM.jpeg", alt: "Slide 5" },
  { src: "/WhatsApp Image 2026-11-06 at 7.30.05 PM.jpeg", alt: "Slide 6" },
  { src: "/WhatsApp Image 2026-11-06 at 7.31.20 PM.jpeg", alt: "Slide 7" },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UnlockSection() {
  return (
    <section className="pt-6 pb-6 lg:py-20 w-full" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Mobile-only slider */}
          <div className="block lg:hidden w-full max-w-[300px] mx-auto mb-8">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              speed={800}
              className="w-full"
            >
              {sliderImages.map((img, i) => (
                <SwiperSlide key={i} className="rounded-2xl overflow-hidden shadow-xl">
                  <Image src={img.src} alt={img.alt} width={600} height={500} className="w-full h-auto object-cover" unoptimized />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center mb-6 overflow-hidden rounded-sm">
            <span className="bg-[#ff9900] text-white text-sm font-semibold px-4 py-2">THE E-COMMERCE</span>
            <span className="bg-black text-white text-sm font-semibold px-4 py-2">GROWTH EXPERTS</span>
          </div>

          {/* Heading */}
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 45px)" }}
          >
            <span className="text-[#000000]">We Turn Online Stores Into </span>
            <span className="text-[#ff9900]">Serious Revenue</span>
          </h2>

          {/* Paragraph */}
          <p className="text-black text-[15px] leading-relaxed mb-8 max-w-[560px]">
            AMZ ProVenture is a full-service ecommerce growth agency. Our team includes experienced designers, developers, marketplace strategists and ad specialists. We know WooCommerce, Shopify and Amazon inside out, and everything we do comes back to the same goal: more sales, better margins and customers who keep coming back.
          </p>

          {/* Links row */}
          <div className="flex items-center gap-3 mb-8 text-sm font-semibold justify-center lg:justify-start">
            <Link href="/amazon-influencer-marketing-service" className="text-[#ff9900] hover:underline transition-colors">
              Marketing
            </Link>
            <span className="text-[#67768e]">I</span>
            <Link href="/contact-us" className="text-[#67768e] hover:text-[#000000] transition-colors">
              Tell us about your project
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="/about-us"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                ABOUT <ArrowIcon />
              </span>
            </Link>
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                CONTACT <ArrowIcon />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Swiper Effect Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="hidden lg:flex flex-col flex-shrink-0 w-full max-w-[300px] mx-auto lg:mx-0"
        >
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay, Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={800}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            className="w-full"
          >
            {sliderImages.map((img, i) => (
              <SwiperSlide key={i} className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="swiper-prev-btn w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#ff9900] transition-colors duration-300 disabled:opacity-30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="swiper-next-btn w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#ff9900] transition-colors duration-300 disabled:opacity-30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
