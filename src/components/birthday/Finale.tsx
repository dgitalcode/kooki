"use client";

import { birthdayConfig, copy, formatDisplayDate } from "@/data/config";
import { useInView } from "@/hooks/useInView";
import { useEasterEggs } from "@/components/birthday/EasterEggs";
import { HeartDust } from "@/components/effects/HeartDust";
import { Heart } from "@/components/ui/Heart";
import { SongCue } from "@/components/ui/MusicToggle";
import { cn } from "@/lib/cn";

const yearlyLines = copy.finale.yearly.split("\n").filter(Boolean);

export function Finale() {
  const { ref, isInView } = useInView({ threshold: 0.18 });
  const { reveal } = useEasterEggs();

  return (
    <div ref={ref}>
      <section
        id="finale"
        className={cn("finale story-section story-section-slow", isInView && "is-on")}
        aria-labelledby="finale-title"
      >
        <HeartDust />
        <p className="finale-line" style={{ animationDelay: "0.4s" }}>
          {copy.finale.before}
        </p>
        <p
          className="finale-line finale-gap"
          style={{ animationDelay: "1.8s" }}
          id="finale-title"
        >
          {copy.finale.want}
        </p>
        <p
          className="finale-line finale-name"
          style={{ animationDelay: "3.4s" }}
        >
          {copy.finale.name}
        </p>
        <div className="finale-heart">
          <Heart onFiveTaps={() => reveal(copy.easter.heart)} size={86} />
        </div>
        <p
          className="finale-line finale-greeting"
          style={{ animationDelay: "5.1s" }}
        >
          {copy.finale.greeting}
        </p>
        {yearlyLines.map((line, index) => (
          <p
            key={line}
            className="finale-line finale-year"
            style={{ animationDelay: `${6.6 + index * 1.15}s` }}
          >
            {line}
          </p>
        ))}
        <p className="finale-line finale-date" style={{ animationDelay: "10.4s" }}>
          {formatDisplayDate(birthdayConfig.birthday)}
        </p>
        <p
          className="finale-line finale-english"
          dir="ltr"
          style={{ animationDelay: "11.8s" }}
        >
          {copy.finale.english}
        </p>
        <div className="finale-song finale-line" style={{ animationDelay: "13s" }}>
          <SongCue />
        </div>
      </section>
    </div>
  );
}
