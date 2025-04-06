import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db, collection, getDocs } from "../firebaseConfig"; // Firebase setup


const Dashboard = () => {
  const location = useLocation();
  const platform = new URLSearchParams(location.search).get("platform"); // Get platform (Facebook/Instagram)
  const [flaggedComments, setFlaggedComments] = useState([]);

  useEffect(() => {
    const fetchFlaggedComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "flagged_comments"));
        const comments = querySnapshot.docs.map((doc) => doc.data());
        setFlaggedComments(comments);
      } catch (error) {
        console.error("Error fetching flagged comments:", error);
      }
    };
    fetchFlaggedComments();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">{platform} Flagged Comments</h2>
      <ul className="comments-list">
        {flaggedComments.length > 0 ? (
          flaggedComments.map((comment, index) => (
            <li key={index} className="comment-item">
              <span>{comment.text}</span>
              <span className="toxicity-score">Toxicity Score: {comment.toxicity_score.toFixed(2)}</span>
            </li>
          ))
        ) : (
          <p>No flagged comments found.</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
