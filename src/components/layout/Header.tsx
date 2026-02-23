"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

const navLinks = [
  { href: "#about",   label: "Про курс"    },
  { href: "#program", label: "Програма"    },
  { href: "#results", label: "Результати"  },
  { href: "#faq",     label: "FAQ"         },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          transition: "all 0.3s ease",
          background:    scrolled ? "rgba(0,0,0,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)"       : "none",
          borderBottom:   scrolled ? "1px solid rgba(255,106,0,0.12)" : "1px solid transparent",
          width: '100vw'
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 38, height: 38,
              background: "linear-gradient(135deg,#FF6A00,#CC5500)",
              borderRadius: 10, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff",
              boxShadow: "0 0 16px rgba(255,106,0,0.35)",
            }}>AI</div>
            <span className="font-display" style={{ fontSize: 18, color: "#fff", letterSpacing: 0.3 }}>
              MODELS<span style={{ color: "#FF6A00" }}>ACADEMY</span>
            </span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="hide-mobile">
            <CTAButton size="sm" style={{ padding: "10px 24px", fontSize: "13px" } as React.CSSProperties}>
              Купити курс
            </CTAButton>
          </nav>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "rgba(0,0,0,0.96)", borderTop: "1px solid rgba(255,106,0,0.15)",
                padding: "20px 16px 28px",
              }}
            >
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                  display: "block", padding: "14px 0",
                  color: "rgba(255,255,255,0.78)", textDecoration: "none",
                  fontSize: 17, fontWeight: 500,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>{label}</a>
              ))}
              <div style={{ marginTop: 20 }}>
                <CTAButton size="lg" className="w-full">Купити курс</CTAButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .burger-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
