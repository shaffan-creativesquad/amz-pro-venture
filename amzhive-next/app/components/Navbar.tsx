"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const amazonCol1 = [
  { name: "AI-Powered Account Management", href: "/account-management-for-amazon" },
  { name: "Account Reinstatement", href: "/amazon-account-suspended" },
  { name: "Policy Violation Resolution", href: "/amazon-policy-violation-resolution-services" },
  { name: "ASIN Reinstatement", href: "/amazon-asin-reinstatement" },
  { name: "PPC & Ad Automation Management", href: "/ppc-management-services-for-amazon" },
  { name: "Rufus AI Listing Optimization", href: "/rufus-ai-listing-optimization" },
  { name: "AI-Optimized A+ Content Creation", href: "/amazon-a-content-that-converts" },
  { name: "Reimbursement Claims", href: "/reimbursement-claims" },
];

const amazonCol2 = [
  { name: "Influencer Marketing", href: "/amazon-influencer-marketing-service" },
  { name: "AI Predictive FBA Inventory Audit & Forecasting", href: "/amazon-fba-inventory-audit-forecasting-service" },
  { name: "Data-Driven Product Hunting & Sourcing", href: "/product-hunting-and-sourcing" },
  { name: "Proactive Account Health Monitoring", href: "/proactive-account-health-monitoring" },
  { name: "AI-Powered Vendor Central Management", href: "/amazon-vendor-central-management-services" },
  { name: "FBA Wholesale Management", href: "/amazon-fba-wholesale-account-management" },
  { name: "Above $1M Ecommerce Growth", href: "/above-1m-ecommerce-growth" },
];


const walmart = [
  { name: "AI-Powered Account Management", href: "/walmart-account-management" },
  { name: "AI-Optimized Listing Creation", href: "/walmart-listing-creation" },
  { name: "Ads Management", href: "/walmart-ads-management" },
];

const ebay = [
  { name: "AI-Powered Account Management", href: "/ebay-account-management" },
];

const etsy = [
  { name: "AI-Powered Account Management", href: "/etsy-account-management" },
];

const shopify = [
  { name: "AI-Powered Store Creation & Management", href: "/shopify-store-management-services" },
];

const allServiceHrefs = [
  ...amazonCol1,
  ...amazonCol2,
  ...walmart,
  ...ebay,
  ...etsy,
  ...shopify,
].map((s) => s.href);

