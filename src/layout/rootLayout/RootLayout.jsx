import React from "react";
import "./RootLayout.css";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <Link to="/" className="logo">
          <img src="logo.png" alt="logo" className="logo-img" />
          <span>ChatGPT</span>
        </Link>
        <div className="user">User</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
