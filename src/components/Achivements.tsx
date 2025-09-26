interface AchivementsProps {
  dark: boolean;
}

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Achivements({ dark }: AchivementsProps) {
  // theme colors
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const fadedText = dark ? "#b3b3c6" : "#666";

  // Get completed and started lessons from Redux
  const completedLessons = useSelector((state: RootState) => state.lessonProgress.completedLessons);
  const startedLessons = useSelector((state: RootState) => state.lessonProgress.startedLessons);
  const completedCount = completedLessons.length;

  // Streak: if you have a streak feature in Redux, use it here. Otherwise, set to 0.
  // TODO: Replace with actual streak from Redux if available
  const streak = 0;

  // Quiz achievements from Redux
  const quizProgress = useSelector((state: RootState) => state.quizProgress.quizProgress);
  const quizEntries = Object.values(quizProgress);
  const quizAttempts = quizEntries.length;
  const quizHighScore = quizEntries.length > 0 ? Math.max(...quizEntries.map(q => q.score)) : 0;
  const quizPerfect = quizEntries.some(q => q.score === q.total && q.total > 0);

  const explorer = completedCount + startedLessons.length >= 3;

  const achievements = [
    {
      key: "silver",
      label: "Silver Badge",
      icon: "🥈",
      description: "Complete 1 lesson",
      earned: completedCount >= 1,
    },
    {
      key: "gold",
      label: "Gold Badge",
      icon: "🥇",
      description: "Complete 3 lessons",
      earned: completedCount >= 3,
    },
    {
      key: "platinum",
      label: "Platinum Badge",
      icon: "🏆",
      description: "Complete 5 lessons",
      earned: completedCount >= 5,
    },
    {
      key: "diamond",
      label: "Diamond Badge",
      icon: "💎",
      description: "Complete 10 lessons",
      earned: completedCount >= 10,
    },
    {
      key: "streak",
      label: "Streak Badge",
      icon: "🔥",
      description: "3-day learning streak",
      earned: streak >= 3,
    },
    {
      key: "flame",
      label: "Flame Badge",
      icon: "🔥🔥",
      description: "7-day learning streak",
      earned: streak >= 7,
    },
    // Quiz achievements
    {
      key: "quizBeginner",
      label: "Quiz Beginner",
      icon: "📘",
      description: "Attempt your first quiz",
      earned: quizAttempts >= 1,
    },
    {
      key: "quizIntermediate",
      label: "Quiz Intermediate",
      icon: "📗",
      description: "Score at least 3/5 on a quiz",
      earned: quizHighScore >= 3,
    },
    {
      key: "quizPro",
      label: "Quiz Pro",
      icon: "📙",
      description: "Score at least 4/5 on a quiz",
      earned: quizHighScore >= 4,
    },
    {
      key: "quiz",
      label: "Quiz Master",
      icon: "🧠",
      description: "Score 100% on a quiz",
      earned: quizPerfect,
    },
    {
      key: "explorer",
      label: "Explorer",
      icon: "🌎",
      description: "Start 3 different lessons",
      earned: explorer,
    },
  ];

  // Sort: unlocked (earned) first, then locked
  const sortedAchievements = [...achievements].sort((a, b) => {
    if (a.earned === b.earned) return 0;
    return a.earned ? -1 : 1;
  });

  return (
    <div
      style={{
        color: textColor,
        padding: 32,
        minHeight: "100vh",
        fontFamily: "'Lato', Arial, sans-serif",
      }}
    >
      <h2 style={{ fontWeight: 900, fontSize: 28, marginBottom: 24 }}>
        Your Achievements
      </h2>
      <div
        style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sortedAchievements.map((a) => (
          <div
            key={a.key}
            style={{
              background: dark ? "#23283a" : "#fff",
              borderRadius: 18,
              boxShadow: "0 2px 16px #0002",
              padding: 24,
              maxWidth: 150,
              textAlign: "center",
              marginBottom: 24,
              opacity: a.earned ? 1 : 0.4,
              filter: a.earned ? "none" : "grayscale(1)",
              position: "relative",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>{a.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
              {a.label}
            </div>
            <div style={{ color: fadedText, fontSize: 16, marginBottom: 8 }}>
              {a.description}
            </div>
            {!a.earned && (
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "#8888",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  borderRadius: 8,
                  padding: "2px 10px",
                  letterSpacing: 1,
                }}
              >
                Locked
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achivements;
