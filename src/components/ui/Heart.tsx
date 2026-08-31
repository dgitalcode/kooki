"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { copy } from "@/data/config";

type HeartProps = {
  onFiveTaps?: () => void;
  className?: string;
  label?: string;
  size?: number;
};

export function Heart({
  onFiveTaps,
  className,
  label = copy.a11y.heart,
  size = 72,
}: HeartProps) {
  const tapsRef = useRef(0);
  const windowStartRef = useRef(0);

  function handleActivate() {
    if (!onFiveTaps) return;
    const now = Date.now();
    if (tapsRef.current === 0 || now - windowStartRef.current > 3200) {
      tapsRef.current = 0;
      windowStartRef.current = now;
    }
    tapsRef.current += 1;
    if (tapsRef.current >= 5) {
      tapsRef.current = 0;
      windowStartRef.current = 0;
      onFiveTaps();
    }
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-h-12 min-w-12 items-center justify-center",
        className,
      )}
      aria-label={label}
      onClick={handleActivate}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M12 20s-6.4-4.13-8.47-7.08C1.7 10.5 2.08 7.4 4.4 6.12c1.7-.94 3.72-.4 4.95 1.05L12 9.9l2.65-2.73c1.23-1.45 3.25-1.99 4.95-1.05 2.32 1.28 2.7 4.38.87 6.8C18.4 15.87 12 20 12 20z"
          fill="url(#heart-fill)"
          stroke="#E6D5B8"
          strokeWidth="0.7"
        />
        <defs>
          <linearGradient id="heart-fill" x1="4" y1="6" x2="18" y2="20">
            <stop offset="0%" stopColor="#C45C6A" />
            <stop offset="100%" stopColor="#8E2F3C" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}
