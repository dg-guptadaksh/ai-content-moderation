import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
       <div className="dashboard">
        <button className="dashboard-btn" onClick={() => navigate("/home")}>Home</button>
        <button className="dashboard-btn" onClick={() => navigate("/about")}>About Us</button>
        <button className="dashboard-btn" onClick={() => navigate("/goals")}>Goals</button>
        <button className="dashboard-btn" onClick={() => navigate("/flaggedcontent")}>Flagged Content</button>
        <button className="dashboard-btn" onClick={() => navigate("/toxicity-checker")}>Toxicity Checker</button>
      </div>
      <h1 className="title">SafeNet AI</h1>
      <p className="subtitle">Protecting you in the realm of social media</p>
      <div className="button-container">
        <button className="login-btn facebook" onClick={() => navigate("/dashboard?platform=facebook")}>
          Login with Facebook
        </button>
        <button className="login-btn instagram" onClick={() => navigate("/dashboard?platform=instagram")}>
          Login with Instagram
        </button>
      </div>
    </div>
  );
};

export default Home;

