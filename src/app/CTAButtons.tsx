"use client";

import Link from "next/link";

export default function CTAButtons() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "2.5rem",
        width: "100%",
        maxWidth: "700px",
      }}
    >
      <Link
        href="/from-chaos-to-clarity"
        style={{
          display: "inline-block",
          backgroundColor: "#fecdd3",
          color: "#000000",
          padding: "1rem 2.5rem",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(254, 205, 211, 0.3)",
          transition: "all 0.3s ease",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fda4af";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(254, 205, 211, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fecdd3";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(254, 205, 211, 0.3)";
        }}
      >
        View Series Overview
      </Link>
      
      <a
        href="/From_Chaos_to_Clarity_Pitch.pdf"
        target="_blank"
        style={{
          display: "inline-block",
          backgroundColor: "#fecdd3",
          color: "#000000",
          padding: "1rem 2.5rem",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(254, 205, 211, 0.3)",
          transition: "all 0.3s ease",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#fda4af";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(254, 205, 211, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#fecdd3";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(254, 205, 211, 0.3)";
        }}
      >
        Download One-Sheet (PDF)
      </a>
    </div>
  );
}