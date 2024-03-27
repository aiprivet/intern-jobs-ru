import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
