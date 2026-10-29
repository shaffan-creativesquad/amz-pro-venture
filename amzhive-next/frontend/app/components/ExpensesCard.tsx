"use client";
import { useEffect, useRef } from "react";

const ecStyles = `
  .ec-wrap{width:100%;aspect-ratio:596/360;position:relative;overflow:hidden;contain:layout paint}
  .ec-scene{position:absolute;left:0;top:0;width:596px;height:360px;transform-origin:0 0;animation:ecFade 6s infinite both}
  .ec-scene>*{position:absolute;will-change:transform,opacity;backface-visibility:hidden}
  .ec-scene *{animation-duration:6s;animation-iteration-count:infinite;animation-fill-mode:both}

  .ec-head{left:42px;top:16px;font-size:26px;font-weight:600;letter-spacing:-.2px;color:#16161c;white-space:nowrap;animation-name:ecHeadIn;font-family:'Poppins',sans-serif}
  .ec-dots{left:374px;top:28px;display:flex;gap:3px;animation-name:ecFade1}
  .ec-dots i{width:7px;height:7px;border-radius:50%;background:#ddd;display:block}

  .ec-card{left:18px;top:62px;width:404px;height:279px;border-radius:18px;overflow:hidden;color:#fff;
    font-family:'Poppins',sans-serif;
    background:linear-gradient(135deg,#ff9900 0%,#e67700 50%,#b35900 100%);
    box-shadow:0 18px 40px rgba(255,153,0,.28);animation-name:ecCardIn}
  .ec-card::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(80,30,0,.22))}
  .ec-card>*{position:absolute;z-index:1}
  .ec-t1{left:23px;top:20px;font-size:17px;font-weight:700}
  .ec-t2{left:23px;top:39px;font-size:12px;font-weight:500;opacity:.8}
  .ec-tog{left:249px;top:20px;width:131px;height:30px;font-size:10.5px;font-weight:600;letter-spacing:.05em}
  .ec-tog span{position:absolute;top:0;line-height:30px;text-align:center}
  .ec-tog .ec-on{left:0;width:73px;border-radius:15px;background:rgba(255,255,255,.22)}
  .ec-tog .ec-off{left:87px;width:44px;opacity:.9}
  .ec-yl{left:23px;font-size:11px;font-weight:500;opacity:.6;transform:translateY(-50%)}
  .ec-gl{left:60px;right:0;height:1px;background:rgba(255,255,255,.15)}
  .ec-xl{top:243px;font-size:10.5px;font-weight:500;letter-spacing:.12em;opacity:.65;transform:translateX(-50%)}
  .ec-chart{left:0;top:0;width:404px;height:279px}
  .ec-tip{left:170px;top:134px;width:50px;height:27px;border-radius:5px;background:rgba(50,20,0,.85);
    font-weight:500;font-size:12px;line-height:27px;text-align:center;font-family:'Poppins',sans-serif}
  .ec-tip::after{content:'';position:absolute;left:34px;bottom:-5px;border:5px solid transparent;border-top-color:rgba(50,20,0,.85);border-bottom:0}

  .ec-chip{left:363px;width:199px;height:64px;border-radius:32px;background:#fff;border:1px solid #f1f1f4;
    box-shadow:0 8px 24px rgba(30,30,60,.09);z-index:3;transform-origin:0 50%}
  .ec-chip i{position:absolute;left:17px;top:12px;width:38px;height:38px;border-radius:50%;background:#1f2430;display:grid;place-items:center}
  .ec-chip svg{width:17px;height:17px;fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
  .ec-chip b{position:absolute;left:68px;line-height:62px;font-size:15.5px;font-weight:600;color:#14141a;font-family:'Poppins',sans-serif}
  .ec-c1{top:113px;animation-name:ecChip3}
  .ec-c2{top:188px;animation-name:ecChip2}
  .ec-c3{top:262px;animation-name:ecChip1}

  @keyframes ecFade{0%,93%{opacity:1}100%{opacity:0}}
  @keyframes ecCardIn{0%,2%{opacity:0;transform:scale(.78);animation-timing-function:cubic-bezier(.22,1,.36,1)}6%{opacity:1}16%,100%{opacity:1;transform:none}}
  @keyframes ecHeadIn{0%,17%{clip-path:inset(0 0 0 100%);animation-timing-function:cubic-bezier(.22,1,.36,1)}27%,100%{clip-path:inset(0 0 0 0)}}
  @keyframes ecFade1{0%,24%{opacity:0}32%,100%{opacity:1}}
  @keyframes ecChip1{0%,30%{opacity:0;transform:translateX(-30px) scale(.55);animation-timing-function:cubic-bezier(.3,1.35,.5,1)}38%,100%{opacity:1;transform:none}}
  @keyframes ecChip2{0%,43%{opacity:0;transform:translateX(-30px) scale(.55);animation-timing-function:cubic-bezier(.3,1.35,.5,1)}51%,100%{opacity:1;transform:none}}
  @keyframes ecChip3{0%,56%{opacity:0;transform:translateX(-30px) scale(.55);animation-timing-function:cubic-bezier(.3,1.35,.5,1)}64%,100%{opacity:1;transform:none}}
  @media (prefers-reduced-motion:reduce){.ec-scene,.ec-scene *{animation:none!important}}
`;

