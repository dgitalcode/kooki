"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { copy } from "@/data/config";
import { getMemoryCaption, hiddenMemory } from "@/data/memories";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type EasterEggContextValue = {
  reveal: (message: string) => void;
};

const EasterEggContext = createContext<EasterEggContextValue | null>(null);

export function useEasterEggs() {
  const value = useContext(EasterEggContext);
  if (!value) {
    throw new Error("useEasterEggs must be used within EasterEggProvider");
  }
  return value;
}

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const reveal = useCallback((next: string) => {
    setMessage(next);
  }, []);

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(() => setMessage(null), 4200);
    return () => window.clearTimeout(timer);
  }, [message]);

  const value = useMemo(() => ({ reveal }), [reveal]);

  return (
    <EasterEggContext.Provider value={value}>
      {children}
      {message ? (
        <div className="easter-toast" role="status">
          {message}
        </div>
      ) : null}
    </EasterEggContext.Provider>
  );
}

export function EasterEggs() {
  const reduced = usePrefersReducedMotion();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [phase, setPhase] = useState<"idle" | "wait" | "ask" | "reveal">("idle");

  useEffect(() => {
    if (!isInView || phase !== "idle") return;
    const timer = window.setTimeout(() => setPhase("wait"), reduced ? 0 : 400);
    return () => window.clearTimeout(timer);
  }, [isInView, phase, reduced]);

  useEffect(() => {
    if (phase !== "wait") return;
    const timer = window.setTimeout(() => setPhase("ask"), reduced ? 200 : 1400);
    return () => window.clearTimeout(timer);
  }, [phase, reduced]);

  return (
    <div ref={ref}>
    <section
      id="more"
      className="story-section min-h-[42vh] pb-[calc(var(--safe-bottom)+5rem)] text-center"
      aria-label="نهاية غير متوقعة"
    >
      {phase === "wait" ? (
        <p
          className="font-serif text-2xl tracking-[0.2em] text-[var(--gold)]"
          dir="ltr"
        >
          {copy.easter.wait}
        </p>
      ) : null}

      {phase === "ask" ? (
        <>
          <p className="section-title">{copy.easter.bottom}</p>
          <button
            type="button"
            className="btn-romantic mt-8"
            onClick={() => setPhase("reveal")}
          >
            {copy.easter.more}
          </button>
        </>
      ) : null}

      {phase === "reveal" ? (
        <article className="glass-card overflow-hidden text-start">
          <div className="relative aspect-[3/4] bg-[#1a1018]">
            {hiddenMemory.image ? (
              <Image
                src={hiddenMemory.image}
                alt={hiddenMemory.alt}
                fill
                sizes="(max-width: 430px) 92vw, 430px"
                className="object-cover"
              />
            ) : null}
          </div>
          <div className="px-4 py-4">
            {hiddenMemory.date ? (
              <p className="timeline-date m-0">{hiddenMemory.date}</p>
            ) : null}
            <h3 className="mt-1 mb-2 text-lg font-semibold">{hiddenMemory.title}</h3>
            <p className="m-0 text-[0.98rem] text-[var(--ink-muted)]">
              {getMemoryCaption(hiddenMemory)}
            </p>
          </div>
        </article>
      ) : null}
    </section>
    </div>
  );
}
