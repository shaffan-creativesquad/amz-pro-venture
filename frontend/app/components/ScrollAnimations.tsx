"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" || pathname.startsWith("/admin")) return;

    // Inject CSS — transition must live on .sa so it's present before state change
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      .sa { transition: opacity 0.65s cubic-bezier(.25,.1,.25,1), transform 0.65s cubic-bezier(.25,.1,.25,1); }
      .sa.sa-off { opacity: 0; transform: translateY(32px); }
      .sa.sa-on  { opacity: 1; transform: none; }
    `;
    document.head.appendChild(styleEl);

    const sections = Array.from(document.querySelectorAll("section"));

    // First section (hero) is immediately visible; rest start hidden
    sections.forEach((el, i) => {
      el.classList.add("sa");
      el.classList.add(i === 0 ? "sa-on" : "sa-off");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.replace("sa-off", "sa-on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Double rAF: ensures browser has painted the hidden state before we observe
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sections.forEach((el, i) => {
          if (i > 0) observer.observe(el);
        });
      });
    });

    return () => {
      observer.disconnect();
      styleEl.remove();
      sections.forEach((el) => el.classList.remove("sa", "sa-off", "sa-on"));
    };
  }, [pathname]);

  return null;
}
