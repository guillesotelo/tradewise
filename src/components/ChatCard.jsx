import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { users, chats } from "../store/Dummy";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function ChatCard() {
  const { id } = useParams();
  const [msg, setMsg] = useState(null);

  let myChat = chats[id];

  const onChange = ({ target }) => {
    setMsg(target.value);
  };

  const handleSend = () => {
    myChat.message.push(msg);
  };

  useEffect(() => {}, [myChat.message.length]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="home-container">
        <Header />
        <div className="chat-card">
          <div className="chat-col1-card">
            <img
              className="chat-img-card"
              src={myChat.senderImg}
              alt={myChat.sender}
            />
            <h3 className="chat-sender-card">Chat with {myChat.sender}</h3>
            {/* <h5 className="chat-date-card">{chats[id].date}</h5> */}
          </div>
          <div className="chat-row2-card">
            {myChat.message.map((m, i) => (
              <p key={i} className="chat-msg-card">
                {m}
              </p>
            ))}
            <div className="div-input">
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Write a message..."
                name="message"
                className="input-chat"
              />
              <div className='div-clip'>
                <button onClick={handleSend} className="chat-btn">
                  Send
                </button>
                <svg
                  className="clip"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76,19.94A5.49,5.49,0,0,1,5,12.18l8.76-8.75A3.72,3.72,0,0,1,20.1,6.06,3.68,3.68,0,0,1,19,8.68L10.67,17A1.36,1.36,0,0,1,8.75,15.1l8.34-8.34L15.67,5.35,7.33,13.69a3.36,3.36,0,0,0,4.75,4.75l8.35-8.34A5.72,5.72,0,0,0,12.34,2L3.58,10.77A7.49,7.49,0,0,0,14.17,21.36l7.92-7.93L20.68,12Z" />
                </svg>
                <svg  className="clip-emoji" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
