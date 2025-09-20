import type { Module } from "../types";

// Example: React.js beginner module
export const reactBeginnerModule: Module = {
  id: "react-beginner",
  title: "React.js for Beginners",
  description: "Start your journey with React.js from scratch!",
  lessons: [
    {
      id: "intro",
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces...",
      completed: false,
    },
    {
      id: "jsx",
      title: "Understanding JSX",
      content: "JSX is a syntax extension for JavaScript...",
      completed: false,
    },
    // Add more lessons as needed
  ],
};

// Example: TypeScript beginner module
export const tsBeginnerModule: Module = {
  id: "ts-beginner",
  title: "TypeScript for Beginners",
  description: "Learn TypeScript step by step!",
  lessons: [
    {
      id: "intro-ts",
      title: "Introduction to TypeScript",
      content: "TypeScript is a strongly typed programming language...",
      completed: false,
    },
    // Add more lessons as needed
  ],
};
