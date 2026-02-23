"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/libs/motion";
import MotionSection from "@/components/ui/MotionSection";
import CTAButton from "@/components/ui/CTAButton";
import { Gamepad, Palette, Smartphone, Briefcase, UserCheck, ChevronRight } from "lucide-react";

const WHO = [
  { icon: <Gamepad size={26} />,       t: "Геймери",       d: "Монетизуй стрімінг та ігровий контент з нуля" },
  { icon: <Palette size={26} />,       t: "Творці",        d: "Перетвори творчість на стабільне джерело доходу" },
  { icon: <Smartphone size={26} />,    t: "SMM / Блогери", d: "Розшир та диверсифікуй монетизацію соцмереж" },
  { icon: <Briefcase size={26} />,     t: "Фрілансери",    d: "Додай пасивний дохід до основного заробітку" },
  { icon: <UserCheck size={26} />,     t: "Початківці",    d: "Почни з нуля та отримай перший дохід уже за місяць" },
];

export default function ForWhom() {
  return (
    <section style={{ padding: "90px 0", background: "#080808", overflow: "hidden" }}>
      <div className="container">
        <MotionSection className="text-center mb-12">
          <h2 className="font-display" style={{ fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1 }}>
            Цей курс <span style={{ color: "#FF6A00" }}>для тебе</span>, якщо...
          </h2>
        </MotionSection>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-15"
        >
          {WHO.map(({ icon, t, d }) => (
            <motion.div key={t} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(255,106,0,0.4)" }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                style={{
                  background: "#0E0E0E", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18, padding: "28px 18px 22px", textAlign: "center",
                  cursor: "default", height: "100%",
                }}
              >
                <div style={{
                  width: 64, height: 64, margin: "0 auto 16px",
                  background: "linear-gradient(145deg,rgba(255,106,0,0.14),rgba(255,106,0,0.04))",
                  border: "1.5px solid rgba(255,106,0,0.2)", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>{d}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA block with car */}
        <MotionSection>
          <div style={{
            background: "linear-gradient(135deg,#0d0600,#140900)",
            border: "1px solid rgba(255,106,0,0.18)",
            borderRadius: 22, padding: "46px 52px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 36, alignItems: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div className="glow-orb hide-mobile" style={{ width: 350, height: 200, right: 80, top: "50%", transform: "translateY(-50%)", background: "rgba(255,106,0,0.07)" }} />
            <div style={{ position: "relative" }}>
              <h3 className="font-display" style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>
                Якщо ти впізнаєш себе хоч в{" "}
                <span style={{ color: "#FF6A00" }}>одному пункті</span> — курс для тебе
              </h3>
              <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 520 }}>
                Без попереднього досвіду. Лише 1-2 год/день. Пройдемо від нуля до першого доходу разом.
              </p>
              <CTAButton size="md">Хочу на курс <ChevronRight /></CTAButton>
            </div>
            <motion.div
              className="hide-mobile"
              animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              style={{ fontSize: 96, filter: "drop-shadow(0 20px 40px rgba(255,106,0,0.28))", position: "relative", zIndex: 1 }}
            >🏎️
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}