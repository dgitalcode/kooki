"use client";

import Image from "next/image";
import { copy } from "@/data/config";
import { timelineMemories } from "@/data/memories";
import { useInView } from "@/hooks/useInView";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <Section id="story" title={copy.timeline.heading}>
      <div ref={ref} className={isInView ? "timeline is-on" : "timeline"}>
        {timelineMemories.map((memory, index) => (
          <Reveal key={memory.id} className="timeline-item" delayMs={index * 40}>
            <article className="timeline-card">
              {memory.image ? (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={memory.image}
                    alt={memory.alt}
                    fill
                    sizes="(max-width: 430px) 80vw, 400px"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="timeline-copy">
                {memory.date ? <p className="timeline-date">{memory.date}</p> : null}
                <h3 className="m-0 text-[1.05rem] font-semibold">{memory.title}</h3>
                <p className="mt-2 mb-0 text-[0.98rem] text-[var(--ink-muted)]">
                  {memory.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
