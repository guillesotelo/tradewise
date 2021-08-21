import { Link } from "react-router-dom";
import React from 'react'

export default function Notifications() {

    return (
        <div className=''>
            <Link to='/contacts' style={{ textDecoration: 'none' }}>
                <h5 className='notif'>● &nbsp;&nbsp;New Messages from Williams</h5>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h5 className='notif'>● &nbsp;&nbsp;TSLA is going UP!</h5>
            </Link>
            <Link to='/me' style={{ textDecoration: 'none' }}>
                <h5 className='notif'>● &nbsp;&nbsp;Update your profile</h5>
            </Link>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h5 className='notif'>● &nbsp;&nbsp;Welcome to TradeWise !</h5>
            </Link>
        </div>
    )
}
