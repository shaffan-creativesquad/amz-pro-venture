"use client";
import { useEffect, useRef } from "react";

const BAR_T = [72, 76, 58, 80, 72, 66, 62, 80, 68, 80];
const BAR_F = [48, 34, 42, 55, 26, 40, 34, 46, 25, 40];

const haStyles = `
  .ha-wrap{width:100%;aspect-ratio:624/565;position:relative;overflow:hidden;contain:layout paint}
  .ha-scene{position:absolute;left:0;top:0;width:624px;height:565px;transform-origin:0 0;animation:haSF 7s infinite both}
  .ha-scene>*{position:absolute;will-change:transform,opacity;backface-visibility:hidden}
  .ha-scene *{animation-duration:7s;animation-iteration-count:infinite;animation-fill-mode:both}
  .ha-logo{left:150px;top:105px;width:380px;height:350px;z-index:2;animation-name:haLogoIn}
  .ha-logo svg,.ha-logo img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;display:block}
  .ha-arcs{left:0;top:0;width:624px;height:565px;z-index:1;overflow:visible}
  .ha-arcs path{fill:none;stroke:#ff9900;stroke-width:1.6;stroke-linecap:round;stroke-dasharray:1.5 4.5}
  .ha-a1{animation-name:haArc1}.ha-a2{animation-name:haArc2}.ha-a3{animation-name:haArc3}
  .ha-card{background:#fff;border:1px solid #f0f0f3;border-radius:18px;box-shadow:0 8px 26px rgba(40,40,80,.12);z-index:3}
  .ha-card>*{position:absolute}
  .ha-perf{left:341px;top:24px;width:260px;height:163px;animation-name:haPerfIn;transform-origin:0 100%}
  .ha-perf h3{left:16px;top:14px;font-size:16px;font-weight:600;color:#111;font-family:Poppins,sans-serif}
  .ha-bars{left:16px;top:48px;height:80px;display:flex;align-items:flex-end;gap:11.6px}
  .ha-tr{width:13px;height:calc(var(--ha-t)*1px);background:#efeff1;border-radius:7px;position:relative;overflow:hidden}
  .ha-fl{position:absolute;left:0;right:0;bottom:0;height:calc(var(--ha-f)*1px);background:#000000;border-radius:7px;transform-origin:bottom;animation-name:haBarUp}
  .ha-fl.ha-p{background:#ff9900}
  .ha-lbl{left:16px;top:134px;display:flex;gap:11.6px}
  .ha-lbl span{width:13px;text-align:center;font-weight:700;font-size:8px;color:#222}
  .ha-dl{left:12px;right:12px;top:72px;border-top:2px dotted #111}
  .ha-tag{left:78px;top:64px;background:#111;color:#fff;border-radius:8px;padding:0 7px;font-weight:700;font-size:8px;line-height:16px}
  .ha-chip{left:18px;top:158px;width:195px;height:60px;border-radius:14px;animation-name:haChipIn}
  .ha-chip .ha-ic{position:absolute;left:16px;top:11px;width:38px;height:38px;object-fit:contain;inset:auto}
  .ha-chip b{position:absolute;left:67px;top:0;line-height:60px;font-size:17px;font-weight:600;color:#111;white-space:nowrap}
  .ha-data{left:119px;top:392px;width:199px;height:127px;border-radius:14px;animation-name:haDataIn}
  .ha-data h4{left:14px;top:11px;font-size:9px;font-weight:700;color:#111;font-family:Poppins,sans-serif}
  .ha-btn{top:10px;height:15px;width:36px;border-radius:8px;font-size:7px;line-height:13px;font-weight:500;text-align:center;border:1px solid #bbb;color:#222}
  .ha-btn.ha-on{background:#111;color:#fff;border-color:#111}
  .ha-lg{left:14px;font-size:7.5px;font-weight:500;color:#222;display:flex;align-items:center;gap:5px}
  .ha-lg::before{content:'';width:5px;height:5px;border-radius:50%;background:#111;flex-shrink:0}
  .ha-lg.ha-pk::before{background:#ff9900}
  .ha-big{left:12px;top:58px;font-weight:700;font-size:46px;line-height:1;color:#ff9900;letter-spacing:-1px;font-family:Poppins,sans-serif}
  .ha-big sup{font-size:13px;vertical-align:top;position:relative;top:4px;letter-spacing:0}
  .ha-chart{left:82px;top:46px;width:110px;height:66px;overflow:visible}
  .ha-chart polyline{fill:none;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}
  .ha-chart .ha-g{stroke:#bbb}
  .ha-chart .ha-k{stroke:#ff9900;stroke-dasharray:1;stroke-dashoffset:0;animation-name:haDraw}
  .ha-tip{left:118px;top:54px;background:#111;color:#fff;border-radius:5px;padding:3px 7px;font-weight:700;font-size:7px;line-height:8px;text-align:center}
  .ha-tip small{display:block;font-size:4.5px;font-weight:500;opacity:.7}
  .ha-xl{left:84px;top:113px;width:108px;display:flex;justify-content:space-between;font-size:4.5px;font-weight:500;color:#999}
  @keyframes haSF{0%,93%{opacity:1}100%{opacity:0}}
  @keyframes haLogoIn{0%,2%{opacity:0;transform:scale(.8,.1);animation-timing-function:cubic-bezier(.34,1.35,.64,1)}12%,100%{opacity:1;transform:none}}
  @keyframes haArc1{0%,12%{opacity:0}22%,100%{opacity:1}}
  @keyframes haArc2{0%,30%{opacity:0}38%,100%{opacity:1}}
  @keyframes haArc3{0%,58%{opacity:0}66%,100%{opacity:1}}
  @keyframes haPerfIn{0%,21%{opacity:0;transform:translate(-110px,150px) rotate(-14deg) scale(.3);animation-timing-function:cubic-bezier(.22,1.2,.36,1)}32%,100%{opacity:1;transform:none}}
  @keyframes haBarUp{0%,28%{transform:scaleY(0);animation-timing-function:cubic-bezier(.22,1,.36,1)}40%,100%{transform:scaleY(1)}}
  @keyframes haChipIn{0%,42%{opacity:0;transform:translate(80px,-10px) rotate(6deg) scale(.5);animation-timing-function:cubic-bezier(.22,1.2,.36,1)}52%,100%{opacity:1;transform:none}}
  @keyframes haDataIn{0%,52%{opacity:0;transform:translateY(80px) scale(.6);animation-timing-function:cubic-bezier(.22,1.2,.36,1)}63%,100%{opacity:1;transform:none}}
  @keyframes haDraw{0%,62%{stroke-dashoffset:1}76%,100%{stroke-dashoffset:0}}
  @media (prefers-reduced-motion:reduce){.ha-scene,.ha-scene *{animation:none!important}}
`;

