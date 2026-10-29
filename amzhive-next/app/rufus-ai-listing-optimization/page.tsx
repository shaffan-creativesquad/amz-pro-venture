import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";

export const metadata = {
  title: "Rufus AI Listing Optimization | AMZ Hive",
  description: "Expert Rufus AI listing optimization services to boost your Amazon product visibility and conversions with AMZ Hive.",
};

export default function RufusAIListingOptimization() {
  return (
    <main>
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
          bottom: 0; left: 0;
          width: 100%; height: 0;
          background-color: #E91C59;
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
        .svc-btn-pink { background-color: #E91C59 !important; }
        .svc-btn-pink::before { background-color: #1e293b !important; }
        .svc-btn-white { background-color: #ffffff !important; color: #1e293b !important; }
        .svc-btn-white::before { background-color: #1e293b !important; }
        .svc-btn-white:hover { color: #ffffff !important; }
        .svc-btn-hover-white::before { background-color: #ffffff !important; }
        .svc-btn-hover-white:hover { color: #1e293b !important; }
      `}</style>
      <AnnouncementBar />
      <Navbar />

      <HeroSection />

      {/* Why Listing Optimization Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2
            className="text-center font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}
          >
            <span className="text-[#1e293b]">Why Listing Optimization is The Backbone of </span>
            <span className="text-[#E91C59]">Your Amazon Business?</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[780px] mx-auto">
            Since the Amazon algorithm is constantly evolving, ranking on page 1 isn&apos;t luck; it&apos;s constant optimization and strategy. Here are the key reasons to optimize your Amazon listings:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Dominate Search Results & Increase Visibility",
                desc: "SEO-optimized listings rank higher in Amazon's search. Strategic keywords, compelling titles, and professional images work together to put your products in front of more shoppers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="9" cy="9" r="6" stroke="#E91C59" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/><path d="M6 9h6M9 6v6" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Turn Shoppers Into Customers",
                desc: "An optimized listing does more than get clicks — it drives conversions. Benefit-focused copy, clear product details, and high-quality visuals remove purchase objections to boost your sales.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Leverage Amazon's Algorithm for Organic Growth",
                desc: "Amazon rewards high-converting listings with better rankings. More visibility leads to more sales, which leads to even more visibility — creating a powerful growth cycle.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Build Brand Credibility & Loyalty",
                desc: "Professional listings establish trust. Complete product information, accurate specifications, and engaging content lead to better reviews and repeat customers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#E91C59" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Stay Compliant & Avoid Penalties",
                desc: "Keep your listings active and performing with optimization that follows Amazon's latest guidelines. No suppressed listings or hidden traffic losses.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="12" cy="12" r="10" stroke="#E91C59" strokeWidth="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Future-Proof With AI Optimization",
                desc: "Adapt to how Amazon's AI (including Rufus) interprets product content and images. Stay ahead as machine learning changes search behavior.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#E91C59" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/><path d="M9 8l2 2 4-4" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                {item.icon}
                <h3 className="font-bold text-[18px] mb-3 leading-snug" style={{ color: "#E91C59" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <a href="/contact-us" className="inline-block bg-[#E91C59] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              OPTIMIZE MY AMAZON LISTINGS →
            </a>
          </div>

        </div>
      </section>

      {/* What Is Amazon Listing Optimization Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
              What Is Amazon Listing <span style={{ color: "#E91C59" }}>Optimization?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[560px]">
              Amazon listing optimization is the process of improving your product listings, both front and back end, to rank higher in search results, attract more views, and drive conversions. It directly impacts your visibility, traffic, and sales performance on Amazon.
            </p>
            <a href="/contact-us" className="inline-block bg-[#E91C59] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              OPTIMIZE MY AMAZON LISTINGS →
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/banner-image.webp" alt="What Is Amazon Listing Optimization" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* What's Included in Our Amazon Listing Optimization Service */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
            What&apos;s Included in Our <span style={{ color: "#E91C59" }}>Amazon Listing Optimization Service</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[700px] mx-auto mb-14">
            We deliver full-scope listing optimization tailored to your product, category, and customer base, designed to boost rankings and convert traffic into revenue.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              {
                title: "Keyword & Competitor Research",
                desc: "We analyze your top competitors and uncover keyword gaps using tools like Helium 10 and Brand Analytics. This ensures we're targeting terms with high buying intent and real ranking opportunities, setting the foundation for a listing that performs from day one.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#E91C59" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/><path d="M11 8v6M8 11h6" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Product Title Optimization",
                desc: "Your title will be SEO-rich, easy to read, and fully compliant with Amazon's ever-evolving rules. We tailor it to emphasize key product benefits, use cases, and top search terms, ensuring you show up in the right searches and get the click.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#E91C59" strokeWidth="2"/><path d="M8 10h8M8 14h5" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Bullet Points That Sell",
                desc: "We craft bullet points designed for both scanning and selling. Structured to highlight benefits, address pain points, and communicate differentiators, each bullet is optimized to speak directly to buyer intent, whether on desktop or mobile.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Enhanced Product Description",
                desc: "We rewrite your description to meet Amazon's formatting and readability standards, aligning every word with how your ideal customers search and buy. The copy is both informative and persuasive, reinforcing trust and supporting conversion.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Backend Search Terms Optimization",
                desc: "Using keyword data from trusted tools and actual customer behavior, we optimize your backend terms to maximize visibility without redundancy. This hidden layer of SEO helps your listing rank higher without stuffing your visible content.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#E91C59" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="10" r="3" stroke="#E91C59" strokeWidth="2"/></svg>,
              },
              {
                title: "Rufus AI Image & SEO Audit",
                desc: "We conduct an AI-aligned audit of your listing images to ensure they match what Amazon's algorithms expect. This includes checking your main image and gallery against indexing logic and visual best practices to improve both ranking and engagement.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#E91C59" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/><path d="M8 11h6M11 8v6" stroke="#E91C59" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Fully Optimized Listing Images",
                desc: "You'll receive 6 fully optimized listing images designed to sell, ranging from lifestyle shots to infographics that highlight features, benefits, and key differentiators. These visuals are tailored to your audience and crafted to increase time on page and conversion rates.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#E91C59" strokeWidth="2"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#E91C59" strokeWidth="2"/><path d="M21 15l-5-5L5 21" stroke="#E91C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                {item.icon}
                <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE MY AMAZON LISTINGS →</span>
                <span className="svc-btn-bottom">OPTIMIZE MY AMAZON LISTINGS →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 3-Row Alternating Section */}
      {[
        {
          reverse: false,
          image: "/who-is-this-service-for.webp",
          alt: "Who This Service Is For",
          heading: <>Who This Service <span style={{ color: "#E91C59" }}>Is For</span></>,
          desc: "This service is built for sellers and teams who want to win on Amazon fast and efficiently.",
          desc2: "",
          bullets: [
            "New product launches looking for strong visibility and conversions from day one",
            "Established brands with underperforming listings that need a refresh",
            "Agencies & aggregators managing large catalogs and scaling across SKUs",
            "Any seller who wants fast, data-backed improvements to boost ranking and revenue",
          ],
          btn: "BOOK A FREE CONSULTATION →",
        },
        {
          reverse: true,
          image: "/add-on.webp",
          alt: "Add-On A+ Content Creation",
          heading: <>Add-On: <span style={{ color: "#E91C59" }}>A+ Content Creation</span></>,
          desc: "Take your Amazon listing to the next level with professionally designed A+ Content that enhances brand trust, tells a compelling product story, and drives more conversions.",
          desc2: "We’ll design and audit your A+ Content to ensure it aligns with best practices, incorporating crawlable text along with engaging visuals, comparison charts, and feature callouts. The goal? To not just look good, but to perform.",
          bullets: [],
          btn: "GET A+ CONTENT NOW →",
        },
        {
          reverse: false,
          image: "/Why-A-Content-Matters-2.webp",
          alt: "Why A+ Content Matters",
          heading: <>Why A+ Content <span style={{ color: "#E91C59" }}>Matters</span></>,
          desc: "In competitive niches, A+ Content often makes the difference between a shopper choosing your listing or going with your competitor.",
          desc2: "Professionally designed A+ Content increases customer engagement and helps convert hesitant shoppers into confident buyers. Beyond just visuals, it adds another layer of keyword-rich, indexable content that can boost your organic rankings.",
          quote: "According to Amazon: ‘Basic A+ Content can increase sales by up to 8%—and well-implemented Premium A+ Content can increase sales by up to 20%.’",
          bullets: [],
          btn: "UPGRADE TO A+ CONTENT NOW →",
        },
      ].map((row, i) => (
        <section key={i} className="w-full py-20 bg-white">
          <div className={`max-w-[1440px] mx-auto px-10 flex flex-col gap-14 items-center ${row.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#1e293b" }}>
                {row.heading}
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[540px]" style={{ marginBottom: row.desc2 ? "16px" : "32px" }}>{row.desc}</p>
              {row.desc2 && <p className="text-[#67768e] text-[16px] leading-relaxed mb-8 max-w-[540px]">{row.desc2}</p>}
              {(row as {quote?: string}).quote && <p className="text-[#1e293b] text-[16px] leading-relaxed mb-8 max-w-[540px] font-semibold">{(row as {quote?: string}).quote}</p>}
              {row.bullets.length > 0 && (
                <div className="space-y-4 mb-10">
                  {row.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#E91C59" />
                        <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[#1e293b] text-[16px] font-medium">{b}</p>
                    </div>
                  ))}
                </div>
              )}
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">{row.btn}</span>
                  <span className="svc-btn-bottom">{row.btn}</span>
                </span>
              </a>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[500px]">
              <Image src={row.image} alt={row.alt} width={500} height={420} unoptimized className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>
      ))}

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
              Don’t Let a Poor Listing Cost You Sales
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Top performing listings drive $200K+ in monthly sales. Let us make your listing the next top seller!
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">optimize Amazon listings now</span>
                <span className="svc-btn-bottom">optimize Amazon listings now</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <FAQSection />


      <Footer />
    </main>
  );
}
