import { configureStore } from "@reduxjs/toolkit";
import lessonProgressReducer from "./lessonProgressSlice";
import quizProgressReducer from "./quizProgressSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const lessonProgressPersistConfig = {
  key: "lessonProgress",
  storage,
};

const quizProgressPersistConfig = {
  key: "quizProgress",
  storage,
};

const persistedLessonProgressReducer = persistReducer(
  lessonProgressPersistConfig,
  lessonProgressReducer
);

const persistedQuizProgressReducer = persistReducer(
  quizProgressPersistConfig,
  quizProgressReducer
);

const store = configureStore({
  reducer: {
    lessonProgress: persistedLessonProgressReducer,
    quizProgress: persistedQuizProgressReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
