import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface QuizProgressEntry {
  score: number;
  total: number;
  date: string;
}

// Only completed/attempted quizzes are tracked. No 'in-progress' state is stored.
export interface QuizProgressState {
  // quizId -> progress entry (only after completion/attempt)
  quizProgress: Record<string, QuizProgressEntry>;
}

const initialState: QuizProgressState = {
  quizProgress: {},
};

const quizProgressSlice = createSlice({
  name: "quizProgress",
  initialState,
  reducers: {
    // Only call this when a quiz is completed/attempted
    markQuizComplete(
      state,
      action: PayloadAction<{
        quizId: string;
        score: number;
        total: number;
        date?: string;
      }>
    ) {
      const { quizId, score, total, date } = action.payload;
      state.quizProgress[quizId] = {
        score,
        total,
        date: date || new Date().toISOString(),
      };
    },
    resetQuizProgress(state) {
      state.quizProgress = {};
    },
    setQuizProgress(state, action: PayloadAction<QuizProgressState>) {
      state.quizProgress = action.payload.quizProgress || {};
    },
  },
});

export const { markQuizComplete, resetQuizProgress, setQuizProgress } =
  quizProgressSlice.actions;
export default quizProgressSlice.reducer;
