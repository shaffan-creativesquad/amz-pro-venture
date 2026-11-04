"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Service = {
  highlight: string;
  heading: string;
  headingLine2?: string;
  paragraphs: string[];
  bullets: string[];
  bulletItems?: { title: string; desc: string }[];
  note?: string;
  button: boolean;
  buttonText?: string;
  image: string;
  imageContain?: boolean;
};

const services: Service[] = [
  {
    highlight: "Policy Warning? ",
    heading: "We've Got You.",
    paragraphs: [
      "Maybe it's your first policy notice, or maybe you've been going back and forth with Amazon for weeks. Either way, if your Amazon account health violation needs fixing fast, our compliance team is built for exactly that.",
      "This includes:",
    ],
    bullets: [
      "Sellers with performance notifications or suspended ASINs",
      "Brands dealing with IP or authenticity complaints",
      "Sellers facing repeat violations or rejected appeals",
      "Anyone who wants to stay ahead of suspensions",
    ],
    button: true,
    buttonText: "Talk to a Policy Violation Expert",
    image: "/what-we-need-from-you-3.webp",
    imageContain: true,
  },
  {
    highlight: "From Flag ",
    heading: "to Fixed",
    paragraphs: [
      "We work fast because every day your listings are down is a day of lost sales.",
    ],
    bullets: [
      "Plan of Action (POA) Creation: 5–7 business days. Written for your specific violation, then reviewed by our experts against Amazon's policies.",
      "Amazon Review Time: 7–9 business days on average. Amazon's response times can vary, but we track every update closely.",
      "Full Resolution: Up to 14 business days. Timing depends on case complexity, whether we need extra documents, and whether escalation is required.",
    ],
    note: "Need urgent help? Let us know. We prioritize high-impact cases.",
    button: true,
    buttonText: "Book a Free Consultation",
    image: "/time-line-1.webp",
    imageContain: true,
  },
  {
    highlight: "A Few Things ",
    heading: "We'll Need From You",
    paragraphs: [
      "To get your case resolved quickly and properly, please have these ready:",
    ],
    bullets: [],
    bulletItems: [
      { title: "Child Access to Your Seller Central Account", desc: "View-only access with permissions for performance notifications and case logs." },
      { title: "Product Documentation", desc: "Valid invoices, certifications, or supplier details, depending on the violation." },
      { title: "Images or Supporting Files (if flagged)", desc: "Needed for detail page, safety, or condition-related claims." },
      { title: "Issue History or Communication Logs", desc: "If you have them, they help us build a stronger, more focused appeal." },
    ],
    note: "Please Note: We will help you know what needs to be done, but we do not generate or provide invoices, product certification, or photos. You must submit all documents to comply with Amazon guidelines.",
    button: true,
    buttonText: "BOOK A FREE CONSULTATION →",
    image: "/who-is-this-service-for-1.webp",
    imageContain: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <style>{`
        .svc-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-color: #000000;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 28px;
          font-size: 13px;
          border-radius: 6px;
          text-decoration: none;
        }
        .svc-btn::before {
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
        .svc-btn:hover::before {
          height: 100%;
        }
        .svc-btn-inner {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          height: 1.2em;
        }
        .svc-btn-top {
          display: block;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-top {
          transform: translateY(-100%);
        }
        .svc-btn-bottom {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-bottom {
          transform: translateY(-100%);
        }
      `}</style>

      {services.map((service, i) => {
        const isEven = i % 2 === 0;

        const content = (
          <div className="flex flex-col justify-center gap-5 h-full px-6 py-10 md:px-16 md:py-20 text-center md:text-left">
            <h2
              className="font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#000000" }}
            >
              <span style={{ color: "#ff9900" }}>{service.highlight}</span>
              {service.heading}
              {service.headingLine2 && (
                <><br /><span style={{ color: "#000000" }}>{service.headingLine2}</span></>
              )}
            </h2>
            {service.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.7" }}>
                {p}
              </p>
            ))}
            {service.bullets && service.bullets.length > 0 && (
              <ul className="flex flex-col gap-2 text-left" style={{ paddingLeft: "0", listStyle: "none" }}>
                {service.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2" style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.6" }}>
                    <span style={{ color: "#000000", marginTop: "2px", flexShrink: 0 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {service.bulletItems && service.bulletItems.length > 0 && (
              <ul className="flex flex-col gap-4 text-left" style={{ paddingLeft: "0", listStyle: "none" }}>
                {service.bulletItems.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#ff9900" />
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 700, color: "#000000", lineHeight: "1.5" }}>{b.title}</p>
                      <p style={{ fontSize: "15px", color: "#67768e", lineHeight: "1.6" }}>{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {service.note && (
              <p style={{ fontSize: "15px", color: "#000000", fontWeight: 600, lineHeight: "1.6" }}>
                {service.note}
              </p>
            )}
            {service.button && (
              <div className="mt-2">
                <a href="/contact-us" className="svc-btn">
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">{service.buttonText || "LETS TALK"}</span>
                    <span className="svc-btn-bottom">{service.buttonText || "LETS TALK"}</span>
                  </span>
                </a>
              </div>
            )}
          </div>
        );

        const image = (
          <div className="relative w-full h-full min-h-[260px] md:min-h-[480px]">
            <Image
              src={service.image}
              alt={service.highlight + service.heading}
              fill
              unoptimized
              className={service.imageContain ? "object-contain" : "object-cover"}
            />
          </div>
        );

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row items-stretch"
          >
            {isEven ? (
              <>
                <div className="w-full md:w-1/2">{content}</div>
                <div className="w-full md:w-1/2">{image}</div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 order-2 md:order-1">{image}</div>
                <div className="w-full md:w-1/2 order-1 md:order-2">{content}</div>
              </>
            )}
          </motion.div>
        );
      })}
    </section>
  );
}
