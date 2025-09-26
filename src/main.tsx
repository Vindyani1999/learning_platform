import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App.tsx";
import { LoadingProvider } from "./LoadingContext";
import { ThemeProvider } from "./ThemeContext";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
