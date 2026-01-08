"use client";

import React, { useState } from "react";
import Link from "next/link";

const seasons = [
  {
    id: "S1",
    title: "S1 – The Beginning<br />(Aug–Sep 2023)",
    description:
      "A Vanilla Ice concert leads to a yacht, a swinger party, and a meddling marina neighbor whose lies sabotage what could've been love. The chemistry is undeniable; the betrayal, unforgettable.",
    mantra: "Everyone has doubts. Roxy doesn't. It'll be fine.",
    cliffhanger:
      "Cliffhanger: Will Ryder believe her—or the friend who wants her gone?",
  },
  {
    id: "S2",
    title: "S2 – The Villain Era<br />(Sep 2023–Mar 2024)",
    description:
      "A carousel of rebounds and a ten-day Mediterranean cruise. Social media warfare escalates: strategic blocking, like-button manipulation, story surveillance. Then a serendipitous encounter gives her one last glimpse of the past.",
    mantra: "The chaos escalates faster than she can reframe it—but Roxy keeps moving. It'll be fine... right?",
    cliffhanger: "Cliffhanger: Ryder calls on Easter Sunday. Will she answer?",
  },
  {
    id: "S3",
    title: "S3 – The Reconciliation<br />(Apr–Sep 2024)",
    description:
      "She does. They reunite, avenge the Season 1 betrayal (phone heists, marina neighbor confrontation: \"IT WAS ME\"), and jet off to St. Thomas. But by summer's end she's hospitalized while he's DJ'ing pool parties—turning her from partner to handler.",
    mantra: "She knows better now. She goes back anyway. It'll be fine—because she believes she can handle whatever comes next.",
    cliffhanger: "Cliffhanger: Will she keep choosing chaos?",
  },
  {
    id: "S4",
    title: "S4 – The Domestic Season<br />(Oct 2024–Jan 2025)",
    description:
      "Costa Rica adventure. Matching smart homes across two states. He hangs curtains, replaces every doorknob—building a life while refusing to call her his girlfriend. The winter of domestic bliss becomes his undoing: too easy, too comfortable, too REAL.",
    mantra: "The calm feels earned. Almost convincing. It'll be fine—because not believing that would require stopping.",
    cliffhanger: "Cliffhanger: They're living like they're married. Too good to last.",
  },
  {
    id: "S5",
    title: "S5 – The Unraveling<br />(Dec 2024–May 2025)",
    description:
      "Puppies trap him in NH—he can't travel anymore. Other women appear. The manipulation tactics escalate. Cancun disaster for his birthday—water thrown in his face at dinner. Vegas for her birthday? Suddenly up for debate.",
    mantra: "The cracks spread faster than the reframes. For the first time, \"it'll be fine\" sounds less like confidence and more like a gamble.",
    cliffhanger:
      "Cliffhanger: Will he go?",
  },
  {
    id: "S6",
    title: "S6 – The Breakdown<br />(May–Oct 2025)",
    description:
      "This season starts with a SWAT team, an arrest, and ends with a courtroom encounter that changes everything. It's the point of no return, where chaos turns into consequence and the story can't rewind.",
    mantra: "Roxy keeps moving forward—but this time, optimism isn't enough. It'll be fine... until it isn't.",
    cliffhanger:
      "Cliffhanger: She meets him for the first time. He's hot AF.",
    hoverText: "This is where it all implodes. For him.",
  },
  {
    id: "S7",
    title: "S7 – The New Beginning<br />(Oct–Nov 2025)",
    description:
      "Dating the prosecutor looked like the answer—stable, successful, wildly transparent. But behind closed doors, he crossed lines that can't be uncrossed. No single person has all the pieces. What looks like resolution is actually the final misdirection.",
    mantra: "This time, \"it'll be fine\" isn't reassurance. It's assessment.",
    cliffhanger:
      "Cliffhanger: What do you do when the safe choice was the dangerous one?",
  },
  {
    id: "S8",
    title: "S8 – The Empire<br />(The Finale)",
    description:
      "The season opens with the SAME WORDS as the Pilot—full circle. Flashbacks reveal what built Roxy: chaotic childhood, loss, relentless forward motion. THE TWIST: She doesn't end up with the guy. She ends up with the EMPIRE.",
    mantra: "The words that once felt like denial now sound like prophecy. It was never about the situation. It was about her.",
    cliffhanger:
      "Ending: Despite the chaos, Roxy lands on top. She always does. It'll be fine.",
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
        display: "flex",
        flexDirection: "column" as const,
        height: "100%",
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

      {/* ZONE 1: Header (fixed) */}
      <h3
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#fecdd3",
          margin: 0,
          minHeight: "2.5rem",
        }}
        dangerouslySetInnerHTML={{ __html: season.title }}
      />
      
      {/* ZONE 2: Summary (clamped to 6 lines) */}
      <p
        style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          fontSize: "0.84rem",
          color: "#d1d5db",
          lineHeight: 1.5,
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          minHeight: "7.6rem",
        }}
      >
        {season.description}
      </p>
      
      {/* ZONE 3: Mantra Beat (clamped to 4 lines) */}
      <p
        style={{
          margin: "0.4rem 0",
          fontSize: "0.78rem",
          color: "#e5e7eb",
          fontStyle: "italic",
          borderLeft: "2px solid rgba(254,205,211,0.4)",
          paddingLeft: "0.6rem",
          lineHeight: 1.45,
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          minHeight: "4.5rem",
        }}
      >
        {season.mantra}
      </p>
      
      {/* ZONE 4: Image (fixed aspect ratio) */}
      <div
        style={{
          width: "100%",
          height: "180px",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        <img
          src={`/images/season_${season.id[1]}.jpg`}
          alt={season.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      
      {/* ZONE 5: Cliffhanger (pushed to bottom) */}
      <p
        style={{
          margin: 0,
          marginTop: "auto",
          fontSize: "0.78rem",
          color: season.id === "S8" ? "#fecdd3" : "#9ca3af",
          fontStyle: "italic",
          lineHeight: 1.4,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
          minHeight: "2.2rem",
        }}
      >
        {season.cliffhanger}
      </p>
    </div>
  );
}

export default function SeriesOverviewPage() {
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
            color: "#fecdd3",
            marginBottom: "0.25rem",
          }}
        >
          {"It'll Be Fine."}
        </h1>
        
        {/* Tagline */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#e5e7eb",
            fontStyle: "italic",
            marginBottom: "0.75rem",
            letterSpacing: "0.03em",
          }}
        >
          Bad Ideas. Bigger Adventures.
        </p>
        
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
          Building connection through FaceTime. Story views as surveillance. Leaving someone on unread as a power move. An eight-season series based on the true story of a 50-year-old tech consultant caught in a two-year "just friends" situationship—from the yacht where it started to the swinger parties for entertainment to the SWAT team that ended it. And an empire built from the wreckage.
        </p>

        {/* CTA Buttons */}
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
          <a
            href="/Itll_Be_Fine_Pitch.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "transparent",
              color: "#fecdd3",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "0.5rem",
              border: "1px solid #fecdd3",
              transition: "all 0.2s ease",
            }}
          >
            View Pitch Deck
          </a>
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
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
              ← Back to Home
            </Link>
          </div>
          <div>
            © 2026 Kettering Productions LLC · All Rights Reserved · Christy Kettering ·{" "}
            <a href="mailto:christy@ketteringproductions.com" style={{ color: "#9ca3af", textDecoration: "none" }}>
              christy@ketteringproductions.com
            </a>{" "}
            ·{" "}
            <a href="https://www.ketteringproductions.com" style={{ color: "#9ca3af", textDecoration: "none" }}>
              www.ketteringproductions.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}