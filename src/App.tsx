import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import { LandingPage } from "./components/LandingPage";
import LessonsPage from "./components/LessonsPage";
import { LessonContentPage } from "./components/LessonContentPage";
import Dashboard from "./components/Dashboard";
import Achivements from "./components/Achivements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<HomePage />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard dark={false} />} />
          <Route path="lessons" element={<LessonsPage dark={false} />} />
          <Route
            path="lessons/:lessonId"
            element={<LessonContentPage dark={false} />}
          />
          <Route path="achievements" element={<Achivements dark={false} />} />
        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
