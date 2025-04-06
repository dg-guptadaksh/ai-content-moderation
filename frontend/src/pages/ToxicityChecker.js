import React, { useState } from "react";
import axios from "axios";
import "./ToxicityChecker.css"; // CSS for styling

const ToxicityChecker = () => {
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);

  // Function to check text toxicity
  const checkText = async () => {
    try {
      const res = await axios.post("http://localhost:5000/moderate-text", { text });
      setScore(res.data.score);
    } catch (error) {
      console.error("Error checking text:", error);
    }
  };

  return (
    <div className="toxicity-page">
      {/* Dashboard Navigation */}
      <div className="dashboard">
        <button className="dashboard-btn" onClick={() => window.location.href = "/"}>Home</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/flaggedcontent"}>Flagged Content</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/about"}>About Us</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/goals"}>Goals</button>
      </div>

      <h1 className="toxicity-title">AI-Powered Text Moderation</h1>

      {/* Text Moderation Section */}
      <div className="toxicity-card">
        <h2>Text Moderation</h2>
        <textarea
          className="toxicity-textarea"
          rows="5"
          placeholder="Enter text to check toxicity..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="toxicity-btn" onClick={checkText}>Check Toxicity</button>
        {score !== null && <p className="toxicity-score">Toxicity Score: {score.toFixed(2)}</p>}
      </div>
    </div>
  );
};

export default ToxicityChecker;
