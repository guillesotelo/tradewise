import React from 'react'
import Login from './Login'
import Sidebar from './Sidebar'
import Header from './Header'
import SignalCard from './SignalCard'
import { signals } from "../store/Dummy";

export default function Dashboard() {

    const user = JSON.parse(localStorage.getItem('user'))
    const isLoggedIn =  user && user.token ? true : false
    
    return isLoggedIn ? (
        <div className='app-container'>
            <Sidebar/>
            <div className='home-container'>
                <Header/>
                <div className='signal-grid'>
                    {signals.map(signal => 
                        <SignalCard signal={signal}/> 
                    )}
                </div>
            </div>
        </div>
    )
    :
    <Login/>
}
