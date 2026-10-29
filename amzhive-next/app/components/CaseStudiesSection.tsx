"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["Ecommerce", "Branding and Creative", "Social Media Marketing"];

const caseStudies = [
  {
    tab: "Ecommerce",
    title: "Tiffany & Co. 2X ROI - A Solid Benchmark",
    description: "In today's competitive market, reaching even 2x ROI is a solid benchmark but we've gone above and beyond.",
    image: "#",
    href: "https://www.tiffany.com/",
    badge: "Ecommerce",
  },
  {
    tab: "Ecommerce",
    title: "Online Shopping Experience for Record-Breaking Sales",
    description: "Our journey to scaling online sales wasn't just about increasing volume.",
    image: "#",
    href: "#",
    badge: "Ecommerce",
  },
  {
    tab: "Ecommerce",
    title: "3x Increase in Sales Through Strategic Store",
    description: "Taking our Shopify store to the next level required a combination of strategic insights and powerful optimizations.",
    image: "#",
    href: "#",
    badge: "Ecommerce",
  },
  {
    tab: "Branding and Creative",
    title: "PANDORA: A Strong Standard",
    description: "In today's tough market, achieving 3x ROI is a solid benchmark, but we've exceeded that.",
    image: "#",
    href: "https://us.pandora.net/",
    badge: "Branding",
  },
  {
    tab: "Branding and Creative",
    title: "Online Brand Experience for Record-Breaking Sales",
    description: "Our path to scaling online sales was about more than just boosting volume.",
    image: "#",
    href: "#",
    badge: "Branding",
  },
  {
    tab: "Branding and Creative",
    title: "Sales Growth Achieved Through Strategic Store",
    description: "Elevating our Shopify store took a blend of strategic insights and impactful optimizations.",
    image: "#",
    href: "#",
    badge: "Branding",
  },
  {
    tab: "Social Media Marketing",
    title: "Enhanced Engagement Through Targeted Content",
    description: "We implemented a content strategy that focused on audience interests, leading to a notable increase in engagement rates across platforms.",
    image: "#",
    href: "#",
    badge: "Social",
  },
  {
    tab: "Social Media Marketing",
    title: "Growth in Followers Via Influencer Partnerships",
    description: "Collaborating with influencers helped us tap into new audiences, resulting in a significant boost in our follower count and brand visibility.",
    image: "#",
    href: "#",
    badge: "Social",
  },
  {
    tab: "Social Media Marketing",
    title: "Data-Driven Analytics for Performance Improvement",
    description: "Utilizing analytics tools allowed us to track performance and make informed adjustments, ultimately enhancing our overall social media effectiveness.",
    image: "#",
    href: "#",
    badge: "Social",
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState("Ecommerce");

  const filtered = caseStudies.filter((c) => c.tab === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight font-[var(--font-jakarta)]"
              style={{ color: "#060097" }}
            >
              <span className="text-[#1e293b]">Have a Look at Our Success Stories in the </span>
              E-Commerce World!
            </h2>
            <p className="text-[#67768e] mt-3 max-w-xl text-sm leading-relaxed">
              These stores are simply showcases of our web design expertise. Our long-term clients&apos; stores consistently generate six-figure sales.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-[#060097] text-white"
                    : "bg-[#f9f6fe] text-[#67768e] hover:bg-[#f0eafd]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.1 }}
            >
            <Link
              href={study.href}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#060097]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold flex items-center gap-2">
                    View Case Study <ArrowIcon />
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-[#ffcd57] text-[#1e293b] text-xs font-bold px-3 py-1 rounded-full">
                  {study.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1e293b] text-base mb-2 leading-snug font-[var(--font-jakarta)] group-hover:text-[#060097] transition-colors">
                  {study.title}
                </h3>
                <p className="text-[#67768e] text-sm leading-relaxed">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[#060097] text-sm font-semibold">
                  Read More <ArrowIcon />
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-flex items-center gap-2 border-2 border-[#060097] text-[#060097] px-7 py-3.5 rounded-full font-semibold hover:bg-[#060097] hover:text-white transition-all"
          >
            View All Case Studies <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
