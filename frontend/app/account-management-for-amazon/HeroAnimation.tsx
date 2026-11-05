"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      if (wrapRef.current && sceneRef.current) {
        sceneRef.current.style.transform = `scale(${wrapRef.current.clientWidth / 1600})`;
      }
    };
    window.addEventListener("resize", fit);
    fit();
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <>
      <style>{`
        .amz-anim-wrap {
          width: min(100%, 212vh, 1600px);
          aspect-ratio: 1600 / 752;
          position: relative;
          overflow: hidden;
          contain: layout paint;
          border-radius: 24px;
        }
        .amz-anim-scene {
          position: absolute;
          left: 0; top: 0;
          width: 1600px; height: 752px;
          transform-origin: 0 0;
          animation: amzSceneFade 8s infinite both;
        }
        .amz-anim-scene > * {
          position: absolute;
          will-change: transform, opacity, clip-path;
          backface-visibility: hidden;
        }
        .amz-anim-scene,
        .amz-anim-scene * {
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          animation-duration: 8s;
        }

        /* Left white panel + logo */
        .amz-lp {
          left: 12px; top: 96px;
          width: 500px; height: 560px;
          background: #fff; border-radius: 82px; z-index: 1;
          animation-name: amzLpanel;
        }
        .amz-logo {
          left: 75px; top: 218px;
          width: 282px; height: 282px;
          z-index: 2;
          animation-name: amzLcontent;
          object-fit: contain;
        }
        .amz-dots {
          left: 189px; top: 552px;
          display: flex; gap: 18px; z-index: 2;
          animation-name: amzLcontentFade;
        }
        .amz-dots i {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid #ff9900;
          display: block;
        }
        .amz-dots i.on { background: #ff9900; }

        /* Right white panel */
        .amz-rp {
          left: 760px; top: 63px;
          width: 828px; height: 626px;
          background: #fff; border-radius: 76px; z-index: 1;
          animation-name: amzRpanel;
        }
        .amz-rc {
          left: 0; top: 0;
          width: 1600px; height: 752px;
          z-index: 2;
          animation-name: amzRcontent;
          pointer-events: none;
        }
        .amz-rc > * { position: absolute; }

        /* Orange product card */
        .amz-card {
          left: 389px; top: 12px;
          width: 388px; height: 728px;
          background: #ff9900; border-radius: 64px;
          overflow: hidden; z-index: 3;
          animation-name: amzCardGrow;
        }
        .amz-cin {
          position: absolute; inset: 0;
          animation-name: amzCardIn;
        }
        .amz-cin > * { position: absolute; color: #fff; }

        .amz-ctitle  { left: 36px; top: 140px; font-size: 22px; font-weight: 300; white-space: nowrap; font-family: 'Inter', sans-serif; }
        .amz-cprice  { left: 34px; top: 185px; font-size: 64px; font-weight: 700; letter-spacing: -.5px; line-height: 1.1; font-family: 'Inter', sans-serif; }
        .amz-cdesc   { left: 36px; top: 270px; font-size: 19px; font-weight: 300; line-height: 25px; color: rgba(255,255,255,.78); font-family: 'Inter', sans-serif; }
        .amz-qty     { left: 36px; top: 400px; font-size: 26px; font-weight: 700; font-family: 'Inter', sans-serif; }
        .amz-qbox    { left: 170px; top: 386px; width: 157px; height: 60px; border-radius: 32px; background: #fff !important; color: #111 !important; font-weight: 700; font-size: 26px; line-height: 60px; padding-left: 40px; font-family: 'Inter', sans-serif; }
        .amz-add     { left: 48px; top: 476px; width: 292px; height: 68px; border-radius: 34px; background: #1f2430; font: 700 17px/68px 'Inter', sans-serif; text-align: center; }

        /* Checkout form */
        .amz-h  { left: 825px; top: 162px; font: 700 24px/1.2 'Poppins', sans-serif; color: #111; }
        .amz-f  { background: #f2f2f4; height: 38px; border-radius: 20px; font: 500 11px/38px 'Poppins', sans-serif; color: #222; padding-left: 20px; }
        .amz-sm { left: 845px; font: 500 11px 'Poppins', sans-serif; color: #222; }
        .amz-opt { left: 845px; font: 400 10px 'Poppins', sans-serif; color: #bdbdc2; display: flex; align-items: center; gap: 8px; }
        .amz-opt::before { content: ''; width: 11px; height: 11px; border-radius: 50%; border: 1px solid #cfcfd4; background: #fff; }
        .amz-opt.sel::before { background: #b9b9be; border-color: #b9b9be; }
        .amz-pay {
          left: 825px; top: 516px;
          width: 275px; height: 68px; border-radius: 36px;
          background: #1f2430; color: #fff;
          font: 700 13px/68px 'Poppins', sans-serif;
          letter-spacing: .06em; text-align: center;
          animation-name: amzPayColor;
        }
        .amz-box {
          border: 1px solid #eeeef0; border-radius: 30px;
          background: #fff; font-family: 'Poppins', sans-serif; color: #222;
        }
        .amz-box > * { position: absolute; }
        .amz-os { left: 1224px; top: 173px; width: 286px; height: 262px; }
        .amz-pm { left: 1224px; top: 451px; width: 286px; height: 136px; }
        .amz-bt { left: 20px; font-size: 14px; font-weight: 300; }
        .amz-t9 { font-size: 9px; font-weight: 400; color: #555; }
        .amz-t9.r { text-align: right; }
        .amz-line { left: 12px; right: 12px; height: 1px; background: #eee; }
        .amz-cards { left: 18px; top: 74px; display: flex; gap: 8px; }
        .amz-cards b { width: 48px; height: 34px; border-radius: 4px; display: block; position: relative; overflow: hidden; }
        .amz-visa { background: #fff; border: 1px solid #eee; color: #1a1f71; font: italic 800 13px/32px 'Inter'; text-align: center; }
        .amz-mc { background: #c8342f; }
        .amz-mc::before, .amz-mc::after { content: ''; position: absolute; top: 8px; width: 18px; height: 18px; border-radius: 50%; }
        .amz-mc::before { left: 9px; background: #eb001b; }
        .amz-mc::after  { left: 21px; background: #f79e1b; opacity: .9; }
        .amz-ax { background: #2e77bb; color: #fff; font: 700 9px/34px 'Inter'; text-align: center; }

        /* ── Keyframes ── */
        @keyframes amzSceneFade { 0%,97%{opacity:1} 100%{opacity:0} }
        @keyframes amzCardGrow {
          0%,3%  { opacity:1; clip-path:inset(0 0 100% 0 round 64px); animation-timing-function:cubic-bezier(.22,1,.36,1) }
          20%,100%{ opacity:1; clip-path:inset(0 0 0 0 round 64px) }
        }
        @keyframes amzCardIn {
          0%,27% { opacity:0; transform:scale(.4); animation-timing-function:cubic-bezier(.34,1.35,.64,1) }
          37%,100%{ opacity:1; transform:scale(1) }
        }
        @keyframes amzLpanel {
          0%,37% { clip-path:inset(0 0 0 100% round 82px); animation-timing-function:cubic-bezier(.22,1,.36,1) }
          52%,100%{ clip-path:inset(0 0 0 0 round 82px) }
        }
        @keyframes amzLcontent {
          0%,46% { opacity:0; transform:scale(.6) rotate(-35deg); animation-timing-function:cubic-bezier(.22,1,.36,1) }
          62%,100%{ opacity:1; transform:scale(1) rotate(0) }
        }
        @keyframes amzLcontentFade { 0%,50%{opacity:0} 58%,100%{opacity:1} }
        @keyframes amzRpanel {
          0%,68% { clip-path:inset(0 100% 0 0 round 76px); background:#8c8c90; animation-timing-function:cubic-bezier(.22,1,.36,1) }
          82%    { clip-path:inset(0 0 0 0 round 76px); background:#fff }
          100%   { clip-path:inset(0 0 0 0 round 76px); background:#fff }
        }
        @keyframes amzRcontent { 0%,76%{opacity:0} 86%,100%{opacity:1} }
        @keyframes amzPayColor { 0%,80%{background:#a3a3a8} 88%,100%{background:#1f2430} }

        @media (prefers-reduced-motion: reduce) {
          .amz-anim-scene, .amz-anim-scene * { animation: none !important; }
        }
      `}</style>

      <div className="amz-anim-wrap" ref={wrapRef}>
        <div className="amz-anim-scene" ref={sceneRef}>

          {/* Left: logo panel */}
          <div className="amz-lp" />
          <img
            className="amz-logo"
            src="/favicon-icon.png"
            alt="AMZ Pro Venture Logo"
          />
          <div className="amz-dots">
            <i /><i className="on" /><i />
          </div>

          {/* Right: checkout panel */}
          <div className="amz-rp" />
          <div className="amz-rc">
            <div className="amz-h">CHECKOUT</div>
            <div className="amz-f" style={{ left: 825, top: 204, width: 323 }}>Shipping Address</div>
            <div className="amz-f" style={{ left: 825, top: 252, width: 323 }}>Full address</div>
            <div className="amz-f" style={{ left: 825, top: 301, width: 152 }}>Country</div>
            <div className="amz-f" style={{ left: 996, top: 301, width: 152 }}>Postcode</div>
            <div className="amz-f" style={{ left: 825, top: 349, width: 323 }}>Billing Address</div>
            <div className="amz-sm" style={{ top: 410 }}>Shipping Method</div>
            <div className="amz-opt" style={{ top: 432 }}>Free</div>
            <div className="amz-opt sel" style={{ top: 451 }}>Standard</div>
            <div className="amz-opt" style={{ top: 470 }}>Express Delivery</div>
            <div className="amz-pay">PAY SECURELY</div>

            <div className="amz-box amz-os">
              <div className="amz-bt" style={{ top: 16 }}>Order Summary</div>
              <div className="amz-t9" style={{ left: 20, top: 56 }}>Product</div>
              <div className="amz-t9" style={{ left: 165, top: 56 }}>Price</div>
              <div className="amz-t9" style={{ left: 238, top: 56 }}>QTY</div>
              <div className="amz-line" style={{ top: 76 }} />
              <div className="amz-t9" style={{ left: 52, top: 88, lineHeight: "11px", color: "#333" }}>Amazon<br />Product</div>
              <div className="amz-t9" style={{ left: 162, top: 94 }}>$299.99</div>
              <div className="amz-t9" style={{ left: 242, top: 94 }}>1</div>
              <div className="amz-line" style={{ top: 130 }} />
              <div className="amz-t9" style={{ left: 20, top: 146 }}>Subtotal before delivery</div>
              <div className="amz-t9" style={{ left: 212, top: 146 }}>$299.99</div>
              <div className="amz-line" style={{ top: 178 }} />
              <div style={{ position: "absolute", left: 20, top: 200, fontSize: 12, fontWeight: 300 }}>TOTAL</div>
              <div style={{ position: "absolute", left: 198, top: 199, fontSize: 13, fontWeight: 600 }}>$299.99</div>
            </div>

            <div className="amz-box amz-pm">
              <div className="amz-bt" style={{ top: 14, fontSize: 13 }}>Payment Methods</div>
              <div style={{ position: "absolute", left: 20, top: 42, font: "italic 700 11px Inter", color: "#003087" }}>
                P <span style={{ color: "#009cde" }}>PayPal</span>
              </div>
              <div className="amz-cards">
                <b className="amz-visa">VISA</b>
                <b className="amz-mc" />
                <b className="amz-ax">AMEX</b>
              </div>
            </div>
          </div>

          {/* Center: orange product card */}
          <div className="amz-card">
            <div className="amz-cin">
              <div className="amz-ctitle">Amazon FBA Product</div>
              <div className="amz-cprice">$299.00</div>
              <div className="amz-cdesc">Premium Quality Item<br />Fast Prime Delivery</div>
              <div className="amz-qty">QTY</div>
              <div className="amz-qbox">1</div>
              <div className="amz-add">Add To Cart</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
