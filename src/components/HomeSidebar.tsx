import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QuizIcon from "@mui/icons-material/Quiz";

interface HomeSidebarProps {
  dark: boolean;
}

export const HomeSidebar: React.FC<HomeSidebarProps> = ({ dark }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    {
      key: "dashboard",
      icon: <DashboardIcon />,
      label: "Dashboard",
      path: "/home/dashboard",
    },
    {
      key: "lessons",
      icon: <MenuBookIcon />,
      label: "Lessons",
      path: "/home/lessons",
    },
    {
      key: "achievements",
      icon: <EmojiEventsIcon />,
      label: "Achievements",
      path: "/home/achievements",
    },
    {
      key: "quiz",
      icon: <QuizIcon />,
      label: "Quiz",
      path: "/home/quiz",
    },
  ] as const;

  return (
    <aside
      style={{
        width: "15%",
        height: "100vh",
        background: dark ? "#23283a" : "#fff",
        borderRight: dark ? "2px solid #181c2a" : "2px solid #ececec",
        display: "flex",
        flexDirection: "column",
        paddingTop: 24,
        paddingBottom: 24,
        gap: 12,
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 20,
        boxShadow: "2px 0 12px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src="/logoooo.png"
        alt="Logo"
        style={{
          //   width: 40,
          height: 120,
          margin: "0 auto 24px auto",
          display: "block",
          borderRadius: 8,
        }}
      />
      {navItems.map((item) => {
        const isActive = location.pathname.startsWith(item.path);
        return (
          <button
            key={item.key}
            onClick={() => navigate(item.path)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "90%",
              margin: "0 auto",
              padding: "12px 16px",
              borderRadius: 12,
              background: isActive
                ? dark
                  ? "#2f3550"
                  : "#f5f5fa"
                : "transparent",
              color: isActive ? "#7c4dff" : dark ? "#b3b3c6" : "#23283a",
              border: "none",
              fontSize: 16,
              fontWeight: 500,
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: 24 }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default HomeSidebar;
