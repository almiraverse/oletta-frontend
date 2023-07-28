import React from 'react'
import MainNav from './MainNav'

export default function Chats() {
  return (
    <div className='chatsPage'>
        <div className='chats-top'>
            <h1>@username</h1>
            <img src={require('../images/🦆 icon _message square outline_.png')} />
        </div>
        <div className='chats-title'>
            <h3>Messages</h3>
        </div>
        <div className='chatsHere'>
            <p>You have no chats to shows</p>
        </div>
        <MainNav />
    </div>
  )
}
