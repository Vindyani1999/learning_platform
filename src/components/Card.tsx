import React, { useState } from "react";

interface CardProps {
  icon?: React.ReactNode;
  gifSrc?: string; // path to gif
  gifPreviewSrc?: string; // path to static preview (jpg/png)
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
  return (
    <div
      style={{
        background: "#23283a",
        borderRadius: 32,
        boxShadow: hovered
          ? "0 8px 40px #29292b44, 0 10px 24px #0006"
          : "0 4px 32px #0004",
        padding: "2.5rem 2rem 2rem 2rem",
        minWidth: 280,
        maxWidth: 340,
        flex: 1,
        margin: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition:
          "transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)",
        border: "2px solid #7c4dff22",
        transform: hovered ? "scale(1.2)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          marginBottom: 18,
          width: 64,
          height: 64,
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
              marginTop: 4,
              width: 120,
              height: 120,
              borderRadius: 16,
              objectFit: "cover",
              //   boxShadow: hovered ? "0 0 0 4px #7c4dff44" : undefined,
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
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 10,
          textAlign: "center",
          fontFamily: "'Lato', Arial, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#c7c2b8",
          fontSize: 16,
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
