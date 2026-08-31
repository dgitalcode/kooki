"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 1000);
  return () => window.clearInterval(id);
}

function getClientNow() {
  return Math.floor(Date.now() / 1000);
}

function getServerNow() {
  return 0;
}

export function useNow(): Date | null {
  const epochSeconds = useSyncExternalStore(subscribe, getClientNow, getServerNow);
  if (epochSeconds === 0) return null;
  return new Date(epochSeconds * 1000);
}
