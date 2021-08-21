import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Settings() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="home-container">
        <Header />
        <div className="settings">
          <h1>Settings</h1>
          <div >
            <br/>
            <br/>
            <Link to='/edit'>
              <button className='profile-btn'>Edit profile</button>
            </Link>
            <Link to='/'>
              <button className='profile-btn'>Edit Signals</button>
            </Link>
            <Link to='/contacts'>
              <button className='profile-btn'>Edit Contacts</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
