import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { lessonList } from "../utils/LessonList";
import { useIsMobile } from "../utils/useIsMobile";

function LessonsPage() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const filtered = lessonList.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // theme colors
  const bg = dark ? "#23272e" : "#f8f5f0";
  const cardBg = dark
    ? "linear-gradient(135deg, #23283a 60%, #2d3650 100%)"
    : "linear-gradient(135deg, #f5f8ff 60%, #e3eaff 100%)";
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const inputBg = dark ? "#23283a" : "#fff";
  const inputBorder = dark ? "#444a55" : "#ccc";
  const inputText = dark ? "#f8f5f0" : "#23283a";
  const inputShadow = dark ? "0 2px 8px #0004" : "0 2px 8px #0001";
  const noLessonColor = dark ? "#888" : "#aaa";

  return (
    <div style={{ minHeight: "100vh", background: bg }}>
      {/* Top bar */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 220,
          marginBottom: 48,
          overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #23283a 60%, #23272e 100%)"
            : "linear-gradient(135deg, #eaf0ff 60%, #f8f5f0 100%)",
        }}
      >
        <img
          src="/grp.jpg"
          alt="Explore Lessons"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
          draggable={false}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: "0 16px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Lato, Arial, sans-serif",
              fontWeight: 900,
              fontSize: 32,
              marginBottom: 18,
              color: textColor,
              textShadow: dark
                ? "0 2px 12px #000a, 0 1px 0 #fff2"
                : "0 2px 12px #fff8, 0 1px 0 #0001",
              letterSpacing: 1.2,
            }}
          >
            Explore Lessons
          </h1>
          <input
            type="text"
            placeholder="Search lessons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              fontSize: 16,
              padding: "10px 16px",
              borderRadius: 24,
              border: `1px solid ${inputBorder}`,
              outline: "none",
              width: "100%",
              maxWidth: 360,
              boxShadow: inputShadow,
              background: inputBg,
              color: inputText,
              transition: "background 0.3s, color 0.3s, border 0.3s",
            }}
          />
        </div>
      </div>

      {/* Lessons grid */}
      <Grid
        container
        spacing={3}
        justifyContent="flex-start" // ⬅️ changed here
        alignItems="flex-start"
        sx={{
          px: { lg: 8, md: 4, sm: 4, xs: 2 }, // responsive padding
          pb: 4,
          margin: isMobile ? "0 50px" : "0 200px",
        }}
      >
        {filtered.map((lesson, idx) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={lesson.id}>
            <div
              onClick={() => navigate(`/lessons/${lesson.id}`)}
              style={{
                background: cardBg,
                borderRadius: 22,
                boxShadow: dark
                  ? "0 8px 32px #000a, 0 1.5px 0 #fff2"
                  : "0 8px 32px #bcd6ff44, 0 1.5px 0 #0001",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition:
                  "transform 0.2s, box-shadow 0.3s, background 0.3s, color 0.3s, border 0.3s",
                border: dark ? "1.5px solid #3a4666" : "1.5px solid #b3c6f7",
                cursor: "pointer",
                color: textColor,
                opacity: 0,
                transform: "translateY(40px)",
                animation: `fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards`,
                animationDelay: `${0.12 * idx + 0.1}s`,
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  navigate(`/lessons/${lesson.id}`);
              }}
              aria-label={`Open lesson ${lesson.name}`}
            >
              <style>{`
                @keyframes fadeInUp {
                  0% { opacity: 0; transform: translateY(40px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              <img
                src={lesson.image}
                alt={lesson.name}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 16,
                  objectFit: "cover",
                  marginBottom: 12,
                  boxShadow: dark ? "0 1px 6px #0004" : "0 1px 6px #0001",
                }}
                draggable={false}
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 10,
                  marginTop: 10,
                  color: textColor,
                  fontFamily: "Lato, Arial, sans-serif",
                }}
              >
                {lesson.name}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: textColor,
                  opacity: 0.7,
                  fontFamily: "Lato, Arial, sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.4,
                }}
              >
                {lesson.description}
              </div>
            </div>
          </Grid>
        ))}

        {filtered.length === 0 && (
          <Grid size={{ xs: 12 }}>
            <div
              style={{
                color: noLessonColor,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              No lessons found.
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default LessonsPage;
