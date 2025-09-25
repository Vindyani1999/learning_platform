import type { ReactNode } from "react";
// import ExpandableRightbar from "./ExpandableRightbar";
// import HomeSidebar from "./HomeSidebar";

interface LessonLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
  // rightbar: ReactNode;
  // onToggleTheme: () => void;
  dark: boolean;
}

export function LessonLayout({
  sidebar,
  content,
  // rightbar,
  // onToggleTheme,
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
      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: 20,
          // display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
          marginRight: "30%",
        }}
      >
        {content}
      </main>
      <aside
        style={{
          width: "20%",
          background: dark ? "#23283a" : "#fff",
          borderRight: `1px solid ${dark ? "#333a44" : "#ececec"}`,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "fixed",
          right: 0, // pin to right
          top: 0,

          // gap: 24,
        }}
      >
        {sidebar}
      </aside>
    </div>
  );
}
