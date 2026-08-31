"use client";

import { copy } from "@/data/config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const paragraphs = copy.letter.body.split("\n\n");

export function Letter() {
  return (
    <Section id="letter" title={copy.letter.heading} className="section-first story-section-slow">
      <article className="letter-sheet">
        {paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph} delayMs={index * 160}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </article>
    </Section>
  );
}
