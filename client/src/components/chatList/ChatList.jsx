import React from "react";
import "./ChatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chat-list">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="logo" />
        <div className="texts">
          <span>Upgrade to AI Chat Pro</span>
          <span>Get unlimited access to all fetures</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
