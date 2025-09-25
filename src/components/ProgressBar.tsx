import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div style={{ width: "100%", margin: "16px 0" }}>
      <div
        style={{
          height: 16,
          background: "#e0d7ff",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "linear-gradient(90deg,#7c4dff,#3f51b5)",
            borderRadius: 8,
            transition: "width 0.3s",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "right",
          fontSize: 14,
          marginTop: 4,
          color: "#7c4dff",
          fontWeight: 700,
        }}
      >
        {percent}% Complete
      </div>
    </div>
  );
};

export default ProgressBar;
