import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/error/ErrorBoundary.jsx";
import { logError } from "./utils/logger.js";
import "./index.css";

window.onerror = (message, source, lineno, colno, error) => {
  logError(
    error?.message || message,
    "window.onerror"
  );
};

window.addEventListener("unhandledrejection", (event) => {
  logError(
    event.reason?.message || String(event.reason),
    "unhandledrejection"
  );
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);