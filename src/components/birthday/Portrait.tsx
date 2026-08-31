"use client";

import Image from "next/image";
import { copy } from "@/data/config";
import { portraitMemory } from "@/data/memories";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Portrait() {
  if (!portraitMemory.image) return null;

  return (
    <Section id="portrait" title={copy.portrait.heading}>
      <Reveal>
        <p className="lede mt-0">{copy.portrait.line1}</p>
      </Reveal>
      <Reveal delayMs={80}>
        <p className="lede">{copy.portrait.line2}</p>
      </Reveal>
      <Reveal delayMs={120}>
        <p className="lede">{copy.portrait.line3}</p>
      </Reveal>
      <Reveal delayMs={160}>
        <p className="portrait-name">{copy.portrait.line4}</p>
      </Reveal>

      <Reveal delayMs={200}>
        <figure className="portrait-frame mt-8">
          <Image
            src={portraitMemory.image}
            alt={portraitMemory.alt}
            width={540}
            height={960}
            sizes="(max-width: 430px) 88vw, 420px"
            className="h-auto w-full"
          />
        </figure>
      </Reveal>
    </Section>
  );
}
