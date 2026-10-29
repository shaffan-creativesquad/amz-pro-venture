"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    highlight: "Social Media Marketing",
    heading: "",
    headingLine2: "Specialist Agency",
    paragraphs: [
      "Our in-house design team will collaborate with you to ensure your social media posts look impressive, on brand, innovative and engaging. Plus our marketing writers will prepare the right strategies and messages to deliver social media campaigns.",
    ],
    bullets: [
      "Social Media Management",
      "Social Media Planning",
      "Content Calendars",
      "Content Creation",
      "Influencer Marketing",
      "Community Management",
      "Insight Analysis",
    ],
    button: true,
    image: "/image-13-3.png",
  },
  {
    highlight: "Our",
    heading: " Capabilities",
    paragraphs: [],
    bullets: [
      "Social Media Channels Set Up, Design And Configuration",
      "Audience Research, Including Customer Profiling, Content Marketing Audit, Competitor Analysis, Keyword And Hashtag Research",
      "Visual Content Creation, Including Illustrations, Photography, Animations And Video",
      "Content Marketing And Micro Copy Creation",
      "Influencer Marketing Liaison, Outreach And Fee Management",
      "Social Posts Creative Direction",
      "Facebook, Instagram, LinkedIn, X, TikTok And Snapchat Advertising",
    ],
    button: true,
    image: "/image-20-6.png",
  },
  {
    highlight: "Influencer",
    heading: " & Affiliate Marketing",
    paragraphs: [
      "Our database of 25,000+ social media influencers, ambassadors and affiliates allows you to find the perfect support for your DTC ecommerce site or B2B business.",
      "amzhive has partnered with influencer platforms to help brands and influencers start conversations that lead to impactful and budget friendly campaigns with the aim to create awareness, build engagement and boost sales.",
    ],
    bullets: [],
    button: true,
    image: "/image-21-3.png",
  },
  {
    highlight: "Facebook",
    heading: " Campaigns & The Power Of FB Pixel",
    paragraphs: [
      "Facebook is one of the largest social media channels to promote and advertise your organisation. We can grow your Facebook Page Likes by integrating Facebook display content campaigns which will be delivered to people who fit your customer profile and demographics.",
      "We can also promote products your sell via Facebook Ads and marketplace, create a steady stream of quality leads for your business with Facebook advertising.",
    ],
    bullets: [],
    button: true,
    image: "/image-22-8.png",
  },
  {
    highlight: "Instagram",
    heading: " Organic And Paid Campaigns",
    paragraphs: [
      "Get ready to be part of the most engaging social media channel. Instagram Stories, Photos, Reels, Carousels and Ads will allow you to further increase your reach and engagement as part of your social media strategy.",
      "We will support you with audience and location custom ad targeting with help from instagram's algorithm for users and accounts with similar interest and topics to yours. We will also collect data from your website to target audiences who have already visited your website or engaged with your products and services.",
    ],
    bullets: [],
    button: true,
    image: "/image-23-6.png",
  },
  {
    highlight: "LinkedIn Advertising",
    heading: " And Profile Management",
    paragraphs: [
      "LinkedIn advertising is a powerful way to reach the key individuals in your industry at B2B level. Ideal for promoting to members of the LinkedIn community. Our out-reach activity will be focused on personalising your LinkedIn advertising campaigns to each specific individual you target.",
      "Our service as a social media agency will cover:",
    ],
    bullets: [
      "LinkedIn Thought Leadership Posts",
      "LinkedIn Sponsored Content",
      "LinkedIn Text Ads",
      "LinkedIn Message Ads",
      "LinkedIn Dynamic Ads",
    ],
    button: true,
    image: "/image-25-4.png",
  },
  {
    highlight: "TikTok Paid",
    heading: " And Organic Campaigns",
    paragraphs: [
      "TikTok is rapidly expanding and what a better way to grow your business with their ads program. The platform is geared up to create high engagement and long session times.",
      "Part of our campaign integration includes support using TikTok's internal tools which allow us to create ads that match the style of user generated content, helping you get discovered. As TikTok's creative partners, we can integrate also bespoke content via Vimeo and Canva to help you create more interesting ads or alternatively use their pre-existing templates.",
    ],
    bullets: [],
    button: true,
    image: "/image-24-1.png",
  },
  {
    highlight: "Snapchat",
    heading: " Marketing Campaigns",
    paragraphs: [
      "Stand out of the crowd with a social media campaign deploying Snapchat advertising to your audience.",
      "Our strategy and creatives focus on presenting brands using dynamic visuals, geofilters and lenses.",
    ],
    bullets: [],
    button: true,
    image: "/image-26-1.png",
  },
  {
    highlight: "Pricing",
    heading: " And Packages",
    paragraphs: [
      "Complete our briefing form and we can run a discovery session to calculate the right marketing package.",
      "Get your free consultation today and watch your business grow.",
    ],
    bullets: [],
    button: true,
    image: "/image-27-2.png",
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
