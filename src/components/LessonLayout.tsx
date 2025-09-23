import type { ReactNode } from "react";

interface LessonLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
  rightbar: ReactNode;
  onToggleTheme: () => void;
  dark: boolean;
}

export function LessonLayout({
  sidebar,
  content,
  rightbar,
  onToggleTheme,
  dark,
}: LessonLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: dark ? "#23272e" : "#f8f5f0",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 260,
          background: dark ? "#23283a" : "#fff",
          borderRight: `1px solid ${dark ? "#333a44" : "#ececec"}`,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {sidebar}
      </aside>
      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ alignSelf: "flex-end", marginBottom: 24 }}>
          <button
            onClick={onToggleTheme}
            style={{
              padding: "8px 18px",
              borderRadius: 20,
              border: "none",
              background: dark ? "#444" : "#eee",
              color: dark ? "#fff" : "#23283a",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {dark ? "Light" : "Dark"} Mode
          </button>
        </div>
        {content}
      </main>
      {/* Rightbar */}
      <aside
        style={{
          width: 320,
          background: dark ? "#23283a" : "#fff",
          borderLeft: `1px solid ${dark ? "#333a44" : "#ececec"}`,
          padding: 24,
          transition: "width 0.3s",
        }}
      >
        {rightbar}
      </aside>
    </div>
  );
}
