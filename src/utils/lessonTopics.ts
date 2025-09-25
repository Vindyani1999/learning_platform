import type { Topic } from "../components/LessonSidebar";

export const lessonTopics: Record<string, Topic[]> = {
  "lesson-1": [
    { id: "intro", label: "Introduction to React" },
    { id: "jsx", label: "What is JSX?" },
    {
      id: "components",
      label: "What is a Component?",
    },
    { id: "props", label: "What are Props?" },
    { id: "conditional", label: "Conditional Rendering" },
    { id: "lists", label: "Lists" },
    { id: "hooks", label: "Hooks" },
    { id: "context", label: "Context API" },
    { id: "router", label: "React Router" },
    { id: "performance", label: "Performance Optimization" },
    { id: "forms", label: "Forms & Controlled Components" },
    { id: "hoc", label: "Higher Order Components" },
    {
      id: "eventHandling",
      label: "Event Handling",
    },
    {
      id: "lifecycle",
      label: "Component Lifecycle",
    },
    {
      id: "styling",
      label: "Styling in React",
    },
    {
      id: "stateManagement",
      label: "State Management Libraries",
    },
    {
      id: "errorHandling",
      label: "Error Handling in React",
    },
    {
      id: "summary",
      label: "Summary",
    },
  ],
  "lesson-2": [
    { id: "intro", label: "TypeScript Intro" },
    {
      id: "types",
      label: "Types",
      subtopics: [
        { id: "types-1", label: "Basic Types" },
        { id: "types-2", label: "Advanced Types" },
      ],
    },
    { id: "tsconfig", label: "tsconfig & Tooling" },
    { id: "interop", label: "Interop with JS" },
    { id: "summary", label: "Summary" },
  ],
  "lesson-3": [
    { id: "intro", label: "Python Intro" },
    { id: "syntax", label: "Syntax & Variables" },
    {
      id: "control",
      label: "Control Flow",
      subtopics: [
        { id: "control-1", label: "if/else" },
        { id: "control-2", label: "loops" },
      ],
    },
    { id: "functions", label: "Functions" },
    { id: "summary", label: "Summary" },
  ],
};
