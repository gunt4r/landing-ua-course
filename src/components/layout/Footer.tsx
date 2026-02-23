'use client';
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#050505",
      padding: "40px 24px",
      borderTop: "1px solid rgba(255,106,0,0.08)",
    }}>
      <div className="container" style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 20,
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34,
            background: "linear-gradient(135deg,#FF6A00,#CC5500)",
            borderRadius: 8, display: "flex", alignItems: "center",
            justifyContent: "center", fontWeight: 900, fontSize: 17, color: "#fff",
            boxShadow: "0 0 12px rgba(255,106,0,0.3)",
          }}>АI</div>
          <span className="font-display" style={{ fontSize: 16 }}>
            MODELS<span style={{ color: "#FF6A00" }}>ACADEMY</span>
          </span>
        </a>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
          © {year} MODELSACADEMY. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
