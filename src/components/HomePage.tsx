import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomeSidebar from "./HomeSidebar";
import FancyCheckbox from "./FancyToggle";
import LessonsPage from "./LessonsPage";
import Dashboard from "./Dashboard";
import Achivements from "./Achivements";
import { LessonContentPage } from "./LessonContentPage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Quiz from "./Quiz";
import { useTheme } from "../ThemeContext";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  const navigate = useNavigate();
  const location = useLocation();

  const onToggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Handler for selecting a lesson from LessonsPage
  const handleLessonSelect = (lessonId: string) => {
    navigate(`/home/lessons/${lessonId}`);
  };

  // Handler for going back to lessons list
  const handleBackToLessons = () => {
    navigate("/home/lessons");
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        // background: dark ? "#181c2a" : "#f8f5f0",
      }}
    >
      <HomeSidebar dark={dark} />
      <main
        style={{
          marginLeft: 220,
          flex: 1,
          position: "relative",
          maxWidth: "calc(100% - 220px)",
          background: dark ? "#181c2a" : "#f8f5f0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 20,
            position: "fixed",
            top: 20,
            right: 40,
          }}
        >
          <FancyCheckbox checked={!dark} onChange={onToggleTheme} size={36} />
        </div>
        <Routes>
          <Route path="dashboard" element={<Dashboard dark={dark} />} />
          <Route
            path="lessons"
            element={
              <LessonsPage dark={dark} onLessonSelect={handleLessonSelect} />
            }
          />
          <Route
            path="lessons/:lessonId"
            element={
              <>
                <button
                  onClick={handleBackToLessons}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 20,
                    border: "none",
                    background: dark
                      ? "linear-gradient(90deg,#23283a,#7c4dff)"
                      : "linear-gradient(90deg,#e0d7ff,#7c4dff)",
                    color: dark ? "#fff" : "#23283a",
                    fontWeight: 800,
                    fontSize: 16,
                    boxShadow: dark
                      ? "0 2px 8px #181c2a44"
                      : "0 2px 8px #7c4dff22",
                    cursor: "pointer",
                    transition: "background 0.2s, box-shadow 0.2s",
                    letterSpacing: 0.5,
                    outline: "none",
                    marginBottom: 24,
                    position: "absolute",
                    top: 24,
                    left: 70,
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow = "0 4px 16px #7c4dff44")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow = dark
                      ? "0 2px 8px #181c2a44"
                      : "0 2px 8px #7c4dff22")
                  }
                >
                  <ArrowCircleLeftIcon /> Back to Lessons
                </button>
                {/* Get lessonId from URL params */}
                <LessonContentPage
                  dark={dark}
                  lessonId={location.pathname.split("/").pop() || ""}
                />
              </>
            }
          />
          <Route path="achievements" element={<Achivements dark={dark} />} />
          <Route path="quiz" element={<Quiz dark={dark} />} />
        </Routes>
      </main>
    </div>
  );
}
