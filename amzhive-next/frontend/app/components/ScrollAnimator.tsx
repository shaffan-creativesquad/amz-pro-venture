"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset all previously animated sections on route change
    document.querySelectorAll(".scroll-anim").forEach((el) => {
      el.classList.remove("in-view");
    });

    const init = () => {
      const sections = document.querySelectorAll("section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -50px 0px" }
      );

      sections.forEach((section) => {
        section.classList.remove("in-view");
        if (!section.classList.contains("scroll-anim")) {
          section.classList.add("scroll-anim", "anim-up");
        }
        observer.observe(section);
      });

      return observer;
    };

    // Small delay so Next.js finishes rendering the page DOM
    const timer = setTimeout(() => {
      const observer = init();
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
