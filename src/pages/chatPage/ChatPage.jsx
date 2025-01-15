import React, { useEffect, useRef } from "react";

import "./ChatPage.css";
const ChatPage = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chat-page">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            Test message from ai Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dignissimos unde necessitatibus quia quidem, eaque
            fuga praesentium quisquam modi, voluptates adipisci aliquid est
            ipsam cumque distinctio consequatur at voluptate officia enim.
          </div>
          <div className="message user">
            Test message from user Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id ab aspernatur corporis nemo. Voluptatum
            molestias, ea nulla et facilis, quo corporis minus eaque vel
            veritatis molestiae, illo non voluptatem modi?
          </div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>{" "}
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>{" "}
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>{" "}
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
