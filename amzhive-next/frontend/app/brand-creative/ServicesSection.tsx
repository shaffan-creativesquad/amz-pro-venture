"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    highlight: "Brand",
    heading: " Design",
    paragraphs: [
      "We create visual stories that generate conversations amongst your target audience. We achieve this by delivering communication pieces that integrate into advertising campaigns and generate sales overnight and leave long-lasting impressions.",
      "As a brand-led design agency, our strength lies on producing creative communications that push the boundaries of content creation on ever-changing media platforms.",
    ],
    bullets: [],
    button: true,
    image: "/28b71d5b28d58b14719818297bfd2d38.png",
  },
  {
    highlight: "Creative",
    heading: " Design",
    paragraphs: [
      "We create work that builds communities and drives value to make great things happen.",
      "At AMZ Pro Venture, We have vast experience working on editorial pieces and creating advertising pieces, as well as beautiful brochures, magazines, and books, merchandising, and direct marketing.",
      "We are Concept Foundry partners, UK leading printing company, which allows us to provide unrivaled print and repro support and expertise to get the best finishes on your brand communications.",
    ],
    bullets: [],
    button: true,
    image: "/159249adc54c6ce16ccd6d4387f6af3c.png",
  },
  {
    highlight: "Digital",
    heading: " Ads",
    paragraphs: [
      "Create a visual impact and generate intrigue towards your digital and online adverts.",
      "Our creative communications service includes the full production of ads including photography, illustrations, animation, and video production (to name but a few.)",
      "Whatever your needs may be: online ads, digital programmatic adverts, or otherwise, we have the skills that will help your brand stand out from the crowd.",
    ],
    bullets: [],
    button: true,
    image: "/545f0a2ba793bf0c42f2980a9bf197ac.png",
  },
  {
    highlight: "Promotional",
    heading: " Artwork",
    paragraphs: [
      "Give your business a voice and extend your identity across digital and print. Your brand identity is unique to your business, so our promotional artwork projects are backed by an understanding of your goals. This helps us to create an impactful visual communication of your product or service, targeted to your consumers.",
      "We turn the company vision into a visual identity that delivers growth by connecting you with your audience in a way that ignites recognition, engagement and loyalty.",
      "AMZ Pro Venture is your strategic creative design and branding agency. We partner with our clients to listen, understand, challenge and deliver.",
    ],
    bullets: [],
    button: true,
    image: "/9744c928568e958d796539e1a40b1ae5.png",
  },
  {
    highlight: "Mailchimp And Klaviyo",
    heading: "",
    headingLine2: "Ecommerce Agency",
    paragraphs: [
      "Get ready to be part of the most engaging social media channel. Instagram Stories, Photos, Reels, Carousels and Ads will allow you to further increase your reach and engagement as part of your social media strategy.",
      "We will support you with audience and location custom ad targeting with help from instagram's algorithm for users and accounts with similar interest and topics to yours. We will also collect data from your website to target audiences who have already visited your website or engaged with your products and services.",
    ],
    bullets: [],
    button: true,
    image: "/image-23-5.webp",
  },
  {
    highlight: "",
    heading: "Deliverables",
    paragraphs: [],
    bullets: [
      "Wireframe Design",
      "HTML And Plain Text Messages",
      "Integration To Klaviyo Or Mailchimp For Email Software Distribution",
      "Email Automations",
      "Deliverability Checks",
      "Contact List Segmentation Using Known Consumer Metrics (Ie. Last Purchase Date, Regular Buyer, Etc)",
      "Set Up Customised Workflows To Automatically Email Relevant Messages To The Right People",
      "Set Up Customised Workflows To Automatically Email Relevant Messages To The Right People",
      "24 Hours Post-Campaign Reporting",
    ],
    button: true,
    image: "/image-25-3.webp",
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
          <div className="flex flex-col justify-center gap-5 h-full px-6 py-10 md:px-16 md:py-20">
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
              <ul className="flex flex-col gap-2" style={{ paddingLeft: "0", listStyle: "none" }}>
                {service.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2" style={{ fontSize: "16px", color: "#67768e", lineHeight: "1.6" }}>
                    <span style={{ color: "#000000", marginTop: "2px", flexShrink: 0 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {service.button && (
              <div className="mt-2">
                <a href="/contact-us" className="svc-btn">
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">LETS TALK</span>
                    <span className="svc-btn-bottom">LETS TALK</span>
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
              className="object-cover"
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
