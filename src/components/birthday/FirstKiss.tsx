"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function FirstKiss() {
  const beats = copy.kiss.beats;
  const [shown, setShown] = useState(1);
  const done = shown >= beats.length;

  function revealNext() {
    setShown((count) => Math.min(beats.length, count + 1));
  }

  return (
    <Section id="kiss" title={copy.kiss.heading} className="story-section-slow">
      <div className="letter-sheet">
        {beats.slice(0, shown).map((beat, index) => (
          <p
            key={beat}
            className={cn("kiss-beat", index === shown - 1 && "kiss-beat-current")}
          >
            {beat}
          </p>
        ))}

        {!done ? (
          <button type="button" className="btn-romantic mt-2" onClick={revealNext}>
            {shown === 1 ? copy.kiss.hint : copy.kiss.continue}
          </button>
        ) : null}
      </div>
    </Section>
  );
}
