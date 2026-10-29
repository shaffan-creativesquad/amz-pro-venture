"use client";

import { motion } from "framer-motion";

import { useState } from "react";
import Link from "next/link";

const items = [
  {
    title: "Discover & Refine Concept",
    content: "This is the research and discovery stage where we work on finding out what the client would like from the project. Here we discover the journeys tone of voice, branding assets and colours.",
  },
  {
    title: "Content & Creation",
    content: "This stage is specific to each client and depends on the brief they have given. It is where our designers bring the final concept and tone of voice into visual communication.",
  },
  {
    title: "Implementation",
    content: "Here all the graphics and resources will be applied onto media materials, making sure the clients ethos and brand image are carried throughout.",
  },
  {
    title: "Full Handover",
    content: "Once the designers have finished, a full catalogue of assets will be handed over to the client. The files are completely editable and everything designed belongs to the client.",
  },
  {
    title: "Development",
    content: "Here all the graphics and resources will come to life in a fully interactive website. With a fully developed front-end that will engage users, as well as an intuitive backend where you can manage your business.",
  },
  {
    title: "Testing, Quality Assurance & Launch",
    content: "Once the designers have finished, a full catalogue of assets will be handed over to the client. The files are completely editable and everything designed belongs to the client.",
  },
];

export default function OurProcessSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <style>{`
      .btn-slide {
        position: relative;
        overflow: hidden;
      }
      .btn-slide::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: #ff9900;
        transition: height 0.35s ease;
        z-index: 0;
      }
      .btn-slide:hover::before {
        height: 100%;
      }
      .btn-slide .btn-slide-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 1.2em;
      }
      .btn-slide .btn-slide-top {
        transition: transform 0.35s ease;
        transform: translateY(0);
      }
      .btn-slide:hover .btn-slide-top {
        transform: translateY(-120%);
      }
      .btn-slide .btn-slide-bottom {
        position: absolute;
        top: 120%;
        left: 0;
        transition: transform 0.35s ease;
      }
      .btn-slide:hover .btn-slide-bottom {
        transform: translateY(-120%);
      }
    `}</style>
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#ebebeb" }}>
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-20">

        {/* LEFT */}
        <div className="flex-1 max-w-[480px]">
          <h2 className="font-bold text-[42px] mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#000000" }}>
            Our Process
          </h2>
          <p className="text-[16px] leading-relaxed mb-10" style={{ color: "#000000" }}>
            We take the time to understand your business goals, and to complete market and competitor research to help identify the marketing channels and strategies that will work best for you. Having gathered assets and prepped your online presence, we launch your strategy constantly monitoring progress and enhancing activity.
          </p>
          <Link
            href="/contact-us"
            className="btn-slide inline-flex items-center gap-3 bg-black text-white font-semibold text-[15px] px-7 py-3"
          >
            <span className="btn-slide-content">
              <span className="btn-slide-top inline-flex items-center gap-3">
                LETS TALK
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="btn-slide-bottom inline-flex items-center gap-3">
                LETS TALK
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </div>

        {/* RIGHT — Accordion */}
        <div className="flex-1">
          {items.map((item, i) => (
            <div key={item.title} className="border-t border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-semibold text-[17px]" style={{ color: "#000000" }}>{item.title}</span>
                <span className="text-[22px] font-light flex-shrink-0 ml-4" style={{ color: "#000000" }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 1s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div className="pb-6 pr-8">
                  <p className="text-[15px] leading-relaxed" style={{ color: "#000000" }}>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300" />
        </div>

      </div>
    </motion.section>
    </>
  );
}