const mobileSections = [
  { label: "Amazon", items: [...amazonCol1, ...amazonCol2] },
  { label: "Walmart", items: walmart },
  { label: "eBay", items: ebay },
  { label: "Etsy", items: etsy },
  { label: "Shopify", items: shopify },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isServiceActive = mounted && allServiceHrefs.some((href) => pathname === href);
  const isHomeActive = mounted && pathname === "/";
  const activeColor = "#E91C59";
  const defaultColor = "#1e293b";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 relative">
      <div className="w-full px-10 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/AMZ-HIVE-New.png"
            alt="AMZHIVE"
            width={180}
            height={44}
            priority
            className="h-11 w-auto"
            unoptimized
          />
        </Link>

        {/* Right side: nav links + CTA buttons + Hamburger */}
        <div className="flex items-center gap-1">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center">
              <li>
                <Link
                  href="/"
                  className="px-4 py-2 text-sm font-semibold transition-colors hover:text-[#E91C59]"
                  style={{ color: isHomeActive ? activeColor : defaultColor }}
                >
                  HOME
                </Link>
              </li>

              {/* Services with mega menu */}
              <li ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="hover:text-[#E91C59] px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1"
                  style={{ color: isServiceActive ? activeColor : defaultColor }}
                >
                  SERVICES
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[50%] bg-white shadow-2xl border border-gray-100 rounded-xl z-50">
                    <div className="w-full px-10 py-5 flex gap-0">

                      {/* Amazon — shared header, 2 sub-columns */}
                      <div className="flex-[2.5] pr-8">
                        <p className="font-bold text-[13px] text-[#1e293b] mb-2 mt-3">Amazon</p>
                        <div className="flex gap-6">
                          <div className="flex-1 space-y-2">
                            {amazonCol1.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                          <div className="flex-1 space-y-2">
                            {amazonCol2.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-px bg-gray-200 flex-shrink-0 mx-0" />

                      {/* Walmart + eBay + Etsy */}
                      <div className="flex-[1.1] px-8">
                        <p className="font-bold text-[13px] text-[#1e293b] mb-2 mt-3">Walmart</p>
                        <div className="space-y-1 mb-3">
                          {walmart.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <p className="font-bold text-[13px] text-[#1e293b] mb-2 mt-3">eBay</p>
                        <div className="space-y-1 mb-3">
                          {ebay.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <p className="font-bold text-[13px] text-[#1e293b] mb-2 mt-3">Etsy</p>
                        <div className="space-y-1 mb-3">
                          {etsy.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <p className="font-bold text-[13px] text-[#1e293b] mb-2 mt-3">Shopify</p>
                        <div className="space-y-1">
                          {shopify.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-[12.5px] text-[#67768e] hover:text-[#E91C59] leading-snug transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="hover:text-[#E91C59] px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ color: pathname === "/about-us" ? activeColor : defaultColor }}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-[#E91C59] px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ color: pathname === "/contact-us" ? activeColor : defaultColor }}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3 ml-4">
            <Link
              href="/contact-us"
              className="bg-[#E91C59] text-white rounded-[7px] text-[15px] font-medium uppercase hover:bg-black transition-colors whitespace-nowrap"
              style={{ padding: "10px", width: "190px", textAlign: "center" }}
            >
              GET STARTED
            </Link>
            <Link
              href="tel:2067046094"
              className="bg-black text-white rounded-[7px] text-[15px] font-medium uppercase hover:bg-[#E91C59] transition-colors whitespace-nowrap"
              style={{ padding: "10px", width: "190px", textAlign: "center" }}
            >
              CALL NOW
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#1e293b] p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-[#1e293b] mb-1 transition-all" style={{ transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "" }} />
            <div className="w-5 h-0.5 bg-[#1e293b] mb-1 transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
            <div className="w-5 h-0.5 bg-[#1e293b] transition-all" style={{ transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="max-w-[1247px] mx-auto px-5 py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="block px-3 py-2.5 font-semibold hover:bg-[#fff0f4] rounded-lg transition-colors"
                  style={{ color: pathname === "/" ? activeColor : defaultColor }}
                  onClick={() => setMobileOpen(false)}
                >
                  HOME
                </Link>
              </li>

              {/* Services accordion */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left px-3 py-2.5 font-semibold hover:text-[#E91C59] hover:bg-[#fff0f4] rounded-lg transition-colors flex justify-between items-center"
                  style={{ color: isServiceActive ? activeColor : defaultColor }}
                >
                  SERVICES
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 4l4 4 4-4" strokeLinecap="round" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="mt-1 ml-2 space-y-1">
                    {mobileSections.map((section) => (
                      <div key={section.label}>
                        <button
                          onClick={() => setOpenMobileSection(openMobileSection === section.label ? null : section.label)}
                          className="w-full text-left px-3 py-2 text-sm font-bold text-[#1e293b] hover:text-[#E91C59] hover:bg-[#fff0f4] rounded-lg transition-colors flex justify-between items-center"
                        >
                          {section.label}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className={`transition-transform duration-200 ${openMobileSection === section.label ? "rotate-180" : ""}`}
                          >
                            <path d="M2 4l4 4 4-4" strokeLinecap="round" />
                          </svg>
                        </button>
                        {openMobileSection === section.label && (
                          <ul className="ml-4 mt-1 space-y-1 pb-1">
                            {section.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block px-3 py-1.5 text-sm text-[#67768e] hover:text-[#E91C59] hover:bg-[#fff0f4] rounded-lg transition-colors"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="block px-3 py-2.5 font-semibold hover:text-[#E91C59] hover:bg-[#fff0f4] rounded-lg transition-colors"
                  style={{ color: pathname === "/about-us" ? activeColor : defaultColor }}
                  onClick={() => setMobileOpen(false)}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="block px-3 py-2.5 font-semibold hover:text-[#E91C59] hover:bg-[#fff0f4] rounded-lg transition-colors"
                  style={{ color: pathname === "/contact-us" ? activeColor : defaultColor }}
                  onClick={() => setMobileOpen(false)}
                >
                  CONTACT US
                </Link>
              </li>
              <li className="pt-2 flex gap-3">
                <Link
                  href="/contact-us"
                  className="flex-1 text-center bg-[#E91C59] text-white rounded-[7px] text-[15px] font-medium uppercase hover:bg-[#d01550] transition-colors"
                  style={{ padding: "10px" }}
                  onClick={() => setMobileOpen(false)}
                >
                  GET STARTED
                </Link>
                <Link
                  href="tel:2067046094"
                  className="flex-1 text-center bg-black text-white rounded-[7px] text-[15px] font-medium uppercase hover:bg-[#333] transition-colors"
                  style={{ padding: "10px" }}
                  onClick={() => setMobileOpen(false)}
                >
                  CALL NOW
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
