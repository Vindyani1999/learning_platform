import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App.tsx";
import { LoadingProvider } from "./LoadingContext";
import { ThemeProvider } from "./ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ThemeProvider>
  </StrictMode>
);
