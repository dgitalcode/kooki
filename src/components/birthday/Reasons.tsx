"use client";

import { copy } from "@/data/config";
import { reasons } from "@/data/reasons";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Reasons() {
  return (
    <Section id="reasons" title={copy.reasons.heading}>
      <div className="grid gap-3.5">
        {reasons.map((reason, index) => {
          const isLast = index === reasons.length - 1;
          return (
            <Reveal key={reason.id} delayMs={index * 50}>
              <article
                className={cn(
                  "reason-card glass-card px-4 py-4",
                  isLast && "reason-card-last",
                )}
              >
                <p className="reason-number m-0">{reason.number}</p>
                <h3 className="mt-2 mb-2 text-[1.08rem] font-semibold">{reason.title}</h3>
                <p className="m-0 text-[0.98rem] text-[var(--ink-muted)]">{reason.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
