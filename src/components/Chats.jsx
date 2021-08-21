import React from "react";
import { Link } from "react-router-dom";
import { chats } from "../store/Dummy";

export default function Chats() {

  return (
    <div className="main-chat-container">
      <h1>Chats</h1>
      <div className="chat-container">
        {chats.map((chat, i) => (
          <Link key={i} to={`/chats/${i}`} className="chat">
            <div className='chat-col1'>
              <img
                className="chat-img"
                src={chat.senderImg}
                alt={chat.sender}
              />
            </div>
            <div className='chat-col2'>
              <div className='chat-row1'>
                <h3 className="chat-sender">{chat.sender}</h3>
                <h5 className="chat-date">{chat.date}</h5>
              </div>
              <div className='chat-row2'>
                <p className="chat-msg">{chat.message[0]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
