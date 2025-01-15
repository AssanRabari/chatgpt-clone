import React, { useEffect, useRef } from "react";
import "./NewPrompt.css";
const NewPrompt = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="end-chat" ref={endRef}></div>
      <div className="new-form">
        <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default NewPrompt;
