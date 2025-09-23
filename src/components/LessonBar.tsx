import { useEffect, useState } from "react";
import { lessonList, staticTagPositions } from "../utils/LessonList";
import { useIsMobile } from "../utils/useIsMobile";

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
  const dark = useDarkTheme();

  const bg = dark ? "#23272e" : "#f8f5f0";
  const border = dark ? "#333a44" : "#ececec";
  // Professional tag background: glassmorphism gradient
  const tagBg = dark
    ? "linear-gradient(135deg, rgba(40,44,52,0.85) 60%, rgba(60,70,90,0.7) 100%)"
    : "linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(230,240,255,0.7) 100%)";
  const tagText = dark ? "#f8f5f0" : "#23283a";
  const tagShadow = dark ? "0 2px 12px #0006" : "0 2px 12px #0001";

  const isMobile = useIsMobile();
  return (
    <div
      style={{
        height: isMobile ? "auto" : "100vh",
        minHeight: isMobile ? 500 : undefined,
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? 8 : 0,
      }}
    >
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-zxfLtPZipQBYUBH5WxC87xpT/"
        frameBorder="0"
        width="100%"
        height={isMobile ? 600 : "100%"}
        style={{
          boxShadow: "0 4px 32px #0008, 0 1px 0 #fff1",
          border: "2px solid #232946",
          background: bg,
          borderRadius: isMobile ? 12 : 18,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        title="3D Interactive Demo"
        allow="fullscreen"
      ></iframe>
      {/* Overlay tags absolutely on top of iframe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isMobile ? 350 : "100%",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {lessonList.slice(0, staticTagPositions.length).map((lesson, i) => {
          // Mobile-friendly tag positions
          const mobileTagPositions = [
            { left: "8%", top: "10%" },
            { left: "60%", top: "8%" },
            { left: "20%", top: "28%" },
            { left: "70%", top: "32%" },
            { left: "10%", top: "50%" },
            { left: "60%", top: "55%" },
            { left: "30%", top: "70%" },
            { left: "75%", top: "75%" },
            { left: "45%", top: "85%" },
          ];
          const pos = isMobile ? mobileTagPositions[i] : staticTagPositions[i];
          return (
            <div
              key={lesson.id + "-" + i}
              style={{
                position: "absolute",
                left: pos.left,
                top: pos.top,
                width: isMobile ? 120 : "auto",
                minWidth: isMobile ? 60 : 80,
                maxWidth: isMobile ? 160 : 300,
                height: isMobile ? 48 : 70,
                background: tagBg,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: isMobile ? 12 : 18,
                boxShadow: tagShadow,
                display: "flex",
                alignItems: "center",
                gap: isMobile ? 6 : 12,
                padding: isMobile ? 8 : 15,
                pointerEvents: "auto",
                border: `1px solid ${border}`,
                transition: "opacity 0.5s",
              }}
            >
              <img
                src={lesson.image}
                alt={lesson.name}
                style={{
                  width: isMobile ? 32 : 60,
                  height: isMobile ? 32 : 60,
                  borderRadius: isMobile ? 7 : 10,
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
                  fontSize: isMobile ? 13 : 18,
                  color: tagText,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginLeft: isMobile ? 4 : 8,
                  maxWidth: isMobile ? 80 : 180,
                }}
              >
                {lesson.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LessonBar;
