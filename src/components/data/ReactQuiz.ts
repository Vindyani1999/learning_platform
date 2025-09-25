export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const reactQuiz: QuizQuestion[] = [
  {
    question: "What is the main purpose of React?",
    options: [
      "To style web pages",
      "To manage databases",
      "To build user interfaces",
      "To handle HTTP requests",
    ],
    answer: 2,
    explanation: "React is a library for building user interfaces (UIs).",
  },
  {
    question: "Which syntax is used to write HTML in React?",
    options: ["XML", "JSX", "HTML5", "Markdown"],
    answer: 1,
    explanation: "JSX (JavaScript XML) lets you write HTML-like code in React.",
  },
  {
    question: "What hook is used to add state to a functional component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    answer: 0,
    explanation:
      "useState is the React hook for state in functional components.",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["Using state", "Using props", "Using context", "Using refs"],
    answer: 1,
    explanation: "Props are used to pass data from parent to child components.",
  },
  {
    question: "What does the useEffect hook do?",
    options: [
      "Manages state",
      "Handles side effects",
      "Creates components",
      "Renders JSX",
    ],
    answer: 1,
    explanation:
      "useEffect lets you perform side effects in function components.",
  },
];
