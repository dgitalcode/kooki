"use client";

import { useState } from "react";
import { copy } from "@/data/config";
import { secrets } from "@/data/secrets";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function SecretBoxes() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="secrets" title={copy.secrets.heading}>
      <div className="secret-grid">
        {secrets.map((secret) => {
          const isOpen = openId === secret.id;
          return (
            <button
              key={secret.id}
              type="button"
              className={cn("secret-scene p-0 text-start", isOpen && "is-open")}
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : secret.id)}
            >
              {reduced ? (
                <div className="glass-card secret-face relative min-h-[180px]">
                  <p className="reason-number m-0">{secret.number}</p>
                  <div>
                    <h3 className="mt-3 mb-2 text-base font-semibold">{secret.title}</h3>
                    {isOpen ? (
                      <p className="m-0 whitespace-pre-line text-[0.95rem] text-[var(--ink-muted)]">
                        {secret.text}
                      </p>
                    ) : (
                      <p className="m-0 text-sm text-[var(--gold-soft,#E6D5B8)]">
                        {copy.secrets.hint}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <span className="secret-inner block">
                  <span className="secret-face glass-card">
                    <span className="reason-number">{secret.number}</span>
                    <span>
                      <span className="block text-base font-semibold">{secret.title}</span>
                      <span className="mt-2 block text-sm text-[var(--gold)]">
                        {copy.secrets.hint}
                      </span>
                    </span>
                  </span>
                  <span className="secret-face secret-back glass-card">
                    <span className="reason-number">{secret.number}</span>
                    <span className="whitespace-pre-line text-[0.95rem] leading-7">
                      {secret.text}
                    </span>
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </Section>
  );
}
