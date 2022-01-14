import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Chat from "./Chat";

import "./Messenger.css";
export default function Messenger(props) {
  let [userNameA, setUserNameA] = useState("User A"); // by default name is "User A"
  let [userNameB, setUserNameB] = useState("User B"); // by default name is "User B"
  let [conversation, setConversation] = useState([
    // {
    //   user: "A",
    //   message: "Hello, How are you?",
    // },
    // {
    //   user: "B",
    //   message: "Fine",
    // },
  ]);
  function addTypedMessage(user, message) {
    setConversation([...conversation, { user, message }]);
  }
  let [typingMessage, setTypingMessage] = useState("");
  return (
    <div>
      <Switch>
        <Route path="/Messenger/Chat">
          <div className="chat">
            <Chat userName={userNameA} userIcon="https://img.icons8.com/office/80/000000/circled-user-male-skin-type-6.png" user="A" setTypingMessage={setTypingMessage} typingMessage={typingMessage} conversation={conversation} addTypedMessage={addTypedMessage} />
            <Chat userName={userNameB} userIcon="https://img.icons8.com/office/80/000000/circled-user-female-skin-type-5.png" user="B" setTypingMessage={setTypingMessage} typingMessage={typingMessage} conversation={conversation} addTypedMessage={addTypedMessage} />
          </div>
        </Route>
        <Route path="/Messenger" exact={true}>
          <div className="messenger">
            <img src="https://img.icons8.com/material-rounded/96/000000/lightning-bolt--v1.png" alt={props.projectName}/>
            <h1>{props.projectName}</h1>
            <div className="user-inp">
              <input
                placeholder="User A"
                type="text"
                onChange={(e) => {
                  setUserNameA(e.target.value);
                }}
              />
              <input
                placeholder="User B"
                type="text"
                onChange={(e) => {
                  setUserNameB(e.target.value);
                }}
              />
            </div>
            <Link to="/Messenger/Chat" className="submit-btn">
              Chat
            </Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
