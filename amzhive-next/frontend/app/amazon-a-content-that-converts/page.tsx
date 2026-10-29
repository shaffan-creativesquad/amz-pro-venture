import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Amazon A+ Content That Converts | AMZ Pro Venture",
  description: "Professional Amazon A+ Content creation services that boost brand trust, drive conversions, and increase sales with AMZ Pro Venture.",
};

export default function AmazonAContentThatConverts() {
  return (
    <main>
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
          bottom: 0; left: 0;
          width: 100%; height: 0;
          background-color: #ff9900;
          transition: height 0.35s ease;
          z-index: 0;
        }
        .svc-btn:hover::before { height: 100%; }
        .svc-btn-inner {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          height: 1.2em;
        }
        .svc-btn-top { display: block; transition: transform 0.35s ease; }
        .svc-btn:hover .svc-btn-top { transform: translateY(-100%); }
        .svc-btn-bottom {
          display: block;
          position: absolute;
          top: 100%; left: 0;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-bottom { transform: translateY(-100%); }
        .svc-btn-pink { background-color: #ff9900 !important; }
        .svc-btn-pink::before { background-color: #000000 !important; }
        .svc-btn-white { background-color: #ffffff !important; color: #000000 !important; }
        .svc-btn-white::before { background-color: #000000 !important; }
        .svc-btn-white:hover { color: #ffffff !important; }
        .svc-btn-hover-white::before { background-color: #ffffff !important; }
        .svc-btn-hover-white:hover { color: #000000 !important; }
      `}</style>
      <AnnouncementBar />
      <Navbar />

      <HeroSection />

      <PartnersBar />

      {/* Why A+ Content Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "People Don't Read—They Look",
                desc: "If your images and visuals don't stop the scroll, even your best bullet points won't get read. A+ Content leverages visuals, infographics, and structured layouts to communicate value instantly.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="24" cy="24" r="12" stroke="#fff" strokeWidth="2.5" fill="none"/><line x1="15.5" y1="15.5" x2="32.5" y2="32.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Fewer Returns. Happier Customers.",
                desc: "When your content educates buyers clearly, they know exactly what they're purchasing. That means fewer surprises, fewer returns, and better reviews.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="16" cy="20" r="4" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="32" cy="20" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M8 34c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
              },
              {
                title: "Stronger Brand Identity at a Glance",
                desc: "Custom visuals, brand storytelling, and structured layouts turn your listing into a professional brand experience. This builds immediate trust and gives shoppers a reason to choose you over a copycat competitor.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="24" cy="18" r="5" stroke="#fff" strokeWidth="2" fill="none"/><path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
              },
              {
                title: "Rufus AI Optimization",
                desc: "Amazon's AI, Rufus, now reads your images, alt text, and written content, just like a search engine. We structure your A+ Content to align with Rufus AI, helping your listings appear in more relevant searches.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="13" y="15" width="22" height="16" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><path d="M19 12v3M29 12v3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M19 24l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 10l2 2-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M33 12h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Stand Out in Crowded Categories",
                desc: "In saturated markets, the difference between top sellers and everyone else is clarity and confidence. A+ Content helps you highlight key product features and showcase exactly why your product is worth buying.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="13" y="13" width="9" height="9" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><rect x="26" y="13" width="9" height="9" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><rect x="13" y="26" width="9" height="9" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="30.5" cy="30.5" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M33.5 33.5l2.5 2.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Great Visuals = Better Rankings & More Revenue",
                desc: "Poor content can get your listing suppressed. Amazon favors strong, compliant visuals, and so do shoppers. High-quality A+ Content improves engagement, session time, and buy box performance.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M14 34V26M20 34V22M26 34V18M32 34V14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><circle cx="33" cy="14" r="3" fill="#fff"/><path d="M31 12l2 2 4-4" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Optimized for Mobile",
                desc: "Over 50% of Amazon traffic is mobile. A+ Content ensures your visuals and layout perform across all screen sizes.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="17" y="11" width="14" height="26" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="24" cy="33" r="1.5" fill="#fff"/><path d="M20 15h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="p-6 bg-white border border-gray-200 h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.08)" }}>
                  {item.icon}
                  <h3 className="font-bold text-[16px] mb-3 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex justify-center mt-4">
              <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
                GET MY FREE A+ CONTENT GRADING →
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* What's Included in Our A+ Content Service */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left */}
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              What&apos;s Included in Our <span style={{ color: "#ff9900" }}>A+ Content Service</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[540px]">
              Everything you need to turn your listing into a high-converting brand asset.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Up to 8+ Content Modules",
                  desc: "Professionally designed to showcase your product's benefits, features, and customer journey. All while being mobile-optimized and sleek.",
                },
                {
                  title: "Brand Story Section",
                  desc: "Showcase your values, mission, and emotional differentiation, turning Amazon's brand story feature into a tool for increased loyalty and reach.",
                },
                {
                  title: "Infographic + Image Optimization",
                  desc: "We design high-quality lifestyle shots, feature callouts, and comparison infographics — fully optimized for Amazon's Rufus-based indexing and visual scoring.",
                },
                {
                  title: "SEO-Optimized Crawlable Text & Alt Text",
                  desc: "Each module includes keyword-rich, crawlable text and optimized alt text so Amazon's algorithm indexes your A+ Content and boosts your organic visibility.",
                },
                {
                  title: "Upload-Ready Assets",
                  desc: "Formatted, compliant, and ready for upload — no back-and-forth, no formatting issues.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-[22px] h-[22px] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#ff9900" />
                      <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] mb-1" style={{ color: "#000000" }}>{item.title}</h3>
                    <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET MY FREE A+ CONTENT GRADING →</span>
                <span className="svc-btn-bottom">GET MY FREE A+ CONTENT GRADING →</span>
              </span>
            </a>
          </FadeIn>

          {/* Right — image placeholder */}
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Why-Aplus-Content-Matters-More-Than-Ever.webp" alt="What's Included in Our A+ Content Service" width={500} height={520} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[480px]">
            <Image src="/Stop-the-Scroll-with-Scroll-Stopping-Visuals.webp" alt="A+ Content Add-Ons" width={480} height={480} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

          {/* Right */}
          <FadeIn direction="left" className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              Need More? We&apos;ve Got You Covered With Our <span style={{ color: "#ff9900" }}>Add-Ons</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[540px]">
              Make your A+ Content even more effective with our Branded Add-Ons.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Branded Graphics for Your Story Section",
                  desc: "Don't have custom visuals for your Brand Story? No problem. We create stunning, on-brand graphics that visually communicate your unique story and make your brand stand out, creating a stronger emotional connection with your customers.",
                },
                {
                  title: "Tailored A+ Content for Product Variations",
                  desc: "Selling multiple product variations? We'll create tailored A+ Content for each variation, ensuring every listing tells the right story and converts more customers easily across your full catalog.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.08)" }}>
                  <h3 className="font-bold text-[17px] mb-2" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET STARTED</span>
                <span className="svc-btn-bottom">GET STARTED</span>
              </span>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* Premium A+ Content Design Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left */}
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              Premium A+ Content <span style={{ color: "#ff9900" }}>Design</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8 max-w-[540px]">
              Premium A+ Content is Amazon&apos;s most advanced content format, designed for brands that want to go beyond basic product listings and create a rich, engaging, and high-converting shopping experience.
            </p>

            <h3 className="font-bold text-[20px] mb-6" style={{ color: "#000000" }}>Key Features of Premium A+ Content</h3>

            <div className="space-y-4 mb-10">
              {[
                "Up to 7 customizable modules from a selection of 19 advanced layouts",
                "Larger images displayed prominently on the product detail page",
                "Carousel modules for scrollable, multi-frame storytelling",
                "Interactive hotspot modules",
                "Multiple embedded video modules",
                "Enhanced comparison charts",
                "Integrated Q&A module",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">REQUEST PREMIUM A+ QUOTE →</span>
                <span className="svc-btn-bottom">REQUEST PREMIUM A+ QUOTE →</span>
              </span>
            </a>
          </FadeIn>

          {/* Right — image */}
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Premium-Aplus-Content-Be-the-Brand-That-Stands-Out.webp" alt="Premium A+ Content Design" width={500} height={520} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

        </div>
      </section>

      {/* Why Upgrade to Premium A+ Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Why-Upgrade-to-Premium-A-Content.webp" alt="Why Upgrade to Premium A+ Content" width={500} height={520} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

          {/* Right */}
          <FadeIn direction="left" className="flex-1">
            <h2 className="font-bold leading-tight mb-8" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              Why Upgrade to <span style={{ color: "#ff9900" }}>Premium A+ Content?</span>
            </h2>

            <div className="space-y-5 mb-8">
              {[
                { label: "More Conversions", desc: "Engaging visuals and storytelling drive buying decisions" },
                { label: "Better Discoverability", desc: "SEO-optimized modules help your listing rank higher" },
                { label: "Better Reviews", desc: "Better experiences lead to more positive feedback" },
                { label: "A Complete Brand Experience", desc: "Give shoppers a reason to connect with your brand, not just your product" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-[#ff9900] font-bold text-[18px] leading-none mt-0.5">&#10003;</span>
                  <p className="text-[#000000] text-[15px] leading-relaxed">
                    <span className="font-bold">{item.label}</span> – {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#67768e] text-[14px] leading-relaxed italic mb-10 max-w-[500px]">
              &quot;Basic A+ Content can increase sales by up to 8%—and well-implemented Premium A+ Content can <span className="font-semibold not-italic text-[#000000]">increase sales by up to 20%</span>&quot; – Amazon
            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">REQUEST PREMIUM A+ QUOTE →</span>
                <span className="svc-btn-bottom">REQUEST PREMIUM A+ QUOTE →</span>
              </span>
            </a>
          </FadeIn>

        </div>
      </section>


      {/* Why Top Amazon Brands Trust AMZ Pro Venture Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <FadeIn direction="up">
            <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Top Amazon Brands Trust <span style={{ color: "#ff9900" }}>AMZ Pro Venture</span> for A+ Content
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[720px] mx-auto mb-14">
              We create high-performing A+ Content rooted in Amazon best practices, consumer psychology, and algorithmic intelligence. Every layout, word, and image is designed to convert and rank.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: "Amazon-Specific Expertise",
                desc: "We specialize exclusively in Amazon. That means your content is built to comply with Amazon's latest guidelines, content specs, and mobile UX standards.",
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-5"><defs><style>{`.cls-1{fill:#ff9900;}`}</style></defs><path className="cls-1" d="M19.59,216.52c2.54.44,5.44.23,7.55,1.42,28.54,16.05,59.18,25.82,91.48,30.25,42.13,5.78,83.12.71,122.91-14.23,2.78-1.05,5.46-2.59,8.33-3.09,2.18-.38,4.59.55,6.9.89-1.06,2-1.61,4.77-3.27,5.94-19.21,13.57-40.6,22.16-63.55,26.94-43.13,9-84.89,4.69-124.32-15.08-14.13-7.08-26.72-17.24-40-26-2.08-1.38-4-3-6-4.45Z"/><path className="cls-1" d="M280.41,224.19c-3.48,8.56-6.59,17.29-10.62,25.58-1.72,3.56-5.35,6.19-8.11,9.24L259.86,258c.49-2,.91-4.11,1.51-6.12,2.09-7.11,4.72-14.09,6.24-21.32,1.6-7.64-.68-10.11-8.64-10.09-6.77,0-13.54.7-20.31,1-2.11.11-4.22,0-8,0,2.14-2.07,3.15-3.52,4.53-4.3,12.62-7.1,26-8.56,40-5.19,1.9.46,3.51,2.14,5.25,3.26Z"/><path className="cls-1" d="M174.12,91c0-3,.06-6.65,0-10.25-.23-10.71-5.6-18.08-14.43-19.94-10.73-2.26-22.08,3.14-26.21,12.47-4.45,10-4.46,10.06-15.27,8.63-5.26-.69-10.51-1.58-15.79-2.1s-6.87-3.08-5.59-8.21c5-19.89,17.65-31.92,37.12-37.32,16-4.43,31.92-4.62,47.79.38,21.06,6.64,30.68,19.3,31,41.44.28,18.75.39,37.51,0,56.24-.25,10.72,2.11,20.26,9.07,28.42,3.85,4.51,3.54,8.15-1.07,11.91-5.61,4.56-11.06,9.35-16.42,14.22-4.33,3.94-8.32,3.82-12.17-.46-4.38-4.88-8.64-9.86-13.31-15.2-1.87,1.75-3.71,3.44-5.51,5.16C158,191,139.54,193.91,119.88,189.14,99.7,184.25,88.44,164,91.71,141.05c3-21.25,15.23-35.09,35.36-40.8C142.09,96,157.78,94.08,174.12,91Zm-.42,22.34c-8.76,1.67-17.32,2.21-25,5-14.25,5.19-20.14,19.48-15.23,33.91,3.15,9.23,11.72,14.17,20.72,10.39a33.76,33.76,0,0,0,13.46-10.85C175.63,140.75,174.53,127.75,173.7,113.29Z"/></svg>,
              },
              {
                title: "Rufus AI-Optimized Visuals",
                desc: "With the rise of Amazon's Rufus AI, content is no longer just for humans; it must be machine-readable. We design visuals that are compatible with Amazon's AI for higher search appearances.",
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-5"><defs><style>{`.cls-1b{fill:#ff9900;}`}</style></defs><path className="cls-1b" d="M125.73,289.71c-22.83,0-45.66.17-68.48,0-29.9-.29-46.64-16.8-46.81-46.72q-.42-69.21,0-138.42C10.62,75.25,27,58.75,56.15,58.14c18.71-.4,37.46-.49,56.15.22,4.37.17,8.59,4.13,12.89,6.34-4.1,2.22-8.13,6.2-12.31,6.36-18.23.7-36.51.18-54.77.34-23,.2-34.25,11.51-34.3,34.69q-.16,67.85,0,135.68c.05,23.08,11.41,34.52,34.39,34.58q67.8.16,135.6,0c23.21-.06,34.58-11.28,34.82-34.25.2-18.73-.31-37.47.33-56.18.12-3.75,4-7.37,6.2-11,2.23,3.8,6.27,7.55,6.39,11.42.64,20.08.92,40.22.1,60.29-1.09,27-17.44,42.57-44.69,43C173.22,290,149.47,289.7,125.73,289.71Z"/><path className="cls-1b" d="M235.91,122.27c-3.13-2.91-5.09-4.11-6.15-5.86a23.53,23.53,0,0,1-3-7.59c-3.85-20-15.66-31.68-35.68-35.89-4.13-.87-7.52-5.28-11.25-8.06,3.86-2.63,7.4-6.67,11.64-7.64,19.83-4.56,31.6-16.08,35.56-36.29.79-4,5.56-7.19,8.5-10.76,2.42,3.49,6.24,6.69,7,10.52,4.3,20.54,16.36,32.47,36.85,36.76,3.77.79,6.9,4.7,10.33,7.16-3.22,2.7-6.1,7.07-9.72,7.8-21.75,4.4-33.9,17.41-38,38.94C241.4,114.84,238.46,117.88,235.91,122.27Z"/><path className="cls-1b" d="M147.47,211.94c-1.47,1.65-3.83,6.48-6.4,6.59-3.56.16-8.8-2.26-10.7-5.24-12.42-19.5-36.13-19.52-49-.15-2.09,3.15-7.93,3.79-12,5.6-1.37-4.33-5-9.5-3.76-12.84,8.74-23.37,18-46.57,28.11-69.38,4.93-11.12,18.68-11.88,23.52-1.19C127.88,158.86,137,183.07,146.77,207,147.11,207.83,147.05,208.8,147.47,211.94Zm-39.26-57.59-4.19-.28c-2.38,6-5.41,11.86-6.91,18.09-1,4.19-.75,12.49.46,12.79a34,34,0,0,0,16.91-.26c1.21-.34,1-8.67,0-13C113.14,165.75,110.38,160.12,108.21,154.35Z"/><path className="cls-1b" d="M188.4,175c0,10.91.74,21.89-.38,32.67-.43,4.08-5.18,7.7-8,11.53-3.27-3.47-9.23-6.84-9.37-10.43-.87-23.13-.89-46.33-.07-69.46.13-3.71,5.88-7.22,9-10.83,2.91,3.7,7.93,7.19,8.31,11.13,1.11,11.7.4,23.58.4,35.39Z"/></svg>,
              },
              {
                title: "SEO-Driven Content",
                desc: "We implement a layered SEO strategy with alt text, image metadata, keyword-infused narratives, and smart module formatting to improve your visibility across Amazon search.",
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-5"><defs><style>{`.cls-1c{fill:#ff9900;}`}</style></defs><path className="cls-1c" d="M201,56.8,184.7,72.45a92.79,92.79,0,0,0-43.58-23.09c-39-8.49-81.59,14.3-96.33,51.48-3.79,9.57,5.54,10.29,8.74,16.6l40-41.08,50.11,50.45,97.58-97.66H209.91V5.47h75.27v77H261.82v-34L147.59,162.79l-52.79-53-41,41.42L39.65,137.8C37.54,157,50.84,184.24,69.22,199.19c27.88,22.69,65.6,26.35,96.18,9.34A85.83,85.83,0,0,0,209,121.34c-.74-5.32.32-8.45,4-11.93,4.3-4.09,7.92-8.91,13.05-14.81,11,31.32,9.6,59.37-4,86.2-4.39,8.67-3.28,13.13,3.49,19.41,16.25,15.09,31.69,31.07,47.35,46.8,12.57,12.62,13,27.05,1.28,38.76-11.9,11.93-26.07,11.69-38.7-.81-17.4-17.25-34.81-34.5-52-51.94-3.46-3.51-6-4.41-10.9-2-67.89,32.83-145.3-8.42-156.57-83.19C7.33,90.72,49.57,34.1,106.86,25.93,143.31,20.73,178.33,32.11,201,56.8Z"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="p-8 h-full" style={{ backgroundColor: item.dark ? "#000000" : "#f4f4f4" }}>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-3" style={{ color: item.dark ? "#ffffff" : "#000000" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: item.dark ? "#cbd5e1" : "#67768e" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:max-w-[760px] md:mx-auto">
            {[
              {
                title: "Proven, Measurable Results",
                desc: "Our A+ Content has helped Amazon brands drive measurable improvements in conversion rate, brand perception, and sales velocity. We use data to inform design, not guesswork.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M14 34V26M20 34V22M26 34V18M32 34V14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><path d="M18 18l6-4 6 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Truly Done-for-You Service",
                desc: "You don't need to manage freelancers, piece together creatives, or guess which modules work best. We take care of everything, from planning and design to formatting and implementation support.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-5"><defs><style>{`.cls-1e{fill:#ff9900;}`}</style></defs><path className="cls-1e" d="M184.82,168c-33,26.15-79.49,18.24-103.13-12.24a73.25,73.25,0,0,1,6.73-97.54c26.36-25.77,68.51-27.47,97.28-3.92,29.61,24.24,36.35,69.46,10.5,102.35,1.86,1.74,3.81,3.49,5.68,5.31,2.93,2.88,5.84,5.79,8.7,8.74a1.8,1.8,0,0,0,2.37.5c10.79-4.65,21.63-2.61,30,5.69,13.53,13.46,27.13,26.86,40.45,40.52,7.41,7.59,9.37,16.88,6,26.9s-10.51,15.83-20.82,17.57c-8.88,1.5-16.67-1.09-23.06-7.43Q225.68,234.82,206,215c-8.83-8.84-11-19.06-6.3-30.69a2,2,0,0,0-.12-1.75c-4.78-4.86-9.62-9.65-14.45-14.45C185.07,168.05,184.93,168,184.82,168Zm-45.47-.4a56.9,56.9,0,1,0-57-56.77A56.84,56.84,0,0,0,139.35,167.6Z"/><path className="cls-1e" d="M68.9,75.94c-9.05,19.44-10.34,38.86-4.23,59.19-3.32.85-6.57,1.89-9.9,2.5a57.11,57.11,0,0,1-28.32-2,2.27,2.27,0,0,1-1.86-2.6c.07-9.87,0-19.75.05-29.63,0-1.46-.36-2.44-2-2.47s-1.91,1.07-1.9,2.47c0,9.21,0,18.41,0,27.61v2.26a48.41,48.41,0,0,1-11.32-6.94c-.33-.27-.38-1-.38-1.52,0-11.48-.09-23,0-34.42A14.7,14.7,0,0,1,23.73,75.86c5.11-.13,10.07.16,15,2S48.5,79,53.26,77.05C58.25,75,63.38,76.08,68.9,75.94Z"/><path className="cls-1e" d="M257.64,132.85q0-8.35,0-16.73c0-4.17,0-8.34,0-12.51,0-1.42-.11-2.67-1.9-2.71s-2,1.28-2,2.76c0,9.88,0,19.75,0,29.63,0,1.11-.2,1.79-1.38,2.18a57.5,57.5,0,0,1-37.54-.15c-.29-.1-.55-.24-1-.44a79,79,0,0,0,3.6-29.58,77.73,77.73,0,0,0-7.62-28.79c.23-.16.37-.33.51-.34,4.95-.39,9.94-1,14.72.86a23.68,23.68,0,0,0,17.56,0,26.92,26.92,0,0,1,16.65-.29c6.08,1.69,10,7.17,10,13.73.15,11.47.05,23,0,34.42,0,.5-.13,1.24-.47,1.47-3.51,2.4-7.08,4.71-10.64,7Z"/><path className="cls-1e" d="M61,57.42A16.3,16.3,0,0,1,44.52,73.67,16.36,16.36,0,1,1,44.82,41,16.58,16.58,0,0,1,61,57.42Z"/><path className="cls-1e" d="M217.43,57.27A16.32,16.32,0,0,1,233.84,41,16.58,16.58,0,0,1,250,57.38a16.28,16.28,0,0,1-16.23,16.29A16.48,16.48,0,0,1,217.43,57.27Z"/><path className="cls-1e" d="M163.08,154.18V129.12c0-1.66-.05-3.32,0-5,.07-1.43-.46-2.31-1.92-2.32s-1.95.81-1.94,2.27c0,9.88,0,19.76.06,29.64a2.45,2.45,0,0,1-2,2.84,58.14,58.14,0,0,1-36.53-.1c-1.33-.43-1.62-1.11-1.61-2.39,0-9.94,0-19.88,0-29.82,0-1.8-.87-2.68-2.34-2.43s-1.56,1.3-1.56,2.5q0,13.71,0,27.43v2.36a19.47,19.47,0,0,1-2.27-1c-2.76-1.71-5.53-3.41-8.2-5.25a2.92,2.92,0,0,1-1.11-2.06c-.07-11.59-.11-23.19,0-34.79a14.38,14.38,0,0,1,14.14-14.11,82.07,82.07,0,0,1,11,.54c2.52.33,4.91,1.53,7.42,2a20.06,20.06,0,0,0,11.18-1.31c5.54-2.11,11.27-1.91,16.84-.63,6.21,1.43,10.49,7.35,10.52,13.74,0,11.47,0,23,0,34.42a2.43,2.43,0,0,1-.49,1.65A48.91,48.91,0,0,1,163.08,154.18Z"/><path className="cls-1e" d="M122.86,78.2a16.37,16.37,0,0,1,16.46-16.29,16.66,16.66,0,0,1,16.26,16.42,16.36,16.36,0,1,1-32.72-.13Z"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="p-8 h-full" style={{ backgroundColor: "#f4f4f4" }}>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-3" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex justify-center">
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                  <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
                </span>
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <FadeIn direction="up">
            <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
                Your Competitors Are Already Investing in A+ Content. Are You?
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
                Every day you delay is another day your listing underperforms. In a marketplace this competitive, generic content won't cut it, and buyers won't wait.
              </p>
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Upgrade to A+ Content Now</span>
                  <span className="svc-btn-bottom">Upgrade to A+ Content Now</span>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection />


      <Footer />
    </main>
  );
}
