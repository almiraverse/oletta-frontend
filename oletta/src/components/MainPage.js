import React from 'react'
import Users from './Users'
import MainNav from './MainNav'

export default function MainPage() {
    return (
        <div className='mainPage'>
            <div className='mainPage-top'>
                <img className='notifBtn' src={require('../images/🦆 icon _bell_.png')} />
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
