import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home-page">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AI Chat</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minus ratione harum eum libero a vitae ipsa totam dolor
        </h3>
        <Link to="/dashboard">Get Started</Link>
        {/* <button>Get Started</button> */}
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Homepage;
