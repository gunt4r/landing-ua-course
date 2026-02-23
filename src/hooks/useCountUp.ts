"use client";
import { useState, useEffect, useRef } from "react";

export function useCountUp(
  target: number,
  duration = 2000,
  start = false
): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const startVal = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);

  return value;
}
