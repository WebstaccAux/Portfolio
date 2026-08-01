"use client";

import { useEffect } from "react";

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      revealItems.forEach((item) => observer.observe(item));
    }

    let scrollFrame = 0;
    const updateScrollState = () => {
      scrollFrame = 0;
      const scrollTop = window.scrollY;
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      root.style.setProperty(
        "--page-progress",
        `${Math.min(scrollTop / scrollRange, 1)}`,
      );
      header?.classList.toggle("is-scrolled", scrollTop > 110);
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScrollState);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!hero || reducedMotion || window.innerWidth < 760) return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty("--pointer-x", x.toFixed(3));
      hero.style.setProperty("--pointer-y", y.toFixed(3));
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    hero?.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      hero?.removeEventListener("pointermove", onPointerMove);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
