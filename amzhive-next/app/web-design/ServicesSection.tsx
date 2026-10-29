"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    highlight: "Bespoke Web Design",
    heading: "",
    headingLine2: "Tailored To Your Audience",
    paragraphs: [
      "Our designers love producing websites that are not only creative but that offer usable solutions. By developing an in-depth understanding of who your audience is, our design team can build a user interface that will engage visitors and enable them to connect positively with your brand. We'll also take the time to create bespoke creative concepts that are unique to your brand values and that are specific to your target market.",
    ],
    bullets: [],
    button: true,
    image: "/image-13.png",
  },
  {
    highlight: "Coding Languages",
    heading: "",
    headingLine2: "And Frameworks",
    paragraphs: [
      "We involve our coders throughout the web development process to ensure that all functions and designs are well-integrated into the website build. We offer a flexible development service to accommodate your needs and our developers are skilled at building websites using a range of programming languages and frameworks including HTML/CSS, Javascript, PHP, ASP, JAVA, Flash (ActionScript), Node.js and ASP.net.",
    ],
    bullets: [],
    button: true,
    image: "/image-20.png",
  },
  {
    highlight: "Responsive",
    heading: "",
    headingLine2: "Design",
    paragraphs: [
      "It's essential that your website is accessible on every type of device so that users can engage with your brand on a desktop, or whilst out and about and on their mobile device. We build all of our websites to be fully responsive, meaning that our web design projects are robust enough to appear on all screen sizes without losing resolution or functionality.",
    ],
    bullets: [],
    button: true,
    image: "/Group-1321317476.png",
  },
  {
    highlight: "CMS",
    heading: " Development",
    paragraphs: [
      "As well as building your website, we can provide you with a Content Management System that allows you to easily maintain your website. You will have control over all content so that you can make edits if and whenever you need to, fuss-free. Our development services include building CMSs using a number of platforms including WordPress, Drupal, Concrete 5 and Joomla.",
    ],
    bullets: [],
    button: true,
    image: "/image-22-5.webp",
  },
  {
    highlight: "Search",
    heading: " Engine Ready",
    paragraphs: [
      "Throughout the web development process, we make sure that your website is fully optimised for search engines. Our coders integrate optimised structure as well as relevant meta information, attributes, .xml sitemaps and targeted keywords and phrases so that search engines like Google can fetch and rank your web pages easily, helping you appear higher up in search results",
    ],
    bullets: [],
    button: true,
    image: "/image-24-3.png",
  },
  {
    highlight: "Learning Management",
    heading: "",
    headingLine2: "System Integrations",
    paragraphs: [
      "As experts in our industry, AMZHIVE works collaboratively with your team to understand your audience and behaviours in your industry. We create and curate every element of your e-learning platform to cater to them, whilst incorporating beautiful design and cohesive brand application throughout.",
    ],
    bullets: [],
    button: true,
    image: "/image-25-2.png",
  },
  {
    highlight: "Bespoke And",
    heading: "",
    headingLine2: "Brand-Led Digital Learning Experiences",
    paragraphs: [
      "As experts in our industry, AMZHIVE works collaboratively with your team to understand your audience and behaviours in your industry. We create and curate every element of your e-learning platform to cater to them, whilst incorporating beautiful design and cohesive brand application throughout.",
    ],
    bullets: [],
    button: true,
    image: "/image-23-4.png",
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
