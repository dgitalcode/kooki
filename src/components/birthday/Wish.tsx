"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const burstStars = [
  { dx: "-42px", dy: "-68px", delay: "0ms" },
  { dx: "8px", dy: "-78px", delay: "40ms" },
  { dx: "46px", dy: "-62px", delay: "80ms" },
  { dx: "-70px", dy: "-18px", delay: "50ms" },
  { dx: "72px", dy: "-12px", delay: "90ms" },
  { dx: "-38px", dy: "48px", delay: "70ms" },
  { dx: "12px", dy: "62px", delay: "30ms" },
  { dx: "52px", dy: "44px", delay: "110ms" },
  { dx: "-12px", dy: "-96px", delay: "20ms" },
  { dx: "0px", dy: "84px", delay: "60ms" },
  { dx: "-88px", dy: "12px", delay: "100ms" },
  { dx: "90px", dy: "18px", delay: "15ms" },
];

export function Wish() {
  const [wished, setWished] = useState(false);
  const [bursting, setBursting] = useState(false);
  const reduced = usePrefersReducedMotion();

  function makeWish() {
    setBursting(true);
    setWished(true);
    window.setTimeout(() => setBursting(false), reduced ? 0 : 1200);
  }

  return (
    <Section id="wish" title={copy.wish.heading}>
      <div className={cn("wish-sky relative", bursting && "is-bursting")}>
        <p className="lede mx-auto max-w-[18rem]">{copy.wish.text}</p>
        <div className="mt-8">
          <button
            type="button"
            className="btn-romantic"
            onClick={makeWish}
            aria-pressed={wished}
          >
            {copy.wish.button}
          </button>
        </div>
        {wished ? <p className="lede mt-8">{copy.wish.after}</p> : null}
        <div className="wish-burst" aria-hidden="true">
          {burstStars.map((star, index) => (
            <span
              key={`${star.dx}-${index}`}
              className="wish-star"
              style={{
                left: "50%",
                top: "58%",
                animationDelay: star.delay,
                ["--dx" as string]: star.dx,
                ["--dy" as string]: star.dy,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
