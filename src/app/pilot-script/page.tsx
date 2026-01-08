"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Entity passwords - each company gets a unique code for tracking
const VALID_PASSWORDS: Record<string, string> = {
  // Format: password -> company name (for your reference)
  zerogravity2026: "Zero Gravity Management",
  hellosunshine2026: "Hello Sunshine",
  management360: "Management 360",
  mosaicla2026: "Mosaic LA",
  industryent2026: "Industry Entertainment",
  stridemgmt2026: "Stride Management",
  underground2026: "Underground Films",
  alignedent2026: "Aligned Entertainment",
  uta2026: "United Talent Agency",
  writershouse2026: "Writers House",
  bookgroup2026: "The Book Group",
  parkfine2026: "Park & Fine",
  mrcent2026: "MRC Entertainment",
  foliolit2026: "Folio Lit",
  queenchristy2026: "Kettering Productions (Internal)",
  // Add more as needed
};

export default function PilotScriptPage() {
  const [accessCode, setAccessCode] = useState("");
  const [validatedCode, setValidatedCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [companyName, setCompanyName] = useState("");

  // Check URL params on load (for direct links like ?access=zerogravity2026)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessParam = params.get("access");
    if (accessParam && VALID_PASSWORDS[accessParam.toLowerCase()]) {
      const code = accessParam.toLowerCase();
      setIsAuthorized(true);
      setValidatedCode(code);
      setCompanyName(VALID_PASSWORDS[code]);
      // Log for GA tracking - the URL with access code will show in analytics
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = accessCode.toLowerCase().trim();
    if (VALID_PASSWORDS[code]) {
      setIsAuthorized(true);
      setValidatedCode(code);
      setCompanyName(VALID_PASSWORDS[code]);
      setError("");
      // Update URL for tracking without reload
      window.history.replaceState({}, "", `?access=${code}`);
    } else {
      setError("Invalid access code. Please check your credentials or request access.");
    }
  };

  // Not authorized - show login form
  if (!isAuthorized) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "2.5rem 1.75rem",
          backgroundColor: "#020817",
          color: "#e5e7eb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fecdd3",
              marginBottom: "0.5rem",
            }}
          >
            Pilot Script Access
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#9ca3af",
              marginBottom: "1.5rem",
            }}
          >
            This content is password-protected for industry professionals.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter access code"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: error ? "1px solid #ef4444" : "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                marginBottom: "0.5rem",
                outline: "none",
              }}
            />
            {error && (
              <p style={{ color: "#ef4444", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                backgroundColor: "#fecdd3",
                color: "#020817",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              Access Script
            </button>
          </form>

          <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            Don&apos;t have an access code?{" "}
            <Link
              href="/request-access"
              style={{ color: "#fecdd3", textDecoration: "underline" }}
            >
              Request access
            </Link>
          </p>

          <Link
            href="/from-chaos-to-clarity"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "#9ca3af",
              textDecoration: "none",
            }}
          >
            ← Back to Series Overview
          </Link>
        </div>
      </main>
    );
  }

  // Build the secure PDF URL with access code
  const securePdfUrl = `/api/script?access=${validatedCode}`;

  // Authorized - show script
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem 1.75rem",
        backgroundColor: "#020817",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fecdd3",
                marginBottom: "0.25rem",
              }}
            >
              It'll Be Fine
            </h1>
            <p style={{ fontSize: "0.9rem", color: "#9ca3af", margin: 0 }}>
              Pilot Episode: &quot;The Night We Met&quot; (Ice Ice Baby)
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>
              Access granted
            </p>
            <p style={{ fontSize: "0.8rem", color: "#fecdd3", margin: 0 }}>
              {companyName}
            </p>
          </div>
        </div>

        {/* Script info box */}
        <div
          style={{
            background: "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(9,9,11,0.98))",
            border: "1px solid rgba(148,163,253,0.16)",
            borderRadius: "0.75rem",
            padding: "1.25rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#6b7280", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Written By</p>
              <p style={{ fontSize: "0.9rem", color: "#e5e7eb", margin: "0.25rem 0 0 0" }}>Christy Kettering</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#6b7280", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Format</p>
              <p style={{ fontSize: "0.9rem", color: "#e5e7eb", margin: "0.25rem 0 0 0" }}>Dramedy Pilot</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#6b7280", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Pages</p>
              <p style={{ fontSize: "0.9rem", color: "#e5e7eb", margin: "0.25rem 0 0 0" }}>35</p>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#6b7280", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>Copyright</p>
              <p style={{ fontSize: "0.9rem", color: "#e5e7eb", margin: "0.25rem 0 0 0" }}>© 2026 Kettering Productions LLC</p>
            </div>
          </div>
        </div>

        {/* PDF Embed - now using secure API route */}
        <div
          style={{
            backgroundColor: "#0f172a",
            borderRadius: "0.75rem",
            overflow: "hidden",
            border: "1px solid rgba(148,163,253,0.16)",
          }}
        >
          <iframe
            src={securePdfUrl}
            style={{
              width: "100%",
              height: "80vh",
              border: "none",
            }}
            title="From Chaos to Clarity - Pilot Script"
          />
        </div>

        {/* Download option - now using secure API route */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a
            href={securePdfUrl}
            download="FromChaosToClarity_S1E1_Pilot.pdf"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "transparent",
              color: "#fecdd3",
              fontWeight: 500,
              fontSize: "0.8rem",
              textDecoration: "none",
              borderRadius: "0.5rem",
              border: "1px solid rgba(254,205,211,0.3)",
            }}
          >
            Download PDF
          </a>
        </div>

        {/* Note about sharing */}
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          This access code may be shared with relevant colleagues and decision-makers within your organization.
          <br />
          For inquiries: christy@ketteringproductions.com
        </p>

        {/* Footer nav */}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <Link
            href="/from-chaos-to-clarity"
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              textDecoration: "none",
            }}
          >
            ← Back to Series Overview
          </Link>
        </div>
      </div>
    </main>
  );
}