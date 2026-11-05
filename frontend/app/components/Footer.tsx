"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home",            href: "/" },
  { label: "Company",         href: "/about-us" },
  { label: "Become a Client", href: "/contact-us" },
  { label: "Privacy Policy",  href: "/privacy-policy" },
  { label: "Refund Policy",   href: "/refund-policy" },
  { label: "Terms",           href: "/terms-condition" },
];

const contactItems = [
  {
    href: "tel:+18022096796",
    text: "+1 (802) 209-6796",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    href: "mailto:info@amzproventure.com",
    text: "info@amzproventure.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    href: null,
    text: "Herndon, VA 20171",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const paymentIcons = [
  { src: "/visa.svg",       alt: "Visa"       },
  { src: "/mastercard.svg", alt: "Mastercard" },
  { src: "/stripe.svg",     alt: "Stripe"     },
  { src: "/paypal.svg",     alt: "PayPal"     },
  { src: "/pay.svg",        alt: "Apple Pay"  },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden" style={{ backgroundColor: "#FFB217" }}>

      {/* Main content */}
      <div className="relative z-10">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-10 pt-14 pb-10 flex flex-col items-center gap-10">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/amz-logo-without-background.png"
              alt="AMZ Pro Venture"
              width={200}
              height={64}
              unoptimized
              className="h-14 w-auto"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-black/80 text-[13px] font-semibold uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact items */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
            {contactItems.map((item) =>
              item.href ? (
                <Link key={item.text} href={item.href} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-black/80 text-[13px] font-medium group-hover:text-black transition-colors">
                    {item.text}
                  </span>
                </Link>
              ) : (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-black/80 text-[13px] font-medium">{item.text}</span>
                </div>
              )
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />

        {/* Bottom bar */}
        <div className="max-w-[1140px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-black/30 flex items-center justify-center text-black hover:bg-black hover:border-black hover:text-white transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-black/70 text-[13px] text-center font-medium">
            © 2026 AMZ <span className="text-black font-bold">ProVenture</span> | All rights reserved
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-5">
            {paymentIcons.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={36}
                height={22}
                unoptimized
                className="h-5 w-auto brightness-0 opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

        </div>

        {/* Large watermark text */}
        <div className="w-full overflow-hidden" style={{ marginBottom: "-8px" }}>
          <p
            className="text-center font-black leading-none select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 14vw, 200px)",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              letterSpacing: "-0.02em",
              background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AMZProVenture
          </p>
        </div>
      </div>

    </footer>
  );
}
