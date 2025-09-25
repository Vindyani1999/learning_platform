/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useIsMobile } from "../utils/useIsMobile";

interface LessonQuizTemplateProps<T> {
  items: T[];
  renderItem: (
    item: T,
    opts: { dark: boolean; isMobile: boolean; onSelect: () => void }
  ) => React.ReactNode;
  title: string;
  searchPlaceholder?: string;
  onItemSelect?: (item: T) => void;
  dark?: boolean;
}

function LessonQuizTemplate<T>({
  items,
  renderItem,
  title,
  searchPlaceholder = "Search...",
  onItemSelect,
  dark = false,
}: LessonQuizTemplateProps<T>) {
  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();

  const bg = dark ? "#23272e" : "#f8f5f0";
  const textColor = dark ? "#f8f5f0" : "#23283a";
  const inputBg = dark ? "#23283a" : "#fff";
  const inputBorder = dark ? "#444a55" : "#ccc";
  const inputText = dark ? "#f8f5f0" : "#23283a";
  const inputShadow = dark ? "0 2px 8px #0004" : "0 2px 8px #0001";
  const noItemColor = dark ? "#888" : "#aaa";

  // Filter items by name or title property if available
  const filtered = items.filter((item: any) => {
    const name = item.name || item.title || "";
    return name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: 220,
          zIndex: 10,
          overflow: "hidden",
          background: dark
            ? "linear-gradient(135deg, #23283a 60%, #23272e 100%)"
            : "linear-gradient(135deg, #eaf0ff 60%, #f8f5f0 100%)",
        }}
      >
        <img
          src="/grp.jpg"
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
          draggable={false}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: "0 16px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "Lato, Arial, sans-serif",
              fontWeight: 900,
              fontSize: 32,
              marginBottom: 18,
              color: textColor,
              textShadow: dark
                ? "0 2px 12px #000a, 0 1px 0 #fff2"
                : "0 2px 12px #fff8, 0 1px 0 #0001",
              letterSpacing: 1.2,
            }}
          >
            {title}
          </h1>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              fontSize: 16,
              padding: isMobile ? "10px  26px" : "10px 16px",
              borderRadius: 24,
              border: `1px solid ${inputBorder}`,
              outline: "none",
              width: "100%",
              maxWidth: isMobile ? 200 : 360,
              boxShadow: inputShadow,
              background: inputBg,
              color: inputText,
              transition: "background 0.3s, color 0.3s, border 0.3s",
            }}
          />
        </div>
      </div>

      {/* Items grid */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: isMobile ? "0 10px" : "0 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            marginTop: 32,
            justifyContent: "flex-start",
          }}
        >
          {filtered.map((item, idx) => (
            <div
              key={idx}
              style={{ flex: "1 1 260px", minWidth: 220, maxWidth: 340 }}
            >
              {renderItem(item, {
                dark,
                isMobile,
                onSelect: () => onItemSelect && onItemSelect(item),
              })}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              color: noItemColor,
              fontSize: 20,
              textAlign: "center",
              marginTop: 60,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: 280,
                textAlign: "center",
              }}
            >
              <img
                src="/achive.png"
                alt="No items found"
                style={{
                  height: "40vh",
                  objectFit: "contain",
                  marginBottom: 18,
                  opacity: 0.5,
                  filter: dark ? "brightness(0.8)" : "none",
                }}
              />
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  marginBottom: 10,
                  opacity: 0.7,
                  color: dark ? "#fff" : "#23283a",
                  fontFamily: "'Lato', Arial, sans-serif",
                }}
              >
                No items found
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LessonQuizTemplate;
