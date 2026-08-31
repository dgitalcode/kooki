export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

export function parseLocalDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

export function isTimeCapsuleUnlocked(
  now: Date,
  unlockIso: string,
): boolean {
  return now.getTime() >= parseLocalDate(unlockIso).getTime();
}

export function getCountdown(now: Date, unlockIso: string): Countdown {
  const totalMs = Math.max(0, parseLocalDate(unlockIso).getTime() - now.getTime());
  const days = Math.floor(totalMs / 86_400_000);
  const hours = Math.floor((totalMs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((totalMs % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMs % 60_000) / 1000);

  return { days, hours, minutes, seconds, totalMs };
}

export function padTwo(value: number): string {
  return String(value).padStart(2, "0");
}
