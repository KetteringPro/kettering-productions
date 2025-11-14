import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Kettering Productions",
  description: "Original stories. Real women. Unfiltered truth.",
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        textAlign: "center",
      }}
    >
      {/* Hero Header */}
      <header
        style={{
          marginTop: "clamp(0.75rem, 3vh, 1.25rem)",
          marginBottom: "clamp(1rem, 3vh, 2rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/brand/kettering-logo-rose.svg"
            alt="Kettering Productions"
            width={420}
            height={105}
            priority
            style={{ display: "block" }}
          />
        </Link>
        <p
          style={{
            margin: 0,
            fontStyle: "italic",
            fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
            color: "#e5e7eb",
            letterSpacing: "0.08em",
          }}
        >
          One woman's true story. Unfiltered.
        </p>
      </header>

      {/* Main Content */}
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "0.5rem",
        }}
      >
        {/* Title + Logline (most important, above image) */}
        <section
          style={{
            maxWidth: "700px",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)",
              fontWeight: 600,
              color: "#fecdd3",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            From Chaos to Clarity
          </h2>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2.4vw, 1.05rem)",
              lineHeight: 1.7,
              color: "#d1d5db",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
           A limited series based on a true story: a 52-year-old IT consultant's "just friends" situationship with a yacht-living, dog-loving entrepreneur spirals from undeniable connection to full-blown chaos—swinger parties, three states, international travel, a SWAT call resulting in her own arrest. In court, she meets the prosecutor who charges her in more ways than one... and sparks fly! Immediate, mutual, irresistible chemistry. 
           <br></br>
           <br></br><b>Sharp, funny, and made for women who have lived a few lives.</b>
          </p>
        </section>

        {/* Hero Image - bar on the water / party lifestyle */}
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            marginBottom: "1.25rem",
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

        {/* One-sheet link */}
        <p style={{ marginTop: "1rem" }}>
          <Link href="/from-chaos-to-clarity" style={{ color: "#fecdd3", textDecoration: "underline" }}>
            View the FROM CHAOS TO CLARITY series overview
          </Link>
        </p>
        <p style={{ marginTop: "0.25rem" }}>
          <a
            href="/From_Chaos_to_Clarity_Pitch.pdf"
            style={{ color: "#fecdd3", textDecoration: "underline" }}
            target="_blank"
          >
            View Series One-Sheet (PDF)
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          fontSize: "0.8rem",
          color: "#9ca3af",
          textAlign: "center",
          marginTop: "2rem",
          lineHeight: 1.6,
        }}
      >
        © 2025 <span style={{ color: "#fecdd3" }}>Kettering Productions LLC</span> · All Rights Reserved
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