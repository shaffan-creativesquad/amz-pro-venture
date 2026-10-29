"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Strong Creative Input",
    body: "We are innovative thinkers, bringing creativity to fulfil your project vision",
  },
  {
    title: "Efficiency",
    body: "Our process ensures a streamlined project journey.",
  },
  {
    title: "Dedication",
    body: "You can trust you have a committed team at AMZHIVE.",
  },
  {
    title: "Tech Confidence",
    body: "We bring strong technical skill and experience to every project.",
  },
  {
    title: "Problem Solvers",
    body: "We love the challenge of overcoming creative or technical obstacles.",
  },
];

export default function ProcessSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full" style={{ backgroundColor: "#e8e8e8" }}>
      <style>{`
        .proc-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-color: #1e293b;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 28px;
          font-size: 13px;
          text-decoration: none;
        }
        .proc-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #E91C59;
          transition: height 0.35s ease;
          z-index: 0;
        }
        .proc-btn:hover::before { height: 100%; }
        .proc-btn-inner {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          height: 1.2em;
        }
        .proc-btn-top {
          display: block;
          transition: transform 0.35s ease;
        }
        .proc-btn:hover .proc-btn-top { transform: translateY(-100%); }
        .proc-btn-bottom {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          transition: transform 0.35s ease;
        }
        .proc-btn:hover .proc-btn-bottom { transform: translateY(-100%); }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full md:w-1/2 flex flex-col justify-start gap-6"
        >
          <h2
            className="font-bold"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "32px", color: "#1e293b" }}
          >
            Our Process
          </h2>
          <p style={{ fontSize: "16px", color: "#1e293b", lineHeight: "1.7" }}>
            We take the time to understand your business goals, and to complete market and competitor research to help identify the marketing channels and strategies that will work best for you. Having gathered assets and prepped your online presence, we launch your strategy constantly monitoring progress and enhancing activity.
          </p>
          <div>
            <a href="/contact-us" className="proc-btn">
              <span className="proc-btn-inner">
                <span className="proc-btn-top">LETS TALK</span>
                <span className="proc-btn-bottom">LETS TALK</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right — Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="w-full md:w-1/2 flex flex-col"
        >
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #c0c0c0" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center py-5 text-left"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span className="font-bold" style={{ fontSize: "17px", color: "#1e293b" }}>
                  {item.title}
                </span>
                <span style={{ fontSize: "22px", color: "#1e293b", lineHeight: 1 }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="pb-5" style={{ fontSize: "15px", color: "#1e293b", lineHeight: "1.7", paddingLeft: "4px" }}>
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
