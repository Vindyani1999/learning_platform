import { useState } from "react";
import type { QuizQuestion } from "./data/ReactQuiz";

interface QuizUIProps {
  questions: QuizQuestion[];
  quizKey?: string; // unique key for this quiz
  onComplete?: (score: number, total: number) => void;
  dark?: boolean;
}

export default function QuizUI({
  questions,
  quizKey,
  onComplete,
  dark = false,
}: QuizUIProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const q = questions[current];

  function handleOption(idx: number) {
    setSelected(idx);
    setAnswered(true);
    if (idx === q.answer) setScore((s) => s + 1);
  }

  function handleNext() {
    setSelected(null);
    setAnswered(false);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResult(true);
      const finalScore = score;
      // Notify parent to mark quiz as complete in Redux
      if (quizKey && onComplete) {
        onComplete(finalScore, questions.length);
      }
      if (onComplete) onComplete(finalScore, questions.length);
    }
  }

  if (showResult) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: 40,
          color: dark ? "#f8f5f0" : "#23283a",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 16 }}>Quiz Complete!</h2>
        <div style={{ fontSize: 22, marginBottom: 12 }}>
          Your Score: <b>{score}</b> / {questions.length}
        </div>
        <div
          style={{
            fontSize: 18,
            color: score === questions.length ? "#28a745" : "#7c4dff",
            marginBottom: 24,
          }}
        >
          {score === questions.length
            ? "Perfect! 🎉"
            : score >= Math.ceil(questions.length * 0.6)
            ? "Great job!"
            : "Keep practicing!"}
        </div>
        <button
          style={{
            padding: "10px 26px",
            borderRadius: 24,
            border: "none",
            background: "#7c4dff",
            color: "#fff",
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
            outline: "none",
          }}
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setShowResult(false);
            setSelected(null);
            setAnswered(false);
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        background: dark ? "#23283a" : "#fff",
        borderRadius: 18,
        boxShadow: dark ? "0 2px 16px #0008" : "0 2px 16px #0002",
        padding: 32,
        color: dark ? "#f8f5f0" : "#23283a",
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: "#7c4dff",
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        Question {current + 1} of {questions.length}
      </div>
      <h3 style={{ fontWeight: 900, fontSize: 24, marginBottom: 18 }}>
        {q.question}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {q.options.map((opt, idx) => {
          let bg = dark ? "#23283a" : "#f4f4f4";
          if (selected !== null) {
            if (idx === q.answer) bg = "#28a745";
            else if (idx === selected) bg = "#ff4d4f";
          }
          return (
            <button
              key={idx}
              onClick={() => handleOption(idx)}
              disabled={answered}
              style={{
                padding: "14px 20px",
                borderRadius: 14,
                border: "none",
                background: bg,
                color:
                  selected !== null && idx === q.answer
                    ? "#fff"
                    : dark
                    ? "#f8f5f0"
                    : "#23283a",
                fontWeight: 700,
                fontSize: 17,
                boxShadow: "0 2px 8px #7c4dff22",
                cursor: answered ? "not-allowed" : "pointer",
                transition: "background 0.2s, color 0.2s",
                outline: "none",
                position: "relative",
                justifyContent: "flex-start",
                textAlign: "left",
              }}
            >
              {opt}
              {selected !== null && idx === q.answer && (
                <span style={{ marginLeft: 12, fontSize: 18 }}>✔️</span>
              )}
              {selected !== null && idx === selected && idx !== q.answer && (
                <span style={{ marginLeft: 12, fontSize: 18 }}>❌</span>
              )}
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <div
            style={{
              marginTop: 18,
              color: selected === q.answer ? "#28a745" : "#ff4d4f",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            {q.explanation}
          </div>
          <button
            style={{
              marginTop: 24,
              padding: "10px 26px",
              borderRadius: 24,
              border: "none",
              background: "#7c4dff",
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
              cursor: "pointer",
              outline: "none",
            }}
            onClick={handleNext}
          >
            {current < questions.length - 1 ? "Next" : "Show Result"}
          </button>
        </>
      )}
    </div>
  );
}
