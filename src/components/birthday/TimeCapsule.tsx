"use client";

import { useState } from "react";
import { birthdayConfig, copy, formatDisplayDate } from "@/data/config";
import { useNow } from "@/hooks/useNow";
import {
  getCountdown,
  isTimeCapsuleUnlocked,
  padTwo,
} from "@/lib/timeCapsule";
import { Section } from "@/components/ui/Section";

export function TimeCapsule() {
  const now = useNow();
  const [asked, setAsked] = useState(false);

  const unlocked = now
    ? isTimeCapsuleUnlocked(now, birthdayConfig.timeCapsuleUnlock)
    : false;
  const countdown = now
    ? getCountdown(now, birthdayConfig.timeCapsuleUnlock)
    : null;

  return (
    <Section id="capsule" title={copy.capsule.heading} className="story-section-slow">
      <p className="lede">{copy.capsule.teaser}</p>

      {!now ? (
        <p className="empty-note mt-6">...</p>
      ) : unlocked && asked ? (
        <article className="letter-sheet mt-6">
          {copy.capsule.unlocked.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ) : (
        <div className="mt-6 text-center">
          {countdown ? (
            <div className="capsule-count" aria-label="شحال باقي حتى يتفتح الباب">
              <TimeUnit value={padTwo(countdown.days)} label="نهار" />
              <TimeUnit value={padTwo(countdown.hours)} label="ساعة" />
              <TimeUnit value={padTwo(countdown.minutes)} label="دقيقة" />
              <TimeUnit value={padTwo(countdown.seconds)} label="ثانية" />
            </div>
          ) : null}

          <button
            type="button"
            className="btn-romantic"
            onClick={() => setAsked(true)}
            aria-expanded={asked}
          >
            🔐 {copy.capsule.open}
          </button>

          {asked && !unlocked ? (
            <div className="mt-5">
              <p className="lede">
                {copy.capsule.wait.replace(
                  "{date}",
                  formatDisplayDate(birthdayConfig.timeCapsuleUnlock, "/"),
                )}
              </p>
              <p className="empty-note mt-2">{copy.capsule.lockedHint}</p>
            </div>
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
