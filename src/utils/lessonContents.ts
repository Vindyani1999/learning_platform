// Map of lessonId -> topicId or topicId__subtopicId -> content (string or JSX)
import { reactLesson } from "../components/data/react";
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "code"; code: string }
  | { type: "image"; src: string; alt: string };

export const lessonContents: Record<string, Record<string, ContentBlock[]>> = {
  "lesson-1": {
    intro: reactLesson.intro,
    jsx: reactLesson.jsx,
    components: reactLesson.components,
    props: reactLesson.props,
    conditional: reactLesson.conditional,
    lists: reactLesson.lists,
    hooks: reactLesson.hooks,
    context: reactLesson.context,
    router: reactLesson.router,
    performance: reactLesson.performance,
    forms: reactLesson.forms,
    hoc: reactLesson.hoc,
    eventHandling: reactLesson.eventHandling,
    lifecycle: reactLesson.lifecycle,
    styling: reactLesson.styling,
    stateManagement: reactLesson.stateManagement,
    errorHandling: reactLesson.errorHandling,
    summary: reactLesson.summary,
  },
  "lesson-2": {
    intro: [
      {
        type: "paragraph",
        text: "TypeScript adds static typing to JavaScript, helping you catch errors early.",
      },
    ],
    types: [
      {
        type: "paragraph",
        text: "Types are the foundation of TypeScript. Learn about basic and advanced types.",
      },
    ],
    "types__types-1": [
      {
        type: "paragraph",
        text: "Basic types include string, number, boolean, and more.",
      },
    ],
    "types__types-2": [
      {
        type: "paragraph",
        text: "Advanced types include unions, intersections, generics, and more.",
      },
    ],
    tsconfig: [
      {
        type: "paragraph",
        text: "tsconfig.json configures your TypeScript project.",
      },
    ],
    interop: [
      {
        type: "paragraph",
        text: "TypeScript can work with existing JavaScript code.",
      },
    ],
    summary: [
      {
        type: "paragraph",
        text: "You've completed the TypeScript lesson! Practice by converting a JS file to TS.",
      },
    ],
  },
  "lesson-3": {
    intro: [
      {
        type: "paragraph",
        text: "Python is a versatile language great for beginners and pros alike.",
      },
    ],
    syntax: [
      {
        type: "paragraph",
        text: "Learn Python's syntax and how to declare variables.",
      },
    ],
    control: [
      {
        type: "paragraph",
        text: "Control flow lets you make decisions and repeat actions in code.",
      },
    ],
    "control__control-1": [
      {
        type: "paragraph",
        text: "if/else statements let you branch your code based on conditions.",
      },
    ],
    "control__control-2": [
      { type: "paragraph", text: "Loops let you repeat actions efficiently." },
    ],
    functions: [
      {
        type: "paragraph",
        text: "Functions let you organize code into reusable blocks.",
      },
    ],
    summary: [
      {
        type: "paragraph",
        text: "You've completed the Python lesson! Try writing a simple script.",
      },
    ],
  },
};
