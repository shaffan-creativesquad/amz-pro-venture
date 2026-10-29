"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rita Lee",
    time: "2 years ago",
    color: "#E97C3A",
    text: "I recommend this company they have diligently worked with me to get my store launched ….so far it has been a great experience with my project manager Anna",
  },
  {
    name: "Marie LaCrue",
    time: "2 years ago",
    color: "#7B68EE",
    text: "AMZ Hive has went over and beyond my expectations. They work with you very well. Their communication, patience, quality and most of all they are determined to meet the deadline. Love working with Royce Matthew and Anna & the team.",
  },
  {
    name: "Anthony Jones",
    time: "2 years ago",
    color: "#4A90D9",
    text: "The experience with the AMC company has been fantastic thus far Anna my web developer is very informative and keeps me up-to-date on every project that she's implementing…",
  },
  {
    name: "Fred Filter",
    time: "2 years ago",
    color: "#2ECC71",
    text: "Great team to work with! They were very professional and delivered exactly what was promised. Highly recommended for anyone looking to grow their online store.",
  },
  {
    name: "Saravanan Krishnan",
    time: "3 years ago",
    color: "#4A90D9",
    text: "Their service and timeline is great. Mr Matthew Soloman Sr E commerce Consultant guided me very well. His knowledge and guidance helped to take correct decision.",
  },
];

const phoneImages = [
  "/1-1-scaled.webp",
  "/2-1-scaled.webp",
  "/3-scaled.webp",
  "/4-scaled.webp",
];

const badges = [
  { src: "/top-digital-new.webp", alt: "Top Digital Agency" },
  { src: "/best-agencies.webp", alt: "Best Shopify Agency" },
  { src: "/goodfirms.webp", alt: "GoodFirms" },
  { src: "/shopify_expert.webp", alt: "Shopify Experts" },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fb8e28">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 512 512" width="18" height="18">
      <g fill="none" fillRule="evenodd">
        <path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4" />
        <path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853" />
        <path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05" />
        <path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335" />
      </g>
    </svg>
  );
}

export default function TestimonialsSection() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);

  const prevReview = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIndex((i) => (i + 1) % reviews.length);

  const prevPhone = () => setPhoneIndex((i) => (i - 1 + phoneImages.length) % phoneImages.length);
  const nextPhone = () => setPhoneIndex((i) => (i + 1) % phoneImages.length);

  const visibleReviews = [reviews[reviewIndex], reviews[(reviewIndex + 1) % reviews.length]];
  const visiblePhones = [phoneImages[phoneIndex], phoneImages[(phoneIndex + 1) % phoneImages.length]];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1247px] mx-auto px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-[#1e293b]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>What People Say</h2>
          <h2 className="text-5xl font-bold" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#E91C59" }}>About Our Services</h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1"
          >
            {/* Review cards with arrows */}
            <div className="relative flex items-center gap-3">
              <button
                onClick={prevReview}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91C59] hover:text-[#E91C59] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex-1 flex flex-row gap-4">
                {visibleReviews.map((r, i) => (
                  <div key={i} className={`flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col h-[200px]${i === 1 ? " hidden md:flex" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0" style={{ backgroundColor: r.color }}>
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[#1e293b] text-sm">{r.name}</div>
                          <div className="text-[#67768e] text-xs">{r.time}</div>
                        </div>
                      </div>
                      <GoogleIcon />
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
                    </div>
                    <p className="text-[#67768e] text-xs leading-relaxed overflow-y-auto flex-1 pr-1">{r.text}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={nextReview}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91C59] hover:text-[#E91C59] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Award badges */}
            <div className="flex items-center gap-5 mt-8 flex-wrap">
              {badges.map((b) => (
                <Image key={b.alt} src={b.src} alt={b.alt} width={140} height={140} className="object-contain h-32 w-auto" unoptimized />
              ))}
            </div>

            {/* Platform review images */}
            <div className="flex flex-wrap gap-5 mt-6 items-center">
              <Image src="/3-7.png" alt="Google Reviews" width={180} height={50} className="h-16 w-auto object-contain" unoptimized />
              <Image src="/4-6.png" alt="Clutch" width={180} height={50} className="h-16 w-auto object-contain" unoptimized />
              <Image src="/1-5.png" alt="Shopify Reviews" width={180} height={50} className="h-16 w-auto object-contain" unoptimized />
              <Image src="/2-6.png" alt="Sitejabber" width={150} height={50} className="h-16 w-auto object-contain" unoptimized />
            </div>
          </motion.div>

          {/* RIGHT: Phone images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-shrink-0"
          >
            {/* Slider: 1 phone on mobile, 2 on desktop */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevPhone}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91C59] hover:text-[#E91C59] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex gap-4">
                <div className="w-[160px] sm:w-[200px]">
                  <Image src={phoneImages[phoneIndex]} alt="Customer testimonial" width={220} height={420} className="object-contain w-full h-auto" unoptimized />
                </div>
                <div className="hidden lg:block w-[200px]">
                  <Image src={phoneImages[(phoneIndex + 1) % phoneImages.length]} alt="Customer testimonial" width={220} height={420} className="object-contain w-full h-auto" unoptimized />
                </div>
              </div>

              <button
                onClick={nextPhone}
                className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#E91C59] hover:text-[#E91C59] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
