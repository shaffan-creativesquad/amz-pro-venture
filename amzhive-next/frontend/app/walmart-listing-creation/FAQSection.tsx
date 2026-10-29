"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Can you create listings from scratch?",
    answer: "Absolutely! Whether you're launching your very first product or expanding your existing catalog, we specialize in building fully optimized, high-converting listings from the ground up, tailored to your specific goals and target audience.",
  },
  {
    question: "Will my product rank higher after optimization?",
    answer: "Yes, listing optimization is fundamental for improving your product's indexing and keyword relevance, which are crucial factors for organic ranking on Walmart. While final ranking also depends on sales velocity, positive reviews, and advertising efforts, our optimization lays the strongest possible foundation for superior visibility and future growth.",
  },
  {
    question: "How quickly will I see results after my listing is optimized?",
    answer: "While significant ranking improvements can take time as Walmart's algorithm adjusts to new data, you can often see immediate benefits in terms of improved content quality, better visibility for targeted keywords, and enhanced conversion potential. We'll start tracking key metrics right away, and consistent optimization leads to sustained growth.",
  },
  {
    question: "What makes your listing optimization service different from others?",
    answer: "Our unique edge lies in our exclusive AI Image & SEO Audit, which future-proofs your listings against evolving AI, combined with our proven, data-driven process that has delivered over 700 high-converting listings. We don't just tweak; we transform, focusing on both front-end aesthetics and backend algorithms to ensure your listing not only ranks but also genuinely converts.",
  },
  {
    question: "My product is in a very competitive niche. Can you still help me rank?",
    answer: "Absolutely. We specialize in competitive niches. Our deep keyword and competitor research helps us identify untapped opportunities and craft a listing strategy that positions your product to stand out, even against established competitors. It's about smart strategy, not just brute force.",
  },
  {
    question: "Do you offer ongoing optimization and maintenance after the initial setup?",
    answer: "Yes! Our \"Optimization Process\" includes Ongoing Optimization & Seasonal Updates. Walmart's marketplace is dynamic. We can provide continued support to keep your listing aligned with trends, algorithm changes, and peak seasons, ensuring your performance doesn't plateau. Ongoing maintenance can include additional charges.",
  },
  {
    question: "What if my product images aren't high-resolution or professional?",
    answer: "High-quality visuals are essential. While we require high-resolution product images to begin, if you don't have them, we can assist or recommend trusted professional photography partners as a separate service. We'll guide you on best practices to ensure your visuals meet Walmart's standards and attract buyers.",
  },
  {
    question: "How do you access my Walmart Seller Central account securely?",
    answer: "We prioritize your account security. We will only request secondary user permissions via Walmart Seller Central, specifically tailored to the access we need to perform our services. This means you maintain full control of your main account, and we only access what's necessary for optimization.",
  },
  {
    question: "How do I optimize my Walmart product listing?",
    answer: "Optimize by using high-intent keywords in titles, bullet points, and descriptions, adding high-quality images, and enhancing backend search terms. Our service handles this comprehensively, ensuring compliance and conversions.",
  },
  {
    question: "How to rank higher on Walmart Marketplace?",
    answer: "Boost rankings with SEO-optimized titles, strategic keywords, compelling visuals, and competitive pricing. Maintain high Listing Quality Scores (LQS) and leverage ads for sales velocity. Our data-driven approach maximizes your rank.",
  },
  {
    question: "What is Walmart's optimization triangle?",
    answer: "The optimization triangle refers to three key elements: relevant keywords, high-quality visuals, and compelling, benefit-focused content. Balancing these drives visibility, clicks, and conversions. We align your listing with this framework.",
  },
  {
    question: "How to improve Walmart listing quality score?",
    answer: "Improve LQS by ensuring complete, accurate product details, SEO-optimized content, high-resolution images, and compliance with Walmart's guidelines. We audit and enhance listings to improve LQS.",
  },
  {
    question: "Why are long-tail keywords important for Walmart?",
    answer: "Long-tail keywords target specific, high-intent shoppers, reducing competition and improving conversion rates. They enhance discoverability and ranking for niche searches. We incorporate long-tail terms for optimal results.",
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
            Got questions about our Walmart Listing Creation and Optimization service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
