import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Dashboard Navigation */}
      <div className="dashboard">
        <button className="dashboard-btn" onClick={() => navigate("/")}>Home</button>
        <button className="dashboard-btn" onClick={() => navigate("/flaggedcontent")}>Flagged Content</button>
        <button className="dashboard-btn" onClick={() => navigate("/about")}>About Us</button>
        <button className="dashboard-btn" onClick={() => navigate("/goals")}>Goals</button>
        <button className="dashboard-btn" onClick={() => navigate("/toxicity-checker")}>Toxicity Checker</button>
      </div>

      {/* About Section */}
      <h2 className="about-title">About Us</h2>
      <div className="about-box">
        <p className="about-text">
        At SafeNet AI, we believe in creating a safer digital space by leveraging the power of AI and automation. Our platform is designed to help individuals and businesses moderate harmful content across social media platforms like Facebook and Instagram. By using advanced AI models and Google Cloud technologies, we detect toxic comments, hate speech, and inappropriate content in real time. Our mission is to empower users with better control over their online interactions while promoting a healthier and more positive digital environment. SafeNet AI is more than just a tool—it's a step towards a safer and more responsible online community
        </p>
      </div>
    </div>
  );
};

export default About;
