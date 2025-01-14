import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
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
      <div className="right">
        <div className="img-container">
          <div className="bg-container">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot"/>
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt=""
            />

            <TypeAnimation
              sequence={[
                "Human: We produce food for Mice",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Boat: We produce food for Hamsters",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "Human: We produce food for Guinea Pigs",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Boat: We produce food for Chinchillas",
                1000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