export default function HeroAnimation() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      if (wrapRef.current && sceneRef.current) {
        sceneRef.current.style.transform = `scale(${wrapRef.current.clientWidth / 624})`;
      }
    };
    window.addEventListener("resize", fit);
    fit();
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="ha-wrap" ref={wrapRef}>
      <style dangerouslySetInnerHTML={{ __html: haStyles }} />
      <div className="ha-scene" ref={sceneRef}>

        {/* Dotted connector lines */}
        <svg className="ha-arcs" viewBox="0 0 624 565">
          <path className="ha-a1" d="M158 157C150 125 190 108 247 121"/>
          <path className="ha-a2" d="M557 190C562 228 538 246 504 245"/>
          <path className="ha-a3" d="M368 438C372 470 352 492 320 493"/>
        </svg>

        {/* Centre logo */}
        <div className="ha-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon-icon.png" alt="Company logo" />
        </div>

        {/* Performance card */}
        <div className="ha-card ha-perf">
          <h3>Performance</h3>
          <div className="ha-bars">
            {BAR_T.map((t, i) => (
              <div key={i} className="ha-tr" style={{ "--ha-t": t } as React.CSSProperties}>
                <div className={`ha-fl${i === 3 ? " ha-p" : ""}`} style={{ "--ha-f": BAR_F[i] } as React.CSSProperties} />
              </div>
            ))}
          </div>
          <div className="ha-lbl">
            {BAR_T.map((_, i) => <span key={i}>{11 + i}</span>)}
          </div>
          <div className="ha-dl" />
          <div className="ha-tag">64%</div>
        </div>

        {/* Creative ideas chip */}
        <div className="ha-card ha-chip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ha-ic" src="/favicon-icon.png" alt="" />
          <b>Creative ideas</b>
        </div>

        {/* Data insights card */}
        <div className="ha-card ha-data">
          <h4>Data Insights</h4>
          <div className="ha-btn" style={{ left: "118px" }}>Weekly</div>
          <div className="ha-btn ha-on" style={{ left: "156px" }}>Monthly</div>
          <div className="ha-lg" style={{ top: "30px" }}>12450 (40%)</div>
          <div className="ha-lg ha-pk" style={{ top: "42px" }}>11252 (11%)</div>
          <div className="ha-big">51<sup>%</sup></div>
          <svg className="ha-chart" viewBox="0 0 110 66">
            <polyline className="ha-g" points="0,58 14,50 28,52 42,38 56,36 70,22 84,24 100,6"/>
            <polyline className="ha-k" pathLength={1} points="0,26 14,22 28,30 42,40 56,34 70,40 84,34 100,40"/>
            <circle cx="44" cy="30" r="3" fill="#fff" stroke="#111" strokeWidth="1"/>
          </svg>
          <div className="ha-tip">12.450<small>units</small></div>
          <div className="ha-xl">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

      </div>
    </div>
  );
}
