"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    label: "AI-Powered Account Management",
    title: "Amazon AI-Powered Account Management",
    desc: "We take care of your entire Amazon journey. From product hunting and listing creation to A+ Content, account health, and more, we power our processes with smart AI tools for faster insights, better optimization, and scalable growth.",
    included: ["Deep Account Audit", "Product Listing Optimization", "Catalog & Inventory Management", "A+ Content & Brand Story Creation", "Account Health Monitoring & Maintenance"],
    links: [{ label: "Account Management for Amazon", href: "/account-management-for-amazon" }],
  },
  {
    label: "Account Reinstatement",
    title: "Amazon Account Reinstatement",
    desc: "Got suspended? We've reinstated hundreds of Amazon accounts and ASINs. Our experts handle the entire appeal process — from root cause analysis to writing the Plan of Action — and fight to get your account back fast.",
    included: ["Root Cause Analysis", "Plan of Action Writing", "Appeal Submission & Follow-up", "Policy Violation Resolution", "Account Recovery Strategy"],
    links: [{ label: "Amazon Account Reinstatement", href: "/amazon-account-suspended" }],
  },
  {
    label: "Policy Violation Resolution",
    title: "Amazon Policy Violation Resolution",
    desc: "Amazon policy violations can halt your business overnight. Our specialists identify the exact violation, craft a compliant response, and work to resolve the issue quickly so you can get back to selling.",
    included: ["Violation Identification & Analysis", "Corrective Action Plan", "Amazon Communication Handling", "Account Health Restoration", "Ongoing Compliance Monitoring"],
    links: [{ label: "Policy Violation Resolution Services", href: "/amazon-policy-violation-resolution-services" }],
  },
  {
    label: "ASIN Reinstatement",
    title: "Amazon ASIN Reinstatement",
    desc: "A suppressed or deactivated ASIN means lost revenue. We diagnose the root cause, prepare a targeted reinstatement appeal, and work to restore your listings as quickly as possible.",
    included: ["ASIN Suppression Analysis", "Listing Compliance Review", "Reinstatement Appeal Writing", "Image & Content Fix", "Resubmission & Follow-up"],
    links: [{ label: "ASIN Reinstatement Service", href: "/amazon-asin-reinstatement" }],
  },
  {
    label: "PPC & Ad Automation Management",
    title: "Amazon PPC & Ad Automation Management",
    desc: "Stop wasting ad spend and start scaling profitably. Our PPC experts combine hands-on strategy with AI-powered automation to lower your ACoS, increase visibility, and drive consistent sales growth.",
    included: ["Campaign Structure & Setup", "Keyword Research & Bid Optimization", "Auto & Manual Campaign Management", "ACoS Reduction Strategy", "Weekly Performance Reporting"],
    links: [{ label: "PPC Management Services for Amazon", href: "/ppc-management-services-for-amazon" }],
  },
  {
    label: "Rufus AI Listing Optimization",
    title: "Rufus AI Listing Optimization",
    desc: "Amazon's Rufus AI is changing how shoppers discover products. We optimize your listings specifically for Rufus — structuring content, keywords, and attributes to improve discoverability in the AI-powered search experience.",
    included: ["Rufus-Optimized Keyword Research", "Title & Bullet Point Rewriting", "Backend Search Term Optimization", "Attribute & Feature Mapping", "AI Discoverability Audit"],
    links: [{ label: "Rufus AI Listing Optimization", href: "/rufus-ai-listing-optimization" }],
  },
  {
    label: "AI-Optimized A+ Content Creation",
    title: "AI-Optimized A+ Content Creation",
    desc: "High-converting A+ Content builds trust, tells your brand story, and dramatically reduces return rates. We create visually stunning, AI-optimized A+ Content and Brand Stories that turn browsers into buyers.",
    included: ["Brand Story Module Design", "A+ Content Copywriting", "Comparison Chart Creation", "Lifestyle & Infographic Images", "Module Layout Optimization"],
    links: [{ label: "A+ Content That Converts", href: "/amazon-a-content-that-converts" }],
  },
  {
    label: "Reimbursement Claims",
    title: "Amazon Reimbursement Claims",
    desc: "Amazon owes you money and most sellers don't even know it. We audit your FBA account for lost, damaged, or mishandled inventory and file reimbursement claims on your behalf — recovering funds you're owed.",
    included: ["FBA Inventory Discrepancy Audit", "Lost & Damaged Inventory Claims", "Overcharged Fee Recovery", "Case Filing & Follow-up", "Monthly Reimbursement Reports"],
    links: [{ label: "Reimbursement Claims Service", href: "/reimbursement-claims" }],
  },
  {
    label: "Influencer Marketing",
    title: "Amazon Influencer Marketing",
    desc: "Partner with the right creators to showcase your products and drive high-intent traffic that leads to real sales. We connect your brand with niche influencers through Amazon's Creator Connection program.",
    included: ["Influencer Research & Outreach", "Campaign Strategy & Setup", "Sample Coordination & Logistics", "Content Tracking & Reporting", "Ongoing Campaign Optimization"],
    links: [{ label: "Amazon Influencer Marketing Service", href: "/amazon-influencer-marketing-service" }],
  },
  {
    label: "AI Predictive FBA Inventory Audit & Forecasting",
    title: "AI Predictive FBA Inventory Audit & Forecasting",
    desc: "Stockouts and overstock are profit killers. Our AI-powered forecasting tools analyze your sales velocity, seasonality, and market trends to keep your inventory perfectly balanced and your cash flow healthy.",
    included: ["Inventory Health Audit", "AI-Based Demand Forecasting", "Reorder Point Calculation", "Stranded Inventory Recovery", "FBA Fee Optimization"],
    links: [{ label: "FBA Inventory Audit & Forecasting", href: "/amazon-fba-inventory-audit-forecasting-service" }],
  },
  {
    label: "Data-Driven Product Hunting & Sourcing",
    title: "Data-Driven Product Hunting & Sourcing",
    desc: "Finding the right product is the foundation of Amazon success. We use advanced data tools and market analysis to identify high-demand, low-competition opportunities and connect you with reliable suppliers.",
    included: ["Market Demand Analysis", "Competition & Profitability Research", "Supplier Identification & Vetting", "Sample Coordination", "Private Label Strategy"],
    links: [{ label: "Product Hunting & Sourcing", href: "/product-hunting-and-sourcing" }],
  },
  {
    label: "Proactive Account Health Monitoring",
    title: "Proactive Account Health Monitoring",
    desc: "Stay ahead of Amazon's ever-changing policies with continuous account health monitoring. We track your metrics daily, catch issues before they escalate, and keep your seller account in perfect standing.",
    included: ["Daily Health Metric Monitoring", "Policy Compliance Checks", "Performance Alert System", "Issue Resolution Support", "Monthly Health Reports"],
    links: [{ label: "Proactive Account Health Monitoring", href: "/proactive-account-health-monitoring" }],
  },
  {
    label: "AI-Powered Vendor Central Management",
    title: "AI-Powered Vendor Central Management",
    desc: "Vendor Central is complex and demanding — but it's where major brands grow. We manage your entire Vendor Central relationship with Amazon, from purchase orders and chargebacks to content and promotions.",
    included: ["Purchase Order Management", "Chargeback Resolution", "AVS & AMS Campaign Management", "Catalog & Content Management", "Promotional Deal Setup"],
    links: [{ label: "Amazon Vendor Central Management", href: "/amazon-vendor-central-management-services" }],
  },
  {
    label: "FBA Wholesale Management",
    title: "Amazon FBA Wholesale Management",
    desc: "Scale your wholesale business on Amazon with our full-service FBA management. We source branded products, manage your catalog, optimize pricing, and handle the day-to-day operations so you can focus on growth.",
    included: ["Wholesale Product Sourcing", "Catalog Setup & Optimization", "Pricing & Buy Box Strategy", "FBA Shipment Management", "Sales & Profitability Reporting"],
    links: [{ label: "FBA Wholesale Account Management", href: "/amazon-fba-wholesale-account-management" }],
  },
  {
    label: "Above $1M Ecommerce Growth",
    title: "Above $1M Ecommerce Growth",
    desc: "Built for established sellers ready to break through the million-dollar ceiling. We deploy advanced growth strategies — multi-channel expansion, brand building, and full-funnel optimization — to scale your business to the next level.",
    included: ["Multi-Channel Expansion Strategy", "Advanced PPC & Brand Campaigns", "Full-Funnel Revenue Optimization", "International Marketplace Entry", "Executive Growth Reporting"],
    links: [{ label: "Above $1M Ecommerce Growth", href: "/above-1m-ecommerce-growth" }],
  },
  {
    label: "Shopify Store Creation & Management",
    title: "Shopify Store Creation & Management",
    desc: "Build, launch, and scale a high-converting Shopify store with our AI-powered management service. From store setup and design to SEO and ads, we handle everything so your Shopify business grows on autopilot.",
    included: ["Store Design & Development", "Product Listing & Optimization", "SEO & Metadata Setup", "App Integration & Automation", "Ongoing Performance Management"],
    links: [{ label: "Shopify Store Management Services", href: "/shopify-store-management-services" }],
  },
];

