import React, { useState } from "react";

interface CardProps {
  icon?: React.ReactNode;
  gifSrc?: string;
  gifPreviewSrc?: string;
  title: string;
  description: string;
}

export function Card({
  icon,
  gifSrc,
  gifPreviewSrc,
  title,
  description,
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth <= 600;
  return (
    <div
      style={{
        background: "#23283a",
        borderRadius: isMobile ? 20 : 32,
        boxShadow: hovered
          ? "0 8px 40px #29292b44, 0 10px 24px #0006"
          : "0 4px 32px #0004",
        padding: isMobile
          ? "1.5rem 0.5rem 1.2rem 0.5rem"
          : "2.5rem 2rem 2rem 2rem",
        minWidth: isMobile ? 180 : 280,
        maxWidth: isMobile ? 260 : 340,
        width: isMobile ? "90vw" : undefined,
        flex: 1,
        margin: isMobile ? 6 : 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition:
          "transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)",
        border: "2px solid #7c4dff22",
        transform: hovered
          ? isMobile
            ? "scale(1.05)"
            : "scale(1.2)"
          : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          marginBottom: isMobile ? 10 : 18,
          width: isMobile ? 48 : 64,
          height: isMobile ? 48 : 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gifSrc && gifPreviewSrc ? (
          <img
            src={hovered ? gifSrc : gifPreviewSrc}
            alt={title + " visual"}
            style={{
              marginTop: isMobile ? 2 : 4,
              width: isMobile ? 90 : 120,
              height: isMobile ? 90 : 120,
              borderRadius: isMobile ? 10 : 16,
              objectFit: "cover",
              transition: "box-shadow 0.2s",
            }}
            draggable={false}
          />
        ) : (
          icon
        )}
      </div>
      <h3
        style={{
          color: "#fff8e7",
          fontSize: isMobile ? 17 : 22,
          fontWeight: 700,
          marginBottom: isMobile ? 7 : 10,
          textAlign: "center",
          fontFamily: "'Lato', Arial, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#c7c2b8",
          fontSize: isMobile ? 13 : 16,
          textAlign: "center",
          lineHeight: 1.6,
          fontFamily: "'Open Sans', Arial, sans-serif",
        }}
      >
        {description}
      </p>
    </div>
  );
}
