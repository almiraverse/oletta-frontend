import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'


export default function LandingPage(props) {
   const {registerHandler, loginHandler} = props

    return (
        <div className='landingPage'>LandingPage
            <div className='languageBubbles'>
            </div>

            <div>
                <logo><img className='logo' src={require('../images/Oletta (1).png')} /></logo>
            </div>
            <Router>
                <div className='nav-links'>
                    <button className='links signupBtn'><Link to='/register'>Sign Up</Link></button>
                    <button className='links loginBtn'></button>
                    <button className='links logoutBtn'><Link to='/logout'>Logout</Link></button>
                </div>
                <Routes>
                    <Route path="/register" element={<Signup register={registerHandler} />}></Route>
                    <Route path="/login" element={<Login login={loginHandler} />}></Route>

                </Routes>
            </Router>
            <div>
                <p>Already have an account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}
