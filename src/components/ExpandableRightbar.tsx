import { useState } from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface ExpandableRightbarProps {
  dark: boolean;
}

export default function ExpandableRightbar({ dark }: ExpandableRightbarProps) {
  const [tab, setTab] = useState<"progress" | "achievements">("progress");

  return (
    <aside
      style={{
        height: "100vh",
        width: "20%",
        minWidth: 220,
        maxWidth: 500,
        background: dark ? "#23283a" : "#fff",
        borderLeft: dark ? "2px solid #181c2a" : "2px solid #ececec",
        boxShadow: "-2px 0 16px #0001",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: dark ? "1px solid #181c2a" : "1px solid #ececec",
        }}
      >
        <button
          onClick={() => setTab("progress")}
          style={{
            flex: 1,
            padding: "16px 0",
            background: "none",
            color:
              tab === "progress" ? "#7c4dff" : dark ? "#b3b3c6" : "#23283a",
            border: "none",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            transition: "color 0.2s",
            borderBottom:
              tab === "progress"
                ? "3px solid #7c4dff"
                : "3px solid transparent",
          }}
          onMouseEnter={(e) => {
            if (tab !== "progress") {
              (e.currentTarget as HTMLButtonElement).style.borderBottom =
                "3px solid #b3b3c6";
            }
          }}
          onMouseLeave={(e) => {
            if (tab !== "progress") {
              (e.currentTarget as HTMLButtonElement).style.borderBottom =
                "3px solid transparent";
            }
          }}
        >
          <AutoGraphIcon style={{ verticalAlign: "middle", marginRight: 8 }} />
          Progress
        </button>

        <button
          onClick={() => setTab("achievements")}
          style={{
            flex: 1,
            padding: "16px 0",
            background: "none",
            color:
              tab === "achievements" ? "#7c4dff" : dark ? "#b3b3c6" : "#23283a",
            border: "none",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            transition: "color 0.2s",
            borderBottom:
              tab === "achievements"
                ? "3px solid #7c4dff"
                : "3px solid transparent",
          }}
          onMouseEnter={(e) => {
            if (tab !== "achievements") {
              (e.currentTarget as HTMLButtonElement).style.borderBottom =
                "3px solid #b3b3c6";
            }
          }}
          onMouseLeave={(e) => {
            if (tab !== "achievements") {
              (e.currentTarget as HTMLButtonElement).style.borderBottom =
                "3px solid transparent";
            }
          }}
        >
          <EmojiEventsIcon
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          Achievements
        </button>
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, padding: 32, overflowY: "auto" }}>
        {/* {tab === "progress" && (
          <div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 18,
                color: dark ? "#fff" : "#23283a",
              }}
            >
              Progress
            </h3>
            <div
              style={{
                color: dark ? "#f8f5f0" : "#23283a",
                marginBottom: 18,
              }}
            >
              <img
                src="/Progress.png"
                alt="Progress"
                style={{ width: "75%", opacity: 0.5 }}
              />
            </div>
          </div>
        )} */}
        {tab === "progress" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: 280,
              textAlign: "center",
            }}
          >
            <img
              src="/Progress.png"
              alt="No progress yet"
              style={{
                width: "75%",
                // height: 120,
                objectFit: "contain",
                marginBottom: 24,
                opacity: 0.5,
                filter: dark ? "brightness(0.8)" : "none",
              }}
            />
            <h3
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginBottom: 10,
                opacity: 0.7,
                color: dark ? "#fff" : "#23283a",
                fontFamily: "'Lato', Arial, sans-serif",
              }}
            >
              No Progress Yet
            </h3>
            <div
              style={{
                color: dark ? "#b3b3c6" : "#666",
                fontSize: 12,
                maxWidth: 260,
                opacity: 0.7,
                fontFamily: "'Lato', Arial, sans-serif",
                margin: "0 auto",
              }}
            >
              Start your first lesson to see your progress here! 🚀
            </div>
          </div>
        )}
        {tab === "achievements" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: 280,
              textAlign: "center",
            }}
          >
            <img
              src="/achive.png"
              alt="No Achievements yet"
              style={{
                width: "75%",
                // height: 120,
                objectFit: "contain",
                marginBottom: 24,
                opacity: 0.5,
                filter: dark ? "brightness(0.8)" : "none",
              }}
            />
            <h3
              style={{
                fontWeight: 500,
                fontSize: 16,
                marginBottom: 10,
                opacity: 0.7,
                color: dark ? "#fff" : "#23283a",
                fontFamily: "'Lato', Arial, sans-serif",
              }}
            >
              No Achievements Yet
            </h3>
            <div
              style={{
                color: dark ? "#b3b3c6" : "#666",
                fontSize: 12,
                maxWidth: 260,
                opacity: 0.7,
                fontFamily: "'Lato', Arial, sans-serif",
                margin: "0 auto",
              }}
            >
              Complete lessons and earn badges to unlock achievements! 🏆
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
