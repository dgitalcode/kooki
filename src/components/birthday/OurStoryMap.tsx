"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { storyMapNodes } from "@/data/storyMap";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function OurStoryMap() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = usePrefersReducedMotion();
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <Section id="map" title={copy.map.heading} className="story-section-slow">
      <p className="lede mb-7">{copy.map.lede}</p>
      <div ref={ref}>
        <ol className={cn("story-map", isInView && "is-on", reduced && "is-reduced")}>
          {storyMapNodes.map((node, index) => {
            const isOpen = openId === node.id;
            const panelId = `story-map-${node.id}`;

            return (
              <li
                key={node.id}
                className={cn(
                  "story-map-item",
                  isOpen && "is-open",
                  index % 2 === 1 && "is-offset",
                )}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span className="story-map-dot" aria-hidden="true" />
                {index % 2 === 0 ? (
                  <span className="story-map-heart" aria-hidden="true">
                    ♡
                  </span>
                ) : null}
                <button
                  type="button"
                  className="story-map-node"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : node.id)}
                >
                  {node.date ? <span className="story-map-date">{node.date}</span> : null}
                  <span className="story-map-title">{node.title}</span>
                  {!isOpen ? (
                    <span className="story-map-hint">{copy.map.hint}</span>
                  ) : null}
                </button>
                <div
                  id={panelId}
                  className="story-map-memory"
                  hidden={!isOpen && reduced}
                  aria-hidden={!isOpen}
                >
                  <p>{node.memory}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
