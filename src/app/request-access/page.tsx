"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RequestAccessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, this opens an email. You can replace with a form service like Formspree, Netlify Forms, etc.
    const subject = encodeURIComponent(`Script Access Request: ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nRole: ${formData.role}\n\nReason for Access:\n${formData.reason}`
    );
    window.location.href = `mailto:christy@ketteringproductions.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
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
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#fecdd3",
              marginBottom: "1rem",
            }}
          >
            Request Submitted
          </h1>
          <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
            Thank you for your interest. Your email client should have opened with a pre-filled message.
            If it didn&apos;t, please email directly at{" "}
            <a href="mailto:christy@ketteringproductions.com" style={{ color: "#fecdd3" }}>
              christy@ketteringproductions.com
            </a>
          </p>
          <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>
            Access requests are typically reviewed within 24-48 hours.
          </p>
          <Link
            href="/from-chaos-to-clarity"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fecdd3",
              color: "#020817",
              fontWeight: 600,
              fontSize: "0.85rem",
              textDecoration: "none",
              borderRadius: "0.5rem",
            }}
          >
            Back to Series Overview
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2.5rem 1.75rem",
        backgroundColor: "#020817",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fecdd3",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          Request Access
        </h1>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#9ca3af",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Script materials are available to industry professionals. Please provide your details below.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Company / Agency *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Role / Title *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                outline: "none",
              }}
            >
              <option value="">Select your role...</option>
              <option value="agent">Agent</option>
              <option value="manager">Manager</option>
              <option value="producer">Producer</option>
              <option value="development-exec">Development Executive</option>
              <option value="acquisitions">Acquisitions</option>
              <option value="literary-agent">Literary Agent</option>
              <option value="showrunner">Showrunner</option>
              <option value="writer">Writer</option>
              <option value="director">Director</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              How did you find us? / Reason for request
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows={3}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "1rem",
                backgroundColor: "rgba(15,23,42,0.98)",
                border: "1px solid rgba(148,163,253,0.3)",
                borderRadius: "0.5rem",
                color: "#e5e7eb",
                outline: "none",
                resize: "vertical",
              }}
              placeholder="Optional - let us know how you discovered the project"
            />
          </div>

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
            }}
          >
            Submit Request
          </button>
        </form>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          Already have an access code?{" "}
          <Link href="/pilot-script" style={{ color: "#fecdd3" }}>
            Enter it here
          </Link>
        </p>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
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