export default function ExpensesCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      if (wrapRef.current && sceneRef.current) {
        sceneRef.current.style.transform = `scale(${wrapRef.current.clientWidth / 596})`;
      }
    };
    window.addEventListener("resize", fit);
    fit();
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="ec-wrap" ref={wrapRef}>
      <style dangerouslySetInnerHTML={{ __html: ecStyles }} />
      <div className="ec-scene" ref={sceneRef}>

        <div className="ec-head">Alive &amp; Kicking A$$</div>
        <div className="ec-dots"><i /><i /><i /></div>

        <div className="ec-card">
          <div className="ec-t1">Expenses</div>
          <div className="ec-t2">$8786</div>
          <div className="ec-tog">
            <span className="ec-on">CHART</span>
            <span className="ec-off">TABLE</span>
          </div>

          <div className="ec-gl" style={{ top: "90px" }} />
          <div className="ec-gl" style={{ top: "149px" }} />
          <div className="ec-yl" style={{ top: "90px" }}>100</div>
          <div className="ec-yl" style={{ top: "149px" }}>50</div>
          <div className="ec-yl" style={{ top: "209px" }}>0</div>

          <svg className="ec-chart" viewBox="0 0 404 279">
            <defs>
              <linearGradient id="ecAf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity=".55"/>
                <stop offset="1" stopColor="#fff" stopOpacity=".05"/>
              </linearGradient>
            </defs>
            <path fill="url(#ecAf)" d="M44,186 C62,184 76,200 92,160 C104,128 112,104 133,104 C154,104 160,136 176,168 C188,190 200,178 225,176 C250,174 252,132 296,132 C345,132 352,160 404,162 L404,279 L44,279 Z"/>
            <path fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" d="M44,186 C62,184 76,200 92,160 C104,128 112,104 133,104 C154,104 160,136 176,168 C188,190 200,178 225,176 C250,174 252,132 296,132 C345,132 352,160 404,162"/>
            <circle cx="225" cy="176" r="5" fill="#fff" stroke="#b35900" strokeWidth="2.5"/>
          </svg>

          <div className="ec-tip">$1287</div>
          <div className="ec-xl" style={{ left: "39px" }}>JAN</div>
          <div className="ec-xl" style={{ left: "104px" }}>FEB</div>
          <div className="ec-xl" style={{ left: "170px" }}>MAR</div>
          <div className="ec-xl" style={{ left: "237px" }}>APR</div>
          <div className="ec-xl" style={{ left: "303px" }}>MAY</div>
          <div className="ec-xl" style={{ left: "370px" }}>JUN</div>
        </div>

        {/* Chips */}
        <div className="ec-chip ec-c1">
          <i><svg viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 6 3-6M12 21 9 9m3 12 3-12"/></svg></i>
          <b>Luxury Goods</b>
        </div>
        <div className="ec-chip ec-c2">
          <i><svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="12" rx="2"/><path d="M3 6h18v3H3zM12 6v15M12 6c-2-4-6-3-5 0M12 6c2-4 6-3 5 0"/></svg></i>
          <b>Kitchenware</b>
        </div>
        <div className="ec-chip ec-c3">
          <i><svg viewBox="0 0 24 24"><rect x="5" y="2" width="10" height="20" rx="2"/><path d="M9 18h2"/><circle cx="17" cy="13" r="4"/><path d="M17 11.5V13l1 .8"/></svg></i>
          <b>Gadgets</b>
        </div>

      </div>
    </div>
  );
}
