import { useState } from "react";
import { reactQuiz } from "./data/ReactQuiz";
import QuizUI from "./QuizUI";
import LessonQuizTemplate from "./LessonQuizTemplate";

// QuizCard for quiz list
interface QuizCardProps {
  gifSrc: string;
  title: string;
  description: string;
  dark?: boolean;
  onClick?: () => void;
  attempted?: boolean;
}

function QuizCard({
  gifSrc,
  title,
  description,
  dark,
  onClick,
  attempted,
}: QuizCardProps) {
  const cardBg = dark
    ? "linear-gradient(135deg, #23283a 60%, #2d3650 100%)"
    : "linear-gradient(135deg, #f5f8ff 60%, #e3eaff 100%)";
  const cardShadow = dark
    ? "0 8px 32px #000a, 0 1.5px 0 #fff2"
    : "0 8px 32px #bcd6ff44, 0 1.5px 0 #0001";
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const descColor = dark ? "#f8f5f0" : "#23283a";

  return (
    <div
      onClick={onClick}
      style={{
        background: cardBg,
        borderRadius: 22,
        boxShadow: cardShadow,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        minWidth: 240,
        maxWidth: 320,
        margin: 8,
        transition:
          "transform 0.18s cubic-bezier(.4,0,.2,1), box-shadow 0.18s cubic-bezier(.4,0,.2,1)",
        border: dark ? "1.5px solid #444a55" : "1.5px solid #e3eaff",
        position: "relative",
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (onClick) onClick();
        }
      }}
    >
      <img
        src={gifSrc}
        alt={title}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 16,
          marginBottom: 14,
          boxShadow: dark ? "0 2px 8px #0008" : "0 2px 8px #bcd6ff44",
        }}
        draggable={false}
      />
      {attempted && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: dark ? "#7c4dff" : "#23283a",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 8,
            padding: "2px 10px",
            letterSpacing: 1,
            zIndex: 2,
          }}
        >
          Attempted
        </div>
      )}
      <div
        style={{
          fontWeight: 800,
          fontSize: 20,
          marginBottom: 8,
          color: textColor,
          fontFamily: "Lato, Arial, sans-serif",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 15,
          color: descColor,
          opacity: 0.8,
          textAlign: "center",
          fontFamily: "Lato, Arial, sans-serif",
        }}
      >
        {description}
      </div>
    </div>
  );
}

const quizzes = [
  {
    key: "react",
    title: "ReactJS Quiz",
    description: "Test your knowledge of React fundamentals!",
    gifSrc: "/react.png",
    questions: reactQuiz,
  },
];

interface QuizProps {
  dark?: boolean;
}

function Quiz({ dark = false }: QuizProps) {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  // Get quiz progress from localStorage
  let quizProgress: Record<
    string,
    { score: number; total: number; date: string }
  > = {};
  try {
    const raw = localStorage.getItem("quizProgress");
    if (raw) quizProgress = JSON.parse(raw);
  } catch {
    // ignore
  }

  if (selectedQuiz) {
    const quiz = quizzes.find((q) => q.key === selectedQuiz);
    if (!quiz) return null;
    return (
      <div
        style={{
          minHeight: "100vh",
          background: dark ? "#23272e" : "#f8f5f0",
          color: dark ? "#f8f5f0" : "#23283a",
          paddingBottom: 40,
        }}
      >
        <button
          style={{
            margin: "18px 0 0 18px",
            padding: "8px 18px",
            borderRadius: 18,
            border: "none",
            background: dark ? "#7c4dff" : "#23283a",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            outline: "none",
          }}
          onClick={() => setSelectedQuiz(null)}
        >
          ← Back to Quizzes
        </button>
        <div
          style={{
            marginTop: 24,
            padding: "0 18px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <QuizUI questions={quiz.questions} quizKey={quiz.key} dark={dark} />
        </div>
      </div>
    );
  }

  return (
    <LessonQuizTemplate
      items={quizzes}
      title="Available Quizzes"
      searchPlaceholder="Search quizzes..."
      dark={dark}
      onItemSelect={(quiz) => setSelectedQuiz(quiz.key)}
      renderItem={(quiz, { dark, onSelect }) => (
        <QuizCard
          gifSrc={quiz.gifSrc}
          title={quiz.title}
          description={quiz.description}
          dark={dark}
          onClick={onSelect}
          attempted={!!quizProgress[quiz.key]}
        />
      )}
    />
  );
}

export default Quiz;
