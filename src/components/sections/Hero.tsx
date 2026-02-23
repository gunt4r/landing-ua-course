"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideLeft } from "@/libs/motion";
import CTAButton from "@/components/ui/CTAButton";
import { Rocket } from "lucide-react";

const BARS = [35, 50, 42, 68, 55, 80, 65, 88, 74, 96, 82, 100];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 70,
        background: "#000",
      }}
    >
      {/* ── Animated gradient background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(255,106,0,0.13) 0%, transparent 65%)",
        }}
      />

      {/* ── Glow orbs ── */}
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          right: "-80px",
          top: "10%",
          background: "rgba(255,106,0,0.07)",
          animationDelay: "0s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 350,
          height: 350,
          left: "-60px",
          bottom: "5%",
          background: "rgba(255,106,0,0.05)",
          animationDelay: "2s",
        }}
      />

      {/* ── Decorative ring ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: "8%",
          width: 480,
          height: 480,
          border: "1px solid rgba(255,106,0,0.07)",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      />

      <div
        className="container"
        style={{ paddingTop: 80, paddingBottom: 80, position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* ── LEFT: Copy ── */}
          <motion.div variants={staggerContainer(0.12, 0)} initial="hidden" animate="visible">
            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4.5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.5px",
                marginBottom: 22,
              }}
            >
              Як створити{" "}
              <span
                style={{
                  color: "#FF6A00",
                  background: "rgba(255,106,0,0.1)",
                  border: "1px solid rgba(255,106,0,0.3)",
                  borderRadius: 8,
                  padding: "2px 12px",
                }}
              >
                AI-модель
              </span>
              <br />
              і заробляти від <span className="text-gradient">$2500</span> на місяць
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.58)",
                marginBottom: 36,
                maxWidth: 480,
              }}
            >
              Повний онлайн-курс: практичні кейси, шаблони та підтримка. Без досвіду. Перший дохід — уже через 30 днів.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 28, marginBottom: 36, flexWrap: "wrap" }}
            >
              {[
                { v: "$3,164", l: "Середній дохід/міс" },
                { v: "500+", l: "Студентів" },
                { v: "94%", l: "Задоволені" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div className="font-display" style={{ fontSize: 30, color: "#FF6A00", lineHeight: 1 }}>
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.38)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <CTAButton size="xl" pulse>
                <Rocket /> Почати зараз
              </CTAButton>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Income Dashboard Mockup ── */}
          <motion.div variants={slideLeft} initial="hidden" animate="visible" style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              style={{ width: "100%", maxWidth: 420 }}
            >
              <div
                style={{
                  background: "linear-gradient(145deg, #141414, #0d0d0d)",
                  border: "1px solid rgba(255,106,0,0.2)",
                  borderRadius: 24,
                  padding: 28,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(255,106,0,0.08)",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.38)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: 4,
                      }}
                    >
                      Дохід за цей місяць
                    </div>
                    <div className="font-display" style={{ fontSize: 44, color: "#FF6A00", lineHeight: 1 }}>
                      $3,164
                    </div>
                  </div>
                  <div
                    style={{
                      background: "rgba(50,200,80,0.12)",
                      border: "1px solid rgba(50,200,80,0.28)",
                      borderRadius: 20,
                      padding: "4px 12px",
                      fontSize: 13,
                      color: "#4ade80",
                      fontWeight: 700,
                    }}
                  >
                    ↑ +47%
                  </div>
                </div>

                <div
                  style={{
                    background: "#080808",
                    borderRadius: 14,
                    padding: "14px 14px 10px",
                    marginBottom: 18,
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 5,
                    height: 90,
                  }}
                >
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.5 + i * 0.04, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background:
                          i >= 9
                            ? "linear-gradient(180deg,#FF6A00,#CC5500)"
                            : `rgba(255,106,0,${0.12 + i * 0.05})`,
                        borderRadius: "4px 4px 0 0",
                        transformOrigin: "bottom",
                      }}
                    />
                  ))}
                </div>

                {/* Notifications */}
                {[
                  { e: "🪙", t: "Новий донат", v: "+$45", d: "щойно" },
                  { e: "📣", t: "Реклама", v: "+$320", d: "1год тому" },
                  { e: "🌟", t: "VIP підписка", v: "+$15", d: "5хв тому" },
                ].map(({ e, t, v, d }, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.15, duration: 0.4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "rgba(255,106,0,0.1)",
                        borderRadius: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    >
                      {e}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{d}</div>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#FF6A00" }}>{v}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}