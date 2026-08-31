"use client";

import { useRef, useState, type PointerEvent } from "react";
import { birthdayConfig, copy, formatIntroDate } from "@/data/config";
import { useEasterEggs } from "@/components/birthday/EasterEggs";

type IntroProps = {
  onBegin: () => void;
  leaving?: boolean;
};

export function Intro({ onBegin, leaving = false }: IntroProps) {
  const { reveal } = useEasterEggs();
  const [stage, setStage] = useState<"gate" | "breath">("gate");
  const pressTimer = useRef<number | null>(null);
  const startX = useRef(0);
  const startY = useRef(0);

  function startPress(event: PointerEvent<HTMLButtonElement>) {
    startX.current = event.clientX;
    startY.current = event.clientY;
    pressTimer.current = window.setTimeout(() => {
      reveal(copy.easter.logo);
      pressTimer.current = null;
    }, 720);
  }

  function endPress() {
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  }

  function onMove(event: PointerEvent<HTMLButtonElement>) {
    const dx = event.clientX - startX.current;
    const dy = event.clientY - startY.current;
    if (Math.hypot(dx, dy) > 12) endPress();
  }

  return (
    <section
      className={leaving ? "intro-screen is-leaving" : "intro-screen"}
      aria-labelledby="intro-title"
    >
      <div className="story-column">
        <time className="intro-date" dateTime={birthdayConfig.birthday}>
          {formatIntroDate(birthdayConfig.birthday)}
        </time>

        <h1 id="intro-title" className="intro-title">
          <button
            type="button"
            onPointerDown={startPress}
            onPointerMove={onMove}
            onPointerUp={endPress}
            onPointerLeave={endPress}
            onPointerCancel={endPress}
            onContextMenu={(event) => event.preventDefault()}
            className="select-none bg-transparent p-0 text-inherit [-webkit-touch-callout:none]"
            aria-label={`${birthdayConfig.title}. ضغط مطوّل.`}
          >
            {birthdayConfig.title}
          </button>
        </h1>

        <div key={stage}>
          {stage === "gate" ? (
            <>
              <p className="intro-copy">{copy.intro.line}</p>
              <div className="intro-actions">
                <button
                  type="button"
                  className="btn-romantic"
                  onClick={() => setStage("breath")}
                >
                  {copy.intro.enter}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="intro-copy">{copy.intro.breathTitle}</p>
              <p className="intro-copy mt-4">{copy.intro.breath}</p>
              <p className="intro-copy mt-6 text-[var(--ink)]">{copy.intro.ready}</p>
              <div className="intro-actions">
                <button type="button" className="btn-romantic" onClick={onBegin}>
                  {copy.intro.begin}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
