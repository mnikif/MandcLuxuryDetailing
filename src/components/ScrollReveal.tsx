"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section")).slice(1);
    const targets: Element[] = [];

    sections.forEach((section) => {
      const wrap = section.querySelector(":scope > div");
      const children = wrap ? Array.from(wrap.children) : Array.from(section.children);

      children.forEach((child, i) => {
        const rect = child.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport) return;

        child.classList.add("sr");
        (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
        targets.push(child);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
