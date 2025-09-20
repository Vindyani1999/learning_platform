// Centralized type definitions for the educational platform
export interface Lesson {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface UserProgress {
  [lessonId: string]: boolean;
}
