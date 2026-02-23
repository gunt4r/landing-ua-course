"use client";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import CTAButton from "@/components/ui/CTAButton";
import { Rocket } from "lucide-react";

export default function FinalCTA() {
  return (
    <section style={{
      padding: "100px 24px 140px",
      background: "linear-gradient(180deg,#000 0%,#070400 35%,#110700 65%,#1a0a00 100%)",
      position: "relative", overflow: "hidden", textAlign: "center",
    }}>
      {/* Intense glow */}
      <div style={{
        position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)",
        width: 900, height: 500,
        background: "radial-gradient(ellipse at bottom,rgba(255,106,0,0.38) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 300,
        background: "radial-gradient(ellipse at top,rgba(255,106,0,0.08) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom border glow */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg,transparent,#FF6A00,#FF8533,#FF6A00,transparent)",
      }} />

      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <MotionSection>
          <h2 className="font-display" style={{
            fontSize: "clamp(32px,6vw,68px)", fontWeight: 800, lineHeight: 1.06,
            marginBottom: 24,
          }}>
            Готові піднятися на{" "}
            <motion.span
              style={{ color: "#FF6A00", display: "inline-block", position: "relative" }}
              animate={{ textShadow: ["0 0 20px rgba(255,106,0,0.3)", "0 0 50px rgba(255,106,0,0.6)", "0 0 20px rgba(255,106,0,0.3)"] }}
              transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
            >
              новий рівень?
            </motion.span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.54)", fontSize: 17, lineHeight: 1.72,
            marginBottom: 44, maxWidth: 540, margin: "0 auto 44px",
          }}>
            Приєднуйтеся до тисяч розробників, які створюють нове покоління інтелекту.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <CTAButton size="lg" pulse><Rocket /> Купити курс зараз</CTAButton>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
