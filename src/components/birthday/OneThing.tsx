"use client";

import { useEffect, useState } from "react";
import { oneThingIneverToldYou } from "@/data/config";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function OneThing() {
  const { title, tease, button, lines } = oneThingIneverToldYou;
  const reduced = usePrefersReducedMotion();
  const [started, setStarted] = useState(false);
  const [shown, setShown] = useState(1);

  useEffect(() => {
    if (!started || reduced) return;
    if (shown >= lines.length) return;
    const id = window.setTimeout(() => setShown((count) => count + 1), 1550);
    return () => window.clearTimeout(id);
  }, [started, shown, reduced, lines.length]);

  function begin() {
    setStarted(true);
    setShown(reduced ? lines.length : 1);
  }

  return (
    <Section id="one-thing" title={title} className="story-section-slow">
      {!started ? (
        <div className="one-thing-tease">
          <p className="lede">{tease}</p>
          <button type="button" className="btn-romantic mt-6" onClick={begin}>
            {button}
          </button>
        </div>
      ) : (
        <article className="letter-sheet" aria-live="polite">
          {lines.slice(0, shown).map((line, index) => (
            <p
              key={line}
              className={cn(
                "kiss-beat one-thing-line",
                index === shown - 1 && "kiss-beat-current",
              )}
            >
              {line}
            </p>
          ))}
        </article>
      )}
    </Section>
  );
}
