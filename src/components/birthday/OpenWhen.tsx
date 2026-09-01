"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { openWhenLetters } from "@/data/openWhen";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function OpenWhen() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const reduced = usePrefersReducedMotion();

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <Section id="open-when" title={copy.openWhen.heading}>
      <p className="lede mb-6">{copy.openWhen.lede}</p>
      <ul className="envelope-list">
        {openWhenLetters.map((letter) => {
          const isOpen = openIds.has(letter.id);
          const panelId = `open-when-${letter.id}`;

          return (
            <li key={letter.id}>
              <article className={cn("envelope", isOpen && "is-open", reduced && "is-reduced")}>
                <button
                  type="button"
                  className="envelope-flap"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(letter.id)}
                >
                  <span className="envelope-seal" aria-hidden="true">
                    {letter.seal}
                  </span>
                  <span className="envelope-title">{letter.title}</span>
                  <span className="envelope-hint">
                    {isOpen ? copy.openWhen.close : copy.openWhen.closedHint}
                  </span>
                </button>
                <div
                  id={panelId}
                  className="envelope-body"
                  hidden={!isOpen && reduced}
                  aria-hidden={!isOpen}
                >
                  <p className="envelope-message">{letter.body}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
