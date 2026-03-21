"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  delayMs?: number;
};

export function Reveal({ className, children, delayMs = 0, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={
        shown && delayMs > 0
          ? { animationDelay: `${delayMs}ms` }
          : undefined
      }
      className={cn(
        shown
          ? "animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 ease-out"
          : "opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
