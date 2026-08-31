"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn("reveal", isInView && "is-on", className)}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