export default function ServicesTabSection() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-[#67768e] mb-3">Services</p>
            <h2
              className="font-bold leading-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 3.5vw, 44px)", color: "#000000" }}
            >
              Full-Spectrum E-commerce &amp;<br />Marketplace Management<br />Services
            </h2>
          </div>
          <div className="flex-shrink-0 lg:pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[12px] rounded-full hover:bg-black transition-colors whitespace-nowrap"
              style={{ padding: "14px 28px" }}
            >
              GET A FREE ECOMMERCE GROWTH PLAN
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 12" fill="none">
                <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-0">

          {/* LEFT — dark sidebar */}
          <div
            className="flex-shrink-0 w-full lg:w-[320px] rounded-3xl lg:rounded-r-none p-6 flex flex-col gap-1"
            style={{ backgroundColor: "#111111" }}
          >
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full text-left transition-all duration-200"
              >
                {i === active ? (
                  <div className="flex items-center justify-between gap-3 rounded-full px-5 py-3" style={{ backgroundColor: "#ff9900" }}>
                    <span className="text-white font-bold text-[12px] leading-snug">{t.label}</span>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 21 12" fill="none">
                        <path d="M1 5.5L19.5809 5.50003" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="px-5 py-2.5 hover:text-[#ff9900] transition-colors">
                    <span className="text-white text-[12px] font-semibold leading-snug">{t.label}</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT — content panel */}
          <div
            className="flex-1 rounded-3xl lg:rounded-l-none p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <h3 className="font-bold text-[20px] mb-3" style={{ color: "#000000" }}>{tab.title}</h3>
            <p className="text-[#67768e] text-[14px] leading-relaxed mb-5">{tab.desc}</p>
            <p className="font-bold text-[14px] mb-3" style={{ color: "#000000" }}>What&apos;s Included:</p>
            <ul className="mb-6 space-y-1.5">
              {tab.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px]" style={{ color: "#374151" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#ff9900" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              {tab.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[13px] font-semibold underline underline-offset-2 hover:text-[#ff9900] transition-colors"
                  style={{ color: "#000000" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
