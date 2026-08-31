"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { copy } from "@/data/config";
import { galleryMemories, getMemoryCaption, type Memory } from "@/data/memories";
import { Section } from "@/components/ui/Section";

export function Memories() {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <Section id="memories" title={copy.memories.heading}>
      <div className="polaroid-rail" role="list">
        {galleryMemories.map((memory) => (
          <button
            key={memory.id}
            type="button"
            role="listitem"
            className="polaroid"
            onClick={() => setSelected(memory)}
            aria-label={`${memory.title}. ${getMemoryCaption(memory)}`}
          >
            <span className="relative block aspect-[3/4] overflow-hidden bg-[#d9c7b4]">
              {memory.image ? (
                <Image
                  src={memory.image}
                  alt=""
                  fill
                  sizes="(max-width: 430px) 70vw, 270px"
                  className="object-cover"
                />
              ) : null}
            </span>
            <span className="polaroid-caption">{memory.title}</span>
          </button>
        ))}
      </div>

      {selected ? (
        <MemoryLightbox memory={selected} onClose={() => setSelected(null)} />
      ) : null}
    </Section>
  );
}

function MemoryLightbox({
  memory,
  onClose,
}: {
  memory: Memory;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="lightbox-card glass-card p-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[0.9rem]">
          {memory.image ? (
            <Image
              src={memory.image}
              alt={memory.alt}
              fill
              sizes="(max-width: 430px) 92vw, 430px"
              className="object-cover"
              priority
            />
          ) : null}
        </div>
        <h3 id={titleId} className="mt-3 mb-1 text-lg font-semibold">
          {memory.title}
        </h3>
        <p className="mt-0 text-[0.98rem] text-[var(--ink-muted)]">
          {getMemoryCaption(memory)}
        </p>
        <button type="button" className="btn-romantic mt-4" onClick={onClose}>
          {copy.memories.close}
        </button>
      </div>
    </div>
  );
}
