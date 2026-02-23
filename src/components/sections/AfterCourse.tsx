"use client";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import CTAButton from "@/components/ui/CTAButton";
import { slideRight, slideLeft } from "@/libs/motion";
import { ChevronRight } from 'lucide-react';

const RESULTS = [
  "Стабільний пасивний дохід навіть без активного стріму",
  "Дохід зростає щомісяця без пропорційних витрат часу",
  "Повна незалежність від офісу та роботодавця",
  "Глобальна аудиторія та міжнародні рекламодавці",
  "Система працює 24/7 — навіть уві сні",
];

export default function AfterCourse() {
  return (
    <section style={{ padding: "90px 0 0 0", background: "#000" }}>
      <div className="container">
        <MotionSection style={{ textAlign: "center", marginBottom: 56 } as React.CSSProperties}>
          <h2 className="font-display" style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1 }}>
            Твій <span style={{ color: "#FF6A00" }}>телефон</span> виглядатиме ось так
          </h2>
        </MotionSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

          <MotionSection className="mt-5" variants={slideRight}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                style={{ width: "100%", maxWidth: 290 }}
              >
                <div className="phone-shell">
                  <div style={{ background: "#0a0a0a", padding: "12px 20px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 700 }}>9:41</span>
                    <div className="phone-notch" style={{ width: 72, height: 16, background: "#111", borderRadius: "0 0 10px 10px", margin: "0" }} />
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>●●●</span>
                  </div>
                  <div style={{ padding: "10px 14px 22px" }}>
                    {/* Balance */}
                    <div style={{
                      background: "linear-gradient(135deg,rgba(255,106,0,0.15),rgba(255,106,0,0.05))",
                      border: "1px solid rgba(255,106,0,0.25)", borderRadius: 14,
                      padding: "16px 14px", marginBottom: 12, textAlign: "center",
                    }}>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                        Баланс цього місяця
                      </div>
                      <div className="font-display" style={{ fontSize: 42, color: "#FF6A00", lineHeight: 1 }}>$3,241</div>
                      <div style={{ fontSize: 11, color: "#4ade80", fontWeight: 600, marginTop: 4 }}>↑ +$847 цього тижня</div>
                    </div>

                    {/* Mini chart */}
                    <div style={{
                      background: "#090909", borderRadius: 10, padding: "8px 10px",
                      marginBottom: 10, display: "flex", alignItems: "flex-end",
                      gap: 3, height: 56,
                    }}>
                      {[30,52,40,70,58,88,68,95,78,100].map((h,i)=>(
                        <div key={i} style={{
                          flex: 1, height: `${h}%`,
                          background: i>=7 ? "linear-gradient(180deg,#FF6A00,#CC5500)" : `rgba(255,106,0,${0.15+i*0.05})`,
                          borderRadius: "2px 2px 0 0",
                        }}/>
                      ))}
                    </div>

                    {[
                      { e: "💰", l: "Донат ×12",        v: "+$156" },
                      { e: "📢", l: "Реклама бренду",   v: "+$450" },
                      { e: "⭐", l: "VIP підписки ×8",  v: "+$120" },
                    ].map(({ e, l, v }) => (
                      <div key={l} style={{
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "7px 10px", background: "rgba(255,255,255,0.03)",
                        borderRadius: 9, marginBottom: 5,
                      }}>
                        <span style={{ fontSize: 14 }}>{e}</span>
                        <span style={{ fontSize: 11, flex: 1, color: "rgba(255,255,255,0.65)" }}>{l}</span>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#FF6A00" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </MotionSection>

          {/* Results list */}
          <MotionSection variants={slideLeft}>
            <h3 className="font-display" style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 28 }}>
              Ти будеш отримувати <span style={{ color: "#FF6A00" }}>гроші</span> навіть уві сні
            </h3>

            <div style={{ marginBottom: 32 }}>
              {RESULTS.map(r => (
                <div key={r} className="check-item" style={{ marginBottom: 16 }}>
                  <div className="check-dot" style={{ width: 22, minWidth: 22, height: 22 }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 15 }}>{r}</span>
                </div>
              ))}
            </div>

            <CTAButton size="lg">Хочу такий результат <ChevronRight /></CTAButton>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
