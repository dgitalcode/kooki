"use client";

import { useState } from "react";
import { birthdayConfig, copy, formatDisplayDate } from "@/data/config";
import { useNow } from "@/hooks/useNow";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  getCountdown,
  isTimeCapsuleUnlocked,
  padTwo,
} from "@/lib/timeCapsule";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export function TimeCapsule() {
  const now = useNow();
  const reduced = usePrefersReducedMotion();
  const [opened, setOpened] = useState(false);
  const [shown, setShown] = useState(1);

  const unlocked = now
    ? isTimeCapsuleUnlocked(now, birthdayConfig.timeCapsuleUnlock)
    : false;
  const countdown = now
    ? getCountdown(now, birthdayConfig.timeCapsuleUnlock)
    : null;
  const unlockDate = formatDisplayDate(birthdayConfig.timeCapsuleUnlock, "/");
  const lines = copy.capsule.unlockedLines;
  const visibleCount = opened && unlocked ? (reduced ? lines.length : shown) : 0;
  const done = visibleCount >= lines.length;

  return (
    <Section id="capsule" title={copy.capsule.heading} className="story-section-slow">
      <p className="lede">{copy.capsule.teaser}</p>

      {!now ? (
        <p className="empty-note mt-6">...</p>
      ) : unlocked && opened ? (
        <article className="letter-sheet mt-6" aria-live="polite">
          {lines.slice(0, visibleCount).map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn("kiss-beat", index === visibleCount - 1 && "kiss-beat-current")}
            >
              {paragraph}
            </p>
          ))}
          {!done ? (
            <button
              type="button"
              className="btn-romantic mt-2"
              onClick={() => setShown((count) => Math.min(lines.length, count + 1))}
            >
              {copy.capsule.continue}
            </button>
          ) : null}
        </article>
      ) : (
        <div className="mt-6 text-center">
          <div className="capsule-lock" aria-label={copy.a11y.capsuleLock}>
            <p className="capsule-lock-icon" aria-hidden="true">
              🔐
            </p>
            <p className="capsule-lock-label">{copy.capsule.remaining}</p>
            <p className="lede mt-3">
              {copy.capsule.wait.replace("{date}", unlockDate)}
            </p>
          </div>

          {countdown && !unlocked ? (
            <div className="capsule-count" aria-label="شحال باقي حتى يتفتح الباب">
              <TimeUnit value={padTwo(countdown.days)} label="نهار" />
              <TimeUnit value={padTwo(countdown.hours)} label="ساعة" />
              <TimeUnit value={padTwo(countdown.minutes)} label="دقيقة" />
              <TimeUnit value={padTwo(countdown.seconds)} label="ثانية" />
            </div>
          ) : (
            <div className="mt-5" />
          )}

          <button
            type="button"
            className="btn-romantic"
            onClick={() => setOpened(true)}
            aria-expanded={opened}
          >
            🔐 {copy.capsule.open}
          </button>

          {opened && !unlocked ? (
            <p className="empty-note mt-5">{copy.capsule.lockedHint}</p>
          ) : null}
        </div>
      )}
    </Section>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="capsule-unit">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
