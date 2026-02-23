"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn } from "@/libs/motion";

// ─── Замінити на свою посилання ──────────────────────
const COURSE_LINK = "https://YOUR_LINK_HERE";
// ─────────────────────────────────────────────────────

// CSS keyframes as a string — avoids Framer Motion's 3-keyframe
// limitation with spring/inertia (only transform+opacity are GPU-safe
// for FM; box-shadow must stay in CSS).
const CSS_ANIMATIONS = `
  @keyframes ty-badge-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(255,106,0,0.30), 0 0 0 0 rgba(255,106,0,0); }
    50%       { box-shadow: 0 0 55px rgba(255,106,0,0.65), 0 0 0 0 rgba(255,106,0,0); }
  }
  @keyframes ty-btn-glow {
    0%, 100% { box-shadow: 0 4px 24px rgba(255,106,0,0.40); }
    50%       { box-shadow: 0 8px 48px rgba(255,106,0,0.65); }
  }
  @keyframes ty-shine {
    0%   { transform: translateX(-120%); }
    60%  { transform: translateX(220%);  }
    100% { transform: translateX(220%);  }
  }
  .ty-badge-glow { animation: ty-badge-glow 2.5s ease-in-out infinite; }
  .ty-btn-glow   { animation: ty-btn-glow   2.5s ease-in-out infinite; }
  .ty-shine      { animation: ty-shine      4s   ease-in-out infinite; }
  @media (max-width: 768px) { .ty-steps { grid-template-columns: 1fr !important; } }
  @media (max-width: 640px) { .ty-steps { gap: 14px !important; } }
  @media (prefers-reduced-motion: reduce) {
    .ty-badge-glow, .ty-btn-glow, .ty-shine { animation: none !important; }
  }
`;

const WHAT_NEXT = [
  { icon: "📩", step: "01", title: "Перевір email",        desc: "Ми надіслали лист з деталями доступу. Перевір також папку «Спам»." },
  { icon: "🔐", step: "02", title: "Увійди на платформу",  desc: "Натисни кнопку нижче або перейди за посиланням у листі." },
  { icon: "🚀", step: "03", title: "Починай навчання",     desc: "Перший модуль вже чекає тебе. Результат — за 30 днів." },
];

export default function ThankYou() {
  return (
    <section
      style={{
        minHeight: "80vh",
        background: "linear-gradient(180deg, #000 0%, #080500 40%, #0f0700 75%, #000 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px 120px",
      }}
    >
      {/* ── Background glow orbs ── */}
      <div
        style={{
          position: "absolute", top: "10%", left: "50%",
          transform: "translateX(-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse, rgba(255,106,0,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(20px)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 360, height: 360,
          right: "-80px", top: "20%",
          background: "rgba(255,106,0,0.06)",
          animationDelay: "0s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 260, height: 260,
          left: "-60px", bottom: "15%",
          background: "rgba(255,106,0,0.04)",
          animationDelay: "2s",
        }}
      />

      {/* ── Decorative ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 700, height: 700,
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(255,106,0,0.05)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: 500, height: 500,
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(255,106,0,0.07)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom accent line ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #FF6A00, #FF8533, #FF6A00, transparent)",
      }} />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <motion.div
          variants={staggerContainer(0.13, 0)}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}
        >

          {/* ── Checkmark badge ── */}
          <motion.div variants={scaleIn} style={{ marginBottom: 28, display: "flex", justifyContent: "center" }}>
            {/* boxShadow pulse via CSS — Framer Motion only supports 2 keyframes with spring/inertia */}
            <div
              className="ty-badge-glow"
              style={{
                width: 88, height: 88,
                background: "linear-gradient(135deg, #FF6A00, #CC5500)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 38,
                position: "relative",
              }}
            >
              ✓
              {/* Pulse ring — scale+opacity only, safe for Framer Motion */}
              <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity }}
                style={{
                  position: "absolute", inset: -2,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,106,0,0.5)",
                }}
              />
            </div>
          </motion.div>

          {/* ── Label ── */}
          <motion.div variants={fadeUp} style={{ marginBottom: 18 }}>
            <span className="section-pill">🎉 Покупка підтверджена</span>
          </motion.div>

          {/* ── Main heading ── */}
          <motion.h1
            variants={fadeUp}
            className="font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.5px",
              marginBottom: 20,
            }}
          >
            Дякуємо за{" "}
            <span
              style={{
                color: "#FF6A00",
                position: "relative",
                display: "inline-block",
              }}
            >
              покупку!
              {/* Underline */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "absolute", bottom: -6, left: 0, width: "100%", overflow: "visible" }}
                viewBox="0 0 200 10"
                fill="none"
              >
                <motion.path
                  d="M3 6 C50 2, 150 2, 197 6"
                  stroke="#FF6A00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* ── Subtitle ── */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 520,
              margin: "0 auto 44px",
            }}
          >
            Ти зробив правильний вибір. Тепер твій шлях до{" "}
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>$2500+ на місяць</span>{" "}
            починається прямо зараз.
          </motion.p>

          {/* ── CTA button ── */}
          <motion.div variants={fadeUp} style={{ marginBottom: 52 }}>
            {/* boxShadow pulse via CSS class — FM can't tween 3-keyframe box-shadow with spring */}
            <motion.a
              href={COURSE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ty-btn-glow"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 16 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "linear-gradient(135deg, #FF6A00, #CC5500)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "clamp(15px, 2vw, 18px)",
                padding: "18px 52px",
                borderRadius: "var(--radius)",
                textDecoration: "none",
                letterSpacing: "0.2px",
                border: "none",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Shine sweep — translateX only, safe for Framer Motion */}
              <span
                className="ty-shine"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              <span style={{ fontSize: 20 }}>🚀</span>
              Перейти до курсу
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              Або перейди за посиланням із підтверджуючого листа
            </p>
          </motion.div>

        </motion.div>

        {/* ── What's next steps ── */}
        <motion.div
          variants={staggerContainer(0.12, 0.6)}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          {WHAT_NEXT.map(({ icon, step, title, desc }) => (
            <motion.div
              key={step}
              variants={fadeUp}
            >
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(255,106,0,0.38)" }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                style={{
                  background: "#0E0E0E",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18,
                  padding: "26px 22px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Step number bg */}
                <span
                  className="font-display"
                  style={{
                    position: "absolute", right: 12, bottom: 8,
                    fontSize: 72, color: "rgba(255,106,0,0.05)",
                    lineHeight: 1, pointerEvents: "none", userSelect: "none",
                  }}
                >{step}</span>

                <div style={{
                  width: 54, height: 54,
                  background: "rgba(255,106,0,0.09)",
                  border: "1px solid rgba(255,106,0,0.2)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                  margin: "0 auto 16px",
                }}>{icon}</div>

                <h3
                  className="font-display"
                  style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}
                >{title}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.46)", lineHeight: 1.65 }}>
                  {desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{CSS_ANIMATIONS}</style>
    </section>
  );
}
