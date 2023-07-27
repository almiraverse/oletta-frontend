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
    navigate('/main')

  }


  return (

    <div className='loginPage'>
      <h1>WELCOME BACK!</h1>
      <form className="login-form">

        <div>
          <label>Username</label>&nbsp;
          <input onChange={changeHandler}
            type='text'
            name='username'
            placeholder={'Username'}

          />
        </div>


        <div>
          <label>Password</label>&nbsp;
          <input onChange={changeHandler}
            type='password'
            name='password'
            placeholder={'Password'}

          />
        </div>


        <button className="loginBtn"onClick={loginHandler}>Login</button>
      </form>

      <div className='loginPage-signup'>
                <p>Don't have an account?  <a href='/register'>Register</a></p>
            </div>
            <div className="backBtn">
                <a href="/">Go Back</a>
            </div>

    </div>

  )
}