"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/libs/motion";
import MotionSection from "@/components/ui/MotionSection";
import { Mic, CreditCard, Megaphone, Handshake, Gamepad, DollarSign, Star } from "lucide-react";

const FEATURES = [
  { icon: <Mic size={24} />,       title: "AI-персонаж",     desc: "Створи унікальний анімований персонаж, який стримить за тебе 24/7" },
  { icon: <CreditCard size={24} />, title: "Донати",           desc: "Отримуй стабільний дохід від лояльних глядачів на різних платформах" },
  { icon: <Megaphone size={24} />,  title: "Реклама",          desc: "Укладай вигідні контракти з брендами від $200 за інтеграцію" },
  { icon: <Handshake size={24} />,  title: "Партнерства",      desc: "Масштабуй дохід через партнерські та реферальні програми" },
];

const INCOME_TYPES = [
  { name: "Донати від глядачів",   pct: 88, color: "#FF6A00", icon: <Gamepad size={16} /> },
  { name: "Реклама та інтеграції", pct: 94, color: "#FF8533", icon: <Megaphone size={16} /> },
  { name: "Партнерські програми",  pct: 72, color: "#CC5500", icon: <Handshake size={16} /> },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "#000" }}>
      <div className="container">
        <MotionSection className="text-center mb-12">
          <h2 className="font-display uppercase" style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Чотири види <span style={{ color: "#FF6A00" }}>доходу</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Освой одразу кілька джерел пасивного та активного доходу як анінфлюенсер.
          </p>
        </MotionSection>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          viewport={{ once: true, amount: 0.15 }}
          style={{ gap: 18, marginBottom: 72 }}
        >
          {FEATURES.map(({ icon, title, desc }, i) => (
            <motion.div key={title} variants={fadeUp}>
              <motion.div
                className="card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                style={{ padding: 26, height: "100%", cursor: "default" }}
              >
                <span className="font-display" style={{
                  position: "absolute", right: 14, bottom: 8,
                  fontSize: 80, color: "rgba(255,106,0,0.05)", lineHeight: 1, pointerEvents: "none",
                }}>{i + 1}</span>

                <div style={{
                  width: 52, height: 52,
                  background: "rgba(255,106,0,0.09)", border: "1px solid rgba(255,106,0,0.2)",
                  borderRadius: 13, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 24, marginBottom: 18,
                }}>{icon}</div>

                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, marginBottom: 9 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <MotionSection variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}>
            <motion.div
              style={{ position: "relative" }}
            >
              <div className="glow-orb" style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(255,106,0,0.07)" }} />

              <div className="phone-shell" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ padding: "14px 0 0" }}>
                  <div className="phone-notch" />
                </div>
                <div style={{ padding: "0 16px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>Дохід сьогодні</div>
                      <div className="font-display" style={{ fontSize: 36, color: "#FF6A00" }}>$247.50</div>
                    </div>
                    <div style={{ background: "rgba(50,200,80,0.12)", border: "1px solid rgba(50,200,80,0.28)", borderRadius: 20, padding: "3px 10px", fontSize: 12, color: "#4ade80", fontWeight: 700 }}>
                      ● Live
                    </div>
                  </div>

                  {[
                    { icon: <Gamepad size={14} />,  text: "Стрім активний", info: "318 глядачів онлайн" },
                    { icon: <DollarSign size={14} />, text: "Донат +$50", info: "від user123 • щойно" },
                    { icon: <Star size={14} />,      text: "VIP підписка", info: "+$15/міс • 3хв тому" },
                  ].map(({ icon, text, info }, i) => (
                    <div key={text} style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 10, padding: "9px 12px", marginBottom: 6,
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      animation: `slideInNotif 0.5s ease ${i * 0.15}s both`,
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600 }}>
                        {icon} {text}
                      </span>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.38)" }}>{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </MotionSection>

          <MotionSection variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}>
            <h3 className="font-display" style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, marginBottom: 28, lineHeight: 1.15 }}>
              Ти зможеш набути <span style={{ color: "#FF6A00" }}>три види доходу</span>
            </h3>

            {INCOME_TYPES.map(({ name, pct, color, icon }) => (
              <div key={name} style={{ marginBottom: 22, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600 }}>{icon} {name}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color }}>{pct}%</span>
                </div>
                <div style={{ height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 3, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                    style={{ height: "100%", background: `linear-gradient(90deg, ${color}, ${color}cc)`, borderRadius: 3 }}
                  />
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 28, padding: "18px 20px",
              background: "rgba(255,106,0,0.07)", border: "1px solid rgba(255,106,0,0.2)",
              borderRadius: 14,
            }}>
              <div className="font-display" style={{ fontSize: 26, color: "#FF6A00", marginBottom: 6 }}>
                Середній дохід студентів
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.65 }}>
                Після 30 днів практики наші студенти заробляють від $1,500 до $4,000 на місяць, поєднуючи всі три методи монетизації.
              </p>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}