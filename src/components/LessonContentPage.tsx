import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { startLesson } from "../redux/lessonProgressSlice";
import ProgressBar from "./ProgressBar";
import { LessonLayout } from "./LessonLayout";
import { LessonSidebar } from "./LessonSidebar";
import type { Topic } from "./LessonSidebar";
import { lessonTopics } from "../utils/lessonTopics";
import { lessonContents, type ContentBlock } from "../utils/lessonContents";
import { completeLesson } from "../redux/lessonProgressSlice";

interface LessonContentPageProps {
  dark: boolean;
  lessonId?: string;
}

export function LessonContentPage({
  dark,
  lessonId: propLessonId,
}: LessonContentPageProps) {
  const params = useParams<{ lessonId: string }>();
  const lessonId = propLessonId || params.lessonId;
  const dispatch = useDispatch();
  const topics: Topic[] = lessonTopics[lessonId!] || [];
  const navigate = useNavigate();

  const getDefaultSelection = () => {
    if (!topics.length) return { topic: "", sub: undefined };
    const first = topics[0];
    if (first.subtopics?.length)
      return { topic: first.id, sub: first.subtopics[0].id };
    return { topic: first.id, sub: undefined };
  };

  const [{ topic: defaultTopic, sub: defaultSub }] =
    useState(getDefaultSelection);
  const [selectedTopic, setSelectedTopic] = useState<string>(defaultTopic);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | undefined>(
    defaultSub
  );

  // Progress tracking (Redux only)
  const [readItems, setReadItems] = useState<string[]>([]);

  useEffect(() => {
    if (!lessonId) return;
    const id = selectedSubtopic
      ? `${selectedTopic}__${selectedSubtopic}`
      : selectedTopic;
    if (!readItems.includes(id)) {
      const updated = [...readItems, id];
      setReadItems(updated);
      // Dispatch Redux action to mark lesson as started
      dispatch(startLesson(lessonId));
    }
  }, [selectedTopic, selectedSubtopic, lessonId, dispatch, readItems]);

  useEffect(() => {
    if (!topics.length) return;
    const exists = topics.some((t) => t.id === selectedTopic);
    if (!exists) {
      const first = topics[0];
      setSelectedTopic(first.id);
      setSelectedSubtopic(first.subtopics?.[0]?.id);
    }
  }, [topics, selectedTopic]);

  const currentTopic = topics.find((t) => t.id === selectedTopic);
  const currentSub = currentTopic?.subtopics?.find(
    (s) => s.id === selectedSubtopic
  );
  const contentKey = selectedSubtopic
    ? `${selectedTopic}__${selectedSubtopic}`
    : selectedTopic;
  const content: ContentBlock[] =
    (lessonId && lessonContents[lessonId]?.[contentKey]) || [];

  const allIds: string[] = [];
  topics.forEach((t) => {
    if (t.subtopics?.length) {
      t.subtopics.forEach((s) => allIds.push(`${t.id}__${s.id}`));
    } else {
      allIds.push(t.id);
    }
  });
  const currentIdx = allIds.indexOf(contentKey);

  const isLessonComplete = readItems.length === allIds.length;

  const handleMarkComplete = () => {
    if (!lessonId) return;
    dispatch(completeLesson(lessonId));
    navigate("/home/dashboard");
  };

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p
            key={index}
            style={{
              marginBottom: 18,
              fontSize: 18,
              lineHeight: 1.6,
              color: dark ? "#f8f5f0" : "#23283a",
              fontFamily: "'Lato', Arial, sans-serif",
            }}
          >
            {block.text}
          </p>
        );
      case "code":
        return (
          <pre
            key={index}
            style={{
              background: dark ? "#2d2d2d" : "#f4f4f4",
              padding: "12px 16px",
              borderRadius: 8,
              marginBottom: 18,
              overflowX: "auto",
            }}
          >
            <code>{block.code}</code>
          </pre>
        );
      case "image":
        return (
          <div key={index} style={{ marginBottom: 18, textAlign: "center" }}>
            <img
              src={block.src}
              alt={block.alt}
              style={{
                maxWidth: "40%",
                borderRadius: 12,
                // boxShadow: "0 2px 12px #0002",
              }}
            />
            {block.alt && (
              <p style={{ fontSize: 14, color: "#777", marginTop: 6 }}>
                {block.alt}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  // Ref for scrolling to top
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [currentIdx]);

  return (
    <LessonLayout
      dark={dark}
      sidebar={
        <LessonSidebar
          topics={topics}
          selectedTopicId={selectedTopic}
          selectedSubtopicId={selectedSubtopic}
          onSelect={(topicId, subId) => {
            setSelectedTopic(topicId);
            setSelectedSubtopic(subId);
          }}
          dark={dark}
          lessonId={lessonId!}
        />
      }
      content={
        <div
          ref={contentRef}
          style={{
            width: "90%",
            // background: dark ? "#23283a" : "#fff",
            // borderRadius: 18,
            // boxShadow: "0 2px 16px #0002",
            padding: 32,
            // minHeight: "100vh",
            position: "relative",
            justifyContent: "center",
            marginRight: "15%",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <ProgressBar current={readItems.length} total={allIds.length} />

          <h2
            style={{
              fontWeight: 900,
              fontSize: 28,
              marginBottom: 18,
              fontFamily: "'Lato', Arial, sans-serif",
            }}
          >
            {currentSub?.label || currentTopic?.label}
          </h2>

          {/* <div
            style={{
              color: dark ? "#f8f5f0" : "#23283a",
              fontSize: 18,
              marginBottom: 32,
              fontFamily: "'Lato', Arial, sans-serif",
              fontWeight: 100,
              lineHeight: 1.6,
              whiteSpace: "pre-line",
            }}
          >
            {content}
          </div> */}

          <div
            style={{
              color: dark ? "#f8f5f0" : "#5d5f67",
              fontSize: 18,
              marginBottom: 32,
              fontFamily: "'Lato', Arial, sans-serif",
              fontWeight: 100,
              lineHeight: 1.6,
              whiteSpace: "pre-line",
              letterSpacing: 0.5,
            }}
          >
            {content.map((block, i) => renderContentBlock(block, i))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 32,
            }}
          >
            <button
              onClick={() => {
                if (currentIdx > 0) {
                  const prevId = allIds[currentIdx - 1];
                  const [topicId, subId] = prevId.split("__");
                  setSelectedTopic(topicId);
                  setSelectedSubtopic(subId);
                }
              }}
              disabled={currentIdx <= 0}
              style={{
                padding: "10px 26px",
                borderRadius: 24,
                border: "none",
                background: currentIdx <= 0 ? "#ccc" : "#e0d7ff",
                color: currentIdx <= 0 ? "#888" : "#7c4dff",
                fontWeight: 800,
                fontSize: 16,
                cursor: currentIdx <= 0 ? "not-allowed" : "pointer",
                outline: "none",
              }}
            >
              ← Back
            </button>

            {isLessonComplete ? (
              <button
                onClick={handleMarkComplete}
                style={{
                  padding: "10px 26px",
                  borderRadius: 24,
                  border: "none",
                  background: "#28a745",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 16,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                Mark Complete ✅
              </button>
            ) : (
              <button
                onClick={() => {
                  if (currentIdx < allIds.length - 1) {
                    const nextId = allIds[currentIdx + 1];
                    const [topicId, subId] = nextId.split("__");
                    setSelectedTopic(topicId);
                    setSelectedSubtopic(subId);
                  }
                }}
                disabled={currentIdx >= allIds.length - 1}
                style={{
                  padding: "10px 26px",
                  borderRadius: 24,
                  border: "none",
                  background:
                    currentIdx >= allIds.length - 1 ? "#ccc" : "#7c4dff",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 16,
                  cursor:
                    currentIdx >= allIds.length - 1 ? "not-allowed" : "pointer",
                  outline: "none",
                }}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      }
    />
  );
}
