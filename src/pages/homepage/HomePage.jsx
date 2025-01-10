import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Homepage;
