import { useRef, useEffect, useState } from "react";
import { lessonList, type Lesson } from "../utils/LessonList";
import { useIsMobile } from "../utils/useIsMobile";

const TAG_W = 150;
const TAG_H = 70;
const PADDING = 15; // true gap between tags and from edge
const OUTER_W = TAG_W + 2 * PADDING;
const OUTER_H = TAG_H + 2 * PADDING;
const POPUP_DURATION = 5000; // ms

function getRandomPosition(
  existing: { x: number; y: number; w: number; h: number }[],
  tagW: number,
  tagH: number,
  areaW: number,
  areaH: number
) {
  const Y_OFFSET = 60;
  let tries = 0;
  while (tries < 100) {
    const x = Math.random() * (areaW - OUTER_W);
    const y = Y_OFFSET + Math.random() * (areaH - OUTER_H - Y_OFFSET);
    const overlaps = existing.some(
      (pos) =>
        x + OUTER_W > pos.x &&
        x < pos.x + pos.w &&
        y + OUTER_H > pos.y &&
        y < pos.y + pos.h
    );
    if (!overlaps) return { x, y };
    tries++;
  }
  return { x: 0, y: Y_OFFSET + tries * OUTER_H };
}

function useDarkTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return dark;
}

function LessonBar() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<
    { lesson: Lesson; x: number; y: number }[]
  >([]);
  const dark = useDarkTheme();

  useEffect(() => {
    if (!areaRef.current) return;
    const areaW = areaRef.current.offsetWidth;
    const areaH = areaRef.current.offsetHeight;
    const newPositions: { lesson: Lesson; x: number; y: number }[] = [];
    lessonList.forEach((lesson) => {
      const existing = newPositions.map((tag) => ({
        x: tag.x,
        y: tag.y,
        w: OUTER_W,
        h: OUTER_H,
      }));
      const { x, y } = getRandomPosition(existing, TAG_W, TAG_H, areaW, areaH);
      newPositions.push({ lesson, x, y });
    });
    setPositions([]);
    const order = [...Array(lessonList.length).keys()];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    order.forEach((idx, i) => {
      const t = setTimeout(() => {
        setPositions((pos) => [...pos, newPositions[idx]]);
      }, Math.floor((POPUP_DURATION / lessonList.length) * i));
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const bg = dark ? "#23272e" : "#f8f5f0";
  const border = dark ? "#333a44" : "#ececec";
  const tagBg = dark ? "#23283a" : "#fff";
  const tagText = dark ? "#f8f5f0" : "#23283a";
  const tagShadow = dark ? "0 2px 12px #0006" : "0 2px 12px #0001";

  const isMobile = useIsMobile();
  return (
    <div
      ref={areaRef}
      style={{
        width: "100%",
        height: 520,
        background: bg,
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          color: "#fff8e7",
          fontFamily: "'Lato', Arial, sans-serif",
          fontWeight: 900,
          fontSize: isMobile ? 24 : 36,
          paddingTop: isMobile ? 10 : 50,
          marginBottom: isMobile ? 24 : 50,
          letterSpacing: isMobile ? -0.5 : -1,
          textShadow: "0 2px 16px #0007",
          textAlign: "center",
        }}
      >
        You <span style={{ color: "#7c4dff" }}>can</span> Learn
      </h2>

      {positions.map(({ lesson, x, y }, i) => (
        <div
          key={lesson.id + "-" + i}
          style={{
            position: "absolute",
            left: x + PADDING,
            top: y + PADDING,
            width: TAG_W,
            height: TAG_H,
            background: tagBg,
            borderRadius: 18,
            boxShadow: tagShadow,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 15,
            pointerEvents: "none",
            border: `1px solid ${border}`,
            transition: "opacity 0.5s",
          }}
        >
          <img
            src={lesson.image}
            alt={lesson.name}
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: tagShadow,
              flexShrink: 0,
            }}
            draggable={false}
          />
          <span
            style={{
              fontFamily: "Lato, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: tagText,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 80,
            }}
          >
            {lesson.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LessonBar;
