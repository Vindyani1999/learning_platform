export interface Lesson {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export const lessonList: Lesson[] = [
  {
    id: "lesson-1",
    name: "ReactJS",
    image: "/react.png",
    description:
      "Learn the basics of ReactJS, a popular JavaScript library for building user interfaces.",
  },
  {
    id: "lesson-2",
    name: "TypeScript",
    image: "/ts.png",
    description:
      "Discover TypeScript, a superset of JavaScript that adds static types.",
  },
  {
    id: "lesson-3",
    name: "Python",
    image: "/python.jpeg",
    description:
      "Learn Python language for web development, data analysis, and more.",
  },
  {
    id: "lesson-4",
    name: "Machine Learning",
    image: "/ml.png",
    description:
      "Explore the fundamentals of Machine Learning and its applications.",
  },
  {
    id: "lesson-5",
    name: "JavaScript",
    image: "/js.png",
    description: "Dive into JavaScript, the programming language of the web.",
  },
  {
    id: "lesson-6",
    name: "Functional Program",
    image: "/fp.png",
    description:
      "Understand the principles of Functional Programming and how to apply them.",
  },
  {
    id: "lesson-7",
    name: "Big Data",
    image: "/bigdata.jpeg",
    description:
      "Get introduced to the basic Big Data concepts and technologies.",
  },
  {
    id: "lesson-8",
    name: "Information Security",
    image: "/is.png",
    description:
      "Learn the basics of Information Security and best practices to protect data.",
  },
  {
    id: "lesson-9",
    name: "Java Basics",
    image: "/java.png",
    description:
      "Start with Java, a widely-used programming language for building cross-platform applications.",
  },
];

export const staticTagPositions = [
  { left: "5%", top: "20%" }, // ReactJS
  { left: "60%", top: "15%" }, //ts
  { left: "25%", top: "35%" }, //python
  { left: "80%", top: "60%" }, //ml
  { left: "30%", top: "10%" }, //js
  { left: "10%", top: "60%" }, //fp
  { left: "70%", top: "35%" }, //big data
  { left: "80%", top: "10%" }, //info sec
  { left: "45%", top: "70%" }, //java
];
