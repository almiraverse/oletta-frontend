import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'


export default function LandingPage(props) {
    const { registerHandler, loginHandler } = props
    // const registerHandler = props.registerHandler
    // const loginHandler = props.loginHandler

    return (
        <div className='landingPage'>

            <div className='languageBubbles'>
                <img className='flagBubble3' src={require('../images/flag-bubble-pakistan.png')} />
                <img className='flagBubble4' src={require('../images/flag-bubble-russia (1).png')} />
                <img className='flagBubble5' src={require('../images/flag-bubble-spain.png')} />
                <img className='flagBubble6' src={require('../images/flag-bubble-turkiye (1).png')} />
                <img className='flagBubble1' src={require('../images/flag-bubble-bahrain.png')} />
                <img className='flagBubble2' src={require('../images/flag-bubble-italy.png')} />
            </div>


            <div className='landing-logo'>
                <logo><img className='logo' src={require('../images/Oletta (1).png')} /></logo>
            </div>

            {/* <Router> */}
            <div className='landing-buttons'>
                <button className='links signupBtn'><Link to='/register'>Sign Up</Link></button>
                <button className='links appleBtn'><Link to='/'><img src={require('../images/apple logo 1.png')} /></Link></button>
                <button className='links googleBtn'><Link to='/'><img src={require('../images/google logo 1.png')} /></Link></button>
            </div>
            {/* <Routes>
                    <Route path="/register" element={<Signup register={registerHandler} />}></Route>
                    <Route path="/login" element={<Login login={loginHandler} />}></Route>

                </Routes>
            </Router> */}
            <div className='landing-login'>
                <p>Already have an account? &nbsp; <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}
