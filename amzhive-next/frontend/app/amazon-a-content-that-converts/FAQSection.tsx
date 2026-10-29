"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Can you create A+ Content for multiple ASINs?",
    answer: "Yes! We frequently work with brands managing extensive catalogs. We offer custom packages specifically designed for multi-ASIN setups and parent-child listings, ensuring a cohesive and optimized look across all your products.",
  },
  {
    question: "Can you design Premium A+ Content?",
    answer: "Absolutely! If your brand is eligible for Premium A+ Content (a great opportunity for enhanced visuals and interactivity), we have the expertise to design and implement richer layouts, engaging video modules, and interactive carousels at an additional cost, maximizing your brand’s presence.",
  },
  {
    question: "Can I use the same A+ Content across multiple products?",
    answer: "While you can use similar A+ content across variations and related ASINs for brand consistency, we generally recommend tailoring content for optimal performance. Specific product features and unique selling points resonate more when highlighted directly within each A+ module. We can advise on the best strategy for your catalog.",
  },
  {
    question: "What if I don’t have professional brand visuals or lifestyle images?",
    answer: "No problem! While we typically work with client-provided assets, we understand that not every brand has a full library. We can assist in creating the necessary graphics and visual assets as an add-on service, or we can provide recommendations for trusted photography partners to ensure your A+ Content looks its best.",
  },
  {
    question: "How long does the A+ Content design process typically take?",
    answer: "Our standard delivery for A+ Content is typically 5-7 business days from the time we receive all necessary content and images from you. We prioritize efficiency without compromising on quality.",
  },
  {
    question: "How does your service use Amazon’s Rufus AI for A+ Content?",
    answer: "Rufus AI analyzes both text and images to understand product content better. Our service specifically optimizes your A+ Content visuals (infographics, lifestyle shots) and hidden metadata to be highly \"AI-friendly.\" This ensures Rufus can accurately interpret your product’s key attributes, leading to better indexing, higher visibility, and improved search relevance for your listings.",
  },
  {
    question: "Will A+ Content increase my sales and conversion rate?",
    answer: "Yes, definitely! As Amazon states, Basic A+ Content can increase sales by up to 8%, and well-implemented Premium A+ Content can boost sales by up to 20%. By providing clearer information, compelling visuals, and building stronger brand trust, A+ Content directly helps convert hesitant shoppers into confident buyers.",
  },
  {
    question: "Can you update my existing A+ Content, or do you only create new?",
    answer: "We do both! We can conduct an audit of your existing A+ Content to identify areas for improvement and then redesign or enhance modules to boost performance. Whether it’s a refresh or a complete overhaul, we ensure your A+ Content is optimized.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Amazon A+ Content service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
          </p>
          <a href="/contact-us" className="svc-btn">
            <span className="svc-btn-inner">
              <span className="svc-btn-top">Lets Talk</span>
              <span className="svc-btn-bottom">Lets Talk</span>
            </span>
          </a>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[22px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-5">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
