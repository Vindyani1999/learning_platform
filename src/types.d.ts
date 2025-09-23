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

// src/spline-viewer.d.ts

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.HTMLAttributes<HTMLElement> & { url?: string };
    }
  }
}
