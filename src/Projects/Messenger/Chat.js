import React, { useEffect, useRef } from "react";

export default function Chat(props) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [props.conversation]);
  return (
    <div className="user">
      <div className="user-info">
        <img src={props.userIcon} alt={props.userName} />
        <h1>{props.userName}</h1>
      </div>
      <div className="chat-box-wrapper">
        <div className="chat-box">
          {props.conversation.map((conversation, index) => (
            <div key={index}>
              <p className={conversation.user === props.user ? "reciever-message" : "sender-message"}>{conversation.message}</p>
              <br />
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="send">
          <input type="text" id={props.user} placeholder="Type here . . ." onChange={(e) => props.setTypingMessage(e.target.value)} />
          <i
            className="fa fa-paper-plane"
            aria-hidden="true"
            onClick={() => {
              props.addTypedMessage(props.user, props.typingMessage);
              document.getElementById(props.user).value = "";
              props.setTypingMessage("");
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
