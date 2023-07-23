import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();


  const changeHandler = (e) => {
    const user = { ...newUser };
    user[e.target.name] = e.target.value;
    console.log(user);
    setNewUser(user);
  }


  const loginHandler = () => {
    props.login(newUser)
  }


  return (

    <div>
      <h1>Login</h1>
      <form className="login-form">

        <div>
          <label>Username</label>&nbsp;
          <input onChange={changeHandler}
            type='text'
            name='username'
          />
        </div>


        <div>
          <label>Password</label>&nbsp;
          <input onChange={changeHandler}
            type='password'
            name='password'
          />
        </div>


        <button onClick={loginHandler}>Login</button>
      </form>
    </div>

  )
}