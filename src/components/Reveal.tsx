"use client";

import { useCallback, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
};

/**
 * Fades its children up once when they scroll into view.
 * The hidden state is only applied after mount, so content is always
 * visible without JavaScript, and it is skipped for reduced motion
 * and for anything already on screen.
 */
export default function Reveal({ children, as = "div", className }: RevealProps) {
  const ref = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "hidden";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "shown";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
