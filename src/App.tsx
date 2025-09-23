import { LandingPage } from "./components/LandingPage";
import { LessonContentPage } from "./components/LessonContentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonsPage from "./components/LessonsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/:lessonId" element={<LessonContentPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
