import { useState } from "react";
import { lessonContents } from "../utils/lessonContents";
// import FancyCheckbox from "./FancyToggle";

export interface Topic {
  id: string;
  label: string;
  subtopics?: Array<{
    id: string;
    label: string;
  }>;
}

interface LessonSidebarProps {
  topics: Topic[];
  selectedTopicId?: string;
  selectedSubtopicId?: string;
  onSelect?: (topicId: string, subtopicId?: string) => void;
  dark?: boolean;
  lessonId?: string;
  // onToggleTheme?: () => void;
}

export function LessonSidebar({
  topics,
  selectedTopicId,
  selectedSubtopicId,
  onSelect,
  dark = false,
  lessonId,
}: LessonSidebarProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (topicId: string) => {
    setExpanded(expanded === topicId ? null : topicId);
  };

  return (
    <nav>
      {/* <div
        style={{
          marginBottom: 18,
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        <FancyCheckbox checked={!dark} onChange={onToggleTheme} size={30} />
      </div> */}
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{ height: 48, width: "auto", objectFit: "contain" }}
        />
      </div> */}
      <h3 style={{ fontWeight: 900, fontSize: 20, marginBottom: 18 }}>
        Contents
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {topics
          .filter((topic) => {
            // Only show topic if it or any subtopic has content
            if (!lessonId || !lessonContents[lessonId]) return true;
            if (lessonContents[lessonId][topic.id]) return true;
            if (
              topic.subtopics &&
              topic.subtopics.some(
                (sub) => lessonContents[lessonId][`${topic.id}__${sub.id}`]
              )
            )
              return true;
            return false;
          })
          .map((topic) => (
            <li key={topic.id}>
              <button
                style={{
                  background:
                    topic.id === selectedTopicId
                      ? dark
                        ? "#7c4dff"
                        : "#e0d7ff"
                      : "none",
                  color:
                    topic.id === selectedTopicId
                      ? dark
                        ? "#fff"
                        : "#23283a"
                      : dark
                      ? "#f8f5f0"
                      : "#23283a",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 14px",
                  marginBottom: 6,
                  width: "100%",
                  textAlign: "left",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => {
                  if (onSelect) onSelect(topic.id, undefined);
                  if (topic.subtopics && topic.subtopics.length > 0) {
                    handleExpand(topic.id);
                  }
                }}
              >
                <span>{topic.label}</span>
                {topic.subtopics && (
                  <span style={{ fontSize: 14, opacity: 0.7 }}>
                    {expanded === topic.id ? "▲" : "▼"}
                  </span>
                )}
              </button>
              {topic.subtopics && expanded === topic.id && (
                <ul style={{ listStyle: "none", paddingLeft: 18, margin: 0 }}>
                  {topic.subtopics
                    .filter((sub) => {
                      if (!lessonId || !lessonContents[lessonId]) return true;
                      return !!lessonContents[lessonId][
                        `${topic.id}__${sub.id}`
                      ];
                    })
                    .map((sub) => (
                      <li key={sub.id}>
                        <button
                          style={{
                            background:
                              sub.id === selectedSubtopicId
                                ? dark
                                  ? "#7c4dff"
                                  : "#e0d7ff"
                                : "none",
                            color:
                              sub.id === selectedSubtopicId
                                ? dark
                                  ? "#fff"
                                  : "#23283a"
                                : dark
                                ? "#f8f5f0"
                                : "#23283a",
                            border: "none",
                            borderRadius: 8,
                            padding: "7px 12px",
                            marginBottom: 4,
                            width: "100%",
                            textAlign: "left",
                            fontWeight: 500,
                            cursor: "pointer",
                            fontSize: 15,
                            opacity: 1,
                            pointerEvents: "auto",
                          }}
                          onClick={() => {
                            if (onSelect) onSelect(topic.id, sub.id);
                          }}
                        >
                          {sub.label}
                        </button>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
