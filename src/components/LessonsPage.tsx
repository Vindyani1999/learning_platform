/* eslint-disable @typescript-eslint/no-explicit-any */
import { lessonList } from "../utils/LessonList";
import { lessonTopics } from "../utils/lessonTopics";
import LessonQuizTemplate from "./LessonQuizTemplate";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLesson } from "../redux/lessonProgressSlice";
import type { RootState } from "../redux/store";

interface LessonsPageProps {
  dark: boolean;
  onLessonSelect?: (lessonId: string) => void;
}

// LessonsList: shows all lessons using LessonQuizTemplate
function LessonsList({ dark, onLessonSelect }: LessonsPageProps) {
  const navigate = useNavigate();
  const [infoOpen, setInfoOpen] = useState<string | null>(null);
  // Completed lesson IDs from Redux
  const completedIds = useSelector(
    (state: RootState) => state.lessonProgress.completedLessons
  );
  const dispatch = useDispatch();

  return (
    <LessonQuizTemplate
      items={lessonList}
      title="Explore Lessons"
      searchPlaceholder="Search lessons..."
      dark={dark}
      onItemSelect={(lesson) => {
        dispatch(startLesson(lesson.id));
        if (onLessonSelect) {
          onLessonSelect(lesson.id);
        } else {
          navigate(`/lessons/${lesson.id}`);
        }
      }}
      renderItem={(lesson, { dark, onSelect }) => {
        const isCompleted = completedIds.includes(lesson.id);
        return (
          <div
            style={{
              position: "relative",
              background: dark
                ? "linear-gradient(135deg, #23283a 60%, #2d3650 100%)"
                : "linear-gradient(135deg, #f5f8ff 60%, #e3eaff 100%)",
              borderRadius: 22,
              boxShadow: dark
                ? "0 8px 32px #000a, 0 1.5px 0 #fff2"
                : "0 8px 32px #bcd6ff44, 0 1.5px 0 #0001",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              cursor: "pointer",
            }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect();
            }}
            aria-label={`Open lesson ${lesson.name}`}
          >
            {/* Completed Badge */}
            {isCompleted && (
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "#4caf50",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "4px 8px",
                  borderRadius: 12,
                  zIndex: 2,
                }}
              >
                Completed
              </div>
            )}
            {/* Lesson Image */}
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
            {/* Name & Description */}
            <div
              style={{
                fontWeight: 700,
                fontSize: 18,
                marginBottom: 10,
                color: dark ? "#f8f5f0" : "#23283a",
                fontFamily: "Lato, Arial, sans-serif",
              }}
            >
              {lesson.name}
            </div>
            <div
              style={{
                fontSize: 14,
                color: dark ? "#f8f5f0" : "#23283a",
                opacity: 0.7,
                fontFamily: "Lato, Arial, sans-serif",
                fontWeight: 300,
                lineHeight: 1.4,
              }}
            >
              {lesson.description}
            </div>
            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 18,
                width: "100%",
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: "8px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#fff",
                  color: "#7c4dff",
                  fontWeight: 800,
                  fontSize: 15,
                  boxShadow: "0 2px 8px #7c4dff22",
                  cursor: "pointer",
                  outline: "none",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setInfoOpen(lesson.id);
                }}
              >
                Info
              </button>
              <Popup
                open={infoOpen === lesson.id}
                onClose={() => setInfoOpen(null)}
                modal
                nested
                overlayStyle={{
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <div
                  style={{
                    background: dark ? "#23283a" : "#fff",
                    color: dark ? "#fff" : "#23283a",
                    borderRadius: 20,
                    boxShadow: "0 8px 40px #000a",
                    padding: "32px 28px",
                    minWidth: 200,
                    maxWidth: 400,
                    width: "90vw",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <button
                    onClick={() => setInfoOpen(null)}
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      background: "none",
                      border: "none",
                      color: dark ? "#fff" : "#23283a",
                      fontSize: 22,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    ×
                  </button>
                  {/* Row 1: Image + description */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 20,
                    }}
                  >
                    <img
                      src={lesson.image}
                      alt={lesson.name}
                      style={{
                        width: 140,
                        height: 140,
                        objectFit: "cover",
                        borderRadius: 12,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h2
                        style={{
                          fontWeight: 900,
                          fontSize: 26,
                          margin: "0 0 8px 0",
                          fontFamily: "Lato, Arial, sans-serif",
                        }}
                      >
                        {lesson.name}
                      </h2>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontWeight: 700,
                          fontSize: 14,
                          fontFamily: "Lato, Arial, sans-serif",
                          background:
                            lesson.level === "Beginner"
                              ? "linear-gradient(90deg,#4caf50,#81c784)"
                              : lesson.level === "Intermediate"
                              ? "linear-gradient(90deg,#ff9800,#ffc107)"
                              : "linear-gradient(90deg,#7c4dff,#3f51b5)",
                          color: "#fff",
                          boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                          marginBottom: 12,
                        }}
                      >
                        {lesson.level}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          fontFamily: "Lato, Arial, sans-serif",
                        }}
                      >
                        {lesson.description}
                      </div>
                    </div>
                  </div>
                  {/* Row 2: Topics */}
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: 16,
                        marginBottom: 6,
                        fontFamily: "Lato, Arial, sans-serif",
                      }}
                    >
                      What you can learn
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 18,
                        fontSize: 15,
                        fontFamily: "Lato, Arial, sans-serif",
                      }}
                    >
                      {(lessonTopics[lesson.id] || []).map((topic) => (
                        <li key={topic.id} style={{ marginBottom: 4 }}>
                          {topic.label}
                          {topic.subtopics && (
                            <ul
                              style={{
                                margin: 0,
                                paddingLeft: 16,
                                fontSize: 14,
                                color: dark ? "#b3b3c6" : "#555",
                              }}
                            >
                              {topic.subtopics.map((sub) => (
                                <li key={sub.id}>{sub.label}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Popup>
              <button
                style={{
                  flex: 1,
                  padding: "8px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#b6a4e7",
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: 15,
                  boxShadow: "2px 2px 2px #6a6666",
                  cursor: "pointer",
                  outline: "none",
                }}
                onClick={onSelect}
              >
                Start
              </button>
            </div>
          </div>
        );
      }}
    />
  );
}

// QuizzesList: shows quizzes using LessonQuizTemplate (example, can be used elsewhere)
// import { quizzes } from "../utils/quizList"; // Example quizzes array
// function QuizzesList({ dark }) {
//   return (
//     <LessonQuizTemplate
//       items={quizzes}
//       title="Available Quizzes"
//       searchPlaceholder="Search quizzes..."
//       dark={dark}
//       onItemSelect={(quiz) => { /* handle quiz select */ }}
//       renderItem={(quiz, { dark, isMobile, onSelect }) => (
//         <div onClick={onSelect} style={{ cursor: "pointer" }}>
//           <Card
//             gifSrc={quiz.gifSrc}
//             title={quiz.title}
//             description={quiz.description}
//             dark={dark}
//           />
//         </div>
//       )}
//     />
//   );
// }

// Main LessonsPage just renders LessonsList
function LessonsPage({ dark, onLessonSelect }: LessonsPageProps) {
  return <LessonsList dark={dark} onLessonSelect={onLessonSelect} />;
}

export default LessonsPage;
