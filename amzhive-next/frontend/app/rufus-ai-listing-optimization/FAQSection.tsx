"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Can you create listings from scratch?",
    answer: "Absolutely! Whether you’re launching your very first product or expanding your existing catalog, we specialize in building fully optimized, high-converting listings from the ground up, tailored to your specific goals and target audience.",
  },
  {
    question: "Will my product rank higher after optimization?",
    answer: "Yes, listing optimization is fundamental for improving your product’s indexing and keyword relevance, which are crucial factors for organic ranking on Amazon. While final ranking also depends on sales velocity, positive reviews, and advertising efforts, our optimization lays the strongest possible foundation for superior visibility and future growth.",
  },
  {
    question: "Do you offer A+ Content and image design?",
    answer: "Yes, we do! High-quality A+ Content and professional image design are essential for conversion. These services are available as powerful add-ons to our core listing optimization, or they can be included in our comprehensive service bundles like Account Management or our dedicated Design Bundle, giving you flexible options.",
  },
  {
    question: "Can you run A/B testing for my listings?",
    answer: "For brands enrolled in Amazon’s Brand Registry, we absolutely can! We provide expert support with A/B testing for your titles, images, and A+ Content. This allows us to continuously refine your listings based on real shopper behavior, ensuring maximum performance.",
  },
  {
    question: "How quickly will I see results after my listing is optimized?",
    answer: "While significant ranking improvements can take time as Amazon’s algorithm adjusts to new data, you can often see immediate benefits in terms of improved content quality, better visibility for targeted keywords, and enhanced conversion potential. We’ll start tracking key metrics right away, and consistent optimization leads to sustained growth.",
  },
  {
    question: "What makes your listing optimization service different from others?",
    answer: "Our unique edge lies in our exclusive Rufus AI Image & SEO Audit, which future-proofs your listings against Amazon’s evolving AI, combined with our proven, data-driven 6-phase process that has delivered over 700 high-converting listings. We don’t just tweak; we transform, focusing on both front-end aesthetics and backend algorithms to ensure your listing not only ranks but also genuinely converts.",
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
            Got questions about our Amazon Listing Optimization service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
