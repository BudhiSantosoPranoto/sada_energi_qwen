"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Subscribe to prefers-reduced-motion without triggering setState-in-effect. */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false // SSR default — animate
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "section" | "article" | "li" | "span" | "header" | "footer";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      // Already visible from initial state; nothing to do.
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, prefersReduced]);

  const directionMap: Record<NonNullable<RevealProps["direction"]>, string> = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    none: "none",
  };

  const Comp = as as "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        "reveal",
        (visible || prefersReduced) && "is-visible",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible || prefersReduced ? undefined : directionMap[direction],
      }}
    >
      {children}
    </Comp>
  );
}

