"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    highlight: "Shopify, A Platform",
    heading: " Built For Growth",
    paragraphs: [
      "As a leading ecommerce platform, Shopify is usually the go-to platform for businesses of all sizes. No matter the size, Shopify will allow a flexible and user first approach to their backend management. Not to mention, we'll provide backend training during the handover of your website.",
      "As a leading ecommerce platform, Shopify is usually the go-to platform for businesses of all sizes. No matter the size, Shopify will allow a flexible and user first approach to their backend management. Not to mention, we'll provide backend training during the handover of your website.",
    ],
    bullets: [],
    button: true,
    image: "/37293e6c970d6a72b333c16e813d2059-scaled.jpg",
  },
  {
    highlight: "Woocommerce:",
    heading: " Sell Online With Simple But Powerful Tools",
    paragraphs: [
      "We focus on delivering unique and professional results by building your business that best works for your brand, conveys your message and converts shoppers into customers.",
      "The key to a successful WooCommerce website is not just the design but also a good strategy for the development, and marketing. We focus on the persona and shopping behaviour of your customers and we come up with an idea that offers them a meaningful experience on your website because a person who has a pleasant experience is more likely to make a purchase.",
    ],
    bullets: [],
    button: true,
    image: "/48022f3eaba82e9e5eaf73fb6b5e2897.jpg",
  },
  {
    highlight: "Project",
    heading: " Ads",
    paragraphs: [
      "Discovery And E-Strategy",
      "When you visit our ecommerce agency and before jumping into the design and development of your e-commerce website, we enter a discovery phase that includes discussion of your business and vision so we can clarify how our expertise will assist in bringing it to life.",
      "Initial workshops with business stakeholders help us identify the best strategy for teaming design that is reflective of your brand, with a layout that offers a seamless and engaging user journey.",
    ],
    bullets: [],
    button: true,
    image: "/de885ae940a08e9b5a2d9fba822317ba.jpg",
  },
  {
    highlight: "Bespoke Design",
    heading: "",
    headingLine2: "Incorporating Your Chosen Commerce Platform",
    paragraphs: [
      "We'll help you choose the best ecommerce platform on which to build your website to help you offer your customers effortless navigation to purchase.",
      "Choose from a selection including WooCommerce, Adobe Commerce, Shopify and many more â€“ we have experience with all of them. Whatever the platform, we ensure your e-commerce website offers customers an enjoyable shopping experience by pairing engaging design with a strong understanding of the user journey.",
    ],
    bullets: [],
    button: true,
    image: "/689eff77188fa8df46adc7b393436c33.jpg",
  },
  {
    highlight: "Easy Product",
    heading: "",
    headingLine2: "Configuration And Inventory Management",
    paragraphs: [
      "Our projects include a flexible product catalogue within your e-commerce website's navigation to allow for easy browsing. Automated features such as product summaries, quantities & totals, and ability to modify an order are also integrated into your shopping basket feature.",
      "As well as this, we integrate a stock management tool that reflects product availability and allows users to opt in to receive notifications when the product is back in stock.",
    ],
    bullets: [],
    button: true,
    image: "/a0d20f1e795900d1fcd0f870b8fe1514-scaled.jpg",
  },
  {
    highlight: "Multiple Shipping",
    heading: "",
    headingLine2: "Methods And Regional Pricing Options",
    paragraphs: [
      "You'll have control over all shipping options including location, pricing and method. Our projects allow e-commerce business owners to ship both domestically and internationally, and to select free postage or fees based on preferred variables such as order value or weight.",
      "As well as this, our shipping models are supported by multiple popular carriers including Hermes, Royal Mail, UPS, DHL and DPD.",
    ],
    bullets: [],
    button: true,
    image: "/c9b4f6246dd395dcfe1b0008b288786b.jpg",
  },
  {
    highlight: "Secure",
    heading: " Payments",
    paragraphs: [
      "We also offer advice on which payment processing system to integrate your e-commerce website with. As with the e-commerce platforms we offer, we have worked with many payment systems including WorldPay, Barclaycard, Stripe, Paypal and more.",
      "Give your customers peace of mind that their orders are placed on a secure website with integration of SSL technology, and where necessary PCI-DSS compliance for online credit card payments.",
    ],
    bullets: [],
    button: true,
    image: "/9f8f4e32b41c03ebbd380e96f401b30e.jpg",
  },
  {
    highlight: "Conversion",
    heading: " Rate Optimisation",
    paragraphs: [
      "We'll help you choose the best ecommerce platform on which to build your website to help you offer your customers effortless navigation to purchase.",
      "Choose from a selection including WooCommerce, Adobe Commerce, Shopify and many more â€“ we have experience with all of them. Whatever the platform, we ensure your e-commerce website offers customers an enjoyable shopping experience by pairing engaging design with a strong understanding of the user journey.",
    ],
    bullets: [],
    button: true,
    image: "/8th row.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white">
      <style>{`
        .eco-btn {
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
        .eco-btn::before {
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
        .eco-btn:hover::before { height: 100%; }
        .eco-btn-inner {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          height: 1.2em;
        }
        .eco-btn-top {
          display: block;
          transition: transform 0.35s ease;
        }
        .eco-btn:hover .eco-btn-top { transform: translateY(-100%); }
        .eco-btn-bottom {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          transition: transform 0.35s ease;
        }
        .eco-btn:hover .eco-btn-bottom { transform: translateY(-100%); }
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
              <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0 }}>
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
                <a href="/contact-us" className="eco-btn">
                  <span className="eco-btn-inner">
                    <span className="eco-btn-top">LETS TALK</span>
                    <span className="eco-btn-bottom">LETS TALK</span>
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
