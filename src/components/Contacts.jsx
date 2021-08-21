import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { users } from "../store/Dummy";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Contacts() {
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    if (e.target.checked) setValue(value + 1);
    else if (value > 0) setValue(value - 1);
    else history.push("/contacts");
  };

  const handleTrash = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="home-container">
        <Header />
        <div>
          <button className="add-contact">Add contact</button>
          <div className="contacts">
            <div>
              {value === 0 ? (
                <div className="contacts-container">
                  <div className="contacts-img-name">
                    <input
                      name="label"
                      type="checkbox"
                      onChange={handleChange}
                    />
                    <h4>Name</h4>
                  </div>
                  <h4 className="contact">Email</h4>
                  <h4 className="contact">Company name</h4>
                  <h4 className="contact">Role</h4>
                  <h4 className="contact">Forecast</h4>
                  <h4 className="contact">Recent activity</h4>
                </div>
              ) : (
                <div className="selected">
                  <h4>{value} Selected</h4>
                  <button className="trash-btn" onClick={handleTrash}>
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.99998 10.6667C0.99998 11.4 1.59998 12 2.33331 12H7.66665C8.39998 12 8.99998 11.4 8.99998 10.6667V2.66667H0.99998V10.6667ZM9.66665 0.666667H7.33331L6.66665 0H3.33331L2.66665 0.666667H0.333313V2H9.66665V0.666667Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {users.map((user, i) => (
              <div key={i} className="contacts-container">
                <div className="contacts-img-name">
                  <input name="label" type="checkbox" onChange={handleChange} />
                  <img className="user-task-img" src={user.img} />
                  <h4>{user.name}</h4>
                </div>
                <h4 className="contact">{user.email}</h4>
                <h4 className="contact">{user.company}</h4>
                <h4 className="contact">{user.role}</h4>
                <h4 className="contact">{user.forecast}</h4>
                <h4 className="contact">{user.activity}</h4>
                <h4 className="contact-separator"> </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
