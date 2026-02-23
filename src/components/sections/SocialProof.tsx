"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/libs/motion";
import MotionSection from "@/components/ui/MotionSection";
import StatCounter from "@/components/ui/StatCounter";
import CountdownTimer from "@/components/ui/CountdownTimer";
import CTAButton from "@/components/ui/CTAButton";
import { AlarmClock } from "lucide-react"; 
import { ChevronRight } from "lucide-react";


export default function SocialProof() {
  return (
    <>
      <section style={{ padding: "60px 0", background: "rgba(255,106,0,0.04)", borderTop: "1px solid rgba(255,106,0,0.12)", borderBottom: "1px solid rgba(255,106,0,0.12)" }}>
        <div className="container">
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: 32, alignItems: "center",
            }}
          >
            <motion.div variants={fadeUp}><StatCounter value={500}  suffix="+"        label="Студентів пройшли"     /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={2800} prefix="$"        label="Середній дохід / міс"  /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={94}   suffix="%"        label="Задоволених учнів"      /></motion.div>
            <motion.div variants={fadeUp}><StatCounter value={30}                     label="Днів до результату"     /></motion.div>
          </motion.div>
        </div>
      </section>

      <section style={{
        background: "linear-gradient(180deg, #0A0500, #000)",
        borderBottom: "1px solid rgba(255,106,0,0.15)",
        padding: "36px 24px",
        position: "relative", overflow: "hidden",
      }}>
        <div className="glow-orb" style={{
          width: 600, height: 200, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)", background: "rgba(255,106,0,0.5)",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <MotionSection style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 28, flexWrap: "wrap",
          } as React.CSSProperties}>
            <div>
              <div className="flex items-center gap-2.5 justify-center" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 6 }}>
                {<AlarmClock />} 
                <p className="text-sm">Спеціальна пропозиція діє до</p>
              </div>
              <div className="font-display text-center" style={{ fontSize: "clamp(20px,3vw,30px)", fontWeight: 700 }}>
                Не втрачайте <span style={{ color: "#FF6A00" }}>цю пропозицію</span>
              </div>
            </div>
            <CountdownTimer />
            <CTAButton className="flex! w-fit justify-center mx-auto" size="md" pulse>Забрати місце <ChevronRight /></CTAButton>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
