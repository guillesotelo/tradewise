import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { users } from "../store/Dummy";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { updateUser } from "../store/reducers/user";
import { handleInputsUpdate, filterData } from "../utils/FrontHandlers";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = useState({
    img: null,
    name: null,
    actualEmail: user.email,
    email: null,
    password: null,
    password2: null,
    personalDescription: null,
    phone: null,
    user: user
  });
  const [alert, setAlert] = React.useState(null);

  const handleSubmit = (e) => {
    if (e.target) e.preventDefault();
    if (handleInputsUpdate(value)) return setAlert("Check inputs");
    dispatch(updateUser(filterData(value))).then((res) => {
        if(res.payload) history.push("/me")
        else setAlert('Something went wrong')
    })
  };

  const onChange = ({ target }) => {
    setValue((value) => {
      return { ...value, [target.name]: target.value };
    });
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="home-container">
        <Header />
        <form onSubmit={handleSubmit}>
          <div className="edit-profile">
            <div className="edit-profile1">
              <img
                className="user-edit-profile-img"
                alt="userprofile"
                src={user.img ? user.img : "http://simpleicon.com/wp-content/uploads/user-4.png"}
              />
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="New URL Image"
                name="img"
                className="log-input"
              />
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Full name"
                name="name"
                className="log-input"
              />
            </div>
            <div className='edit-profile2'>
              <input
                onChange={onChange}
                autoComplete="off"
                type="email"
                placeholder="Email"
                name="email"
                className="log-input"
              />
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Password"
                name="password"
                className="log-input"
              />
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Password again"
                name="password2"
                className="log-input"
              />
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Personal description"
                name="personalDescription"
                className="log-input-desc"
              />
              <h2
                onClick={() => setAlert(null)}
                className={alert ? "invalid2" : "invalid-transparent"}
              >
                {alert} &nbsp;❌
              </h2>
              <input className="profile-btn" type="submit" value="SAVE"/>
            <button className='profile-btn' onClick={() => history.push('/me')}>CANCEL</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
