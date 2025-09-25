import React from "react";

interface PieProgressProps {
  percent: number; // 0-100
  size?: number;
  stroke?: number;
  color?: string;
  bgColor?: string;
}

const PieProgress: React.FC<PieProgressProps> = ({
  percent,
  size = 48,
  stroke = 7,
  color = "#7c4dff",
  bgColor = "#e0d7ff",
}) => {
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ * (1 - percent / 100);
  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={bgColor}
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.35em"
        fontSize={size * 0.32}
        fontWeight={700}
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
};

export default PieProgress;
