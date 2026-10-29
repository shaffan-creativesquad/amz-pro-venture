import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Data-Driven Product Hunting & Sourcing | AMZ Pro Venture",
  description: "Data-driven Amazon product hunting and sourcing service by AMZ Pro Venture. Find high-demand, low-competition products and source them profitably.",
};

export default function ProductHuntingAndSourcing() {
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

      {/* Hero Section */}
      <section className="w-full overflow-visible" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-0 flex flex-col items-start text-left">

          {/* Label */}
          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide">
            Data-Driven Product Hunting & Sourcing
          </p>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#ffffff" }}
          >
            Looking for the Best Products  
            <br />
            <span style={{ color: "#ff9900" }}>to Buy and Resell on Amazon?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-5 text-left">
            Our data-driven Amazon FBA product hunting and sourcing services help you uncover high-demand, low-competition private label products to scale your Amazon business.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Data-driven Amazon product research",
              "Supplier sourcing, verification, and negotiation",
              "Sample and quality check support",
              "Branding & Private Label Setup",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white/80 text-[16px]">{item}</p>
              </div>
            ))}
          </div>

          <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[14px] rounded-[6px] hover:bg-black transition-colors mb-6" style={{ padding: "14px 28px" }}>
            Let’s Hunt & Source the Right One for You →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Mian-Banner.webp"
              alt="Data-Driven Product Hunting & Sourcing"
              width={700}
              height={700}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* Spacer */}
      <div className="bg-white pt-[240px]" />

      <PartnersBar />

      {/* What Is Product Hunting & Sourcing Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — text */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,48px)", color: "#000000" }}>
              What Is Amazon FBA  <span style={{ color: "#ff9900" }}> Product Hunting and Sourcing?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-5">
              Amazon product hunting means finding “winning” products to sell on your Amazon store. These products have high demand, low competition, and good profit potential. Finding the right products involves factors like sales history, market trends, seasonal demand, and margins, using research tools and manual research. 
            </p>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-5">
             Once the best product is selected, product sourcing comes next. It involves finding trustworthy suppliers or manufacturers to supply the products at the best prices.
            </p>
            
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Start My Product Hunt Now →</span>
                <span className="svc-btn-bottom">Start My Product Hunt Now →</span>
              </span>
            </a>
          </div>

          {/* Right — image */}
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/What-Is-Amazon-Product-Hunting-and-Sourcing.webp" alt="Data-Driven Product Hunting & Sourcing" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* Why You Need Expert Product Hunting Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Why Expert Product Hunting and Sourcing <span style={{ color: "#ff9900" }}>is Crucial for Amazon</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
                Product hunting and Sourcing are the backbone of your Amazon business. Without expert research and sourcing, you might be putting your entire business at risk. Here&apos;s how going solo can hurt you:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Losing profit margins by picking saturated products with little margins",
                  "Dealing with unreliable suppliers and poor-quality stock",
                  "Overpaying the supplier due to weak negotiation or hidden fees",
                  "Delays and costly suspensions due to compliance issues",
                  "Inventory storage issues due to low demand and weak sell-through rate",
                  "Wasting advertising budget on unprofitable products",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[#000000] text-[15px] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Get Expert Hunting & Sourcing →</span>
                  <span className="svc-btn-bottom">Get Expert Hunting & Sourcing →</span>
                </span>
              </a>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[480px]">
              <Image src="/Why-Expert-Product-Hunting-and-Sourcing-is-Crucial-for-Amazon.webp" alt="Why You Need an Expert Amazon Product Hunting & Sourcing Service" width={480} height={400} unoptimized className="w-full h-auto object-contain" />
            </div>
          </div>

        </div>
      </section>


      {/* What's Included Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1400px] mx-auto px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What’s Included in Our Amazon <br />Product Hunting &amp; Sourcing Service
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto">
              Our private label Amazon product hunting and sourcing covers everything you need to build a steady business with strong margins. Here’s what you get when you partner with us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Amazon FBA Product Research That Finds Winners",
                items: [
                  "We research products that fit your budget and category goals.",
                  "Each option is analyzed for demand, competition, profit margins, and seasonality. We ensure",
                  "You’ll receive clear reports with product opportunities tailored to you."
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M162.04,7v24.08c55.23,3.53,103.32,51.5,106.87,106.87h24.08v21.83c-2.92,4.92-22.56.71-24.07,2.27-4.65,55.64-51.17,102.21-106.87,106.87-1.56,1.52,2.65,21.15-2.27,24.07h-21.83v-24.08c-55.28-4.15-103.14-51.51-106.87-106.87H7v-24.08h24.08c4.27-55.35,51.41-103.18,106.87-106.87V7h24.08ZM137.96,55.17c-42.17,2.68-79.88,40.87-82.79,82.79h21.07v24.08h-21.07c3.12,43.83,40.41,77.69,82.79,84.29v-22.58h24.08v22.58c43.78-6.47,77.83-40.5,84.29-84.29h-22.58v-24.08h22.58c-6.2-42.27-40.73-79.72-84.29-82.79v21.07h-24.08v-21.07Z"/>
                    <path fill="#ff9900" d="M145.15,102.25c65.97-6.35,70.16,95.11,5.59,96.03-60.13.86-65.79-90.24-5.59-96.03ZM143.57,126.27c-24.43,4.52-24.11,45.14,2.66,47.81,39.03,3.9,36.94-55.14-2.66-47.81Z"/>
                  </svg>
                ),
              },
              {
                title: "Trusted Supplier Sourcing",
                items: [
                  "Our Amazon product sourcing analysis includes vetting multiple manufacturers to ensure reliability and fair pricing.",
                  "Negotiate the best costs and minimum order quantities (MOQs) to maintain healthy margins.",
                  "We confirm compliance with certifications, like FDA, CE, and RoHS, to ensure you’re always market-ready.",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M182.9,104.67c89.39-10.64,101.33,123.23,16.35,131.95-88.14,9.04-100.52-121.93-16.35-131.95ZM182.9,114.54c-70.38,9.04-59.92,121.15,16.37,112.23,71.1-8.32,61.21-122.19-16.37-112.23Z"/>
                    <path fill="#ff9900" d="M60.56,135.29c1.41,20.91,3.27,42.02,9.87,62.01-5.31.78-10.88,2.64-15.86,4.6-3.32,1.31-16.05,7.74-17.53,7.88-4.07.37-15.68-20.12-17.63-24.18-7.5-15.67-11.37-33-12.43-50.31h53.57Z"/>
                    <path fill="#ff9900" d="M6.99,126.83c1.87-26.95,10.77-54.37,29.08-74.52,11.28,4.4,21.94,11.51,34.36,12.5-6.41,20.03-8.33,41.14-9.87,62.02H6.99Z"/>
                    <path fill="#ff9900" d="M126.82,73.26v53.57h-57.8c-.54-20.07,3.29-39.97,8.52-59.18,16.22,2.99,32.62,6.12,49.28,5.61Z"/>
                    <path fill="#ff9900" d="M125.41,135.29c-6.77,17.48-11.15,34.96-5.64,53.56l-41.4,5.76c-3.63-.71-11.33-52.21-9.35-59.32h56.39Z"/>
                    <path fill="#ff9900" d="M255.1,126.82c-2.79,2.88-14.29-11.25-16.89-13.4-11.04-9.15-24.92-15.37-39.44-16.25l-5.64-32.32,32.31-12.16,2.21.68c17.02,20.35,27.02,46.85,27.45,73.45Z"/>
                    <path fill="#ff9900" d="M135.28,7c24.91,5.4,39.41,30.22,46.56,52.82l-46.56,6.39V7Z"/>
                    <path fill="#ff9900" d="M126.82,66.21l-46.54-6.36c8.35-22.54,21.22-46.97,46.54-52.84v59.21Z"/>
                    <path fill="#ff9900" d="M126.82,255.11c-25.2-5.26-38.65-30.6-46.54-52.84,7.21-1.21,39.13-8.32,43.03-3.56.27.33,3.51,7.34,3.51,7.77v48.64Z"/>
                    <path fill="#ff9900" d="M135.28,121.19v-47.93c16.35.73,32.5-2.49,48.47-5.53l7.55,27.45c-.58,3.27-8.59,1.67-11.47,2.19-17.58,3.14-31.6,11.93-44.55,23.82Z"/>
                    <path fill="#ff9900" d="M288.46,288.47c-5.42,5.42-14.87,6.13-20.76,1.27-1.96-1.62-25.97-36.52-27.03-39.29-.49-1.29-1.73-2.33-.47-3.8l14.91-12.06h2.8s32.72,35.04,32.72,35.04c4.28,5.33,2.32,14.36-2.17,18.85Z"/>
                    <path fill="#ff9900" d="M101.44,11.24c-13.12,12.87-22.6,28.88-28.28,46.46l-32.34-11.25c15.63-17.23,37.59-30.53,60.61-35.21Z"/>
                    <path fill="#ff9900" d="M188.9,57.7c-3.59-14.53-13.01-31.31-23.24-42.32-1.79-1.93-4.75-1.95-5.01-4.13,23.14,3.81,44.53,17.99,60.58,34.52,0,1.86-30.15,13.87-32.34,11.93Z"/>
                    <path fill="#ff9900" d="M73.17,204.41c4.48,15.33,13.2,31.2,24.01,42.98,1.57,1.71,4.35,1.34,4.25,3.47-23.32-3.74-44.26-18.1-60.6-34.53l32.34-11.93Z"/>
                    <path fill="#ff9900" d="M135.28,255.11v-35.24c8.12,7.55,17.2,13.47,26.76,19.03-7.04,7.76-15.76,15.24-26.76,16.21Z"/>
                    <path fill="#ff9900" d="M250.87,229.71c-6.61.9-12.85,14.39-18.34,9.21-7.12-6.73,8.77-11.45,12-17.62l6.34,8.41Z"/>
                    <path fill="#ff9900" d="M181.79,243.85c.33,2.02-2.38,1.85-3.87,2.44-4.92,1.93-10.61,3.94-15.86,4.58l8.39-9.1,11.33,2.08Z"/>
                    <path fill="#ff9900" d="M187.14,121.57c57.16-5.2,73.94,78.59,19.41,95.56-69.46,21.61-90.38-89.1-19.41-95.56ZM226.61,149.67c-10.66-3.95-22.53-15.32-32.54-18.98-2.36-.86-2.52-1.19-5.11-.35-2.43.79-32.4,18.68-33.25,20.44v39.49s34.19,20.89,34.19,20.89l36.71-19.78v-41.72Z"/>
                    <polygon fill="#ff9900" points="187.44 200.13 163.47 187.45 163.47 159.25 187.44 174.05 187.44 200.13"/>
                    <polygon fill="#ff9900" points="195.9 200.13 195.9 174.05 219.86 159.25 219.86 185.33 195.9 200.13"/>
                    <path fill="#ff9900" d="M215.63,153.6c-11.29,2.17-22.46,20.44-32.41,7.76,10.81-2.94,23.33-21.1,32.41-7.76Z"/>
                    <path fill="#ff9900" d="M200.12,142.35l-23.84,14.87-8.57-3.63c-1.32-1.91,20.23-13.37,22.56-14.93l9.86,3.69Z"/>
                  </svg>
                ),
              },
              {
                title: "Samples & Quality Assurance",
                items: [
                  "We make sure you get samples before you commit, with thorough testing and inspection included.",
                  "Our team gives you honest feedback on quality with recommendations for improvements.",
                  "We ensure every shipment meets your standards before it ever reaches customers."
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M251.32,92.61v32.37c8.23-4.74,18.32-21.47,27.89-22.34,6.69-.6,15.45,7.22,15.89,13.9.78,11.84-38.02,38.71-43.78,51.28v111.4H64.7v-89.5h20.95v68.56h144.73v-68.56l-54.54,55.08-51.97-51.97,17.95-18.32,30.47,30.4,58.08-58.05v-33.33h-66.65v-20.95h87.6Z"/>
                    <path fill="#ff9900" d="M41.86,163.07c-.7,19.83-34.27,19.67-36.29-2.77-.82-9.14-1.3-49.52.93-56.38,3.74-11.51,23.96-7.13,33.53-6.54,3.72-8.64,11.8-14.18,16.72-21.29,5.02-7.26,18.62-30.89,20.22-38.49,1.3-6.15-3.65-20.07,10.15-16.15,26.68,7.57.71,50.21,5.16,57.85l32.28-3.88c7.78,1.84,18.87,1.47,22.53,10.12,3.07,7.26-1.91,9.43-2.03,14.08-.06,2.59,3.76,6.3,3.6,13-.14,5.91-3.66,9.5-3.77,13.21-.57,19.79-2.09,11.15-5.56,23.35-2.39,8.41,2.91,13.73-8.16,20.41-13.14,7.93-63.77,6.43-78.48.71-4.73-1.84-6.93-4.6-10.85-7.22Z"/>
                  </svg>
                ),
              },
              {
                title: "Branding & Private Label Support",
                items: [
                  "We help you stand out with custom packaging and logo design for private label branding.",
                  "You’ll receive guidance on trademarking and Amazon Brand Registry to protect your brand.",
                  "We provide strategies to position your product differently from competitors and capture attention."
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M65.77,206.01v-64.86l-8.71-3.41c16.89-107.55,168.05-108.35,186.93-1.09-.25,2.25-4.76.85-6.69,2.25-5.91,4.31.72,54.7-3.44,67.02-4.18,12.36-36.85,35.49-49.34,38.7-13.46,3.46-55.19-13.16-45.89,14.97,1.73,5.24,26.23,4.5,31.48,3.51,13.32-2.51,45.57-20.11,56.18-29.57,5.71-5.09,19.76-25.39,21.94-26.44,10.21-4.92,25.32,1.66,36.21-12.16,8.09-10.26,8.47-38.21-.07-48.11-3.76-4.35-14.83-8.06-15.83-9.46-2.19-3.07-8.09-33.13-14.1-44.16C208.99,9.8,83.63,12.68,43.38,98.97c-3.94,8.45-9.53,36.23-11.08,38.38-2.97,4.14-16.84,4.21-20.45,18.03-11.15,42.7,16.62,54.73,53.93,50.63Z"/>
                    <path fill="#ff9900" d="M162.75,95.84l-2.29-12.01-21.19,1.1-1.18,10.91c-5.04-1.03-16.14,6.45-18.49,6.24-3.09-.28-4.42-8.42-12.01-4.97-1.43.65-10.42,10.02-10.8,11.5-1.55,5.94,5.56,7.93,5.8,10.52.23,2.6-8.43,12.79-6.14,18.61-19.09-4.05-18.79,25.51-.97,26.48l4.37,11c3.37-5.12,15.54-13.03,17.57-17.61,3.84-8.67-1.4-15.82,7.74-27.44,25.77-32.75,74.06,4.45,52.77,37.38-11.84,18.32-23.12,10.06-35.16,15.41-4.59,2.04-12.48,14.19-17.61,17.57,12.89,3.02,11.2,7.07,16.75,16.2,23.34,5.58,17.11-6.83,22.81-11.82.52-.45,11.65-4.99,12.7-5.14,7.35-1.07,8.94,4,12.63,4.09,4.26.09,16.08-11.41,13.22-17.59-.86-1.86-4.81-3.44-5-5.5-.08-.9,6.52-15.86,7.12-16.54,3.06-3.5,10.15-.84,11.83-5.76l-.67-18.56-12.13-2.17c1.72-7.04-4.67-12.66-5.82-17.38-1.13-4.64,9.6-5.58,3.64-14.48-12.3-18.36-16.81-4.17-20.97-3.8-2.35.21-13.46-7.26-18.49-6.24Z"/>
                    <path fill="#ff9900" d="M155.9,124.67c-14.38-3.3-29.86,7.33-32.12,21.93-.79,5.09,2.06,9.21.35,13.15-3.88,8.97-35.17,31.32-41.99,41.92-2.51,5.5,9.05,17.6,13.3,17.61,7.42.01,36.85-39.67,45.12-43.03,4.56-1.85,13.95,3.58,24.95-3.51,6.73-4.33,16.61-21.43,9.08-28.25-8.6,14.45-36.22,18.36-29.22-5.09,1.61-5.41,10.99-7.91,10.52-14.73Z"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 flex flex-col gap-1">
                {card.icon}
                <h3 className="font-bold text-[16px] leading-snug mb-3" style={{ color: "#000000" }}>{card.title}</h3>
                <div className="space-y-2.5">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                        <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <p className="text-[#000000] text-[14px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Start Hunting & Sourcing Now →</span>
                <span className="svc-btn-bottom">Start Hunting & Sourcing Now →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Why Count on Us Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Count on Us for Amazon Inventory <br />Optimization Service
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto">
              We provide proactive management and solutions to keep your Amazon FBA inventory at its optimum, without the fear of overstocking, stockouts, or costly overstorage fees. Here’s why we stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                title: "Proactive, Not Reactive",
                desc: "Instead of scrambling to fix problems after they happen, our service keeps you ahead of the curve. By monitoring inventory levels for better Amazon FBA stock management, you’ll never get caught off guard by storage issues and costly FBA surprises.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-9 h-9">
                    <polygon fill="#ff9900" points="187.68 33.96 172.56 8.76 162.52 30.3 170.18 35.35 170.02 54.17 180.08 54.17 180.34 34.12 187.68 33.96"/>
                    <path fill="#ff9900" d="M127.13,54.18l-25.2-7.59,5.03,25.25c11.79-6.01,11.98,4.29,21.39,7.53,11.65-7.72-5.94-15.85-5.93-18.9l4.71-6.28Z"/>
                    <path fill="#ff9900" d="M240.6,74.33l7.57-27.74-25.22,7.58c7.95,13.38-13.08,14.5-3.59,25.28l14.97-9.83,6.28,4.71Z"/>
                    <path fill="#ff9900" d="M109.08,109.99l-22.26,11,19.32,11.12c3.12.66,5.56-8.55,13.42-4.85l.16-8.67c-4.91-2.59-9.45-1.81-10.65-8.61Z"/>
                    <path fill="#ff9900" d="M263.3,119.76l-25.19-10.12c2.9,11.93-12.85,4.75-10.12,17.65,7.92-3.8,10.29,5.49,13.44,4.82l21.87-12.35Z"/>
                    <path fill="#ff9900" d="M79.21,291.24h63.05c1.88-8.61-3.97-17.74-2.03-25.81,2.12-8.82,27.43-31.81,24.45-43.08-5.75-5.5-19.33-19.81-21.44-26.89-1.69-5.68,1.97-10.37,1.38-16.07-6.73-64.57-87.9-42.76-97.6,7.78-1.37,7.15.3,14.44-1.15,21.55-1.24,6.09-8.88,14.96-9.17,21.26-.24,5.29,6.79,5.16,9.19,10.1,2.72,5.6,2.34,21.32,8.05,24.73l24.16,3.58,1.1,22.86Z"/>
                    <path fill="#ff9900" d="M193.96,182.78h-40.35c-10.59,11.33-.93,13.09,2.18,17.87,4.99,7.66,5.2,15.06,17.99,15.06,13.44,0,12.8-8,18-15.04,2.38-3.22,9.05-3.78,7.29-10.55-.5-1.93-3.66-6.89-5.11-7.34Z"/>
                    <path fill="#ff9900" d="M197.5,174.96l-47.57.14c-.97-27.83-27.03-36.86-25.36-66.64,3.14-55.83,83.53-63.5,96.66-10.97,9.03,36.13-18.22,45.78-23.74,77.47ZM179.87,72.18h-12.05c.04,18.84-19.19.37-22.59,14.04-.92,3.68,3.1,10.01-.21,14.34-1.32,1.73-14.38,1.07-7.26,13.61.91,1.61,8.09,2.26,9.22,7.27,1.08,4.77-4.49,8.59.12,14.8,5.83,7.85,11.02-3.9,18.57,1.08,3.84,2.53.14,8.66,8.07,10.24,9.16,1.83,5.06-3.92,7.72-7.42,7.26-9.53,11.79,1.08,17.56-2.51,11.56-7.19-2.43-11.18,3.6-18.75,2.76-3.47,9.56-.49,10.42-7.95,1.19-10.28-7.79-6.88-10.49-10.51-3.72-5,2.31-11.83-2.05-17.44-4.79-6.16-13,1.18-18.9-3.37l-1.72-7.42Z"/>
                    <path fill="#ff9900" d="M166.75,90.02c39.97-9.2,35.71,49.83.6,38.67-18.4-5.85-18.73-34.5-.6-38.67Z"/>
                  </svg>
                ),
              },
              {
                title: "Data-Driven Accuracy",
                desc: "Every forecast is powered by real data based on sales velocity, historical performance, and seasonality patterns. This ensures smarter, more accurate predictions that help you order the right amount of stock at the right time and prevent Amazon overstocking.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#ff9900" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="#ff9900" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Get Complete Control",
                desc: "With constant monitoring, monthly reports, and actionable insights, you don’t have to stress over the details. You stay in control with clear visibility, while we handle the complexities, giving you more time to focus on growing your business.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-9 h-9">
                    <path fill="#ff9900" d="M144.32,8.76c3.32,6.33-1.47,17.76,4.28,21.73,5.04,3.48,19.56,5.93,25.73,10.32l15.69-13.74,21.16,22.45c-3.9,7.83-13.98,9.96-11.37,19.75.53,1.99,9.66,22.33,10.67,23.1,4.52,3.47,14.13,1.79,19.62,2.18v30.94c-5.59-.49-12.06.75-17.49-.09-8.79-1.36-10.68-7.95-21.54-.41-3.22,2.23-2.54,6.91-7.45,2.6-1.93-1.69,1.32-6.71,1.49-9.83,4.61-88.14-119.22-81.13-111.09-.01,2.38,23.73,22.37,41.83,44.64,47.48l14.4,26.36c-1.45,1.35-11.84-4.01-14.86-4.13-3.48-.14-5.51,1.47-10.5.74-8.09-1.19-15.53-6.79-23.08-9.33-4.9.43-12.18,14.79-17.61,12.1l-19.63-19.95c3.49-8.35,14.69-9.76,11.91-20.23-.37-1.38-8.74-20.59-9.39-21.57-5.34-8.06-15.87-.1-22.31-5.82v-28.83c7.03-.29,14.54,1.25,21.03-2.18,1.3-4.92,11.44-23.37,11.46-26.66.04-7.28-15.41-12.6-11.48-18.32,4.52-6.58,15.32-13.56,20.48-20.32l15.69,13.74c6.17-4.39,20.69-6.84,25.73-10.32,5.49-3.79,1.89-15.61,2.88-21.73h30.94Z"/>
                    <path fill="#ff9900" d="M244.17,218.28l-56.98,32.4c-5.12-2.95-6.51-7.17-12.39-10.12-6.64-3.33-15.46-4.96-22.58-8.36-15.41-7.37-29.6-19.54-47.1-23.92-1.43-9.3,7.47-13.33,15.63-12.17,4.47.64,26.59,12.05,26.42,3.24l-42.34-74.6c-.87-8.28,8.4-10.45,13.55-4.97l32.33,54.86,4.15,2.94,3.42-2.34c2.25-7.42-21.23-26.62-10.54-34.39,12.04-8.75,19.78,20.32,25.4,25.43,3.32,3.01,8.7,1.53,7.5-3.22-1.4-5.53-23.45-27.55-5.76-30.31,10.46-1.63,16.81,28.78,24.97,26.49,6.53-1.84-4.72-14.94-5.65-18.23-2.67-9.53,2.58-14.06,11.39-9.98l28.03,46.5c3.79,7.55,1.04,15.97,2.74,23.98,1.32,6.23,6.88,10.42,7.81,16.77Z"/>
                    <path fill="#ff9900" d="M272.2,246.32l-77.99,44.92-16.1-25.83,79.44-47.09c1.26,4.62,16.8,24.95,14.65,28Z"/>
                  </svg>
                ),
              },
              {
                title: "Advanced Automation Tools",
                desc: "Our hybrid approach combines AI and automation with expert human oversight. We use the latest and most effective Amazon inventory management and automation software, like Jungle Scout, Helium 10, and RestockPro. These tools help us ensure accuracy and streamline the inventory management process.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-9 h-9">
                    <path fill="#ff9900" d="M149.51,9.39v75.64c-84.04,7.36-84.4,122.62,0,129.94v75.64c-23.63,5.2-11.61-23.44-25.21-30.06-16.58-8.07-18.33,17.68-30.06,17.74-2.36.01-21.39-10.3-23.46-12.8-6.61-7.97,7.44-23.49,4.12-31.04-7.43-16.9-25.68.48-35.04-.82-5.75-.8-14.56-19.73-16.38-25.5.12-5.7,16.36-15.39,18.44-20.36.87-2.09-1.67-12.8-2.73-14.34-1.63-2.37-25.21-2.52-28.38-8.86-1.95-3.9-1.81-26.99.8-30.28,3.79-4.69,26.14-5.62,27.58-7.72,1.06-1.55,3.6-12.25,2.73-14.34-2.08-4.97-18.32-14.66-18.44-20.36,1.82-5.89,11.42-25.68,17.54-25.37,7.9.4,19.97,9.13,26.96,5.95,17.93-8.16-5.38-28.9,2.89-37.85,2.18-2.36,20.95-12.89,23.36-12.88,11.72.06,13.47,25.81,30.06,17.74,13.6-6.62,1.58-35.27,25.21-30.06Z"/>
                    <path fill="#ff9900" d="M149.51,110.24v79.52c-51.21-5-51.21-74.52,0-79.52Z"/>
                    <path fill="#ff9900" d="M260.05,154.85h-100.85v-9.7h100.85c1.06,0,2.73-13.02,16.31-11.63,31.7,3.26,2.98,56.97-16.31,21.33Z"/>
                    <path fill="#ff9900" d="M159.2,119.94v-9.7h51.39c.89,0,13.12-10.87,13.58-11.64,3.72-6.22-3.29-14.87,7.32-21.76,25.3-16.43,35.67,28.51,9.98,29.4-3.75.13-7.2-2.54-11.06-1.56-2.51.64-16.57,15.25-17.88,15.25h-53.33Z"/>
                    <path fill="#ff9900" d="M159.2,189.76v-9.7h53.33c1.31,0,15.37,14.61,17.88,15.25,6.21,1.59,12.66-5.26,21.77,3.28,11.91,11.16-1.1,37.29-20.7,24.57-10.61-6.89-3.6-15.54-7.32-21.76-.46-.77-12.68-11.64-13.58-11.64h-51.39Z"/>
                    <path fill="#ff9900" d="M211.97,44.69c-1.54,2.73.65,8.53-1.4,13.17-.75,1.69-25.04,24.2-27.02,25.34-6.78,3.89-16.65,1.02-24.36,1.83v-7.74c6.36-.21,12.72,1.03,18.91-1.47,2.22-.9,21.85-19.9,22.75-21.84,5.72-12.43-9.38-10.46-10.61-22.44-2.04-19.93,29.73-25.21,32.62-3.18,1.62,12.36-9.02,13.04-10.89,16.35Z"/>
                    <path fill="#ff9900" d="M211.97,255.31c1.87,3.31,12.51,3.98,10.89,16.35-2.89,22.03-34.65,16.75-32.62-3.18,1.22-11.99,16.32-10.02,10.61-22.44-.9-1.95-20.52-20.94-22.75-21.84-6.18-2.5-12.55-1.26-18.91-1.47v-7.74c7.71.81,17.57-2.07,24.36,1.83,1.98,1.14,26.27,23.64,27.02,25.34,2.05,4.65-.14,10.44,1.4,13.17Z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col p-6 rounded-lg border border-gray-200" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 flex-shrink-0" style={{ backgroundColor: "#fff0f4", border: "1px solid #fcd5e0" }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[15px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[13.5px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START HUNTING &amp; SOURCING NOW →</span>
                <span className="svc-btn-bottom">START HUNTING &amp; SOURCING NOW →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <div className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Why Sellers Trust SPCTEK for Amazon Product Hunting & Sourcing
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              Product hunting for Amazon is more than just acquiring products to sell on your store. It’s about building a strong brand and a reliable relationship with your suppliers.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { bold: "Data-Backed Product Research for Amazon", rest: " : We don’t rely on guesswork. We use advanced tools like Helium 10 and Jungle Scout to analyze trends, sales velocity, seasonality, and competition. This enables us to identify products with true long-term potential." },
                { bold: "Verified Supplier Network", rest: ": We work directly with vetted manufacturers and suppliers across the globe. We ensure that you get the best prices, quality, and reliable shipping timelines." },
                { bold: "Compliance & Risk Protection", rest: ": Every step of the Amazon product sourcing process requires legal and Amazon compliance, certifications, and import/export laws. We ensure proper compliance to protect your brand from suspensions or costly mistakes." },
              ].map((item) => (
                <div key={item.bold} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                    <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[#000000] text-[15px]"><strong>{item.bold}</strong>{item.rest}</p>
                </div>
              ))}
            </div>


            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Find Winning Products Now →</span>
                <span className="svc-btn-bottom">Find Winning Products Now →</span>
              </span>
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/Why-Sellers-Trust-SPCTEK-for-Amazon-Product-Hunting-Sourcing.webp" alt="What We Need from You" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Is This Service Right for You Section */}
      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left — image */}
          <div className="w-full lg:w-[40%]">
            <Image src="/Is-This-Service-Right-for-You.webp" alt="Is This Service Right for You?" width={800} height={600} unoptimized className="w-full h-full object-cover" />
          </div>

          {/* Right — content */}
          <div className="flex-1 px-10 lg:px-16 py-16">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Is This Service <span style={{ color: "#ff9900" }}>Right for You?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              Our Amazon private label hunting and sourcing services are designed for sellers who want to thrive on Amazon. Our services are an ideal fit for:
            </p>
            <div className="space-y-4 mb-8">
              {[
                "New sellers launching their first private label product",
                "Busy entrepreneurs who don't have time for in-depth research & supplier vetting",
                "Established sellers expanding into new categories or marketplaces",
                "Agencies or teams needing expert support for sourcing and compliance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                    <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Start My Product Hunt Now →</span>
                <span className="svc-btn-bottom">Start My Product Hunt Now →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You Section */}
      <section className="w-full bg-white">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left — content */}
          <div className="flex-1 px-10 lg:px-16 py-16">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What We Need From You <span style={{ color: "#ff9900" }}>For Ideal Results</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              The stronger the input and collaboration, the better the results. Here&apos;s what we&apos;ll need from you to deliver the best results:
            </p>
            <div className="space-y-4 mb-5">
              {[
                "Your budget range for product investment",
                "Marketplaces you're looking to target (Amazon US, UK, EU, etc.)",
                "The product category you want to choose",
                "Branding guidelines (optional)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                    <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
              Don&apos;t have a category in mind? No problem, we&apos;ll help you pick the best category.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Start My Product Hunt Now →</span>
                <span className="svc-btn-bottom">Start My Product Hunt Now →</span>
              </span>
            </a>
          </div>

          {/* Right — image */}
          <div className="w-full lg:w-[40%]">
            <Image src="/what-we-need-from-you-6.webp" alt="What We Need From You" width={800} height={600} unoptimized className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Outperform Your Competition <br />With the Winning Products
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Every day you wait is an opportunity lost. Move fast and secure the products that customers are demanding now.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Find Winning Products Now →</span>
                <span className="svc-btn-bottom">Find Winning Products Now →</span>
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
