import AnnouncementBar from "../components/AnnouncementBar";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import PartnersBar from "../components/PartnersBar";

import Image from "next/image";

import FAQSection from "./FAQSection";

import FadeIn from "../components/FadeIn";



export const metadata = {

  title: "Amazon Account Suspended | AMZ Pro Venture",

  description: "Expert Amazon account suspension reinstatement services — appeals, Plan of Action, and full account recovery by AMZ Pro Venture.",

};



export default function AmazonAccountSuspended() {

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

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-0 flex flex-col items-start text-left">



          {/* Label */}

          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide">

            Amazon Account Suspended

          </p>



          {/* Heading */}

          <h1

            className="font-bold leading-tight mb-6"

            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 5vw, 48px)", color: "#ffffff" }}

          >

            Amazon Account{" "}

            <span style={{ color: "#ff9900" }}>Suspension Recovery.</span>

          </h1>



          {/* Description */}

          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-12 text-left">

            A suspended Amazon account can bring your business to a halt overnight. Our suspension reinstatement experts have helped hundreds of sellers get back online fast — with proven appeal strategies, detailed Plans of Action, and direct Seller Support escalation.

          </p>



          {/* Hero Image */}

          <div className="w-full max-w-[700px] relative z-10 mb-[-60px] sm:mb-[-120px] lg:mb-[-180px] self-center">

            <Image

              src="/bANNERR-IMAGE-1024x1024.webp"

              alt="Amazon Account Suspended"

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



      {/* Who Is This For? */}

      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>

        <div className="max-w-[1659px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          <FadeIn direction="right" className="flex-1">

            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}>

              <span className="text-[#000000]">Struggling to Reinstate </span>

              <span className="text-[#ff9900]">Amazon Account?</span>

            </h2>

            <p className="text-[#67768e] text-[18px] mb-8">Get back to selling faster with dedicated expert support that understands Amazon&apos;s policies inside and out. We handle reinstatements for:</p>

            <div className="space-y-5">

              {[

                "Intellectual property & trademark complaints",

                "Product authenticity or safety issues",

                "Multiple account or linked account violations",

                "Section 3 or terms of service breaches",

                "All other types of account suspensions",

              ].map((item) => (

                <div key={item} className="flex items-start gap-4">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[22px] h-[22px]" fill="none">

                    <circle cx="12" cy="12" r="12" fill="#ff9900" />

                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                  <p className="text-[#000000] font-semibold text-[18px]">{item}</p>

                </div>

              ))}

            </div>

            <div className="mt-8">

              <a href="/contact-us" className="svc-btn svc-btn-pink">

                <span className="svc-btn-inner">

                  <span className="svc-btn-top">Get Amazon Account Assessment Now</span>

                  <span className="svc-btn-bottom">Get Amazon Account Assessment Now</span>

                </span>

              </a>

            </div>

          </FadeIn>

          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">

            <Image src="/second-01-scaled.png" alt="Who Is This For" width={500} height={420} unoptimized className="w-full h-auto object-contain" />

          </FadeIn>

        </div>

      </section>



      {/* Why Choose Us Section */}

      <section className="bg-white py-20 w-full max-w-[1659px] mx-auto">

        <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">



          <FadeIn direction="right" className="flex-1">

            <h2

              className="font-bold leading-tight mb-10"

              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}

            >

              <span className="text-[#ff9900]">Why Choose Our </span>

              <span className="text-[#000000]">Amazon Suspension<br />Recovery Service?</span>

            </h2>



            <div className="space-y-7">

              {[

                {

                  title: "Proven Reinstatement Track Record",

                  desc: "We have successfully reinstated hundreds of suspended accounts across all suspension types — performance, policy, and verification.",

                },

                {

                  title: "Expert Plan of Action Writing",

                  desc: "Our specialists craft compelling, Amazon-compliant Plans of Action that address root causes and satisfy Seller Performance teams.",

                },

                {

                  title: "Fast Turnaround",

                  desc: "We understand every day suspended means lost revenue. Our team moves quickly to submit your appeal and follow up with Amazon.",

                },

                {

                  title: "End-to-End Case Management",

                  desc: "From initial diagnosis to final reinstatement, we handle all communication with Amazon Seller Support on your behalf.",

                },

              ].map((item) => (

                <div key={item.title} className="flex items-start gap-4">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[27px] h-[27px]" fill="none">

                    <circle cx="12" cy="12" r="12" fill="#ff9900" />

                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                  <div>

                    <h3 className="text-[#000000] font-bold text-[24px] mb-1">{item.title}</h3>

                    <p className="text-[#67768e] text-[18px] leading-relaxed">{item.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </FadeIn>

          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[630px]">

            <Image

              src="/Amazon-3-01-scaled.png"

              alt="Amazon Account Management"

              width={630}

              height={520}

              unoptimized

              className="w-full h-auto object-contain"

            />

          </FadeIn>



        </div>

      </section>



      {/* What's Included Section */}

      <section className="bg-white py-20 w-full">

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">



          <h2

            className="text-center font-bold mb-4"

            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}

          >

            <span className="text-[#000000]">What&apos;s Included in Our </span>

            <span className="text-[#ff9900]">Reinstatement Service Package</span>

          </h2>

          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">

            We deliver end-to-end reinstatement support built on deep experience and Amazon-approved strategy.

          </p>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {[

              {

                title: "Suspension Review & Classification",

                desc: "Amazon is the world's largest online marketplace, and we help you make the most of it. At AMZ Pro Venture, our team provides practical, reliable Amazon services that support your business growth and help you manage the platform with confidence.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">

                    <path fill="#ff9900" d="M118.49,172.82c5.94-6.45,11.62-11.32,15.72-17.29,11.7-17,18-36.22,20-56.72.49-5.13,2.72-6.62,7.34-7,14.23-1.2,23.67,3.84,26.3,18.12s2,29.1,2.79,43.69a41.65,41.65,0,0,1-.58,5.64c2.47.15,4.7.41,6.92.41,13.78,0,27.55,0,41.32-.18,8.47-.1,16.48.66,21.18,9.11,3.76,6.77,2.57,15-3.35,24,9.3,10.77,9.64,19.63,1.17,30.46,11.3,12.56,7.9,29.89-7,34,.66,5.15,2.14,10.3,1.79,15.32-.58,8.27-6.11,14.7-14.27,14.68q-50.31-.08-100.6-1.82c-6.66-.23-13.19-3.85-20.23-6.05-2.09,7.73-8.19,9.32-16,9.16-17-.34-34.08,0-51.12-.12-10.3,0-13.78-3.58-13.79-13.95q0-50.77,0-101.54c0-10.1,3.76-13.68,14.1-13.7q25.21,0,50.42,0C112,159.09,113.65,160.23,118.49,172.82Z"/>

                    <path fill="#ff9900" d="M170.27,65.26c.34,5.95-1.15,7.63-5.28,5.62a6.56,6.56,0,0,1-1.24-.63c-9.16-7.46-18-7-27.59-.18-5.11,3.65-8.09,1.66-6.26-4.2,3.72-11.87.5-20.31-9.38-27.31-3.91-2.78-2.51-6.42,2-6.37,12.48.12,20.31-5.12,24-17.24,1.34-4.39,5.39-4.53,6.8-.14,3.81,11.91,11.23,17.67,23.9,17.34,4.2-.11,6.35,3.27,2.29,6.32C169.55,46,164.81,54.76,170.27,65.26Z"/>

                    <path fill="#ff9900" d="M49.59,63.22c4.17-.85,8-2,12-2.35,6.43-.63,11.27-2.59,13.56-9.52,1.2-3.64,4.38-6.62,6.66-9.9,2.33,3.26,5.7,6.22,6.79,9.86,2.47,8.31,8.82,8.88,15.61,9.79,3,.4,5.83,1.94,8.73,3-1.6,2.41-2.7,5.49-4.88,7.1-7.49,5.53-10.09,12.18-6.56,21a16.08,16.08,0,0,1,.7,4.83c.22,3.63-1.49,6.13-4.84,3.64C86.9,92.92,77,92.59,66.53,100.58c-3,2.34-6.44.34-5.14-3.08,5.19-13.59-.08-23.06-10.6-31C50.34,66.13,50.31,65.23,49.59,63.22Z"/>

                    <path fill="#ff9900" d="M253.48,65.07c-2,2.14-3.43,4.35-5.44,5.73-8.4,5.81-10.42,13.32-7.2,22.84.72,2.12-.17,4.78-.32,7.19l-7-1.6a1.67,1.67,0,0,1-.64-.28c-7.66-6.15-15.23-6.43-23.19-.25-2,1.51-5,1.6-7.57,2.35-.27-2.88-.55-5.76-.78-8.64a3.5,3.5,0,0,1,.29-1.36c2.51-7.52,1.76-14-5.64-18.57-1.55-1-2.7-2.56-4-3.87-3.78-3.74-2.7-6,2.17-7.08a2.7,2.7,0,0,1,.68-.12C207,62.23,214,56.21,217.62,45c1.64-5.06,5.48-4.89,7-.17,3.78,11.6,10.94,17.6,23.38,16.81a7,7,0,0,1,3.26,1.12C251.86,63,252.23,63.69,253.48,65.07Z"/>

                  </svg>

                ),

              },

              {

                title: "Tailored Reinstatement Eligibility Assessment",

                desc: "Not every case is reinstatable. We assess your specific situation and confirm if a viable reinstatement path exists.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">

                    <path fill="#ff9900" d="M160,270.3H30.47c-7.64,0-11.82-4.14-11.82-11.66q0-121.23,0-242.48c0-7.59,4.13-11.71,11.75-11.71h182.1c7.63,0,11.8,4,11.81,11.67q.06,57.5,0,115c0,.63-.1,1.26-.15,1.93H210.71V18.53h-178v238h3q56.76,0,113.54,0a3.67,3.67,0,0,1,3.88,2.26C155.14,262.58,157.53,266.19,160,270.3Z"/>

                    <path fill="#ff9900" d="M153.31,205c0-7.22.21-14.44,0-21.65-.48-13.3,7.64-27,21.56-31.75,9.74-3.34,19.59-6.45,29.56-9,11-2.79,21.93-1.73,32.69,1.66l20.8,6.56a33,33,0,0,1,23.43,32c0,13.71.1,27.42,0,41.13-.22,27.4-12.61,47.46-36.94,59.91-8.39,4.29-17.2,7.76-25.86,11.51a4,4,0,0,1-2.89-.08c-8.91-4-17.91-7.79-26.62-12.19-20.27-10.23-32.21-26.77-35-49.28-1.19-9.49-.65-19.2-.9-28.81Zm9.63,0h.44c0,9.13-.72,18.33.16,27.37,1.63,16.78,10,30.15,24.3,38.9,9,5.47,18.94,9.27,28.5,13.73a3.43,3.43,0,0,0,2.45-.25c7.1-3.11,14.31-6,21.23-9.52,20-10.06,30.76-26.42,31.58-48.77.53-14.49.14-29,.08-43.54-.05-11-6.55-19.66-17.05-23-7.09-2.23-14.16-4.53-21.26-6.69-8.49-2.57-17.22-3.64-25.86-1.47-9.51,2.4-18.82,5.56-28.21,8.42A23.05,23.05,0,0,0,163,181.84C162.88,189.54,162.94,197.24,162.94,204.94Z"/>

                    <path fill="#ff9900" d="M76.07,38.55c15.59-.06,27.73,12.17,27.76,28a27.71,27.71,0,0,1-55.41.08C48.39,50.74,60.34,38.62,76.07,38.55Zm0,6.45A21.27,21.27,0,1,0,97.36,66.19,21.19,21.19,0,0,0,76.09,45Z"/>

                    <path fill="#ff9900" d="M48.43,208.46a27.52,27.52,0,0,1,28-27.75,27.8,27.8,0,1,1-28,27.75Zm27.43,21.21a21.21,21.21,0,0,0,21.53-20.93c.16-11.57-9.34-21.41-20.75-21.48A21.36,21.36,0,0,0,54.85,208.5C54.64,219.91,64.26,229.61,75.86,229.67Z"/>

                    <path fill="#ff9900" d="M76.29,109.67a27.73,27.73,0,1,1-27.87,27.61A27.48,27.48,0,0,1,76.29,109.67ZM76,158.54a21.22,21.22,0,1,0,.27-42.43A21.46,21.46,0,0,0,54.85,137.5,21.13,21.13,0,0,0,76,158.54Z"/>

                    <path fill="#ff9900" d="M151.2,76.58q19,0,38,0c1.87,0,3.51.59,4,2.35.36,1.23.36,3.12-.36,4a6,6,0,0,1-4.09,1.8c-15.46.13-30.93.08-46.39.08H113.53c-3.27,0-5-1.46-5-4.17,0-2.56,1.75-4,4.89-4H151.2Z"/>

                    <path fill="#ff9900" d="M134.35,55.93H113.67c-3.42,0-5.08-1.32-5.11-4s1.7-4.17,5-4.17h41.6c3.05,0,4.85,1.52,4.89,4.06s-1.71,4.1-4.79,4.1c-7,0-14,0-20.92,0Z"/>

                    <path fill="#ff9900" d="M134.35,118.91H155c3.25,0,5,1.49,5,4.13s-1.83,4-4.92,4H113.31c-3.07,0-4.76-1.52-4.72-4.16s1.62-4,4.84-4Z"/>

                    <path fill="#ff9900" d="M163.14,147.84c-2.84,2.66-5.52,5.22-8.28,7.7a2.89,2.89,0,0,1-1.77.38q-19.92,0-39.83,0c-3,0-4.74-1.68-4.67-4.26s1.62-4,4.66-4q24.25,0,48.51,0C162.2,147.72,162.64,147.8,163.14,147.84Z"/>

                    <path fill="#ff9900" d="M145,219v8.13h-4.37q-13.44,0-26.88,0c-3.27,0-5.1-1.46-5.17-4.05a3.76,3.76,0,0,1,3.22-4.11,6.14,6.14,0,0,1,1.42-.18q15.12,0,30.24,0A13.33,13.33,0,0,1,145,219Z"/>

                    <path fill="#ff9900" d="M145,190.35v7.75c-.62.06-1.23.17-1.84.17-9.94,0-19.88,0-29.81,0-2,0-3.72-.68-4.48-2.57a3.68,3.68,0,0,1,1-4.58,4.69,4.69,0,0,1,2.58-1c10.58-.07,21.16,0,31.74,0A3.34,3.34,0,0,1,145,190.35Z"/>

                    <path fill="#ff9900" d="M171.2,205.19q0-11.41,0-22.85a14.46,14.46,0,0,1,9.82-14c9.5-3.07,19-6,28.7-8.52,7.21-1.87,14.47-.79,21.54,1.41s14.33,4.49,21.48,6.8c6.44,2.09,10.59,7.41,10.64,14.17.12,14.92.51,29.85-.08,44.74-.71,17.75-9.17,31.25-24.93,39.71-6.33,3.4-13,6.13-19.58,9.08a3.4,3.4,0,0,1-2.46.15c-7.77-3.58-15.87-6.63-23.14-11-14.26-8.63-21.46-21.82-22-38.49C171,219.31,171.2,212.25,171.2,205.19Zm35,20.63a3.28,3.28,0,0,1-.62-.32c-2.91-2.87-5.79-5.76-8.72-8.61-3.46-3.38-7.84-3.56-10.87-.49s-2.95,7.5.39,10.89c4.5,4.56,9,9.08,13.59,13.6,4,4,8.07,4,12.1-.09q17.9-17.94,35.82-35.87c3.48-3.49,3.72-8.17.54-11.27s-7.54-2.71-11.06.83Z"/>

                    <path fill="#ff9900" d="M72,69.52,83.48,57.88c.5-.51,1-1.34,1.58-1.39,1.3-.13,2.9-.28,3.89.35a2.54,2.54,0,0,1,.25,4Q81.78,68.55,74.09,76A2.81,2.81,0,0,1,70,75.74c-2.23-2.2-4.46-4.39-6.63-6.64a2.94,2.94,0,0,1-.06-4.48c1.44-1.45,3.07-1.25,4.44.18S70.39,67.77,72,69.52Z"/>

                    <path fill="#ff9900" d="M72,211.82l12.32-12.54c1.11-1.12,2.53-1.87,3.81-.79a6,6,0,0,1,1.58,3.36c.11.55-.64,1.39-1.18,1.93Q81.84,210.64,75,217.4c-2.17,2.15-3.56,2.15-5.72,0q-2.82-2.77-5.59-5.61c-1.62-1.66-1.81-3.55-.56-4.88s3.31-1.29,5,.47C69.47,208.74,70.61,210.18,72,211.82Z"/>

                    <path fill="#ff9900" d="M71.74,140.89c4.57-4.63,8.43-8.59,12.34-12.49,1.71-1.7,3.56-1.91,4.86-.58a3,3,0,0,1,0,4.49q-7.23,7.4-14.63,14.6c-1.44,1.41-3.06,1.24-4.48-.15-2.18-2.13-4.33-4.27-6.45-6.46a3,3,0,0,1-.21-4.51c1.2-1.38,3.16-1.31,4.63.25S70.35,139.14,71.74,140.89Z"/>

                  </svg>

                ),

              },

              {

                title: "Amazon-Compliant Plan of Action (POA)",

                desc: "We craft a custom, strategic POA that aligns with Amazon's internal policies and includes all required elements: Root Cause, Corrective Actions, and Preventive Measures.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-5">

                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#ff9900"/>

                    <path d="M12 9v4M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                  </svg>

                ),

              },

              {

                title: "Required Documentation Guidance & Review",

                desc: "We guide you on what Amazon expects (invoices, compliance certificates, etc.), help you compile them, and review everything to ensure it meets Amazon's standards.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-5">

                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                    <path d="M18 15l-2 2-1-1" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

                  </svg>

                ),

              },

              {

                title: "Appeal Submission & Escalation Management",

                desc: "We submit your appeal directly and handle all communication with Amazon, including escalations if the first appeal is rejected.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">

                    <path fill="#ff9900" d="M215.67,115.69c-.47-4.82-.84-8.56-1.32-13.45-12.62,0-24.86-.51-37,.16-9.91.54-14.07-2.78-13.55-13.05.63-12.24.15-24.53.15-37.73H49.73V270.06H213.31c7.54-19-8-42.12,13.79-60.08,0,23.59.3,44.86-.44,66.1-.08,2.28-6.17,6.15-9.55,6.24-22.29.57-44.59.3-66.89.3-33.84,0-67.68-.21-101.51.14-8.41.09-11.65-2.57-11.5-11.19.65-38,1.14-76,1.15-114,0-35.32-.33-70.65-1.24-105.95-.27-10.81,3.5-13.91,14-13.77,37.29.5,74.59-.08,111.88.49,5.39.09,11.86,3,15.88,6.67C192.7,57.73,205.7,71.41,219,84.76,231.55,97.39,231,103.49,215.67,115.69ZM200.09,88.77,177,65.71V88.77Z"/>

                    <path fill="#ff9900" d="M261.48,162l-84.77,83.62-38.78-38.76,84.45-83.46Z"/>

                    <path fill="#ff9900" d="M155,31.89H18.57V249.1l13.22,1.42c-.17,3.48-.34,7-.52,10.47-31.65,2.2-25.43,1.86-25.54-23.78-.29-68.38-.1-136.75-.09-205.13,0-14.27.54-14.82,15-14.83q51.24,0,102.49,0C141.8,17.24,141.8,17.25,155,31.89Z"/>

                    <path fill="#ff9900" d="M269.79,155.4l-41.07-42.57c5.77-5.39,12.92-12.17,20.19-18.83,6-5.5,12.37-5.81,18.35-.07q11.6,11.14,22.74,22.74c6,6.19,6.54,12.68,0,19S276.87,148.5,269.79,155.4Z"/>

                    <path fill="#ff9900" d="M127.87,131.45c-15.71,0-31.43.41-47.1-.28-4-.18-7.89-3.81-11.83-5.85,4.12-2.25,8.2-6.38,12.35-6.45q47.67-.83,95.36,0c4.4.07,8.73,3.81,13.09,5.84-4.54,2.26-9,6.24-13.63,6.47C160.06,132,144,131.46,127.87,131.45Z"/>

                    <path fill="#ff9900" d="M178.32,152.63c-5.37,10.16-12.22,12.52-21.61,12.29-25.34-.61-50.72.05-76.06-.48-4-.08-7.88-3.78-11.82-5.81,3.88-2,7.72-5.68,11.62-5.74C112.65,152.42,144.86,152.63,178.32,152.63Z"/>

                    <path fill="#ff9900" d="M146.51,185.5C140,193.75,134.88,199,124.9,198.36c-14.86-.91-29.84.2-44.71-.54-3.86-.19-7.54-4-11.3-6.23,3.59-2,7.13-5.72,10.76-5.81C101.27,185.22,122.91,185.5,146.51,185.5Z"/>

                    <path fill="#ff9900" d="M166,251.51l-35.23,2.65c.85-12.09,1.69-23.85,2.46-34.7C144.05,230,154.73,240.49,166,251.51Z"/>

                    <path fill="#ff9900" d="M125.08,219.64v12c-16.43,0-32.47.25-48.48-.26-2.6-.08-5.1-3.55-7.65-5.45,2.74-2.09,5.41-5.87,8.22-6C92.84,219.34,108.55,219.64,125.08,219.64Z"/>

                  </svg>

                ),

              },

              {

                title: "Post-Reinstatement Compliance Support",

                desc: "Once you're reinstated, we provide best-practice guidance to help you avoid repeat violations and keep your account in good standing.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">

                    <path fill="#ff9900" d="M171.61,129.76c21.39,13.8,43.14,27.81,64.86,41.87,5.53,3.58,7.5,9.47,4.99,15.28-2.23,5.16-6.58,7.93-13.37,7.44-6.3-.46-7.59,2.41-6.4,6.89.32,1.19.87,2.35,1.03,3.56,1.22,9.22-5.79,13.86-16.23,10.8-9.15-2.69-10.8-1.56-9.49,6.48,1.66,10.16-1.45,13.13-13.41,12.31-4.86-.33-7,1.2-6.29,5.18,1.08,5.99-1.05,10.78-7.93,12.9-6.94,2.13-13.16.93-18.06-4.4-3.68-4.01-8.14-7.51-12.67-11.62.78-.75,2-1.92,3.22-3.09,9.63-9.23,5.81-21.51-7.91-26.43-2.34-.84-4.02-3.16-5.78-4.95-3.04-3.09-5.16-7.74-9-9.15-6.33-2.32-9.42-6.02-13.1-10.48-3.13-3.8-10.1-5.21-14.11-8.7-3.85-3.36-5.32-8.67-9.21-11.98-5.77-4.9-13.03-4.08-23.31,1.39-6.04-10.6-7.84-21.75-6.74-33.26.15-1.57,1.93-3.2,3.37-4.47,14.06-12.42,28.09-24.87,42.45-37.05,2.07-1.75,5.85-3.15,8.7-2.99,14.55.83,27.17,5.45,37.39,15.5-3.94,3.75-7.84,7.53-11.84,11.24-5.22,4.84-10.75,9.46-15.72,14.47-7.06,7.12-6.18,16.99,1.66,23.25,7.85,6.28,19.37,6.42,27.61.08,8.39-6.45,16.55-13.13,25.27-20.07Z"/>

                    <path fill="#ff9900" d="M242.86,165.24c-19.48-12.53-36.97-23.78-54.46-35.04-4.43-2.85-8.97-5.6-13.24-8.62-3.98-2.81-7.14-2.42-10.63.7-7.49,6.69-15.21,13.2-22.9,19.73-5.92,5.03-10.85,5.55-15.81,1.84-4.83-3.62-4.9-8.6.34-13.51,10.7-10.03,21.36-20.11,32.56-29.75,4.5-3.87,10.03-7.13,15.68-9.79,15.35-7.2,20.57-6.31,32.46,4.17,12.58,11.08,25.42,21.96,37.67,33.29,2.57,2.37,4.62,6.48,4.22,9.54-1.12,8.76-3.63,17.4-5.89,27.43Z"/>

                    <path fill="#ff9900" d="M109.18,62.37c-2.42,3.6-4.11,7.79-7.38,10.71-20.81,18.6-41.9,36.98-63.05,55.31-7.23,6.27-17.21,6.68-24.11,1.41-7.32-5.59-8.1-15.14-.99-21.47,21.7-19.3,43.63-38.42,65.56-57.53,5.31-4.63,11.88-5.36,18.7-2.84,6.96,2.57,9.88,7.5,11.27,14.4Z"/>

                    <path fill="#ff9900" d="M273.76,136.39c-3.75-1.6-8.33-2.5-11.12-4.89-22.13-18.95-44.02-38.09-65.73-57.37-5.98-5.31-6.37-12.98-2.03-18.69,4.15-5.45,11.73-8,18.93-5.93,2.64.76,5.29,2.16,7.23,3.85,21.63,18.78,43.15,37.66,64.63,56.56,5.78,5.08,7.24,11.04,3.65,17.47-2.92,5.23-7.92,8.13-15.57,9Z"/>

                    <path fill="#ff9900" d="M120.25,205.85c-1.44,2.12-2.12,3.68-3.35,4.83-4.37,4.08-8.85,8.07-13.42,12-3.49,3-7.09,2.99-10.73-.02-3.56-2.94-5.06-6.15-1.44-9.61,4.47-4.27,9.02-8.53,14.09-12.28,1.77-1.31,5.8-2.1,7.65-1.29,2.88,1.26,4.77,4.1,7.19,6.37Z"/>

                    <path fill="#ff9900" d="M82.53,173.79c-1.43,2.32-2.06,4.14-3.42,5.4-4.36,4.06-8.94,7.97-13.54,11.85-3.3,2.78-6.81,2.69-10.18.01-3.51-2.8-5.32-6.11-1.81-9.62,4.34-4.34,8.89-8.62,13.97-12.31,1.92-1.4,6.08-2.1,8.32-1.31,2.68.94,4.4,3.83,6.65,5.98Z"/>

                    <path fill="#ff9900" d="M100.87,189.93c-.98,1.94-1.29,3.48-2.34,4.45-4.86,4.52-9.54,9.28-15.13,13.07-1.85,1.25-6.82.69-9.33-.54-3.67-1.81-5.9-5.32-2.37-8.79,4.87-4.77,10-9.4,15.53-13.62,1.49-1.14,5.41-1.45,7.14-.59,2.67,1.33,4.42,3.98,6.5,6.02Z"/>

                    <path fill="#ff9900" d="M138.46,222.1c-1.43,2.19-2.06,3.78-3.29,4.93-4.19,3.92-8.56,7.71-12.92,11.51-3.37,2.94-6.92,3.4-10.72.45-3.86-3.01-5.5-6.36-1.61-10.05,4.32-4.09,8.74-8.18,13.69-11.7,1.98-1.41,6.16-2.4,8.16-1.58,2.81,1.16,4.52,4.21,6.68,6.44Z"/>

                  </svg>

                ),

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



          <div className="flex justify-center">

            <a href="/contact-us" className="svc-btn">

              <span className="svc-btn-inner">

                <span className="svc-btn-top">Get a Free Consultation</span>

                <span className="svc-btn-bottom">Get a Free Consultation</span>

              </span>

            </a>

          </div>



        </div>

      </section>



      {/* What We Need From You */}

      <section className="w-full bg-white py-20">

        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">

          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[50%]">

            <Image src="/what-we-need-from-you-1.webp" alt="What We Need from You" width={800} height={600} unoptimized className="w-full h-auto object-contain" />

          </FadeIn>

          <FadeIn direction="left" className="flex-1 px-10 py-10">

            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}>

              <span className="text-[#000000]">What We Need </span>

              <span className="text-[#ff9900]">from You</span>

            </h2>

            <p className="text-[#67768e] text-[16px] mb-8">To begin the process, you&apos;ll need to provide:</p>

            <div className="space-y-5 mb-8">

              {[

                "Child Access to Seller Central",

                "Amazon Suspension Notices",

                "History of Previous Appeals",

                "Required Documentation",

              ].map((item) => (

                <div key={item} className="flex items-center gap-4">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">

                    <circle cx="12" cy="12" r="12" fill="#ff9900" />

                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                  <p className="text-[#000000] text-[17px]">{item}</p>

                </div>

              ))}

            </div>

            <p className="text-[#67768e] text-[15px] leading-relaxed max-w-[480px] mb-8">

              <strong className="text-[#000000]">Important:</strong> AMZ Pro Venture does not create or fabricate documents. Invoices, purchase orders, or product images must come directly from the seller. We&apos;ll guide you on exactly what&apos;s needed and help ensure it&apos;s submission-ready.

            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">

              <span className="svc-btn-inner">

                <span className="svc-btn-top">Book a Free Consultation</span>

                <span className="svc-btn-bottom">Book a Free Consultation</span>

              </span>

            </a>

          </FadeIn>

        </div>

      </section>



      {/* We Resolve Full Range Section */}

      <section className="w-full py-20 bg-white">

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">



          <div className="text-center mb-10">

            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}>

              <span className="text-[#000000]">We Resolve the Full Range of </span>

              <span className="text-[#ff9900]">Amazon Seller Suspensions</span>

            </h2>

            <p className="text-[#67768e] text-[16px] max-w-[700px] mx-auto">

              As a certified Amazon partner, AMZ Pro Venture helps resolve a wide range of suspension types by identifying the root cause and crafting tailored, compliant POAs.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

            {[

              {

                title: "Customer Service Performance Suspensions",

                items: ["Negative Feedback", "A-to-Z Guarantee Claims", "Chargeback Claims"],

                note: null,

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-1">

                    <path fill="#ff9900" d="M223.79,167.39c2.76,2.82,2.43,6.94.36,10.09-13.33,20.28-69.55-13.75-86.8,6.2l26.63-.95c15.92,1,53.35,15.5,64.08-1.22,5.12-7.97-1.25-15.41,1.97-19.65,1.49-1.95,30.76-25.53,34.01-27.43,3.24-1.9,6.92-4.78,10.79-5.03,10.49-.68,21.74,3.04,17.15,15.16-1.56,4.13-25.31,36.55-29.13,40.1-7.18,6.68-53.02,31.13-63.53,35.35-44,17.68-93.82-40.93-126.3,10.11l-40.61-42.48c13.31-18.73,37.16-42.88,59.8-49.04,31.76-8.63,49.19,6.42,77.19,14.95,10.75,3.28,49.51,8.88,54.37,13.84Z"/>

                    <path fill="#ff9900" d="M168.96,102.6c.45-1.58,8.36-8.71,10.96-8.97,4.16-.41,9.34,4,15.71,4.21,9,.29,16.22-7.82,23.84-.26,1.31,1.3,4.85,7.76,4.85,8.97v29.66l-3.27,2.66c-17.22,1.4-36.47,5.17-52.1-2.66,1.61-9.01-2.2-25.84,0-33.62Z"/>

                    <path fill="#ff9900" d="M228.28,137.21v-34.61c0-3-9.17-12.68-13.85-10.9-1.74-1.86,6.25-10.15,7.98-10.93,4.49-2.03,11.28,3.46,18.74,3.22s12.58-5.72,19.3-3.79c11.63,3.33,10.4,29.77,8.34,39.19-11.76,9.29-26.46,13.35-40.53,17.81Z"/>

                    <path fill="#ff9900" d="M176.87,91.7c-18.96,1.72-12.4,31.7-13.87,45.5l-39.21-16.13c.72-10.36-4.64-34.72,6.1-39.76,7.96-3.74,13.03,3,22.27,2.69,10.54-.36,20.66-11.2,24.7,7.71Z"/>

                    <path fill="#ff9900" d="M22.03,186.86c2.75-.72,3.63.31,5.62,1.65,15.11,10.17,31.84,35.97,47.43,47.62,3.26,7.06-9.86,14.58-14.18,19.59L6.95,203.18l15.09-16.33ZM67.91,243.8c4.1-5.92-7.56-17.84-12.74-7.7-4.51,8.83,9.67,12.14,12.74,7.7Z"/>

                    <path fill="#ff9900" d="M237.68,44.65c21.17-4.05,26.7,27.48,8.97,32.83-23.79,7.18-32.09-28.41-8.97-32.83Z"/>

                    <path fill="#ff9900" d="M207.88,62.7c12.89,11.79-.26,36-19.12,27.99-23.01-9.77-.76-46.18,19.12-27.99Z"/>

                    <path fill="#ff9900" d="M148.69,44.65c22.27-4.25,27.14,30.37,5.26,33.2-21.95,2.84-26.36-29.17-5.26-33.2Z"/>

                  </svg>

                ),

              },

              {

                title: "Policy Compliance & Violation Suspensions",

                items: ["Product Authenticity Complaints", "Product Condition Complaints", "Intellectual Property (IP) Complaints", "Listing Policy Violations", "Restricted Product Issues", "Counterfeit Accusations", "Linked or Related Account Suspensions"],

                note: null,

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-1">

                    <path fill="#ff9900" d="M149.74,275.21q-52.5,0-105,0c-3.13,0-6.27,0-9.39-.06-21.69-.61-32.11-16.58-22.5-36.22,7.85-16,17.35-31.27,26.3-46.76Q82.4,117.26,125.79,42.45c4.83-8.33,10.56-15.82,20.8-17.38,13-2,20.79,5.84,26.74,15.85,10.59,17.83,20.88,35.83,31.27,53.79q39.47,68.22,78.89,136.48c1,1.72,2,3.44,2.89,5.22,10.9,22.15.84,38.64-23.94,38.75C224.87,275.32,187.31,275.2,149.74,275.21Zm-.63-86.41c12.12,0,12.1,0,13.06-10.51.15-1.69.53-3.36.8-5,3-19,6.21-38,9.05-57,1.5-10-1.2-18.85-10.15-24.46-7.53-4.72-15.87-5-23.39-.24-8.76,5.52-11.86,14-10.14,24.29,3.43,20.67,7.36,41.29,9.76,62.08C139.11,186.67,141.41,190.71,149.11,188.8Zm.77,10.85c-12.44.06-22.66,9.93-22.58,21.79.08,11.42,11.16,22.18,22.81,22.14a22.61,22.61,0,0,0,22.19-22.3C172.24,209,162.5,199.59,149.88,199.65Z"/>

                  </svg>

                ),

              },

              {

                title: "Shipping & Fulfillment Suspensions",

                items: ["Late Shipment Rate", "Valid Tracking Rate", "Pre-Fulfillment Cancel Rate"],

                note: null,

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-1">

                    <path fill="#ff9900" d="M41.07,140.53c15.77,4.44,30.74,7.73,45,13,9.68,3.56,16.33,1.74,23.34-5,7.35-7.13,15.54-13.4,24.86-21.31V253.46l-93.18-26.9Z"/>

                    <path fill="#ff9900" d="M235.09,175.94c-34.23,9.13-44.41,23.38-45.55,64.05l-46.67,13.49V127.34c9.25,7.75,17.43,13.94,24.8,21,7,6.66,13.52,8.82,23.27,5.17,13.92-5.23,28.61-8.4,44.15-12.78Z"/>

                    <path fill="#ff9900" d="M130.39,119.81c-11,9.28-19.68,17-28.88,24.07-2.59,2-7.12,3.42-10.07,2.6-28.4-7.81-56.66-16.15-87.35-25,11.12-9.38,20.31-17.5,30-25a11.74,11.74,0,0,1,9.08-1.68C71.56,102.66,99.86,111,130.39,119.81Z"/>

                    <path fill="#ff9900" d="M4.15,56.16c31.5-9.21,60.22-17.66,89-25.92a7.12,7.12,0,0,1,5.61.94c10,8,19.68,16.3,31.69,26.34-31.31,9-59.91,17.4-88.64,25.32-2.54.7-6.49-.81-8.77-2.59C23.87,73.07,15.1,65.38,4.15,56.16Z"/>

                    <path fill="#ff9900" d="M272.77,56.22c-11.41,9.51-20.77,17.6-30.51,25.2a10.15,10.15,0,0,1-7.88,1.29c-28.39-8-56.69-16.28-87.85-25.32,11.58-9.7,21.26-17.94,31.14-25.94a7.16,7.16,0,0,1,5.57-1.36C212.32,38.44,241.35,47,272.77,56.22Z"/>

                    <path fill="#ff9900" d="M271.68,121.76c-29.69,8.62-57.94,17-86.31,24.86a11.8,11.8,0,0,1-9.06-1.88c-9.53-7.33-18.59-15.26-29.64-24.49,20.93-6.31,40.06-12,59.13-17.85C241.65,91.4,242.66,91.64,271.68,121.76Z"/>

                    <path fill="#ff9900" d="M242.54,258.57c13.32-15.23,24.77-28.31,37.26-42.57,6.4,20.63-2.88,40.75-20.33,49.5a43.11,43.11,0,0,1-53.81-12.8c-12.61-16.71-11.36-39.35,3.06-55.06,14.11-15.39,36-17.88,54.7-5.83a28.44,28.44,0,0,1-2.6,3.9c-5.95,6.39-12,12.7-17.75,18.77a18.33,18.33,0,0,1-3.22-1.66c-10.9-10.2-22.61-7.9-28.66,6.16-.94,2.2.37,6.52,2.14,8.52C221.87,237.14,230.92,246.32,242.54,258.57Z"/>

                    <path fill="#ff9900" d="M134.15,64.47v48.26L54.56,89.86l-.12-2.24Z"/>

                    <path fill="#ff9900" d="M142.77,113V64.58l79,22.88c.12.77.24,1.53.35,2.3Z"/>

                    <path fill="#ff9900" d="M295.91,190.73l-54.19,53.63-21.79-22.89,7.79-8.87,14.73,12.26,41.92-45.38C289.92,184.88,292.82,187.71,295.91,190.73Z"/>

                  </svg>

                ),

              },

              {

                title: "Section 3 Suspensions",

                items: ["Operating Multiple Seller Accounts", "Breach of Amazon's Terms or Illegal Activity"],

                note: "For permanently suspended or counterfeit-related accounts, we proceed only if the seller provides the required documentation.",

                icon: (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-1">

                    <path fill="#ff9900" d="M159.6,294.06H140.4c-3.32-.51-6.64-.95-9.94-1.53C71.39,282.14,31.74,248.79,12.64,191.84c-3.47-10.33-4.53-21.47-6.7-32.24V140.4c.51-3.33,1.08-6.65,1.52-10C14.9,73.82,57.55,25.45,112.92,11.2c9-2.32,18.31-3.53,27.48-5.26h19.2c3.32.51,6.64,1.09,10,1.52,56.18,7.28,104.84,50,119.15,104.94,2.39,9.18,3.59,18.66,5.34,28v19.2c-.51,3.32-1.08,6.63-1.53,10C284.91,226.46,242.72,274.29,187,288.82,178,291.15,168.73,292.34,159.6,294.06Zm3.51-117V60.15H136.78v116.9Zm-26.23,27v26.78h26.38V204.1Z"/>

                  </svg>

                ),

              },

            ].map((card, i) => (

              <FadeIn key={card.title} delay={i * 0.08} direction="up">

              <div className="flex flex-col gap-4 p-6 border border-gray-200 bg-white h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>

                {card.icon ? card.icon : (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[27px] h-[27px]" fill="none">

                    <circle cx="12" cy="12" r="12" fill="#ff9900" />

                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                )}

                <h3 className="font-bold text-[16px] leading-snug" style={{ color: "#ff9900" }}>{card.title}</h3>

                <div className="space-y-2">

                  {card.items.map((item) => (

                    <div key={item} className="flex items-start gap-2">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5 w-4 h-4" fill="none">

                        <circle cx="12" cy="12" r="12" fill="#ff9900" />

                        <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                      </svg>

                      <p className="text-[#000000] text-[14px]">{item}</p>

                    </div>

                  ))}

                </div>

                {card.note && <p className="text-[#67768e] text-[13px] leading-relaxed">{card.note}</p>}

              </div>

              </FadeIn>

            ))}

          </div>



          <FadeIn direction="up" delay={0.1}>

            <div className="flex items-center justify-center gap-4">

              <a href="/contact-us" className="svc-btn">

                <span className="svc-btn-inner">

                  <span className="svc-btn-top">Contact Us</span>

                  <span className="svc-btn-bottom">Contact Us</span>

                </span>

              </a>

              <a href="tel:+18022096796" className="svc-btn svc-btn-pink">

                <span className="svc-btn-inner">

                  <span className="svc-btn-top">Call Now</span>

                  <span className="svc-btn-bottom">Call Now</span>

                </span>

              </a>

            </div>

          </FadeIn>



        </div>

      </section>



      {/* Downtime CTA Section */}

      <section className="w-full bg-white py-20">

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">

          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>

              Don&apos;t Let Downtime Destroy<br />Your Momentum

            </h2>

            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[520px] mx-auto mb-8">

              Every hour your account is suspended, you&apos;re losing visibility, sales, and customer trust. The appeal process is complex, and delays can cost you thousands.

            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">

              <span className="svc-btn-inner">

                <span className="svc-btn-top">Get Amazon Account Assessment Now ?</span>

                <span className="svc-btn-bottom">Get Amazon Account Assessment Now ?</span>

              </span>

            </a>

          </div>

          </FadeIn>

        </div>

      </section>



      {/* Additional Support Section */}

      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">



          <FadeIn direction="up">

          <div className="text-center mb-12">

            <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>

              Additional Support That Sets Us Apart

            </h2>

            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto leading-relaxed">

              While others focus on the big picture, we drive deeper to ensure nothing slips through the cracks. Here&apos;s how we go above and beyond to support your success.

            </p>

          </div>

          </FadeIn>



          <div className="flex flex-col lg:flex-row gap-14 items-center">

            <FadeIn direction="right" className="flex-1 space-y-6">

              {[

                {

                  title: "Auto & Catalog Backup",

                  desc: "Your data, always protected. We maintain regular backups of your ad campaigns and catalog, giving you continuity should we ever need to restore systems or revert to a previous data state.",

                },

                {

                  title: "Amazon Case Log Management",

                  desc: "Working with Seller Support? We handle all case submissions, escalations, and resolutions at Amazon on your behalf, increasing the velocity of outcomes.",

                },

                {

                  title: "Bi-Weekly Client Calls",

                  desc: "No surprises, no guesswork. We establish a regular bi-weekly communication cadence so you&apos;re always informed, aligned, and can make every decision with confidence.",

                },

                {

                  title: "Predictive Search Recommendations",

                  desc: "We proactively surface keyword and listing insights to help you stay ahead of competitors and capture more organic traffic before trends shift.",

                },

                {

                  title: "Expert Seller Central Assistance",

                  desc: "From account setup to ongoing operations, our team provides hands-on Seller Central support to keep your account healthy and performing at its best.",

                },

              ].map((item) => (

                <div key={item.title} className="flex items-start gap-4">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[22px] h-[22px]" fill="none">

                    <circle cx="12" cy="12" r="12" fill="#ff9900" />

                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                  <div>

                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#000000" }}>{item.title}</h3>

                    <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>

                  </div>

                </div>

              ))}

              <div className="pt-2">

                <a href="/contact-us" className="svc-btn">

                  <span className="svc-btn-inner">

                    <span className="svc-btn-top">Build a Free Checklist</span>

                    <span className="svc-btn-bottom">Build a Free Checklist</span>

                  </span>

                </a>

              </div>

            </FadeIn>



            <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[440px]">

              <Image src="/banner-image-9-991x1024.webp" alt="Additional Support" width={440} height={460} unoptimized className="w-full h-auto object-contain" />

            </FadeIn>

          </div>



        </div>

      </section>



      {/* Trusted By Stats Section */}

      <section className="w-full bg-white py-14">

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>



            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#000000" }}>

              Trusted by 1,200+ Amazon Sellers

            </h2>



            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">



              {/* Stats */}

              <div className="flex flex-col sm:flex-row gap-10 items-center justify-center flex-1">

                {[

                  { value: "1,200+", label: "Accounts Managed" },

                  { value: "$20M+", label: "Managed in Revenue" },

                  { value: "33%", label: "Average Sales Increase" },

                ].map((stat) => (

                  <div key={stat.label} className="flex flex-col items-center gap-4">

                    <div className="relative flex items-center justify-center" style={{ width: "160px", height: "160px" }}>

                      <div className="absolute inset-0 rounded-full" style={{ border: "2px solid #e5e7eb" }} />

                      <div className="absolute rounded-full" style={{ inset: "10px", border: "2px solid #ff9900" }} />

                      <span className="font-bold text-[28px] relative z-10" style={{ color: "#000000" }}>{stat.value}</span>

                    </div>

                    <p className="text-[#67768e] text-[15px] text-center">{stat.label}</p>

                  </div>

                ))}

              </div>



              {/* Expert Advice Card */}

              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">

                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">

                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>

                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>

                    <path fill="#ffffff" d="M159.72,285.4c-2.05,12.16-19.44,6.87-19.44,2.43v-75.3c0-1.21,6.1-6.34,8.63-6.19,3.1-1.28,10.8,4.41,10.8,6.19,0,20.16,3.03,54.89,0,72.88Z"/>

                    <path fill="#ffffff" d="M81.98,261.1l-18.23,18.21c-1.35-18.49,5.14-41.59,18.23-55.86v37.65Z"/>

                    <path fill="#ffffff" d="M218.02,223.45c13.09,14.27,19.58,37.36,18.23,55.86l-18.23-18.21v-37.65Z"/>

                    <path fill="#ffffff" d="M146.99,109.69c26.23-4.24,35.93,42.13,1.78,41.1-27.21-.82-24.33-37.45-1.78-41.1Z"/>

                  </svg>

                </div>

                <p className="font-bold text-[13px]" style={{ color: "#000000" }}>Linda Davis</p>

                <p className="text-[11px]" style={{ color: "#67768e" }}>Account Lead</p>

                <p className="font-bold text-[16px] leading-tight" style={{ color: "#ff9900" }}>Need Expert<br />Advice?</p>

                <p className="text-[12px]" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>

                <a href="/contact-us" className="svc-btn svc-btn-pink mt-1" style={{ fontSize: "12px", padding: "9px 20px" }}>

                  <span className="svc-btn-inner">

                    <span className="svc-btn-top">Book a Call</span>

                    <span className="svc-btn-bottom">Book a Call</span>

                  </span>

                </a>

              </div>



            </div>

          </div>

        </div>

      </section>



      <FAQSection />



      {/* CTA Banner */}

      <section className="w-full bg-white py-10">

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">

          <div

            className="rounded-2xl px-6 sm:px-10 lg:px-14 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8"

            style={{ backgroundColor: "#ff9900" }}

          >

            <div>

              <h2 className="font-bold text-[32px] mb-2" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#ffffff" }}>

                Get Your Amazon Account Reinstated Today

              </h2>

              <p className="text-white/90 text-[16px]">Every day suspended is revenue lost. Let our reinstatement experts get you back selling as fast as possible.</p>

            </div>

            <div className="flex items-center gap-4 flex-shrink-0">

              <a href="/contact-us" className="svc-btn svc-btn-hover-white">

                <span className="svc-btn-inner">

                  <span className="svc-btn-top">Contact Us</span>

                  <span className="svc-btn-bottom">Contact Us</span>

                </span>

              </a>

              <a href="tel:+18022096796" className="svc-btn svc-btn-white">

                <span className="svc-btn-inner">

                  <span className="svc-btn-top">Call Now</span>

                  <span className="svc-btn-bottom">Call Now</span>

                </span>

              </a>

            </div>

          </div>

          </FadeIn>

        </div>

      </section>



      <Footer />

    </main>

  );

}

