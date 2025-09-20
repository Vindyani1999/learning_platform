import React, { useEffect, useState, useCallback } from "react";

const CHIP_LABELS = [
  "Creative Learning",
  "Technical Exploration",
  "Inspiring Future",
  "Growth Mindset",
  "Skill Development",
  "Future Ready",
  "Connect Ideas",
  "Success",
  "Challenge",
  "Progress",
];

const COLORS = [
  "#4527a0", // deep purple
  "#ff8f00", // dark amber
  "#00838f", // dark cyan
  "#ad1457", // deep pink
  "#c49000", // muted gold
  "#008744", // dark green
  "#b71c1c", // deep red
  "#283593", // dark indigo
  "#ef6c00", // deep orange
  "#1b5e20", // dark green
  "#6a1b9a", // deep violet
  "#b71c1c", // deep red
  "#00695c", // teal
  "#827717", // olive
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function getChip3DStyle(color: string, angle: number, landed: boolean) {
  return {
    background: color,
    boxShadow: landed
      ? `0 6px 24px #0003, 0 2px 0 #fff8 inset`
      : `0 8px 32px #0005, 0 2px 0 #fff8 inset`,
    borderRadius: 18,
    border: `2px solid #fff8`,
    color: "#fff",
    fontWeight: 900,
    fontFamily: "'Lato', Arial, sans-serif",
    fontSize: 20,
    padding: "0.6em 0.6em",
    transform: `rotate(${angle}deg) scale3d(1,1,1)`,
    transformStyle: "preserve-3d" as const,
    perspective: 400,
    position: "absolute" as const,
    left: 0,
    top: 0,
    transition: landed
      ? "box-shadow 0.3s, filter 0.3s"
      : "top 0.2s linear, left 0.2s linear, box-shadow 0.3s, filter 0.3s",
    zIndex: landed ? 20 : 10,
    filter: landed ? "brightness(1.1)" : "brightness(1.2) blur(0.5px)",
    cursor: "pointer",
    userSelect: "none" as const,
    whiteSpace: "nowrap" as const,
  };
}

interface Chip {
  id: string;
  label: string;
  color: string;
  angle: number;
  x: number; // px
  y: number; // px
  speed: number; // px/frame
  landed: boolean;
  landingY: number; // px
  falling: boolean;
  delay: number;
}

export const ChipsFall: React.FC<{ width?: number; height?: number }> = ({
  width = 1000,
  height = 250,
}) => {
  const [chips, setChips] = useState<Chip[]>(() => {
    const count = 10;
    const chipsArr: Chip[] = [];
    for (let i = 0; i < count; i++) {
      chipsArr.push({
        id: `${CHIP_LABELS[i % CHIP_LABELS.length]}-${i}-${Math.random()
          .toString(36)
          .slice(2)}`,
        label: CHIP_LABELS[i % CHIP_LABELS.length],
        color: COLORS[i % COLORS.length],
        angle: randomBetween(-60, 60), // tilted for natural look
        x: randomBetween(60, width - 140), // random horizontal
        y: randomBetween(-200, -50),
        speed: randomBetween(3, 7),
        landed: false,
        landingY: 0,
        falling: false,
        delay: performance.now() + randomBetween(0, 2000), // delay before fall
      });
    }
    return chipsArr;
  });

  // ground curve (slightly wavy)
  const curveY = useCallback(
    (x: number) => {
      const amp = 12;
      const freq = (1.2 * Math.PI) / width;
      return Math.round(height - 38 + Math.sin(x * freq) * amp);
    },
    [width, height]
  );

  // Animate chips
  useEffect(() => {
    let raf: number;
    function animate() {
      const now = performance.now();
      setChips((prev) =>
        prev.map((chip, i) => {
          if (chip.landed) return chip;

          // start falling after delay
          if (!chip.falling && now > chip.delay) {
            return { ...chip, falling: true };
          }
          if (!chip.falling) return chip;

          const landingY = curveY(chip.x);
          const newY = chip.y + chip.speed;
          let stackY = landingY;

          // Estimate chip dimensions
          const chipHeight = 38;
          const chipWidth = Math.max(80, chip.label.length * 12);

          // Check collision with other landed chips (like blocks in a bucket)
          for (let j = 0; j < i; j++) {
            const other = prev[j];
            if (!other.landed) continue;

            // const otherHeight = 38;
            const otherWidth = Math.max(80, other.label.length * 12);

            // Simple AABB overlap
            const overlapX =
              chip.x < other.x + otherWidth && chip.x + chipWidth > other.x;

            if (overlapX) {
              // place chip above the other
              stackY = Math.min(stackY, other.y - chipHeight);
            }
          }

          if (newY >= stackY) {
            return {
              ...chip,
              y: stackY,
              landed: true,
              landingY: stackY,
              falling: false,
            };
          } else {
            return { ...chip, y: newY };
          }
        })
      );
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [curveY]);

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        margin: "0 auto",
        background: "none",
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      {/* ground */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          boxShadow: "0 2px 8px #0002",
          zIndex: 2,
        }}
      />
      {/* chips */}
      {chips.map((chip) => (
        <div
          key={chip.id}
          style={{
            ...getChip3DStyle(chip.color, chip.angle, chip.landed),
            left: chip.x,
            top: chip.y,
            minHeight: 36,
            pointerEvents: "auto",
            opacity: chip.landed || chip.falling ? 1 : 0.5,
            transition: chip.landed
              ? "box-shadow 0.3s, filter 0.3s, opacity 0.3s"
              : undefined,
          }}
        >
          {chip.label}
        </div>
      ))}
    </div>
  );
};
