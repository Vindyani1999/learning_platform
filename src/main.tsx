import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App.tsx";
import { LoadingProvider } from "./LoadingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StrictMode>
);
