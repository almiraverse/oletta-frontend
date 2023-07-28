import React from 'react'
import Users from './Users'
import MainNav from './MainNav'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
    const navigate = useNavigate()

    const notifsHandler = () =>{
        navigate('/notifs')
    }
    return (
        <div className='mainPage'>
            <div className='mainPage-top'>
                <img className='notifBtn' onClick={notifsHandler} src={require('../images/🦆 icon _bell_.png')} />
                <img className='logo-mainPage' src={require('../images/oletta blue.png')} />
                <img className='matchesBtn' src={require('../images/match 1.png')} />
            </div>

            <div className='userCards-main'>
                <Users />
            </div>

            <div className='mainPage_nav'>
                <MainNav />
            </div>
        </div>
    )
}
