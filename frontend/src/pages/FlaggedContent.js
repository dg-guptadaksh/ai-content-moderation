import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "../firebaseConfig";
import "./FlaggedContent.css"; // Using the same CSS for consistency

const FlaggedContent = () => {
  const [flaggedContent, setFlaggedContent] = useState([]);

  // Fetch Flagged Content from Firestore
  const fetchFlaggedContent = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "flagged_content"));
      const flaggedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFlaggedContent(flaggedMessages);
    } catch (error) {
      console.error("Error fetching flagged content:", error);
    }
  };

  useEffect(() => {
    fetchFlaggedContent();
  }, []);

  return (
    <div className="toxicity-page">
      {/* Dashboard Navigation */}
      <div className="dashboard">
        <button className="dashboard-btn" onClick={() => window.location.href = "/"}>Home</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/toxicity-checker"}>Toxicity Checker</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/flaggedcontent"}>Flagged Content</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/about"}>About Us</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/goals"}>Goals</button>
      </div>

      <h1 className="toxicity-title">Flagged Content</h1>

      {/* Flagged Content Section */}
      <div className="toxicity-card flagged">
        <h2>Previously Flagged Content</h2>
        {flaggedContent.length > 0 ? (
          <ul className="flagged-list">
            {flaggedContent.map((item) => (
              <li key={item.id} className="flagged-item">
                <span className="flagged-text">{item.content}</span>
                <span className="toxicity-score">
                  {item.toxicity_score !== undefined ? item.toxicity_score.toFixed(2) : "N/A"}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flagged content yet.</p>
        )}
        <button className="refresh-btn" onClick={fetchFlaggedContent}>Refresh</button>
      </div>
    </div>
  );
};

export default FlaggedContent;
