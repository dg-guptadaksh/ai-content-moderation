import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
import "./index.css";
import App from "./App"; // ✅ Correct import
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
