import React from "react";
import "./Goals.css"; // Ensure this CSS file is properly linked

const Goals = () => {
  return (
    <div className="goals-page">
      {/* Dashboard Navigation */}
      <div className="dashboard">
        <button className="dashboard-btn" onClick={() => window.location.href = "/"}>Home</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/flaggedcontent"}>Flagged Content</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/about"}>About Us</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/goals"}>Goals</button>
        <button className="dashboard-btn" onClick={() => window.location.href = "/toxicity-checker"}>Toxicity Checker</button>
      </div>

      {/* Goals Section */}
      <div className="goals-container">
        <h2 className="goals-title">Our Mission & Goals</h2>
        <div className="goals-box">
          <ul className="goals-list">
            <li> Make social media a safer and more inclusive space.</li>
            <li> Automatically detect, flag, and remove toxic and hateful content.</li>
            <li> Provide real-time analytics on social media toxicity levels.</li>
            <li> Prevent cyberbullying using AI-powered moderation.</li>
            <li> Ensure fair and unbiased moderation with ethical AI.</li>
            <li> Educate users on digital safety and responsible online behavior.</li>
            <li> Empower businesses with tools to monitor and manage harmful interactions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goals;
