"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ value, suffix = "", prefix = "", label, duration = 2000 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, duration, inView);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display text-[clamp(32px,5vw,52px)] font-bold leading-none mb-1"
        style={{ color: "#FF6A00" }}
      >
        {prefix}{count.toLocaleString("uk-UA")}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.5px" }}>
        {label}
      </div>
    </div>
  );
}
