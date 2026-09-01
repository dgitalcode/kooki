"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function FirstKiss() {
  const beats = copy.kiss.beats;
  const [shown, setShown] = useState(1);
  const done = shown >= beats.length;
  const lastIndex = beats.length - 1;

  function revealNext() {
    setShown((count) => Math.min(beats.length, count + 1));
  }

  return (
    <Section id="kiss" title={copy.kiss.heading} className="story-section-slow">
      <div className="letter-sheet kiss-stage">
        {beats.slice(0, shown).map((beat, index) => {
          const isFinal = done && index === lastIndex;
          return (
            <p
              key={beat}
              className={cn(
                "kiss-beat",
                index === shown - 1 && "kiss-beat-current",
                isFinal && "kiss-final",
              )}
            >
              {beat}
            </p>
          );
        })}

        {done ? (
          <span className="kiss-hearts" aria-hidden="true">
            <i>♡</i>
            <i>♡</i>
            <i>♡</i>
            <i>♡</i>
          </span>
        ) : (
          <button type="button" className="btn-romantic mt-2" onClick={revealNext}>
            {shown === 1 ? copy.kiss.hint : copy.kiss.continue}
          </button>
        )}
      </div>
    </Section>
  );
}
