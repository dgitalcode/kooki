"use client";

import { useEffect, useRef, useState } from "react";
import { birthdayConfig, copy } from "@/data/config";
import { audioExists, formatDuration } from "@/lib/audio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Section } from "@/components/ui/Section";

const BAR_COUNT = 28;

export function VoiceMessage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const frameRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let cancelled = false;
    audioExists(birthdayConfig.audio.voice).then((exists) => {
      if (!cancelled) setAvailable(exists);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    drawWave(canvasRef.current, null, reducedMotion);
  }, [available, reducedMotion]);

  useEffect(() => {
    const context = contextRef.current;
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      context?.close().catch(() => undefined);
    };
  }, []);

  function setupAnalyser(audio: HTMLAudioElement) {
    if (sourceRef.current || reducedMotion) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const analyser = context.createAnalyser();
    analyser.fftSize = 64;
    const source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    contextRef.current = context;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }

  function tick() {
    const analyser = analyserRef.current;
    const canvas = canvasRef.current;
    if (!analyser || !canvas) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    drawWave(canvas, data, reducedMotion);
    frameRef.current = requestAnimationFrame(tick);
  }

  async function toggle() {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      return;
    }

    setupAnalyser(audio);
    await contextRef.current?.resume();
    await audio.play();
    setPlaying(true);
    if (!reducedMotion) tick();
  }

  return (
    <Section id="voice" title={copy.voice.heading}>
      <p className="lede mb-6">{copy.voice.subtext}</p>
      <div className="player glass-card">
        {available ? (
          <>
            <audio
              ref={audioRef}
              src={birthdayConfig.audio.voice}
              preload="metadata"
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
              onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime || 0)}
              onEnded={() => {
                setPlaying(false);
                setCurrent(0);
                if (frameRef.current) cancelAnimationFrame(frameRef.current);
              }}
            />
            <div className="player-top">
              <button
                type="button"
                className="icon-btn"
                onClick={toggle}
                aria-label={playing ? copy.voice.pause : copy.voice.listen}
                aria-pressed={playing}
              >
                {playing ? "❚❚" : "▶"}
              </button>
              <canvas
                ref={canvasRef}
                className="waveform"
                width={320}
                height={48}
                aria-hidden="true"
              />
            </div>
            <div className="player-meta">
              <span>{formatDuration(current)}</span>
              <span>{copy.voice.listen}</span>
              <span>{formatDuration(duration)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={current}
                  aria-label="فين وصلات الرسالة"
              onChange={(event) => {
                const audio = audioRef.current;
                const next = Number(event.target.value);
                if (audio) audio.currentTime = next;
                setCurrent(next);
              }}
            />
          </>
        ) : (
          <p className="empty-note">{copy.voice.empty}</p>
        )}
      </div>
    </Section>
  );
}

function drawWave(
  canvas: HTMLCanvasElement | null,
  data: Uint8Array | null,
  reduced: boolean,
) {
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  const { width, height } = canvas;
  context.clearRect(0, 0, width, height);

  const gap = 4;
  const barWidth = (width - gap * (BAR_COUNT - 1)) / BAR_COUNT;

  for (let i = 0; i < BAR_COUNT; i += 1) {
    const sample = data ? data[i % data.length] / 255 : (i % 5) / 8 + 0.18;
    const amplitude = reduced ? 0.28 : Math.max(0.12, sample);
    const barHeight = Math.max(6, amplitude * height * 0.9);
    const x = i * (barWidth + gap);
    const y = (height - barHeight) / 2;
    context.fillStyle = i % 4 === 0 ? "#C9B07A" : "#E8B4B8";
    context.globalAlpha = 0.85;
    context.fillRect(x, y, barWidth, barHeight);
  }
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
