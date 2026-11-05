"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";


const PrivateLabelIcon = () => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <path fill="#ff9900" d="M129.734,42.44c-0.402-0.794-0.848-2.015-1.616-2.467l-52.962-9.804l-52.233,9.45l-1.405,0.501c-4.549,8.734-8.371,17.886-12.747,26.727c-0.869,1.759-0.865,3.928,1.541,4.023l48.352-5.072l1.03-1.148c4.981-10.798,9.43-21.863,14.459-32.637c0.165-0.353,0.541-1.599,0.999-1.452l15.829,35.084c0.766,0.312,1.616,0.443,2.43,0.566c15.011,2.271,30.964,2.354,46.049,4.642c1.116,0.107,1.7-0.581,2.302-1.372v-1.633C137.269,59.642,133.958,50.783,129.734,42.44z"/>
    <path fill="#ff9900" d="M71.781,48.695c-1.66,2.542-7.869,20.717-9.361,21.402c-0.791,0.363-5.094,0.62-6.339,0.743c-10.826,1.069-22.207,1.346-32.928,2.756c-1.614,0.213-3.612,0.183-3.692,2.302c-0.019,0.513,0.265,1.038,0.266,1.601c0.006,7.026,0.362,13.968,0.543,20.955c0.072,2.75-0.304,6.084-0.011,8.72c0.067,0.603,0.214,1.349,0.667,1.783l52.183,10.872V48.661C73.109,48.252,71.958,48.005,71.781,48.695z M65.481,108.943l-17.435-2.721v-9.253h17.435V108.943z"/>
    <path fill="#ff9900" d="M130.386,78.073c-0.01-0.74,0.018-1.497-0.052-2.214c-0.102-1.031-0.496-1.661-1.53-2.01c-12.653-1.481-25.471-1.844-38.123-3.282c-1.931-0.22-3.21,0.031-4.19-1.801c-2.981-5.572-4.865-14.601-8.154-19.614c-0.195-0.296-0.555-1.008-1.001-0.899c-0.127,0.031-0.686,0.861-0.686,0.952v70.624c2.593,0.047,5.145-0.671,7.68-1.173c14.778-2.92,29.495-6.278,44.222-9.436c0.731-0.446,0.943-1.227,0.989-2.084l0.005,0.029l0.002-0.063c0.002-0.04,0.003-0.08,0.004-0.12l0.381-12.259c0.045-0.745,0.05-1.495,0.123-2.235c-0.03-0.29-0.006-0.597-0.026-0.89l0.323-10.377c0.036-0.666,0.05-1.325,0.061-1.981l0.04-1.284L130.386,78.073z M109.613,90.709v13.744c0,0.064-0.367,1.152-0.416,1.217c-0.371,0.496-6.123,1.765-6.123,0.143V90.981c-0.986-0.114-4.392,0.563-4.045-1.158l6.216-8.239c0.402-0.505,1.156-0.517,1.722-0.346c1.097,0.331,4.962,7.079,6.12,8.297C113.38,91.059,110.468,90.7,109.613,90.709z"/>
  </svg>
);

const DropshippingIcon = () => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <path fill="#ff9900" d="M104.711,55.933c0.083-0.388,0.896-1.427,1.282-1.67c1.333-0.836,11.999-0.758,14.218-0.538c6.603,0.655,10.868,4.973,13.287,10.822c1.064,2.572,1.624,7.819,2.494,9.311c1.13,1.937,6.503,3.64,7.393,7.366c0.46,1.926,0.573,12.571,0.201,14.529c-0.584,3.076-4.472,2.917-6.876,2.712c-1.273-17.393-25.746-16.938-27.869,0.034l-33.378-0.002C74.247,89.963,69,85.973,60.649,85.198c-16.577-1.537-33.59-0.788-50.137-2.529c-2.157-0.227-5.036-0.597-4.16-3.518c0.108-0.358,0.962-1.337,1.144-1.337h22.396v-6.393h28.795c1.494,0,4.724-2.434,4.182-4.423l-47.469-2.982c-3.915-0.638-3.108-4.889-1.013-4.889h15.505v-6.393h36.179c0.959,0,3.738-3.039,3.198-4.423c-16.151-0.589-32.324-1.831-48.458-2.978c-2.358-0.773-2.999-3.12-0.414-4.298l79.381,0.153c0.3,0.274,1.486,1.33,1.486,1.466v42.781c0,1.429,3.446,1.429,3.446,0V55.933z M127.353,74.864c0.293-4.239-2.382-12.509-7.169-13.245c-1.904-0.293-4.166,0.139-6.121-0.031v13.277H127.353z"/>
    <path fill="#ff9900" d="M59.296,88.752c16.129-2.748,17.226,22.413-0.073,19.998C48.543,107.259,48.01,90.675,59.296,88.752z M59.773,95.129c-4.007,1.189-2.692,8.476,2.233,7.682C67.302,101.956,66.4,93.162,59.773,95.129z"/>
    <path fill="#ff9900" d="M120.824,88.751c8.754-1.493,15.754,6.859,11.468,14.895c-5.065,9.497-21.373,5.697-19.66-6.858C113.121,93.204,117.3,89.352,120.824,88.751z M121.301,95.129c-3.297,0.979-3.272,7.438,1.406,7.747C128.993,103.29,128.472,93,121.301,95.129z"/>
    <path fill="#ff9900" d="M51.058,89.616c-1.631,2.745-3.439,5.481-3.467,8.828c-4.811-0.446-10.859,0.673-15.508,0.048c-0.65-0.087-2.191-0.63-2.191-1.254v-7.622H51.058z"/>
  </svg>
);

