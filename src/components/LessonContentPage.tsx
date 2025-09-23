import { useParams } from "react-router-dom";
import { useState } from "react";
import { LessonLayout } from "./LessonLayout";

// Placeholder data for headings and content
const headings = [
  { id: "intro", label: "Introduction" },
  { id: "part1", label: "Part 1: Basics" },
  { id: "part2", label: "Part 2: Advanced" },
  { id: "summary", label: "Summary" },
];

export function LessonContentPage() {
  const { lessonId } = useParams();
  const [dark, setDark] = useState(false);
  // Placeholder for current section
  const [section, setSection] = useState(0);

  return (
    <LessonLayout
      dark={dark}
      onToggleTheme={() => setDark((d) => !d)}
      sidebar={
        <nav>
          <h3 style={{ fontWeight: 900, fontSize: 20, marginBottom: 18 }}>
            Contents
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {headings.map((h, i) => (
              <li key={h.id}>
                <button
                  style={{
                    background:
                      i === section ? (dark ? "#7c4dff" : "#e0d7ff") : "none",
                    color:
                      i === section
                        ? dark
                          ? "#fff"
                          : "#23283a"
                        : dark
                        ? "#f8f5f0"
                        : "#23283a",
                    border: "none",
                    borderRadius: 8,
                    padding: "8px 14px",
                    marginBottom: 6,
                    width: "100%",
                    textAlign: "left",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={() => setSection(i)}
                >
                  {h.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      }
      content={
        <div
          style={{
            maxWidth: 600,
            width: "100%",
            background: dark ? "#23283a" : "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 16px #0002",
            padding: 32,
            minHeight: 320,
          }}
        >
          <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 18 }}>
            {headings[section].label}
          </h2>
          <div
            style={{
              color: dark ? "#f8f5f0" : "#23283a",
              fontSize: 18,
              marginBottom: 32,
            }}
          >
            Content for <b>{headings[section].label}</b> of lesson{" "}
            <b>{lessonId}</b> goes here.
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => setSection((s) => Math.max(0, s - 1))}
              disabled={section === 0}
              style={{
                padding: "10px 22px",
                borderRadius: 12,
                border: "none",
                background: section === 0 ? "#ccc" : "#7c4dff",
                color: "#fff",
                fontWeight: 700,
                cursor: section === 0 ? "not-allowed" : "pointer",
              }}
            >
              Back
            </button>
            <button
              onClick={() =>
                setSection((s) => Math.min(headings.length - 1, s + 1))
              }
              disabled={section === headings.length - 1}
              style={{
                padding: "10px 22px",
                borderRadius: 12,
                border: "none",
                background:
                  section === headings.length - 1 ? "#ccc" : "#7c4dff",
                color: "#fff",
                fontWeight: 700,
                cursor:
                  section === headings.length - 1 ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      }
      rightbar={
        <div>
          <h3 style={{ fontWeight: 900, fontSize: 20, marginBottom: 18 }}>
            Achievements
          </h3>
          <div style={{ marginBottom: 18 }}>
            Badges, progress, etc. (placeholder)
          </div>
          <button
            style={{
              padding: "8px 18px",
              borderRadius: 20,
              border: "none",
              background: "#7c4dff",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Expand
          </button>
        </div>
      }
    />
  );
}
