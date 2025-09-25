import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export function QuizDashboardSummary({ dark }: { dark: boolean }) {
  let quizAttempts = 0;
  let quizHighScore = 0;
  //   let quizPerfect = false;
  let quizTotal = 0;
  //   let quizSuccessRate = 0;
  //   let quizErrorRate = 0;
  try {
    const progressRaw = localStorage.getItem("quizProgress");
    let progress: Record<
      string,
      { score: number; total: number; date: string }
    > = {};
    if (progressRaw) progress = JSON.parse(progressRaw);
    const scores = Object.values(progress).map((q) => q.score);
    const totals = Object.values(progress).map((q) => q.total);
    quizAttempts = scores.length;
    quizHighScore = scores.length > 0 ? Math.max(...scores) : 0;
    // quizPerfect = Object.values(progress).some(
    //   (q) => q.score === q.total && q.total > 0
    // );
    quizTotal = totals.reduce((acc, t) => acc + t, 0);
    // const totalCorrect = scores.reduce((acc, s) => acc + s, 0);
    // quizSuccessRate =
    //   quizTotal > 0 ? Math.round((totalCorrect / quizTotal) * 100) : 0;
    // quizErrorRate = quizTotal > 0 ? 100 - quizSuccessRate : 0;
  } catch {
    // ignore
  }

  const textColor = dark ? "#f8f5f0" : "#23283a";
  const fadedText = dark ? "#b3b3c6" : "#666";
  //   const cardBg = dark
  // ? "linear-gradient(135deg, #23283a 60%, #2d3650 100%)"
  // : "linear-gradient(135deg, #f5f8ff 60%, #e3eaff 100%)";
  //   const cardShadow = dark
  // ? "0 8px 32px #000a, 0 1.5px 0 #fff2"
  // : "0 8px 32px #bcd6ff44, 0 1.5px 0 #0001";

  //   const barData = [
  //     { name: "Success", value: quizSuccessRate },
  //     { name: "Error", value: quizErrorRate },
  //   ];

  return (
    <div style={{ margin: "40px auto 0 auto", maxWidth: 900, width: "100%" }}>
      <div
        style={{
          fontWeight: 900,
          fontSize: 22,
          marginBottom: 18,
          color: textColor,
          letterSpacing: 0.5,
          fontFamily: "'Lato', Arial, sans-serif",
          textAlign: "left",
        }}
      >
        Quiz Progress
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {/* Attempts Card */}
        <div
          style={{
            flex: 1,
            minWidth: 120,
            maxWidth: 180,
            height: 220,
            background: dark
              ? "linear-gradient(90deg,#23283a 60%,#2d3650 100%)"
              : "linear-gradient(90deg,#f5f8ff 60%,#e3eaff 100%)",
            borderRadius: 18,
            boxShadow: dark ? "0 4px 18px #0006" : "0 4px 18px #bcd6ff33",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "28px 0",
            gap: 18,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: dark ? "#7c4dff22" : "#7c4dff11",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 32, color: "#7c4dff" }}>📝</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: fadedText,
                marginBottom: 2,
                letterSpacing: 0.5,
              }}
            >
              Quizzes Attempted
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#7c4dff",
                letterSpacing: 1,
              }}
            >
              {quizAttempts}
            </div>
          </div>
        </div>
        {/* Highest Score Card */}
        <div
          style={{
            flex: 1,
            minWidth: 120,
            maxWidth: 180,
            height: 220,
            background: dark
              ? "linear-gradient(90deg,#23283a 60%,#2d3650 100%)"
              : "linear-gradient(90deg,#f5f8ff 60%,#e3eaff 100%)",
            borderRadius: 18,
            boxShadow: dark ? "0 4px 18px #0006" : "0 4px 18px #bcd6ff33",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "28px 0",
            gap: 18,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: "50%",
              background: dark ? "#28a74522" : "#28a74511",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 32, color: "#28a745" }}>🏆</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: fadedText,
                marginBottom: 2,
                letterSpacing: 0.5,
              }}
            >
              Highest Score
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: "#28a745",
                letterSpacing: 1,
              }}
            >
              {quizHighScore}
              {quizTotal > 0 ? ` / ${quizTotal}` : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Success/Error Rate Bar Chart
      <div style={{ width: "100%", maxWidth: 400, margin: "32px auto 0 auto" }}>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart
            data={barData}
            layout="vertical"
            margin={{ left: 20, right: 20, top: 10, bottom: 10 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="name"
              tick={{
                fill: textColor,
                fontWeight: 700,
                fontFamily: "'Lato', Arial, sans-serif",
              }}
              width={80}
            />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 8, 8]}>
              {barData.map((entry, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={entry.name === "Success" ? "#28a745" : "#e53935"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
}
