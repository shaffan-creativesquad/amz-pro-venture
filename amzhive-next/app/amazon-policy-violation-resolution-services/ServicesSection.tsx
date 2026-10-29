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
    highlight: "Who This Service ",
    heading: "Is For",
    paragraphs: [
      "Whether you've just received your first violation or you're navigating multiple appeals, this service is for sellers who need expert compliance support, fast.",
      "This includes:",
    ],
    bullets: [
      "Sellers with Performance Notifications or Suspended ASINs",
      "Brands Facing IP or Authenticity Complaints",
      "Sellers Dealing with Repeat Violations or Rejected Appeals",
      "Anyone Looking to Prevent Suspensions Before They Happen",
    ],
    button: true,
    buttonText: "Talk to a Policy Violation Expert →",
    image: "/what-we-need-from-you-3.webp",
    imageContain: true,
  },
  {
    highlight: "Typical ",
    heading: "Resolution Timeline",
    paragraphs: [
      "We move quickly, because on Amazon, every day offline costs you.",
    ],
    bullets: [
      "Plan of Action (POA) Creation: 5–7 business days — Tailored to your violation type, with expert review and policy alignment.",
      "Amazon Review Time: 7–9 business days on average — Amazon's response may vary, but we stay on top of every update.",
      "Full Resolution: Up to 14 business days — Depending on case complexity, additional documents, or escalations.",
    ],
    note: "Need urgent support? Let us know, we prioritize high-impact cases.",
    button: true,
    buttonText: "BOOK A FREE CONSULTATION →",
    image: "/time-line-1.webp",
    imageContain: true,
  },
  {
    highlight: "What We Need From You ",
    heading: "to Get Started",
    paragraphs: [
      "To ensure a fast and effective resolution, we'll need the following:",
    ],
    bullets: [],
    bulletItems: [
      { title: "Child Access to Your Seller Central Account", desc: "View-only access with permissions to performance notifications and case logs." },
      { title: "Product Documentation", desc: "This may include valid invoices, certifications, or supplier information." },
      { title: "Images or Supporting Files (if flagged)", desc: "For detail page, safety, or condition-related claims." },
      { title: "Brief Issue History or Communication Logs", desc: "If available, this helps us build a stronger, more targeted appeal." },
    ],
    note: "Please Note: While we'll guide you step-by-step on what's required, we do not create or supply invoices, product certifications, or photography. All necessary documentation must be provided by you to ensure compliance with Amazon's requirements.",
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
          background-color: #1e293b;
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
          background-color: #E91C59;
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
          <div className="flex flex-col justify-center gap-5 h-full px-6 py-10 md:px-16 md:py-20">
            <h2
              className="font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#1e293b" }}
            >
              <span style={{ color: "#E91C59" }}>{service.highlight}</span>
              {service.heading}
              {service.headingLine2 && (
                <><br /><span style={{ color: "#1e293b" }}>{service.headingLine2}</span></>
              )}
            </h2>
            {service.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.7" }}>
                {p}
              </p>
            ))}
            {service.bullets && service.bullets.length > 0 && (
              <ul className="flex flex-col gap-2" style={{ paddingLeft: "0", listStyle: "none" }}>
                {service.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2" style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.6" }}>
                    <span style={{ color: "#1e293b", marginTop: "2px", flexShrink: 0 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {service.bulletItems && service.bulletItems.length > 0 && (
              <ul className="flex flex-col gap-4" style={{ paddingLeft: "0", listStyle: "none" }}>
                {service.bulletItems.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#E91C59" />
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p style={{ fontSize: "15px", fontWeight: 700, color: "#1e293b", lineHeight: "1.5" }}>{b.title}</p>
                      <p style={{ fontSize: "15px", color: "#67768e", lineHeight: "1.6" }}>{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {service.note && (
              <p style={{ fontSize: "15px", color: "#1e293b", fontWeight: 600, lineHeight: "1.6" }}>
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
