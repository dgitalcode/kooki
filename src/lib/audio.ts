export async function audioExists(src: string): Promise<boolean> {
  try {
    const response = await fetch(src, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      cache: "no-store",
    });
    return response.ok;
  } catch {
    return false;
  }
}

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }

  const whole = Math.floor(seconds);
  const mins = Math.floor(whole / 60);
  const secs = whole % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
