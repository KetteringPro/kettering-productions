import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "It'll Be Fine. | Kettering Productions",
  description: "Bad Ideas. Bigger Adventures. An 8-season series based on a true story.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #111827)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
      }}
    >
      {/* ============================================ */}
      {/* SCROLL BEAT 1: THE HOOK (Above the fold)    */}
      {/* ============================================ */}
      
      {/* Logo */}
      <header
        style={{
          marginTop: "clamp(0.5rem, 2vh, 1rem)",
          marginBottom: "clamp(1rem, 3vh, 1.5rem)",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/brand/kettering-logo-rose.svg"
            alt="Kettering Productions"
            width={380}
            height={95}
            priority
            style={{ display: "block" }}
          />
        </Link>
      </header>

      {/* Hero Section */}
      <section
        style={{
          maxWidth: "750px",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 600,
            color: "#fecdd3",
            letterSpacing: "0.06em",
            marginBottom: "0.4rem",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {"It'll Be Fine."}
        </h1>
        
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)",
            color: "#e5e7eb",
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: "0.5rem",
            letterSpacing: "0.04em",
          }}
        >
          Bad Ideas. Bigger Adventures.
        </p>
        
        <p
          style={{
            fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
            color: "#9ca3af",
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          {"One woman's true story. Unfiltered."}
        </p>

        <p
          style={{
            fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
            lineHeight: 1.7,
            color: "#fecdd3",
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: "1rem",
          }}
        >
          Everything below actually happened.<br />
          Every escalation is documented.
        </p>
        
        <p
          style={{
            fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
            lineHeight: 1.8,
            color: "#e5e7eb",
            fontWeight: 500,
          }}
        >
          Connection built through FaceTime.<br />
          Story views as surveillance.<br />
          Leaving someone on unread as a power move.
        </p>
      </section>

      {/* ============================================ */}
      {/* PRIMARY CTA - Trust Moment (Above Image)    */}
      {/* ============================================ */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.75rem",
          marginBottom: "2rem",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <Link
          href="/from-chaos-to-clarity"
          style={{
            display: "inline-block",
            padding: "0.6rem 1.25rem",
            backgroundColor: "#fecdd3",
            color: "#1f2937",
            fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
            fontWeight: 600,
            textDecoration: "none",
            borderRadius: "6px",
            whiteSpace: "nowrap",
          }}
        >
          Series Overview
        </Link>
        <a
          href="/Itll_Be_Fine_Pitch.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.6rem 1.25rem",
            backgroundColor: "transparent",
            border: "2px solid #fecdd3",
            color: "#fecdd3",
            fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "6px",
            whiteSpace: "nowrap",
          }}
        >
          One-Sheet (PDF)
        </a>
        <Link
          href="/about"
          style={{
            display: "inline-block",
            padding: "0.6rem 1.25rem",
            backgroundColor: "transparent",
            border: "2px solid #9ca3af",
            color: "#9ca3af",
            fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "6px",
            whiteSpace: "nowrap",
          }}
        >
          About the Creator
        </Link>
      </div>

      {/* Hero Image - Visual Reset */}
      <div
        style={{
          maxWidth: "850px",
          width: "100%",
          marginBottom: "2.5rem",
        }}
      >
        <Image
          src="/images/marina-hero2.jpg"
          alt="Waterfront bar at night"
          width={1200}
          height={675}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* ============================================ */}
      {/* SCROLL BEAT 2: THE SCOPE (Second scroll)    */}
      {/* ============================================ */}
      
      <section
        style={{
          maxWidth: "720px",
          marginBottom: "2.5rem",
          textAlign: "left",
          padding: "0 1rem",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
            lineHeight: 1.75,
            color: "#d1d5db",
            marginBottom: "1.5rem",
          }}
        >
          {"It'll Be Fine. is an eight-season series based on the true story of a 50-year-old tech consultant caught in a two-year \"just friends\" situationship that refused to end."}
        </p>
        
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 1.5rem 0",
            fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
            lineHeight: 2,
            color: "#d1d5db",
          }}
        >
          <li>It begins on a yacht.</li>
          <li>Escalates through swinger parties, social-media warfare, and strategic silence.</li>
          <li>Detonates with law enforcement involvement.</li>
        </ul>
        
        <p
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
            lineHeight: 1.7,
            color: "#e5e7eb",
            fontWeight: 500,
          }}
        >
          What comes after?<br />
          An empire built from the wreckage.
        </p>
      </section>

      {/* ============================================ */}
      {/* SCROLL BEAT 3: THE EMOTIONAL BUTTON         */}
      {/* ============================================ */}
      
      <section
        style={{
          maxWidth: "650px",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 2.4vw, 1.1rem)",
            lineHeight: 1.7,
            color: "#d1d5db",
            marginBottom: "1.25rem",
          }}
        >
          No matter what the universe throws at her, Roxy keeps moving forward.
        </p>
        
        <div
          style={{
            fontSize: "clamp(1rem, 2.4vw, 1.1rem)",
            lineHeight: 2.2,
            color: "#d1d5db",
            marginBottom: "1rem",
          }}
        >
          <p style={{ margin: "0 0 0.25rem 0" }}>Double-date ambush at the marina?</p>
          <p style={{ margin: "0 0 0.75rem 0", color: "#fecdd3", fontStyle: "italic" }}>{'"Two new friends."'}</p>
          <p style={{ margin: "0 0 0.25rem 0" }}>Criminal charges?</p>
          <p style={{ margin: "0", color: "#fecdd3", fontStyle: "italic" }}>{'"Hot prosecutor."'}</p>
        </div>
        
        <p
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            color: "#fecdd3",
            fontWeight: 600,
            fontStyle: "italic",
            marginTop: "1.25rem",
          }}
        >
          {"It'll be fine."}
        </p>
      </section>

      {/* ============================================ */}
      {/* SECONDARY CTA - After Mantra (Single Button)*/}
      {/* ============================================ */}
      <div style={{ marginBottom: "2rem" }}>
        <Link
          href="/from-chaos-to-clarity"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            backgroundColor: "transparent",
            border: "2px solid #fecdd3",
            color: "#fecdd3",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: "6px",
            transition: "all 0.2s ease",
          }}
        >
          View Series Overview
        </Link>
      </div>

      {/* Audience Line */}
      <p
        style={{
          fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
          color: "#9ca3af",
          fontWeight: 500,
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Sharp, funny, and made for women who have lived a few lives.
      </p>

      {/* Book Development Note */}
      <p
        style={{
          fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)",
          color: "#6b7280",
          marginBottom: "2rem",
          fontStyle: "italic",
        }}
      >
        Book series in development
      </p>

      {/* Footer */}
      <footer
        style={{
          fontSize: "0.8rem",
          color: "#9ca3af",
          textAlign: "center",
          marginTop: "auto",
          paddingTop: "1rem",
          lineHeight: 1.8,
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <Link
            href="/from-chaos-to-clarity"
            style={{ color: "#9ca3af", textDecoration: "none" }}
          >
            Series Overview
          </Link>
          {" · "}
          <a
            href="/Itll_Be_Fine_Pitch.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9ca3af", textDecoration: "none" }}
          >
            One-Sheet
          </a>
          {" · "}
          <Link
            href="/about"
            style={{ color: "#9ca3af", textDecoration: "none" }}
          >
            About
          </Link>
        </div>
        © 2026 <span style={{ color: "#fecdd3" }}>Kettering Productions LLC</span> · All Rights Reserved
        <br />
        <a
          href="mailto:info@ketteringproductions.com"
          style={{ color: "#fecdd3", textDecoration: "underline" }}
        >
          info@ketteringproductions.com
        </a>{" "}
        ·{" "}
        <a
          href="https://www.KetteringProductions.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fecdd3", textDecoration: "underline" }}
        >
          www.KetteringProductions.com
        </a>
      </footer>
    </main>
  );
}