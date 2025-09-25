interface AchivementsProps {
  dark: boolean;
}

function Achivements({ dark }: AchivementsProps) {
  // theme colors
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const fadedText = dark ? "#b3b3c6" : "#666";
  // const fadedOpacity = 0.5; // removed unused

  // Get completed lessons from localStorage
  let completed: { id: string }[] = [];
  try {
    const completedRaw = localStorage.getItem("completedLessons");
    completed = completedRaw ? JSON.parse(completedRaw) : [];
    if (!Array.isArray(completed)) completed = [];
  } catch {
    completed = [];
  }
  const completedCount = completed.length;

  // Get streak from localStorage (assume streak is stored as a number in 'lessonStreak')
  let streak = 0;
  try {
    const streakRaw = localStorage.getItem("lessonStreak");
    streak = streakRaw ? parseInt(streakRaw) : 0;
    if (isNaN(streak)) streak = 0;
  } catch {
    streak = 0;
  }

  // Quiz achievements logic (from quizProgress)
  let quizAttempts = 0;
  let quizHighScore = 0;
  let quizPerfect = false;
  try {
    const progressRaw = localStorage.getItem("quizProgress");
    let progress: Record<
      string,
      { score: number; total: number; date: string }
    > = {};
    if (progressRaw) progress = JSON.parse(progressRaw);
    const scores = Object.values(progress).map((q) => q.score);
    quizAttempts = scores.length;
    quizHighScore = scores.length > 0 ? Math.max(...scores) : 0;
    quizPerfect = Object.values(progress).some(
      (q) => q.score === q.total && q.total > 0
    );
  } catch {
    // ignore
  }
  let startedLessons: { id: string }[] = [];
  try {
    const startedRaw = localStorage.getItem("startedLessons");
    startedLessons = startedRaw ? JSON.parse(startedRaw) : [];
    if (!Array.isArray(startedLessons)) startedLessons = [];
  } catch {
    /* ignore */
  }
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
