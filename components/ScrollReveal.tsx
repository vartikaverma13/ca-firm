"use client";

import { useEffect, useRef, ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass =
    variant === "fade-up"
      ? "reveal-up"
      : variant === "fade-in"
      ? "fade-in"
      : variant === "fade-left"
      ? "reveal-left"
      : "reveal-right";

  return (
    <div ref={ref} className={`scroll-reveal ${variantClass} ${className}`}>
      {children}
    </div>
  );
}
