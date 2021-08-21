import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user'))
    const history = useHistory()

  return (
    <div className="app-container">
      <Sidebar />
      <div className="home-container">
        <Header />
        <div className="profile">
            <div className='profile-col1'>
                <img
                    className="user-profile-img"
                    alt="userprofile"
                    src={user.img ? user.img : 'http://simpleicon.com/wp-content/uploads/user-4.png'}
                />
                <h1 className='user-profile-name'>{user.name}</h1>
          </div>
          <div className='profile-data'> 
            <h3>Email: &nbsp; {user.email}</h3>
            {user.phone && <h3>Phone number: &nbsp;{user.phone}</h3>}
            {user.personalDescription && <h3>Personal description: <br/>&nbsp;{user.personalDescription}</h3>}
            <br/>
            <button className='profile-btn' onClick={() => history.push('/edit')}>EDIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
