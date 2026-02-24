'use client';
const links = [
  {
    id: 1,
    title: "Оферта",
    href: 'https://docs.google.com/document/d/1XPjB_BcofFfwDyVNBekT-ZqyJHOuDc_jhqvc3bjFojo/edit?usp=sharing'
  }, 
  {
    id: 2,
    title: "Політика конфіденційності",
    href: 'https://docs.google.com/document/d/1lWv-Z01ot8YgBmGY2wzbrYgxRJyNrv82l1aRZTOF0Ew/edit?usp=sharing'
  }
]
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
        <nav style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
          {links.map(link=>(
            <a key={link.id} href={link.href} style={{
              fontSize: 'clamp(12px,2.5vw,16px)', color: "rgba(255,255,255,0.32)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,106,0,0.8)")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.32)")}
            >{link.title}</a>
          ))}
          <a href="mailto:aimodelsacademy@proton.me" style={{ fontSize: 'clamp(12px,2.5vw,16px)', color: "rgba(255,255,255,0.32)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,106,0,0.8)")}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.32)")}
          >aimodelsacademy@proton.me</a>
        </nav>
        <p style={{ fontSize: 'clamp(12px,2.5vw,16px)', color: "rgba(255,255,255,0.2)" }}>
          © {year} MODELSACADEMY. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
