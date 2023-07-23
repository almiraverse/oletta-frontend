import React, { useState } from "react";


export default function Signup(props) {

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
    }


    return (
        <div>
            <form className="signup-form">
                <div>
                    <label>Username</label>&nbsp;
                    <input onChange={changeHandler}
                        type='text'
                        name='username'
                    />
                </div>

                <div>
                    <label>Email</label>&nbsp;
                    <input onChange={changeHandler}
                        type='email'
                        name='email'
                    />
                </div>


                <div>
                    <label>Password</label>&nbsp;
                    <input onChange={changeHandler}
                        type='password'
                        name='password1'
                    />
                </div>


                <div>
                    <label>Confirm Password</label>&nbsp;
                    <input onChange={changeHandler}
                        type='password'
                        name='password2'
                    />
                </div>
                <button className="register-button" onClick={registerHandler}>Register</button>
            </form>
        </div>
    )

}