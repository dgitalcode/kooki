"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { birthdayConfig, copy } from "@/data/config";
import { audioExists } from "@/lib/audio";

type MusicContextValue = {
  ready: boolean;
  available: boolean;
  playing: boolean;
  muted: boolean;
  volume: number;
  expanded: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggleMute: () => void;
  setVolume: (value: number) => void;
  expand: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const value = useContext(MusicContext);
  if (!value) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return value;
}

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.58);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    audioExists(birthdayConfig.audio.background).then((exists) => {
      if (!cancelled) {
        setAvailable(exists);
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const node = audioRef.current;
    if (!node) return;
    node.volume = muted ? 0 : volume;
  }, [available, muted, volume]);

  const play = useCallback(async () => {
    const node = audioRef.current;
    if (!node || !available) return;
    try {
      await node.play();
      setPlaying(true);
      setExpanded(true);
    } catch {
      setPlaying(false);
    }
  }, [available]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((value) => !value);
  }, []);

  const expand = useCallback(() => setExpanded(true), []);

  const value = useMemo(
    () => ({
      ready,
      available,
      playing,
      muted,
      volume,
      expanded,
      play,
      pause,
      toggleMute,
      setVolume,
      expand,
    }),
    [ready, available, playing, muted, volume, expanded, play, pause, toggleMute, expand],
  );

  return (
    <MusicContext.Provider value={value}>
      {available ? (
        <audio
          ref={audioRef}
          src={birthdayConfig.audio.background}
          preload="none"
          onEnded={() => setPlaying(false)}
        />
      ) : null}
      {children}
    </MusicContext.Provider>
  );
}

export function MusicToggle() {
  const music = useMusic();
  const [missingHint, setMissingHint] = useState(false);

  async function togglePlay() {
    if (!music.available) {
      setMissingHint(true);
      return;
    }
    if (music.playing) {
      music.pause();
      return;
    }
    await music.play();
  }

  return (
    <div className="music-dock">
      <div className="music-panel">
        <button
          type="button"
          className="icon-btn"
          onClick={togglePlay}
          aria-label={
            !music.available
              ? copy.music.missing
              : music.playing
                ? copy.music.pause
                : copy.music.play
          }
          aria-pressed={music.playing}
        >
          {music.playing ? "❚❚" : "♪"}
        </button>

        {music.expanded && music.available ? (
          <>
            <button
              type="button"
              className="icon-btn"
              onClick={music.toggleMute}
              aria-label={music.muted ? copy.music.unmute : copy.music.mute}
              aria-pressed={music.muted}
            >
              {music.muted ? "🔇" : "🔊"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={music.muted ? 0 : music.volume}
              aria-label={copy.music.volume}
              onChange={(event) => {
                const next = Number(event.target.value);
                music.setVolume(next);
                if (next > 0 && music.muted) music.toggleMute();
              }}
            />
          </>
        ) : null}
      </div>

      {missingHint ? (
        <p className="empty-note mt-2 max-w-44 text-xs">{copy.music.missing}</p>
      ) : null}
    </div>
  );
}

export function SongCue() {
  const music = useMusic();

  if (!music.ready) return null;

  if (!music.available) {
    return (
      <div className="song-cue">
        <p className="m-0 text-[0.98rem] text-[var(--ink-muted)]">{copy.music.invite}</p>
        <p className="empty-note mt-3">{copy.music.missing}</p>
      </div>
    );
  }

  if (music.playing) {
    return (
      <div className="song-cue">
        <p className="m-0 text-[0.98rem] text-[var(--gold)]">{copy.music.playing}</p>
      </div>
    );
  }

  return (
    <div className="song-cue">
      <p className="m-0 text-[0.98rem] text-[var(--ink-muted)]">{copy.music.invite}</p>
      <button type="button" className="btn-romantic mt-4" onClick={() => music.play()}>
        {copy.music.play}
      </button>
    </div>
  );
}
