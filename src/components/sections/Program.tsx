"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/libs/motion";
import MotionSection from "@/components/ui/MotionSection";
import CTAButton from "@/components/ui/CTAButton";
import { Rocket, PersonStanding, Smartphone, Gamepad, Briefcase, TrendingUp, ChevronRight } from "lucide-react";

const MODULES = [
  { n: "01", icon: <Rocket size={22} />,       t: "Вступ та основи",        l: 8,  d: "Анінфлюенсинг з нуля. Вибір ніші та технічна база." },
  { n: "02", icon: <PersonStanding size={22} />,         t: "Створення персонажа",    l: 12, d: "Унікальний AI-персонаж: дизайн, анімація, озвучка." },
  { n: "03", icon: <Smartphone size={22} />,  t: "Контент та платформи",   l: 10, d: "Стратегія для TikTok, YouTube, Twitch та Telegram." },
  { n: "04", icon: <Gamepad size={22} />,     t: "Стрімінг та донати",     l: 9,  d: "Налаштування стріму. Психологія утримання аудиторії." },
  { n: "05", icon: <Briefcase size={22} />,   t: "Реклама та угоди",       l: 11, d: "Як знаходити бренди, встановлювати ціни та укладати контракти." },
  { n: "06", icon: <TrendingUp size={22} />,  t: "Масштабування",          l: 7,  d: "Автоматизація, команда та вихід на $5К+ на місяць." },
];

export default function Program() {
  return (
    <section id="program" style={{ padding: "90px 0", background: "#080808" }}>
      <div className="container">
        <MotionSection className="text-center mb-12">
          <h2 className="font-display" style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>
            Що тебе <span style={{ color: "#FF6A00" }}>чекає</span> всередині
          </h2>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 15 }}>57 уроків · 6 модулів · Довічний доступ</p>
        </MotionSection>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 18 }}
        >
          {MODULES.map(({ n, icon, t, l, d }) => (
            <motion.div key={n} variants={fadeUp}>
              <motion.div
                className="card"
                whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(255,106,0,0.4)" }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                style={{ padding: 26, height: "100%", cursor: "default", position: "relative" }}
              >
                {/* BG module number */}
                <span className="font-display" style={{
                  position: "absolute", right: 14, bottom: 10,
                  fontSize: 88, color: "rgba(255,106,0,0.055)", lineHeight: 1, pointerEvents: "none",
                }}>{n}</span>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div style={{
                    background: "rgba(255,106,0,0.1)", border: "1px solid rgba(255,106,0,0.22)",
                    borderRadius: 11, padding: 10, fontSize: 22, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>{icon}</div>
                  <span className="font-display" style={{ fontSize: 20, color: "#FF6A00" }}>Модуль {n}</span>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, marginBottom: 9 }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.46)", lineHeight: 1.65, marginBottom: 18 }}>{d}</p>

                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.32)", fontWeight: 600 }}>
                  <span style={{ width: 6, height: 6, background: "#FF6A00", borderRadius: "50%", display: "inline-block" }} />
                  {l} уроків
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <MotionSection className="text-center">
          <CTAButton size="lg" pulse>Отримати доступ до всіх модулів <ChevronRight /></CTAButton>
        </MotionSection>
      </div>
    </section>
  );
}