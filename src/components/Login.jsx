import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logUser } from "../store/reducers/user";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState({ email: "", password: "", code: null });
  const [alert, setAlert] = useState(null)


  const onSubmit = (e) => {
    if (e.target) e.preventDefault();
    dispatch(logUser(value)).then(res => { 
      if(res.payload) history.push("/")
      else setAlert('Invalid credentials')
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
        <div className="log-text">Welcome, stranger.</div>
        <h2 onClick={() => setAlert(null)} 
            className={alert ? 'invalid2' : 'invalid-transparent'}>
            {alert} &nbsp;❌
          </h2>
          <form onSubmit={onSubmit}>
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
                placeholder="Your verification code"
                name="code"
                className='log-input'
              />
            </div>
            <div className='log-btns'>
                <input type="submit" value="LOGIN" className="login-btn" />
                <button onClick={()=>history.push('/register')} className="signup-btn">SIGNUP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
