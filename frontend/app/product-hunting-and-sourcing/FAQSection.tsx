"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is Amazon product hunting, and why does it matter?",
    answer: "Amazon product hunting is about finding products with strong demand, low competition, and good margins. It matters because your product choice affects everything else you do, from your ad spend to your bottom line. The right product makes growth a lot easier.",
  },
  {
    question: "What kind of products will you find for me?",
    answer: "We're looking for private label products that fit your budget, your category, and your objectives. We evaluate each one for consistent demand, realistic competition, and healthy margins so you end up with options that fit your business.",
  },
  {
    question: "How do you hunt for products on Amazon?",
    answer: "We use a combination of research tools (Helium 10, Jungle Scout, etc.) and our own hands-on analysis. We look at sales history, search volume, seasonality, reviews, and competitor listings to find market gaps we can fill.",
  },
  {
    question: "How do you make sure suppliers are reliable?",
    answer: "We look at each supplier's track record, their certs, their production capacity and their communication. We will invariably check out a number of manufacturers and get samples, so you're only working with those that have proven they can deliver.",
  },
  {
    question: "What's included in the quality assurance process?",
    answer: "We arrange for the product samples to be tested and inspected and provide genuine feedback with suggestions for improvement. We also help ensure the stock meets the standards you've agreed with the supplier before shipping.",
  },
  {
    question: "Can you guarantee success?",
    answer: "No one can possibly guarantee sales, as the outcome will also be down to things like price, marketing, and how you run your listing. We mitigate your risk by selecting products based on real data and connecting you with reliable suppliers.",
  },
  {
    question: "What happens if I'm not happy with the product recommendations?",
    answer: "Tell us. We'll talk through what didn't fit, adjust the research based on your feedback, and come back with new options that suit you better.",
  },
  {
    question: "Do you work with suppliers outside China?",
    answer: "Yes. While many products are made in China, we also work with suppliers in other countries, depending on the product, cost, and shipping needs.",
  },
  {
    question: "Can you help with branding and packaging?",
    answer: "Yes. We help with logo and packaging design, guide you through trademarks and Amazon Brand Registry, and advise on how to position your product to stand out.",
  },
  {
    question: "Do you handle shipping and logistics?",
    answer: "Our focus is finding the product and the right supplier. We can guide you on shipping options and help coordinate with your supplier and freight partner, so your stock reaches Amazon smoothly.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
            Have questions about our product hunting and sourcing service? Here are the ones sellers ask most. If yours isn&apos;t here, reach out.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Let&apos;s Talk</span>
                <span className="svc-btn-bottom">Let&apos;s Talk</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[15px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[18px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
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
