import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./LanguageContext";
import LandingPage from "./LandingPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  </React.StrictMode>
);
