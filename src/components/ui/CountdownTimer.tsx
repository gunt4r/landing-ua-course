"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [t, setT] = useState({ h: 3, m: 12, s: 0 });

  useEffect(() => {
    const iv = setInterval(() => {
      setT((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const Box = ({ val, lbl }: { val: number; lbl: string }) => (
    <div className="countdown-box">
      <div
        className="font-display font-bold leading-none"
        style={{ fontSize: "clamp(32px,5vw,48px)", color: "#FF6A00" }}
      >
        {pad(val)}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginTop: 4 }}>
        {lbl}
      </div>
    </div>
  );

  return (
    <div className="justify-center my-10" style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Box val={t.h} lbl="Год" />
      <span className="font-display font-bold" style={{ fontSize: 36, color: "#FF6A00" }}>:</span>
      <Box val={t.m} lbl="Хв" />
      <span className="font-display font-bold" style={{ fontSize: 36, color: "#FF6A00" }}>:</span>
      <Box val={t.s} lbl="Сек" />
    </div>
  );
}
