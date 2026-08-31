"use client";

import { copy } from "@/data/config";
import { videoMemory } from "@/data/memories";
import { Section } from "@/components/ui/Section";

export function BestVideo() {
  if (!videoMemory.video) return null;

  return (
    <Section id="video" title={copy.video.heading}>
      <p className="lede mt-0 mb-6">{copy.video.text}</p>
      <div className="video-frame">
        <video
          className="video-el"
          controls
          playsInline
          muted
          preload="metadata"
          poster={videoMemory.image}
          aria-label={videoMemory.alt}
        >
          <source src={videoMemory.video} type="video/mp4" />
        </video>
      </div>
      <p className="empty-note mt-3 text-center">{copy.video.mutedHint}</p>
    </Section>
  );
}
