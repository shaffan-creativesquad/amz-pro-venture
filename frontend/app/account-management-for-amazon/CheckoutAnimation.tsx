"use client";
import { useEffect, useRef } from "react";

export default function CheckoutAnimation() {
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
        :root { --ca-loop: 8s; }
        .ca-wrap { width:100%;aspect-ratio:1600/752;position:relative;overflow:hidden;contain:layout paint; }
        .ca-scene { position:absolute;left:0;top:0;width:1600px;height:752px;transform-origin:0 0;
                    animation:ca-sceneFade var(--ca-loop) infinite both; }
        .ca-scene > * { position:absolute;will-change:transform,opacity,clip-path;backface-visibility:hidden; }
        .ca-scene,.ca-scene * { animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:var(--ca-loop); }

        .ca-lp  { left:12px;top:96px;width:500px;height:560px;background:#fff;border-radius:82px;z-index:1;animation-name:ca-lpanel; }
        .ca-logo{ left:75px;top:218px;width:282px;height:282px;z-index:2;animation-name:ca-lcontent;object-fit:contain; }
        .ca-dots{ left:189px;top:552px;display:flex;gap:18px;z-index:2;animation-name:ca-lcontentFade; }
        .ca-dots i { width:16px;height:16px;border-radius:50%;border:2px solid #ff9900;display:block; }
        .ca-dots i.on { background:#ff9900; }

        .ca-rp  { left:760px;top:63px;width:828px;height:626px;background:#fff;border-radius:76px;z-index:1;animation-name:ca-rpanel; }
        .ca-rc  { left:0;top:0;width:1600px;height:752px;z-index:2;animation-name:ca-rcontent;pointer-events:none; }
        .ca-rc > * { position:absolute; }

        .ca-card{ left:389px;top:12px;width:388px;height:728px;background:#ff9900;border-radius:64px;overflow:hidden;z-index:3;animation-name:ca-cardGrow; }
        .ca-cin { position:absolute;inset:0;animation-name:ca-cardIn; }
        .ca-cin > * { position:absolute;color:#fff; }
        .ca-title{ left:36px;top:154px;font-size:27px;font-weight:300;white-space:nowrap; }
        .ca-price{ left:34px;top:205px;font-size:73px;font-weight:700;letter-spacing:-.5px;line-height:1.1; }
        .ca-desc { left:36px;top:299px;font-size:21px;font-weight:300;line-height:25px;color:rgba(255,255,255,.78); }
        .ca-qty  { left:36px;top:417px;font-size:29px;font-weight:700; }
        .ca-qbox { left:187px;top:401px;width:157px;height:64px;border-radius:32px;background:#fff!important;color:#111!important;font-weight:700;font-size:28px;line-height:64px;padding-left:40px; }
        .ca-add  { left:57px;top:497px;width:274px;height:73px;border-radius:37px;background:#000;font:700 19px/73px 'Inter',sans-serif;text-align:center; }

        .ca-h   { left:825px;top:162px;font:700 26px/1.2 'Poppins',sans-serif;color:#111; }
        .ca-f   { background:#f2f2f4;height:39px;border-radius:20px;font:500 11px/39px 'Poppins',sans-serif;color:#222;padding-left:20px; }
        .ca-f.ca-c::after { content:'▾';position:absolute;right:16px;font-size:12px;color:#333; }
        .ca-sm  { left:845px;font:500 11px 'Poppins',sans-serif;color:#222; }
        .ca-opt { left:845px;font:400 10px 'Poppins',sans-serif;color:#bdbdc2;display:flex;align-items:center;gap:8px; }
        .ca-opt::before { content:'';width:11px;height:11px;border-radius:50%;border:1px solid #cfcfd4;background:#fff; }
        .ca-opt.ca-sel::before { background:#b9b9be;border-color:#b9b9be; }
        .ca-pay { left:825px;top:516px;width:275px;height:72px;border-radius:36px;background:#000;color:#fff;
                  font:700 14px/72px 'Poppins',sans-serif;letter-spacing:.06em;text-align:center;animation-name:ca-payColor; }

        .ca-box { border:1px solid #eeeef0;border-radius:30px;background:#fff;font-family:'Poppins',sans-serif;color:#222; }
        .ca-box > * { position:absolute; }
        .ca-os  { left:1224px;top:173px;width:286px;height:262px; }
        .ca-pm  { left:1224px;top:451px;width:286px;height:136px; }
        .ca-bt  { left:20px;font-size:15px;font-weight:300; }
        .ca-t9  { font-size:9px;font-weight:400;color:#555; }
        .ca-ln  { left:12px;right:12px;height:1px;background:#eee; }
        .ca-cards { display:flex;gap:8px; }
        .ca-cards b { width:48px;height:34px;border-radius:4px;display:block;position:relative;overflow:hidden; }
        .ca-visa { background:#fff;border:1px solid #eee;color:#1a1f71;font:italic 800 13px/32px 'Inter';text-align:center; }
        .ca-mc  { background:#c8342f; }
        .ca-mc::before,.ca-mc::after,.ca-ma::before,.ca-ma::after { content:'';position:absolute;top:8px;width:18px;height:18px;border-radius:50%; }
        .ca-mc::before { left:9px;background:#eb001b; } .ca-mc::after  { left:21px;background:#f79e1b;opacity:.9; }
        .ca-ma  { background:#3b6fc1; }
        .ca-ma::before { left:9px;background:#e1202e; } .ca-ma::after  { left:21px;background:#4aa3df;opacity:.9; }
        .ca-ax  { background:#2e77bb;color:#fff;font:700 9px/34px 'Inter';text-align:center; }

        @keyframes ca-sceneFade  { 0%,97%{opacity:1} 100%{opacity:0} }
        @keyframes ca-cardGrow   {
          0%,3%  { opacity:1;clip-path:inset(0 0 100% 0 round 64px);animation-timing-function:cubic-bezier(.22,1,.36,1) }
          20%,100%{ opacity:1;clip-path:inset(0 0 0 0 round 64px) }
        }
        @keyframes ca-cardIn     {
          0%,27% { opacity:0;transform:scale(.4);animation-timing-function:cubic-bezier(.34,1.35,.64,1) }
          37%,100%{ opacity:1;transform:scale(1) }
        }
        @keyframes ca-lpanel     {
          0%,37% { clip-path:inset(0 0 0 100% round 82px);animation-timing-function:cubic-bezier(.22,1,.36,1) }
          52%,100%{ clip-path:inset(0 0 0 0 round 82px) }
        }
        @keyframes ca-lcontent   {
          0%,46% { opacity:0;transform:scale(.6) rotate(-35deg);animation-timing-function:cubic-bezier(.22,1,.36,1) }
          62%,100%{ opacity:1;transform:scale(1) rotate(0) }
        }
        @keyframes ca-lcontentFade { 0%,50%{opacity:0} 58%,100%{opacity:1} }
        @keyframes ca-rpanel     {
          0%,68% { clip-path:inset(0 100% 0 0 round 76px);background:#8c8c90;animation-timing-function:cubic-bezier(.22,1,.36,1) }
          82%    { clip-path:inset(0 0 0 0 round 76px);background:#fff }
          100%   { clip-path:inset(0 0 0 0 round 76px);background:#fff }
        }
        @keyframes ca-rcontent   { 0%,76%{opacity:0} 86%,100%{opacity:1} }
        @keyframes ca-payColor   { 0%,80%{background:#a3a3a8} 88%,100%{background:#000} }

        @media (prefers-reduced-motion:reduce) {
          .ca-scene,.ca-scene * { animation:none!important; }
        }
      `}</style>

      <div className="ca-wrap" ref={wrapRef}>
        <div className="ca-scene" ref={sceneRef}>

          {/* LEFT: logo panel */}
          <div className="ca-lp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ca-logo" src="/favicon-icon.png" alt="Logo" />
          <div className="ca-dots">
            <i></i><i className="on"></i><i></i>
          </div>

          {/* RIGHT: checkout panel */}
          <div className="ca-rp" />
          <div className="ca-rc">
            <div className="ca-h">CHECKOUT</div>
            <div className="ca-f ca-c" style={{ left:"825px", top:"204px", width:"323px" }}>Shipping Address</div>
            <div className="ca-f"      style={{ left:"825px", top:"252px", width:"323px" }}>Full address</div>
            <div className="ca-f"      style={{ left:"825px", top:"301px", width:"152px" }}>Country</div>
            <div className="ca-f"      style={{ left:"996px", top:"301px", width:"152px" }}>Postcode</div>
            <div className="ca-f ca-c" style={{ left:"825px", top:"349px", width:"323px" }}>Billing Address</div>

            <div className="ca-sm"      style={{ top:"410px" }}>Shipping Method</div>
            <div className="ca-opt"     style={{ top:"432px" }}>Free</div>
            <div className="ca-opt ca-sel" style={{ top:"451px" }}>Standard</div>
            <div className="ca-opt"     style={{ top:"470px" }}>Express Delivery</div>
            <div className="ca-pay">PAY SECURELY</div>

            {/* Order Summary box */}
            <div className="ca-box ca-os">
              <div className="ca-bt"  style={{ top:"16px" }}>Order Summary</div>
              <div className="ca-t9"  style={{ left:"20px",  top:"56px" }}>Product</div>
              <div className="ca-t9"  style={{ left:"165px", top:"56px" }}>Price</div>
              <div className="ca-t9"  style={{ left:"238px", top:"56px" }}>QTY</div>
              <div className="ca-ln"  style={{ top:"76px" }} />
              <div className="ca-t9"  style={{ left:"52px", top:"88px", fontSize:"9px", lineHeight:"11px", color:"#333" }}>
                Performance<br />Shortboard
              </div>
              <div className="ca-t9"  style={{ left:"162px", top:"94px" }}>£499.99</div>
              <div className="ca-t9"  style={{ left:"242px", top:"94px" }}>1</div>
              <div className="ca-ln"  style={{ top:"130px" }} />
              <div className="ca-t9"  style={{ left:"20px",  top:"146px" }}>Subtotal before delivery</div>
              <div className="ca-t9"  style={{ left:"212px", top:"146px" }}>£499.99</div>
              <div className="ca-ln"  style={{ top:"178px" }} />
              <div style={{ left:"20px",  top:"200px", fontSize:"12px", fontWeight:300 }}>TOTAL</div>
              <div style={{ left:"198px", top:"199px", fontSize:"13px", fontWeight:600 }}>£499.99</div>
            </div>

            {/* Payment Methods box */}
            <div className="ca-box ca-pm">
              <div className="ca-bt" style={{ top:"14px", fontSize:"13px" }}>Payment Methods</div>
              <div style={{ left:"20px", top:"42px", fontStyle:"italic", fontWeight:700, fontSize:"11px", fontFamily:"'Inter'", color:"#003087" }}>
                P <span style={{ color:"#009cde" }}>PayPal</span>
              </div>
              <div className="ca-cards" style={{ left:"20px", top:"64px" }}>
                <b className="ca-visa">VISA</b>
                <b className="ca-mc"></b>
                <b className="ca-ma"></b>
                <b className="ca-ax">AMEX</b>
              </div>
            </div>
          </div>

          {/* CENTER: orange product card */}
          <div className="ca-card">
            <div className="ca-cin">
              <div className="ca-title">Performance Shortboard</div>
              <div className="ca-price">$499.00</div>
              <div className="ca-desc">Soft Pink Skater Dress<br />Perfect Summer Number</div>
              <div className="ca-qty">QTY</div>
              <div className="ca-qbox">1</div>
              <div className="ca-add">Add To Basket</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
