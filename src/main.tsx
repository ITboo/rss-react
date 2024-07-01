import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/ErrorBoundary.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";

import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
