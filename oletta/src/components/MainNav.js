import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainNav() {
    const navigate = useNavigate()

    const messageHandler = () =>{
        navigate('/community')
    }
   
    return (
        <div className='mainNav'>
            <div className='messagesBtn'>
                <img onClick={messageHandler} src={require('../images/speak 1.png')} />
            </div>

            <div className='addPostBtn'>
                <img src={require('../images/🦆 icon _plus circle_.png')} />

            </div>

            <div className='mainViewBtn'><a href='/main'>
                <img src={require('../images/Cards icon.png')} /></a>

            </div>

            <div className='videoBtn'>
                <img src={require('../images/🦆 icon _video_.png')} />

            </div>

            <div className='profileBtn'>
                <img src={require('../images/profileicon.png')} />

            </div>
        </div>
    )
}
