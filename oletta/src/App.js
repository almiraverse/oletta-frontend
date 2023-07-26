import React, { useState, useEffect} from 'react'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Users from './components/Users'
import LandingPage from './components/LandingPage'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';


export default function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      let user =token
      setIsAuth(true)
      setUser(user)
    } 
    else if (!user) {
      localStorage.remove("token")
      setIsAuth(false)
    }

  }, [])

  const registerHandler = (user) => {
    console.log(user)
    axios.post("auth/register/", user)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }

  const loginHandler = (cred) => {
    axios.post("auth/login/", cred)
      .then(res => {
        console.log(res.data.token)
        let token = res.data.token
        if (token != null) {
          localStorage.setItem("token", token);
          let user = token;
          setIsAuth(true)
          setUser(user)

        }
      }).catch(err => {
        console.log(err)
      })
  }

  const logoutHandler = (e) => {
    e.preventDefault() 
    localStorage.removeItem("token");
    setIsAuth(false)
    setUser(null)
  }

  return (
    <>
      <Router>
        {/* <nav className='navbar'>
          <div className='nav-logo'>
            <Link to='/'><img className='logo' src={require('./images/Oletta (1).png')} /></Link>
          </div>
          <div className='nav-links'>
            <button className='links signupBtn'><Link to='/register'>Sign Up</Link></button>
            <button className='links loginBtn'><Link to='/login'>Login</Link></button>
            <button className='links logoutBtn'><Link to='/logout'>Logout</Link></button>
          </div>
        </nav> */}

        <Routes>
          <Route path='/' element={<LandingPage registerHandler={registerHandler} loginHandler={loginHandler}/>}/>
          <Route path="/register" element={<Signup register={registerHandler} />}></Route>
          <Route path="/login" element={<Login login={loginHandler} />}></Route>
          <Route path="/logout" element={<LandingPage logout={logoutHandler} />}></Route>

        </Routes>
      </Router>

       {/* <Users /> */}
      {/*<LandingPage  registerHandler={registerHandler} loginHandler={loginHandler}/>
      <LandingPage  registerHandler={'registerHandler'} loginHandler={'loginHandler'}/> */}
    </>
  )
}
