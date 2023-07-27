import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Signup(props) {

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({});
    const changeHandler = (e) => {
        e.preventDefault()
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const registerHandler = () => {
        props.register(newUser)
        props.login(newUser)
    }

    const navHandler = () => {
        // navigate('/native-language')
        navigate('/login')
    }

    const handleClick = () => {
        registerHandler()
        navHandler()
    }

    return (
        <div className="signupPage">
            <h1>CREATE AN ACCOUNT</h1>

            <form className="signup-form">
                <div>
                    <input onChange={changeHandler}
                        type='text'
                        name='first_name'
                        placeholder={'First Name'}
                    />
                </div>
                <div>
                    <input onChange={changeHandler}
                        type='text'
                        name='last_name'
                        placeholder={'Last Name'}
                    />
                </div>
                <div>
                    <input onChange={changeHandler}
                        type='text'
                        name='username'
                        placeholder={'Username'}
                    />
                </div>

                <div>
                    <input onChange={changeHandler}
                        type='email'
                        name='email'
                        placeholder={'Email'}
                    />
                </div>


                <div>
                    <input onChange={changeHandler}
                        type='password'
                        name='password1'
                        placeholder={'Password'}
                    />
                </div>


                <div>
                    <input onChange={changeHandler}
                        type='password'
                        name='password2'
                        placeholder={'Confirm Password'}
                    />
                </div>
                <button className="register-button" onClick={handleClick}>CONTINUE</button>
            </form>

            <div className='signupPage-login'>
                <p>Already have an account?  <a href='/login'>Login</a></p>
            </div>
            <div className="backBtn">
                <a href="/">Go Back</a>
            </div>
        </div>
    )

}