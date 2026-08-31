"use client";

import { useEffect, useState } from "react";
import { copy, journeySteps } from "@/data/config";

export function Progress() {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const update = () => {
      const documentElement = document.documentElement;
      const max = documentElement.scrollHeight - window.innerHeight;
      const next = max <= 0 ? 100 : Math.min(100, (window.scrollY / max) * 100);
      setProgress(next);

      const marker = window.innerHeight * 0.38;
      let current = 1;
      for (const item of journeySteps) {
        const node = document.getElementById(item.id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= marker) {
          current = item.n;
        }
      }
      setStep(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const total = journeySteps.length;
  const label = `${copy.progress.label} • ${String(step).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <>
      <div className="progress-track">
        <div
          className="progress-bar"
          role="progressbar"
          aria-label={copy.a11y.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          style={{ width: `${progress}%`, transform: "none" }}
        />
      </div>
      <p className="progress-meta" aria-hidden="true">
        {label}
      </p>
    </>
  );
}
