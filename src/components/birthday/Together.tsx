"use client";

import Image from "next/image";
import { copy } from "@/data/config";
import { togetherMemory } from "@/data/memories";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Together() {
  if (!togetherMemory.image) return null;

  return (
    <Section id="together" title={copy.together.heading} className="story-section-slow">
      <Reveal>
        <p className="lede mt-0">{copy.together.line1}</p>
      </Reveal>

      <Reveal delayMs={720}>
        <figure className="together-frame together-glow mt-8">
          <Image
            src={togetherMemory.image}
            alt={togetherMemory.alt}
            width={960}
            height={1280}
            sizes="(max-width: 430px) 88vw, 480px"
            className="h-auto w-full"
          />
          <figcaption className="together-sign">{copy.together.sign}</figcaption>
        </figure>
      </Reveal>

      <Reveal delayMs={1280}>
        <p className="lede together-pause">{copy.together.line2}</p>
      </Reveal>
      <Reveal delayMs={1560}>
        <p className="lede">{copy.together.line3}</p>
      </Reveal>
      <Reveal delayMs={1840}>
        <p className="lede">{copy.together.line4}</p>
      </Reveal>
    </Section>
  );
}
