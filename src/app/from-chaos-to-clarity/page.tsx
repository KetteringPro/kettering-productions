"use client";

import React, { useState } from "react";
import Link from "next/link";

const seasons = [
  {
    id: "S1",
    title: "S1 – The Beginning<br />(Aug–Sep 2023)",
    description:
      "A Vanilla Ice concert leads to a yacht, a swinger party, and a meddling marina neighbor whose lies sabotage what could've been love. The chemistry is undeniable; the betrayal, unforgettable.",
    cliffhanger:
      "Cliffhanger: Will Ryder believe her—or the friend who wants her gone?",
  },
  {
    id: "S2",
    title: "S2 – The Villain Era<br />(Sep 2023–Mar 2024)",
    description:
      "A carousel of rebounds and a ten-day Mediterranean cruise. Social media warfare escalates: strategic blocking, like-button manipulation, story surveillance. The chaos peaks with a serendipitous encounter where fate gives her one last glimpse of the past.",
    cliffhanger: "Cliffhanger: Ryder calls on Easter Sunday. Will she answer?",
  },
  {
    id: "S3",
    title: "S3 – The Reconciliation<br />(Apr–Sep 2024)",
    description:
      "She does. They reunite, avenge the Season 1 betrayal (phone heists, marina neighbor confrontation: \"IT WAS ME\"), and escape to St. Thomas. But by summer's end she's hospitalized with a kidney infection, then he's DJ'ing Labor Day pool parties—turning her from partner to handler.",
    cliffhanger: "Cliffhanger: Will she keep choosing chaos?",
  },
  {
    id: "S4",
    title: "S4 – The Domestic Season<br />(Oct 2024–Jan 2025)",
    description:
      "Costa Rica adventure. Matching smart homes across two states. He hangs curtains, replaces every doorknob—building a life while refusing to call her his girlfriend. The winter of domestic bliss becomes his undoing: too easy, too comfortable, too REAL.",
    cliffhanger: "Cliffhanger: They're living like they're married. Too good to last.",
  },
  {
    id: "S5",
    title: "S5 – The Unraveling<br />(Dec 2024–May 2025)",
    description:
      "Puppies trap him in NH—he can't travel anymore. Other women appear. The manipulation tactics escalate. Cancun disaster for his birthday—water thrown in his face at dinner. Vegas for her birthday? Suddenly up for debate.",
    cliffhanger:
      "Cliffhanger: Will he go?",
  },
  {
    id: "S6",
    title: "S6 – The Breakdown<br />(May–Oct 2025)",
    description:
      "This season starts with a SWAT team, an arrest, and ends with a courtroom encounter that changes everything. It's the point of no return, where chaos turns into consequence and the story can't rewind.",
    cliffhanger:
      "Cliffhanger: She meets him for the first time. He's hot AF.",
    hoverText: "This is where everything breaks.",
  },
  {
    id: "S7",
    title: "S7 – The New Beginning<br />(Oct–Nov 2025)",
    description:
      "Dating the prosecutor looked like clarity—stable, successful, wildly transparent. But behind closed doors, he crossed lines that can't be uncrossed. She finally understands: chaos without consent is still chaos. No single person has all the pieces. What looks like resolution is actually the final misdirection.",
    cliffhanger:
      "Cliffhanger: How do you recover when the safe choice was the dangerous one?",
  },
  {
    id: "S8",
    title: "S8 – The Empire<br />(The Finale)",
    description:
      "The season opens with the SAME WORDS as the Pilot—full circle. Flashbacks reveal where Roxy came from: childhood instability, loss, and survival. The chaos with Ryder wasn't the story—it was input. She came from nothing, stayed humble, and never realized her clarity made others feel small. THE TWIST: Roxy doesn't end up with the guy. She ends up with the EMPIRE.",
    cliffhanger:
      "Ending: Despite the chaos, Roxy lands on top. She always does.",
  },
];

function SeasonCard({ season }: { season: typeof seasons[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: "0.75rem",
        padding: "1rem 1.1rem",
        background:
          "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(9,9,11,0.98))",
        border:
          season.id === "S8"
            ? "1px solid rgba(254,205,211,0.4)"
            : season.id === "S6"
            ? "1px solid rgba(254,205,211,0.25)"
            : "1px solid rgba(148,163,253,0.16)",
        boxShadow:
          season.id === "S8"
            ? "0 14px 32px rgba(254,205,211,0.15)"
            : season.id === "S6"
            ? "0 14px 32px rgba(254,205,211,0.08)"
            : "0 14px 32px rgba(15,23,42,0.9)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        position: "relative" as const,
      }}
    >
      {/* S6 Hover Text Overlay */}
      {season.hoverText && isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(2, 8, 23, 0.95)",
            borderRadius: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <p
            style={{
              color: "#fecdd3",
              fontSize: "1.1rem",
              fontWeight: 600,
              fontStyle: "italic",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            {season.hoverText}
          </p>
        </div>
      )}

      <h3
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#fecdd3",
          margin: 0,
        }}
        dangerouslySetInnerHTML={{ __html: season.title }}
      />
      <p
        style={{
          marginTop: "0.45rem",
          marginBottom: "0.35rem",
          fontSize: "0.86rem",
          color: "#d1d5db",
        }}
      >
        {season.description}
      </p>
      <img
        src={`/images/season_${season.id[1]}.jpg`}
        alt={season.title}
        style={{
          width: "100%",
          borderRadius: "0.5rem",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          objectFit: "cover",
          maxHeight: "180px",
        }}
      />
      <p
        style={{
          margin: 0,
          fontSize: "0.8rem",
          color: season.id === "S8" ? "#fecdd3" : "#9ca3af",
          fontStyle: "italic",
        }}
      >
        {season.cliffhanger}
      </p>
    </div>
  );
}

export default function FromChaosToClarityPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2.5rem 1.75rem 2rem",
        backgroundColor: "#020817",
        color: "#e5e7eb",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          lineHeight: 1.6,
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "2.15rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#fecdd3",
            marginBottom: "0.5rem",
          }}
        >
          From Chaos to Clarity
        </h1>
        
        {/* INTERRUPT LINE */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "#fecdd3",
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          Everything below actually happened. Every escalation is documented.
        </p>
        
        <p
          style={{
            marginTop: 0,
            marginBottom: "1.25rem",
            fontSize: "0.96rem",
            color: "#d1d5db",
          }}
        >
          Building connection through FaceTime. Story views as surveillance. Leaving someone on unread as a power move. An eight-season series based on a true story of a two-year "just friends" situationship—from the yacht where it started to the swinger parties for entertainment to the SWAT team that ended it. And an empire built from the wreckage.
        </p>

        {/* CTA Button - Single */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          <Link
            href="/pilot-script"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fecdd3",
              color: "#020817",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            Read the Pilot Script
          </Link>
        </div>
        
        {/* Legal sensitivity note */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          Industry access granted selectively due to ongoing legal sensitivity.
        </p>

        {/* Season Arcs */}
        <h2
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#fecdd3",
            marginTop: "1.25rem",
            marginBottom: "0.75rem",
          }}
        >
          Season Arcs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {seasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "#6b7280",
            borderTop: "1px solid rgba(148,163,253,0.12)",
            paddingTop: "0.75rem",
          }}
        >
          © 2026 Kettering Productions LLC · All Rights Reserved · Christy
          Kettering · christy@ketteringproductions.com ·{" "}
          <span style={{ color: "#9ca3af" }}>www.ketteringproductions.com</span>
        </footer>
      </div>
    </main>
  );
}