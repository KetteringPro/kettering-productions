import React from "react";

export const metadata = {
  title: "From Chaos to Clarity | Kettering Productions",
  description:
    "A seven-season dramedy based on a true story of midlife chaos, consequence, and unexpected clarity.",
};

const seasons = [
  {
    id: "S1",
    title: "S1 – How We Met (Aug–Sep 2023)",
    description:
      "A Vanilla Ice concert leads to a yacht, a swinger party, and a meddling marina neighbor whose lies sabotage what could’ve been love. The chemistry is undeniable; the betrayal unforgettable.",
    cliffhanger:
      "Cliffhanger: Will Ryder Steele believe her—or the friend who wants her gone?"
  },
  {
    id: "S2",
    title: "S2 – Hot Girl Fall/Winter (Villain Era) (Sep 2023–Mar 2024)",
    description:
      "A carousel of rebounds and a ten-day Mediterranean cruise. A serendipitous encounter gives her one last glimpse of the past.",
    cliffhanger: "Cliffhanger: Ryder Steele calls. Will she answer?"
  },
  {
    id: "S3",
    title: "S3 – The Reconciliation (Apr–Aug 2024)",
    description:
      "She does. They reunite, avenge the betrayal, and escape to St. Thomas. By summer’s end she’s in the hospital while he DJ’s Labor Day pool parties, turning her from partner to handler.",
    cliffhanger: "Cliffhanger: Will she keep choosing chaos?"
  },
  {
    id: "S4",
    title: "S4 – Fall Chaos (Sep–Nov 2024)",
    description:
      "Ryder Steele finally comes to Maine. A whirlwind of highs that ends with an incredible Costa Rica trip that feels like calm after the storm.",
    cliffhanger: "Cliffhanger: They’re back on top—too good to last."
  },
  {
    id: "S5",
    title: "S5 – Winter Through Cancun (Nov 2024–May 2025)",
    description:
      "Thanksgiving with his family, holiday chaos, and the disastrous Cancun trip for his birthday. Their bond is crumbling.",
    cliffhanger:
      "Cliffhanger: He refuses to go to Vegas for her birthday; everything erupts."
  },
  {
    id: "S6",
    title: "S6 – The Unraveling (May–Oct 2025)",
    description:
      "Post-breakup chaos: mystery trip to PA, SWAT call, solo Vegas spiral, arrest, hot girl summer. Then the twist—the prosecutor who charges her becomes her next love interest.",
    cliffhanger: "Cliffhanger: Court day—she meets Ethan Hart for the first time."
  },
  {
    id: "S7",
    title: "S7 – Clarity (Oct 2025–Present)",
    description:
      "Dating Ethan Hart, the prosecutor. Healing through humor, finally choosing respect and peace on her own terms.",
    cliffhanger:
      "Ending: She’s calm and free—while the ex still watches from the sidelines."
  }
];

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
            marginBottom: "0.75rem",
          }}
        >
          From Chaos to Clarity
        </h1>
        <p
          style={{
            marginTop: 0,
            marginBottom: "1.25rem",
            fontSize: "0.96rem",
            color: "#d1d5db",
          }}
        >
          A limited series based on a true story of a two-year “just friends”
          situationship that spirals from yachts and swinger parties to a SWAT
          call and an unexpected love story with the prosecutor who walks in—completely unaware of what he’s about to get himself into.
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
            <div
              key={season.id}
              style={{
                borderRadius: "0.75rem",
                padding: "1rem 1.1rem",
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(9,9,11,0.98))",
                border: "1px solid rgba(148,163,253,0.16)",
                boxShadow: "0 14px 32px rgba(15,23,42,0.9)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fecdd3",
                  margin: 0,
                }}
              >
                {season.title}
              </h3>
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
                  color: "#9ca3af",
                  fontStyle: "italic",
                }}
              >
                {season.cliffhanger}
              </p>
            </div>
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
          © 2025 Kettering Productions LLC · All Rights Reserved · Christy
          Kettering · christy@ketteringproductions.com ·{" "}
          <span style={{ color: "#9ca3af" }}>
            www.ketteringproductions.com
          </span>
        </footer>
      </div>
    </main>
  );
}