const WhiteLabelIcon = () => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    <path fill="#ff9900" d="M144.618,25.271c-0.879-2.958-5.677-5.597-8.635-5.916c-10.393-1.279-37.177-1.359-45.252,4.637c-11.033,8.075-29.502,28.862-40.135,39.496c-4.477,4.477-17.269,15.43-17.909,21.107c-0.16,1.679,0.4,3.198,1.119,4.717l37.976,39.256c5.676,4.077,9.434,3.438,14.791-0.56c11.033-8.155,41.734-39.816,51.008-50.928c3.438-4.238,6.556-8.954,7.195-14.551C145.337,57.491,145.657,28.949,144.618,25.271z M100.565,64.127c-3.598-1.279-14.471-4.078-15.43,1.519c-0.879,5.277,5.996,7.116,9.274,9.834c3.118,2.639,5.916,6.236,5.996,10.473c0.4,15.031-16.23,19.268-28.382,16.789c-1.519-0.32-7.116-1.679-6.956-3.598c0.08-1.039,2.958-9.034,3.757-9.114c4.478,2.798,18.789,5.916,16.79-3.278c-1.039-4.797-12.233-6.716-14.231-14.791c-4.397-18.149,19.428-23.186,32.22-17.749L100.565,64.127z M127.668,49.576c-8.555,8.315-21.507-5.197-12.712-13.272C123.511,28.549,135.903,41.501,127.668,49.576z"/>
    <path fill="#ff9900" d="M71.502,19.342c-3.402,0.564-9.7,4.945-12.501,7.254C47.878,35.765,16.198,66.582,8.05,77.539c-5.572,7.493-3.608,10.627,1.624,17.194c6.074,7.623,24.572,26.209,32.186,32.231c5.419,4.286,10.826,6.786,16.587,0.971c2.903-2.93-0.519-2.363-2.608-4.548c-8.841-9.245-19.826-18.682-28.017-28.138c-5.842-6.744-8.144-9.857-2.092-17.707c6.475-8.399,48.848-50.482,56.651-54.6l8.356-3.601C84.847,20.024,77.116,18.411,71.502,19.342z"/>
  </svg>
);

const models = [
  {
    title: "Shopify Private Label",
    desc: "With private labels, we help you create your own branded products. From product design and supplier sourcing to packaging and listing optimization, we work with you to establish a strong and recognizable brand presence on Shopify.",
    icon: <PrivateLabelIcon />,
  },
  {
    title: "Shopify Dropshipping",
    desc: "Dropshipping allows you to sell products without maintaining inventory. Our Shopify dropshipping services help you find reliable suppliers, optimize product listings, and streamline the order fulfillment process to ensure your Shopify store runs smoothly and efficiently.",
    icon: <DropshippingIcon />,
  },
  {
    title: "Shopify White Label",
    desc: "White-label products let you sell items under your brand without the need to manufacture them. We help source high-quality products, customize packaging, optimize listings, and create a compelling brand story that resonates with your Shopify audience.",
    icon: <WhiteLabelIcon />,
  },
];

export default function BusinessModelsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <FadeIn>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 42px)", color: "#000000" }}
          >
            AMZ ProVenture Manages These Shopify Business Models to{" "}
            <span style={{ color: "#ff9900" }}>Launch & Grow Your Store</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-12 max-w-[480px]">
            We specialize in multiple Shopify business models, offering full-service management for different types of sellers.
          </p>
        </FadeIn>

        {/* Grid: 3 model cols + 1 CTA card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div>{model.icon}</div>
              <h3 className="font-bold text-[17px] leading-snug" style={{ color: "#000000" }}>
                {model.title}
              </h3>
              <p className="text-[#67768e] text-[14px] leading-relaxed">
                {model.desc}
              </p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between gap-8 rounded-2xl p-8"
            style={{ background: "#f5f0e8", minHeight: "260px" }}
          >
            <h3
              className="font-bold leading-snug"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(18px, 2vw, 22px)", color: "#000000" }}
            >
              Not sure what business type to choose?
            </h3>
            <a
              href="/contact-us"
              className="svc-btn svc-btn-pink"
              style={{ borderRadius: "9999px", padding: "13px 28px", fontSize: "13px", textAlign: "center", display: "block" }}
            >
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Talk to an Expert</span>
                <span className="svc-btn-bottom">Talk to an Expert</span>
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
