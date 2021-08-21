import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { regUser, logUser } from "../store/reducers/user";
import { handleInputs } from '../utils/FrontHandlers'

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({ name: null, email: null, phone: null, password: null, password2: null });
  const [alert, setAlert] = React.useState(null)

  const onSubmit = (e) => {
    if (e.target) e.preventDefault();
    if(handleInputs(value)) return setAlert('Check inputs')
    dispatch(regUser(value))
      .then((res) => {
          if(res.payload._id) history.push('/login')
          else setAlert('Something went wrong')
        })
  };

  const onChange = ({ target }) => {
    setValue((value) => {
      return { ...value, [target.name]: target.value };
    });
  };

  return (
    <div>
      <div>
        <div className="login-card">
        <img className='img-logo' src='https://i.postimg.cc/yNDV8L9H/tradewise-hq.png' alt='Trade Wise'/>
        <h2 onClick={() => setAlert(null)} 
            className={alert ? 'invalid2' : 'invalid-transparent'}>
            {alert} &nbsp;❌
          </h2>
          <form onSubmit={onSubmit}>
            <div>
              <input
                onChange={onChange}
                autoComplete="off"
                type="text"
                placeholder="Full name"
                name="name"
                className='log-input'
              />
            </div>
            <div>
              <input
                onChange={onChange}
                autoComplete="off"
                type="email"
                placeholder="Email"
                name="email"
                className='log-input'
              />
            </div>
            <div>
              <input
                onChange={onChange}
                autoComplete="off"
                placeholder="Phone number (e.g: +5432198765432)"
                name="phone"
                className='log-input'
              />
            </div>
            <div>
              <input
                onChange={onChange}
                autoComplete="off"
                placeholder="Password"
                type="password"
                name="password"
                className='log-input'
              />
            </div>
            <div>
            <input
                onChange={onChange}
                autoComplete="off"
                placeholder="Password again"
                type="password"
                name="password2"
                className='log-input'
              />
            </div>
            <div className='log-btns'>
                <input type="submit" value="SIGNUP" className="login-btn" />
                <button onClick={()=>history.push('/login')} className="signup-btn">Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
