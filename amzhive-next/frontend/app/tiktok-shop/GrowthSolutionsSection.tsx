"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "TikTok Shop Setup",
    icon: "/TikTok-Shop-Setup.svg",
    title: "TikTok Shop Setup",
    desc: "Our TikTok shop account setup services ensure a smooth start for your TikTok store, handling everything from account creation to product listing integration and platform syncing. This allows your TikTok Shop to launch easily and start reaching your target audience from day one.",
    img: "/TikTok-Shop-Setup.png",
  },
  {
    label: "TikTok Shop Management",
    icon: "/TikTok-Shop-Management.svg",
    title: "TikTok Shop Management",
    desc: "Our TikTok shop management services provide end-to-end solutions for overseeing your store's day-to-day operations, ensuring smooth inventory management, order fulfillment, and customer support. We handle the heavy lifting so you can focus on growing your business.",
    img: "/TikTok-Shop-Management.png",
  },
  {
    label: "TikTok Marketing & Advertising",
    icon: "/TikTok-Marketing-and-Advertising.svg",
    title: "TikTok Marketing & Advertising",
    desc: "We offer TikTok shop marketing and advertising services that work alongside you to develop targeted campaigns that engage your audience, increase brand visibility, and drive sales. Our expert team uses data-driven strategies to optimize ads & performance for your TikTok store.",
    img: "/TikTok-Marketing-&-Advertising.png",
  },
  {
    label: "Influencer Marketing & Collaborations",
    icon: "/Influencer-Marketing-and-Collaborations.svg",
    title: "Influencer Marketing & Collaborations",
    desc: "AMZ ProVenture TikTok shop influencer marketing services connect your brand with influencers who align with your target audience, creating sponsored content that truly resonates. By leveraging TikTok trends, we help boost brand awareness, increase engagement, and drive sales with influencer collaborations.",
    img: "/Influencer-Marketing-&-Collaborations.png",
  },
  {
    label: "Product Listing Optimization",
    icon: "/Product-Listing-Optimization.svg",
    title: "Product Listing Optimization",
    desc: "We offer TikTok shop product listing services that focus on optimizing your product listings to maximize visibility on TikTok. We optimize product titles, descriptions, and images for TikTok's format, refining listings to boost attention, engagement, and sales.",
    img: "/Product-Listing-Optimization.png",
  },
  {
    label: "Inventory Management",
    icon: "/Inventory-Management.svg",
    title: "Inventory Management",
    desc: "Our TikTok shop product listing services include expert management of your inventory to ensure seamless synchronization with your listings. We help optimize your product titles, descriptions, and images for TikTok, driving visibility and engagement to increase sales.",
    img: "/Inventory-Management.png",
  },
  {
    label: "Fulfillment Strategy & Integration",
    icon: "/Fulfillment-Strategy-and-Integration.svg",
    title: "Fulfillment Strategy & Integration",
    desc: "Our TikTok shop fulfillment services streamline your fulfillment process by integrating Warehouse Management Systems (WMS) and partnering with third-party logistics (3PL) providers. This ensures fast, reliable shipping, meeting TikTok's shopping requirements and providing a seamless buying experience.",
    img: "/Fulfillment-Strategy-&-Integration.png",
  },
  {
    label: "Logistics & Order Management",
    icon: "/Logistics-and-Order-Management.svg",
    title: "Logistics & Order Management",
    desc: "We manage your inventory, handle order processing, and integrate automated systems to ensure smooth order fulfillment. This not only keeps your inventory in check but also guarantees timely and accurate delivery, enhancing customer satisfaction.",
    img: "/Logistics-&-Order-Management.png",
  },
  {
    label: "TikTok Shop Automation",
    icon: "/TikTok-Shop-Automation.svg",
    title: "TikTok Shop Automation",
    desc: "Our TikTok shop automation services include executing inventory automation, order fulfillment systems, and automated customer support to ensure your TikTok Shop runs smoothly with minimal manual effort. This allows you to focus on growth while we handle the operational tasks efficiently.",
    img: "/TikTok-Shop-Automation.png",
  },
  {
    label: "Account Health Management",
    icon: "/Account-Health-Management.svg",
    title: "Account Health Management",
    desc: "We monitor TikTok's policies to ensure that your store remains compliant with TikTok's guidelines. Our team manages policy updates and quickly resolves issues, helping you maintain a healthy account with minimal risks and protecting your brand's reputation.",
    img: "/Account-Health-Management.png",
  },
];

export default function GrowthSolutionsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 44px)", color: "#000000" }}
        >
          Done-for-You TikTok Shop Growth Solutions by{" "}
          <span style={{ color: "#ff9900" }}>AMZ ProVenture</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-center text-[#67768e] text-[15px] leading-relaxed max-w-[680px] mx-auto mb-14"
        >
          We offer a full suite of services to help you launch, manage, and grow your TikTok Shop. From setting up your store to scaling your sales, AMZ ProVenture is here to handle the details so you can focus on building your business.
        </motion.p>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* LEFT — Tab list */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-250 font-semibold text-[14px]"
                style={{
                  background: active === i ? "#ff9900" : "transparent",
                  color: active === i ? "#ffffff" : "#000000",
                }}
              >
                {typeof tab.icon === "string" ? (
                  <img
                    src={tab.icon}
                    alt=""
                    className="w-5 h-5 flex-shrink-0"
                    style={{ filter: active === i ? "brightness(0) invert(1)" : "invert(60%) sepia(100%) saturate(1500%) hue-rotate(1deg) brightness(102%)" }}
                  />
                ) : (
                  <span style={{ color: active === i ? "#ffffff" : "#ff9900" }}>
                    {tab.icon}
                  </span>
                )}
                {tab.label}
              </button>
            ))}
          </div>

          {/* RIGHT — Content + Image */}
          <div className="flex-1 min-w-0 rounded-2xl overflow-hidden" style={{ background: "#fff8f0", border: "1px solid #ffe5c0" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-0 h-full"
              >
                {/* Text side */}
                <div className="flex-1 p-8 flex flex-col justify-center gap-5">
                  <h3
                    className="font-bold leading-snug"
                    style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "#000000" }}
                  >
                    {tabs[active].title}
                  </h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">
                    {tabs[active].desc}
                  </p>
                  <div>
                    <Link
                      href="/contact-us"
                      className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[13px] text-white overflow-hidden"
                      style={{ background: "#ff9900", padding: "12px 28px" }}
                    >
                      <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                      <span className="relative z-10">Let&apos;s Get Started</span>
                    </Link>
                  </div>
                </div>

                {/* Image side */}
                <div className="flex-shrink-0 w-full md:w-[320px] lg:w-[380px] relative overflow-hidden" style={{ minHeight: "360px" }}>
                  <Image
                    src={tabs[active].img}
                    alt={tabs[active].title}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
