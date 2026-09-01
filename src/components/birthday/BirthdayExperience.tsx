"use client";

import { copy } from "@/data/config";
import { BestVideo } from "@/components/birthday/BestVideo";
import { EasterEggProvider, EasterEggs } from "@/components/birthday/EasterEggs";
import { Finale } from "@/components/birthday/Finale";
import { FirstKiss } from "@/components/birthday/FirstKiss";
import { Intro } from "@/components/birthday/Intro";
import { Letter } from "@/components/birthday/Letter";
import { Memories } from "@/components/birthday/Memories";
import { OneThing } from "@/components/birthday/OneThing";
import { OpenWhen } from "@/components/birthday/OpenWhen";
import { Portrait } from "@/components/birthday/Portrait";
import { Reasons } from "@/components/birthday/Reasons";
import { SecretBoxes } from "@/components/birthday/SecretBoxes";
import { TimeCapsule } from "@/components/birthday/TimeCapsule";
import { Timeline } from "@/components/birthday/Timeline";
import { Together } from "@/components/birthday/Together";
import { VoiceMessage } from "@/components/birthday/VoiceMessage";
import { Wish } from "@/components/birthday/Wish";
import { Particles } from "@/components/effects/Particles";
import { Stars } from "@/components/effects/Stars";
import { MusicProvider, MusicToggle } from "@/components/ui/MusicToggle";
import { Progress } from "@/components/ui/Progress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useState } from "react";

export function BirthdayExperience() {
  const [started, setStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const reduced = usePrefersReducedMotion();

  function begin() {
    if (reduced) {
      setStarted(true);
      return;
    }
    setLeaving(true);
    window.setTimeout(() => setStarted(true), 680);
  }

  return (
    <EasterEggProvider>
      <div className="app-shell">
        <Stars />
        <Particles />
        <div className="grain-layer" aria-hidden="true" />

        {!started ? (
          <Intro leaving={leaving} onBegin={begin} />
        ) : (
          <MusicProvider>
            <a className="skip-link" href="#letter">
              {copy.a11y.skip}
            </a>
            <Progress />
            <MusicToggle />
            <main className="story-column story-enter relative z-10 story-main">
              <Letter />
              <VoiceMessage />
              <Timeline />
              <FirstKiss />
              <Memories />
              <Portrait />
              <BestVideo />
              <Reasons />
              <OpenWhen />
              <OneThing />
              <SecretBoxes />
              <Wish />
              <Together />
              <Finale />
              <TimeCapsule />
              <EasterEggs />
            </main>
          </MusicProvider>
        )}
      </div>
    </EasterEggProvider>
  );
}
