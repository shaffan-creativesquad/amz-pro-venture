import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Rufus AI Listing Optimization | AMZ Pro Venture",
  description: "Expert Rufus AI listing optimization services to boost your Amazon product visibility and conversions with AMZ Pro Venture.",
};

export default function RufusAIListingOptimization() {
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

      {/* Why Listing Optimization Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">
            <h2
              className="text-center font-bold mb-4"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}
            >
              <span className="text-[#000000]">Why Every Amazon Sale Starts With </span>
              <span className="text-[#ff9900]">a Strong Listing</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[780px] mx-auto">
              Amazon&apos;s algorithm keeps changing, so ranking on page one is never luck. It takes ongoing Amazon SEO services and smart strategy. Here are the main reasons to optimize your Amazon listings:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Get Your Products Seen in Search",
                desc: "The right keywords, clear titles, and good product images help your listings show up in Amazon search and reach more shoppers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="9" cy="9" r="6" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M6 9h6M9 6v6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Turn More Clicks Into Sales",
                desc: "Getting clicks is only part of the job. Clear product details, helpful descriptions, and good images give shoppers more reason to buy.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Use Amazon’s Algorithm for Organic Growth",
                desc: "Amazon rewards high-converting listings with better rankings. More visibility leads to more sales, which leads to even more visibility, creating a strong growth cycle.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Build Brand Trust and Loyalty",
                desc: "When your listing gives shoppers the information they need, they're more likely to feel confident buying from you and coming back for more.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#ff9900" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Stay Compliant and Avoid Penalties",
                desc: "Keep your listings live and performing with updates that follow Amazon’s latest rules. No suppressed listings or hidden traffic losses",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="12" cy="12" r="10" stroke="#ff9900" strokeWidth="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Future-Proof With AI Optimization",
                desc: "Keep up with how Amazon’s AI, including Rufus, reads your product content and images. Rufus AI listing optimization keeps you ahead as machine learning changes how shoppers search.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#ff9900" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M9 8l2 2 4-4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="p-8 bg-white border border-gray-200 h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                  {item.icon}
                  <h3 className="font-bold text-[18px] mb-3 leading-snug" style={{ color: "#ff9900" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex justify-center mt-4">
              <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
                Optimize My Amazon Listings
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* What Is Amazon Listing Optimization Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1659px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-6 text-center lg:text-left" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>
              What Is Amazon Listing <span style={{ color: "#ff9900" }}>Optimization?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[560px] text-center lg:text-left mx-auto lg:mx-0">
              Amazon listing optimization is the procedure of improving your product listings, both front-end and back-end, so they rank higher in search, attract more views, and convert better. It directly impacts your visibility, traffic, and sales on Amazon.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
                Optimize My Amazon Listings
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/banner-image.webp" alt="What Is Amazon Listing Optimization" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>
        </div>
      </section>

      {/* What's Included in Our Amazon Listing Optimization Service */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What&apos;s Included in Our<br /><span style={{ color: "#ff9900" }}>Amazon Listing Optimization Service</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[700px] mx-auto mb-14">
              Our Amazon listing optimization services are fully tailored to your product, category, and customers, designed to lift your rankings and turn traffic into revenue.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              {
                title: "Keyword and Competitor Research",
                desc: "We analyze your top competitors and find keyword gaps using tools like Helium 10 and Brand Analytics. This makes sure we target search terms with strong buying intent and real ranking potential, setting your listing up to perform from day one.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M11 8v6M8 11h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Product Title Optimization",
                desc: "Your title will be SEO-rich, easy to read, and fully compliant with Amazon’s changing rules. We shape it around your product’s key benefits, uses, and top search terms, so you show up in the right searches and win the click.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#ff9900" strokeWidth="2"/><path d="M8 10h8M8 14h5" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Bullet Points That Sell",
                desc: "We write bullet points built for quick scanning and selling. Each one highlights benefits, answers pain points, and shows what sets you apart, speaking directly to buyer intent on desktop or mobile.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Enhanced Product Description",
                desc: "Our Amazon listing copywriting rewrites your description to meet Amazon’s formatting and readability standards, matching every word to how your customers search and buy. The copy is informative and persuasive, building trust and supporting sales.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Backend Search Terms Optimization",
                desc: "As part of our Amazon SEO services, we use keyword data from trusted tools and real customer behavior to fill your backend search terms without repeats. This hidden layer of SEO helps your listing rank higher without stuffing your visible content.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#ff9900" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="10" r="3" stroke="#ff9900" strokeWidth="2"/></svg>,
              },
              {
                title: "Rufus AI Image & SEO Audit",
                desc: "We run an AI-aligned audit of your listing images to make sure they match what Amazon’s algorithms expect. This includes checking your main image and gallery against indexing logic and visual best practices to improve ranking and engagement.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M8 11h6M11 8v6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Fully Optimized Listing Images",
                desc: "You’ll get 6 fully optimized listing images designed to sell, from lifestyle shots to infographics that show features, benefits, and key differences. Each visual is tailored to your audience to keep shoppers on the page longer and boost conversions.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#ff9900" strokeWidth="2"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#ff9900" strokeWidth="2"/><path d="M21 15l-5-5L5 21" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07} direction="up">
                <div className="bg-white p-6 border border-gray-200 h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                  {item.icon}
                  <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex justify-center mt-6">
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Optimize My Amazon Listings</span>
                  <span className="svc-btn-bottom">Optimize My Amazon Listings</span>
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3-Row Alternating Section */}
      {[
        {
          reverse: false,
          image: "/who-is-this-service-for.webp",
          alt: "Who This Service Is For",
          heading: <>Made for <span style={{ color: "#ff9900" }}>Ambitious Amazon Sellers</span></>,
          desc: "This service is built for sellers and teams who want to win on Amazon quickly and efficiently.",
          desc2: "",
          bullets: [
            "New product launches that need strong visibility and sales from day one",
            "Established brands with underperforming listings that need a refresh",
            "Agencies and aggregators managing large catalogs across many SKUs",
            "Any seller who wants fast, data-backed improvements in ranking and revenue",
          ],
          btn: "Book a Free Consultation",
        },
        {
          reverse: true,
          image: "/add-on.webp",
          alt: "Add-On A+ Content Creation",
          heading: <>Upgrade Your Listing With <span style={{ color: "#ff9900" }}>A+ Content</span></>,
          desc: "Take your Amazon listing to the next level with professionally designed A+ Content that builds brand trust, tells a strong product story, and drives more sales.",
          desc2: "We design and audit your A+ Content to match best practices, combining searchable text with engaging visuals, comparison charts, and feature callouts. The goal? Content that doesn’t just look good, but actually performs.",
          bullets: [],
          btn: "Get A+ Content Now",
        },
        {
          reverse: false,
          image: "/Why-A-Content-Matters-2.webp",
          alt: "Why A+ Content Matters",
          heading: <>Why A+ Content <span style={{ color: "#ff9900" }}>Matters</span></>,
          desc: "In competitive niches, A+ Content is often what makes a shopper choose your listing instead of a competitor's",
          desc2: "Professionally designed A+ Content boosts customer engagement and turns hesitant shoppers into confident buyers. Beyond visuals, it adds another layer of keyword-rich, indexable content that supports your Amazon SEO services and can lift your organic rankings.",
          quote: "According to Amazon: “Basic A+ Content can increase sales by up to 8%, and well-implemented Premium A+ Content can increase sales by up to 20%.”",
          bullets: [],
          btn: "Upgrade to A+ Content Now",
        },
      ].map((row, i) => (
        <section key={i} className="w-full py-20 bg-white">
          <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-14 items-center ${row.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <FadeIn direction={row.reverse ? "left" : "right"} className="flex-1">
              <h2 className="font-bold leading-tight mb-6 text-center lg:text-left" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
                {row.heading}
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[540px] text-center lg:text-left mx-auto lg:mx-0" style={{ marginBottom: row.desc2 ? "16px" : "32px" }}>{row.desc}</p>
              {row.desc2 && <p className="text-[#67768e] text-[16px] leading-relaxed mb-8 max-w-[540px] text-center lg:text-left mx-auto lg:mx-0">{row.desc2}</p>}
              {(row as {quote?: string}).quote && <p className="text-[#000000] text-[16px] leading-relaxed mb-8 max-w-[540px] font-semibold text-center lg:text-left mx-auto lg:mx-0">{(row as {quote?: string}).quote}</p>}
              {row.bullets.length > 0 && (
                <div className="space-y-4 mb-10 flex flex-col items-center lg:items-start">
                  {row.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#ff9900" />
                        <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[#000000] text-[16px] font-medium">{b}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-center lg:justify-start">
                <a href="/contact-us" className="svc-btn svc-btn-pink">
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">{row.btn}</span>
                    <span className="svc-btn-bottom">{row.btn}</span>
                  </span>
                </a>
              </div>
            </FadeIn>
            <FadeIn direction={row.reverse ? "right" : "left"} className="flex-shrink-0 w-full lg:w-[500px]">
              <Image src={row.image} alt={row.alt} width={500} height={420} unoptimized className="w-full h-auto object-contain" />
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>
                Your Next Best Seller Starts With <span style={{ color: "#ff9900" }}>Your Listing</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
                Top-performing listings bring in $200K+ in monthly sales. Let our Amazon listing copywriting team make your listing the next top seller.
              </p>
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Optimize Amazon Listings Now</span>
                  <span className="svc-btn-bottom">Optimize Amazon Listings Now</span>
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
