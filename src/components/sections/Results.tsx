"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/libs/motion";
import MotionSection from "@/components/ui/MotionSection";
import CTAButton from "@/components/ui/CTAButton";

const TESTIMONIALS = [
  { init: "ОК", name: "Олексій К.", role: "Геймер, 23 роки",     income: "$2,840/міс", stars: 5, text: "За перший місяць вийшов на стабільний дохід. Куратор допомагав на кожному кроці — рекомендую всім!" },
  { init: "МВ", name: "Марина В.",  role: "Студентка, 20 років", income: "$1,950/міс", stars: 5, text: "Навчилась монетизувати TikTok та Instagram. Результат прийшов швидше, ніж очікувала." },
  { init: "ДЛ", name: "Дмитро Л.", role: "Фрілансер, 28 років",  income: "$3,600/міс", stars: 5, text: "AI-персонаж тепер приносить більше, ніж основна робота. Масштабуюся на нові платформи." },
];

export default function Results() {
  return (
    <section id="results" className="section" style={{ background: "#000" }}>
      <div className="container">
        <MotionSection className="text-center mb-12">
          <h2 className="font-display" style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1 }}>
            Результати наших <span style={{ color: "#FF6A00" }}>студентів</span>
          </h2>
        </MotionSection>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          viewport={{ once: true, amount: 0.15 }}
          style={{ gap: 20, marginBottom: 64 }}
        >
          {TESTIMONIALS.map(({ init, name, role, income, stars, text }) => (
            <motion.div key={name} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(255,106,0,0.32)" }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                style={{
                  background: "#0E0E0E", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18, overflow: "hidden", height: "100%",
                }}
              >
                <div style={{ padding: "24px 24px 18px", background: "rgba(255,106,0,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ color: "#FFD700", fontSize: 13, letterSpacing: 2, marginBottom: 14 }}>{"★".repeat(stars)}</div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;{text}&rdquo;
                  </p>
                </div>
                <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40,
                      background: "linear-gradient(135deg,#FF6A00,#CC5500)",
                      borderRadius: "50%", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 13, fontWeight: 800,
                    }}>{init}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)" }}>{role}</div>
                    </div>
                  </div>
                  <div style={{
                    background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.26)",
                    borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 800, color: "#FF6A00",
                  }}>{income}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <CTAButton className="flex justify-self-center w-max">Почати навчання</CTAButton>
      </div>
    </section>
  );
}
