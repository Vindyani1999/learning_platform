import React from "react";

interface ButtonProps {
  buttonTitle: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: "default" | "light";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  buttonTitle,
  variant = "default",
}) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 600;
  const isLight = variant === "light";
  const baseStyle: React.CSSProperties = {
    position: isMobile ? "static" : "absolute",
    top: isMobile ? undefined : 32,
    right: isMobile ? undefined : 48,
    width: isMobile ? "90%" : undefined,
    minWidth: isMobile ? 120 : 140,
    maxWidth: isMobile ? 300 : undefined,
    margin: isMobile ? "16px auto" : undefined,
    display: isMobile ? "block" : undefined,
    padding: isMobile ? "10px 0" : "12px 20px",
    fontSize: isMobile ? 14 : 20,
    fontWeight: 600,
    borderRadius: 32,
    background: isLight ? "#fff" : "rgba(0,0,0,0.10)",
    color: isLight ? "#23283a" : "#FFF8E7",
    border: isLight ? "2px solid #23283a" : undefined,
    boxShadow: isLight
      ? "0 2px 12px 0 rgba(44, 44, 44, 0.10)"
      : "0 1px 5px 0 rgba(255, 248, 231, 0.923)",
    cursor: "pointer",
    zIndex: 2,
    transition:
      "background 0.2s, color 0.2s, box-shadow 0.2s, border-color 0.2s",
    outline: "none",
    backdropFilter: "blur(2px)",
    ...style,
  };
  return (
    <button
      style={baseStyle}
      onClick={onClick}
      onMouseOver={(e) => {
        if (isLight) {
          (e.currentTarget as HTMLButtonElement).style.background = "#f5f5f5";
          (e.currentTarget as HTMLButtonElement).style.color = "#7c4dff";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 4px 24px 0 rgba(44,44,44,0.13)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#7c4dff";
        } else {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLButtonElement).style.color = "#FFF8E7";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 4px 24px 0 rgba(255, 248, 231, 0.28)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#FFF8E7";
        }
      }}
      onMouseOut={(e) => {
        if (isLight) {
          (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          (e.currentTarget as HTMLButtonElement).style.color = "#23283a";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 2px 12px 0 rgba(44,44,44,0.10)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#23283a";
        } else {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(0,0,0,0.10)";
          (e.currentTarget as HTMLButtonElement).style.color = "#FFF8E7";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 2px 16px 0 rgba(255, 248, 231, 0.18)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#FFF8E7";
        }
      }}
    >
      {buttonTitle}
    </button>
  );
};
