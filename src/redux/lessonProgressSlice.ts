import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface QuizProgressEntry {
  score: number;
  total: number;
  date: string;
}

export interface LessonProgressState {
  startedLessons: string[];
  completedLessons: string[];
  // lessonId -> array of completed topic/subtopic ids
  lessonTopicProgress: Record<string, string[]>;
}

const initialState: LessonProgressState = {
  startedLessons: [],
  completedLessons: [],
  lessonTopicProgress: {},
};

const lessonProgressSlice = createSlice({
  name: "lessonProgress",
  initialState,
  reducers: {
    startLesson(state, action: PayloadAction<string>) {
      if (!state.startedLessons.includes(action.payload)) {
        state.startedLessons.push(action.payload);
      }
    },
    completeLesson(state, action: PayloadAction<string>) {
      if (!state.completedLessons.includes(action.payload)) {
        state.completedLessons.push(action.payload);
      }
      // Remove from started if present
      state.startedLessons = state.startedLessons.filter(
        (id) => id !== action.payload
      );
    },
    // Add or update completed topic/subtopic for a lesson
    markTopicComplete(
      state,
      action: PayloadAction<{ lessonId: string; topicId: string }>
    ) {
      const { lessonId, topicId } = action.payload;
      if (!state.lessonTopicProgress[lessonId]) {
        state.lessonTopicProgress[lessonId] = [];
      }
      if (!state.lessonTopicProgress[lessonId].includes(topicId)) {
        state.lessonTopicProgress[lessonId].push(topicId);
      }
    },

    resetProgress(state) {
      state.startedLessons = [];
      state.completedLessons = [];
      state.lessonTopicProgress = {};
    },
    setProgress(state, action: PayloadAction<LessonProgressState>) {
      state.startedLessons = action.payload.startedLessons;
      state.completedLessons = action.payload.completedLessons;
      state.lessonTopicProgress = action.payload.lessonTopicProgress || {};
    },
  },
});

export const {
  startLesson,
  completeLesson,
  markTopicComplete,
  resetProgress,
  setProgress,
} = lessonProgressSlice.actions;
export default lessonProgressSlice.reducer;
