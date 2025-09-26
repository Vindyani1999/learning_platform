import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface LessonProgressState {
  startedLessons: string[];
  completedLessons: string[];
}

const initialState: LessonProgressState = {
  startedLessons: [],
  completedLessons: [],
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
    resetProgress(state) {
      state.startedLessons = [];
      state.completedLessons = [];
    },
    setProgress(state, action: PayloadAction<LessonProgressState>) {
      state.startedLessons = action.payload.startedLessons;
      state.completedLessons = action.payload.completedLessons;
    },
  },
});

export const { startLesson, completeLesson, resetProgress, setProgress } =
  lessonProgressSlice.actions;
export default lessonProgressSlice.reducer;
