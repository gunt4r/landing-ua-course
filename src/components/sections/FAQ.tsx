"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";

const FAQS = [
  { q: "Чи потрібен попередній досвід?",
    a: "Ні! Курс розроблений для повних початківців. Ми починаємо з абсолютного нуля та поступово пояснюємо кожен крок. Потрібен лише смартфон або комп'ютер та бажання вчитись." },
  { q: "Скільки часу потрібно приділяти навчанню?",
    a: "Достатньо 1-2 години на день. Курс розрахований на 30 днів, але ви маєте довічний доступ і можете проходити у власному темпі — жодних дедлайнів." },
  { q: "Коли можна очікувати перший дохід?",
    a: "Більшість студентів отримують перший дохід вже на 2-3 тижні навчання. Серйозні результати ($1К+/міс) зазвичай приходять через 30-60 днів активної практики." },
  { q: "Що якщо мені не підійде курс?",
    a: "Ми надаємо 14-денну гарантію повернення коштів. Якщо курс вам не підійшов — просто напишіть нам, і ми повернемо 100% оплати без жодних питань." },
  { q: "Чи є підтримка після проходження курсу?",
    a: "Так! Усі студенти отримують довічний доступ до закритого ком'юніті. Преміум-студенти також мають особистого куратора протягом 3 місяців після завершення." },
  { q: "На яких платформах можна працювати?",
    a: "Ми навчаємо монетизації на Twitch, YouTube, TikTok, Instagram, Telegram та інших. Ви самі обираєте платформи, що вам до душі." },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="faq-item">
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 20,
          padding: "22px 28px", background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            width: 34, height: 34, flexShrink: 0,
            background: isOpen ? "#FF6A00" : "rgba(255,106,0,0.09)",
            border: "1px solid rgba(255,106,0,0.28)",
            borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M2 7H12" stroke={isOpen ? "#fff" : "#FF6A00"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px 22px", fontSize: 14, color: "rgba(255,255,255,0.56)", lineHeight: 1.72 }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "80px 0 100px", background: "#000" }}>
      <div className="container">
        <MotionSection className="text-center mb-4" style={{ textAlign: "center" } as React.CSSProperties}>
          <span className="uppercase" style={{ marginBottom: 18, display: "inline-flex", fontSize: 'clamp(32px, 2.5vw, 48px)', fontWeight: 600 }}>Питання</span>
        </MotionSection>

        <MotionSection>
          <div style={{
            background: "#0E0E0E", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20, overflow: "hidden",
            maxWidth: 820, margin: "0 auto",
          }}>
            {FAQS.map((f, i) => (
              <FAQItem
                key={i}
                q={f.q} a={f.a}
                isOpen={open === i}
                toggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
