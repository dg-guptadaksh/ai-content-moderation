import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components using relative paths
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ToxicityChecker from "./pages/ToxicityChecker";
import About from "./pages/About";
import Goals from "./pages/Goals";
import FlaggedContent from "./pages/FlaggedContent";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/toxicity-checker" element={<ToxicityChecker />} />
        <Route path="/about" element={<About />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/flaggedcontent" element={<FlaggedContent />} />
      </Routes>
    
  );
}

export default App;
