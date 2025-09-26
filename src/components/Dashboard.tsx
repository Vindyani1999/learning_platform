/* eslint-disable @typescript-eslint/no-explicit-any */

import { lessonTopics } from "../utils/lessonTopics";
import { lessonList } from "../utils/LessonList";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  // BarChart,
  // Bar,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { QuizDashboardSummary } from "./QuizDashboardSummery";

interface DashboardProps {
  dark: boolean;
}

function Dashboard({ dark }: DashboardProps) {
  const textColor = dark ? "#f8f5f0" : "#23283a";
  // const fadedText = dark ? "#b3b3c6" : "#666";

  let startedLessons = [];
  try {
    const stored = localStorage.getItem("startedLessons");
    if (stored) startedLessons = JSON.parse(stored);
  } catch {
    // ignore
  }

  let completedQuizzes: Record<
    string,
    { score: number; total: number; date: string }
  > = {};
  try {
    const stored = localStorage.getItem("quizProgress");
    if (stored) completedQuizzes = JSON.parse(stored);
  } catch {
    // ignore
  }

  const hasQuizzes = Object.keys(completedQuizzes).length > 0;

  const completedIds: string[] = JSON.parse(
    localStorage.getItem("completedLessons") || "[]"
  );
  const completedLessons = completedIds.map((id) => {
    const lesson = lessonList.find((l) => l.id === id);
    return (
      lesson || {
        id,
        name: "Unknown",
        image: "",
        description: "",
        level: "Beginner",
      }
    );
  });

  const hasCourses = startedLessons.length > 0 || completedLessons.length > 0;

  // const totalLessons = startedLessons.length + completedLessons.length;
  const lessonPieData = [
    { name: "Completed", value: completedLessons.length },
    { name: "In Progress", value: startedLessons.length },
  ];
  const lessonPieColors = ["#28a745", "#7c4dff"];

  // let quizBarData: string | any[] | undefined = [];
  try {
    // const progressRaw = localStorage.getItem("quizProgress");
    // const progress = progressRaw ? JSON.parse(progressRaw) : {};
    // quizBarData = Object.entries(progress).map(([key, val]: any) => ({
    //   name: key.charAt(0).toUpperCase() + key.slice(1),
    //   score: val.score,
    //   total: val.total,
    // }));
  } catch {
    // ignore
  }

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: hasCourses ? "1fr 1fr" : "1fr",
        // background: dark ? "#181a20" : "#f5f8ff",
        padding: 24,
        boxSizing: "border-box",
        margin: "0 70px 0 70px",
        overflow: "visible",
      }}
    >
      <>
        {/* Left: Lessons */}
        {hasCourses && (
          <div style={{ paddingRight: 16 }}>
            <SectionTitle text="Your Courses" color={textColor} />
            <LessonList
              lessons={startedLessons}
              dark={dark}
              completed={false}
            />
            <SectionTitle
              text="Completed Courses"
              color={textColor}
              style={{ marginTop: 32 }}
            />
            <LessonList
              lessons={completedLessons}
              dark={dark}
              completed={true}
            />
          </div>
        )}

        <div
          style={{
            paddingLeft: 16,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {hasQuizzes && <QuizDashboardSummary dark={dark} />}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {/* Lesson Completion Pie */}
            {hasCourses && (
              <Card dark={dark} width={350} style={{ marginLeft: 0 }}>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 18,
                    marginBottom: 10,
                    color: textColor,
                    letterSpacing: 0.5,
                    textAlign: "center",
                  }}
                >
                  Lesson Completion
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart style={{ filter: "drop-shadow(0 4px 16px #0002)" }}>
                    <Pie
                      data={lessonPieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      innerRadius={38}
                      label={({ name, percent }) =>
                        `${name}: ${((percent as number) * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {lessonPieData.map((_, idx) => (
                        <Cell
                          key={`cell-${idx}`}
                          fill={lessonPieColors[idx % lessonPieColors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ borderRadius: 12, fontWeight: 600 }}
                    />
                    <Legend
                      iconType="circle"
                      align="center"
                      verticalAlign="bottom"
                      wrapperStyle={{
                        paddingTop: 8,
                        fontWeight: 700,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            )}

            {/* Quiz Scores
              {quizBarData.length > 0 && (
                <Card dark={dark} width={340}>
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 18,
                      marginBottom: 10,
                      color: textColor,
                    }}
                  >
                    Quiz Scores
                  </div>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart
                      data={quizBarData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        stroke={dark ? "#f8f5f0" : "#23283a"}
                      />
                      <YAxis stroke={dark ? "#f8f5f0" : "#23283a"} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="score" fill="#7c4dff" name="Score" />
                      <Bar dataKey="total" fill="#28a745" name="Total" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              )} */}
          </div>
        </div>
      </>
      {!hasCourses && !hasQuizzes && <NoProgress dark={dark} />}
    </div>
  );
}

// Helper Components
const SectionTitle = ({ text, color, style }: any) => (
  <div
    style={{
      fontWeight: 900,
      fontSize: 22,
      marginBottom: 18,
      color,
      letterSpacing: 0.5,
      fontFamily: "'Lato', Arial, sans-serif",
      textAlign: "left",
      ...style,
    }}
  >
    {text}
  </div>
);

const Card = ({ children, dark, width }: any) => (
  <div
    style={{
      width,
      background: dark ? "#23283a" : "#fff",
      borderRadius: 18,
      boxShadow: dark ? "0 2px 16px #0008" : "0 2px 16px #0002",
      padding: 18,
    }}
  >
    {children}
  </div>
);

const LessonList = ({ lessons, dark }: any) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
    {lessons.map((lesson: any) => {
      const topics = lessonTopics[lesson.id] || [];
      const allIds: string[] = [];
      topics.forEach((t: any) =>
        t.subtopics?.length
          ? t.subtopics.forEach((s: any) => allIds.push(`${t.id}__${s.id}`))
          : allIds.push(t.id)
      );

      // let readItems: string[] = [];
      // try {
      //   const stored = localStorage.getItem(`progress_${lesson.id}`);
      //   if (stored) readItems = JSON.parse(stored);
      // } catch {
      //   // ignore
      // }

      // const percent = completed
      //   ? 100
      //   : allIds.length > 0
      //   ? Math.round((readItems.length / allIds.length) * 100)
      //   : 0;

      return (
        <div
          key={lesson.id}
          style={{
            display: "flex",
            alignItems: "center",
            background: dark
              ? "linear-gradient(135deg, #23283a 60%, #2d3650 100%)"
              : "linear-gradient(135deg, #f5f8ff 60%, #e3eaff 100%)",
            borderRadius: 22,
            boxShadow: dark
              ? "0 8px 32px #000a, 0 1.5px 0 #fff2"
              : "0 8px 32px #bcd6ff44, 0 1.5px 0 #0001",
            padding: 10,
            minHeight: "5vh",
          }}
        >
          <img
            src={lesson.image}
            alt={lesson.name}
            style={{
              width: "8%",
              height: "auto",
              objectFit: "cover",
              borderRadius: 10,
              marginRight: 24,
              boxShadow: dark ? "0 1px 6px #0004" : "0 1px 6px #0001",
            }}
          />
          <div style={{ flex: 1, textAlign: "left" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 4,
                color: dark ? "#f8f5f0" : "#23283a",
                fontFamily: "'Lato', Arial, sans-serif",
              }}
            >
              {lesson.name}
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "4px 8px",
                borderRadius: "20px",
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "Lato, Arial, sans-serif",
                background:
                  lesson.level === "Beginner"
                    ? "linear-gradient(90deg,#4caf50,#81c784)"
                    : lesson.level === "Intermediate"
                    ? "linear-gradient(90deg,#ff9800,#ffc107)"
                    : "linear-gradient(90deg,#7c4dff,#3f51b5)",
                color: "#fff",
                boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                marginBottom: 4,
              }}
            >
              {lesson.level}
            </div>
          </div>
          {/* {!completed && <PieProgress percent={percent} />} */}
        </div>
      );
    })}
  </div>
);

const NoProgress = ({ dark }: any) => {
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const fadedText = dark ? "#b3b3c6" : "#666";
  const fadedOpacity = 0.5;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "0%",
        top: "15%",
      }}
    >
      <img
        src="/Progress.png"
        alt="No Progress yet"
        style={{
          // display: "block",
          width: "30%",
          objectFit: "contain",
          marginBottom: "1%",
          marginLeft: "auto",
          marginRight: "auto",
          opacity: fadedOpacity,
          filter: dark ? "brightness(0.8)" : "none",
        }}
      />
      <h3
        style={{
          fontWeight: 700,
          fontSize: 20,
          marginBottom: 10,
          color: textColor,
          fontFamily: "'Lato', Arial, sans-serif",
          opacity: 0.8,
        }}
      >
        Nothing to Show
      </h3>
      <div
        style={{
          color: fadedText,
          fontSize: 16,
          maxWidth: 260,
          margin: "0 auto",
          fontFamily: "'Lato', Arial, sans-serif",
          opacity: fadedOpacity,
        }}
      >
        Start learning to see your progress here!
      </div>
    </div>
  );
};

export default Dashboard;
