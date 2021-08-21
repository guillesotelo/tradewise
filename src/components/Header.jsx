import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOutUser } from '../store/reducers/user'
import Notifications from './Notifications'
import Chats from './Chats'

export default function Contacts() {

    const dispatch = useDispatch()
    const history = useHistory()
    const [value, setValue] = useState(null)
    const [openNotif, setOpenNotif] = useState(false)
    const [openChat, setOpenChat] = useState(false)

    const handleSearch = () => {
        console.log("SEARCH!")
    }

    const handleNotif = () => {
        setOpenNotif(!openNotif)
        setOpenChat(false)
    }

    const handleChat = () => {
        setOpenChat(!openChat)
        setOpenNotif(false)
    }

    const handleLogout = () => {
        dispatch(logOutUser())
            .then(() => history.push('/login'))
    }


    return (
        <div className='header-main'>
            <div className='header-container'>
                <div className='searchbar'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#C2CFE0"/>
                    </svg>
                    <input
                            type="text"
                            id="search"
                            className="search"
                            placeholder="Wise search"
                            onKeyUp={handleSearch}
                            onChange={data => setValue(data)}
                        />
                </div>
                <div>
                    <div >
                    <button onClick={handleChat} className='chat-icon'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99996 13.3001H3.71001L3.50499 13.5051L1.36663 15.6435V2.33342C1.36663 1.80335 1.80323 1.36675 2.33329 1.36675H15.6666C16.1967 1.36675 16.6333 1.80335 16.6333 2.33342V12.3334C16.6333 12.8635 16.1967 13.3001 15.6666 13.3001H3.99996Z" stroke="#C2CFE0" strokeWidth="1.4"/>
                    </svg>
                    </button>
                    <button onClick={handleNotif} className='notification-icon'>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 16.2071V16.5H0.5V16.2071L2.35355 14.3536L2.5 14.2071V14V9C2.5 6.09437 4.02219 3.78092 6.61528 3.16653L7 3.07538V2.68V2C7 1.44614 7.44614 1 8 1C8.55386 1 9 1.44614 9 2V2.68V3.07506L9.38434 3.16644C11.9681 3.78076 13.5 6.10482 13.5 9V14V14.2071L13.6464 14.3536L15.5 16.2071ZM9.41352 18.5C9.20605 19.0806 8.64884 19.5 8 19.5C7.34433 19.5 6.79074 19.0813 6.58536 18.5H9.41352Z" fill="white" stroke="#C2CFE0"/>
                        </svg>
                    </button>
                    <button onClick={handleLogout} className='logout-btn'>
                        <img className='logout-btn' src="https://i.postimg.cc/wjXXjM0k/16301547491543238901-512.png" alt='logout'/>
                    </button>
                    </div>
                </div>
            </div>
            <div className={openChat ? 'chat-open' : 'chat-closed'}>
                { openChat && <Chats/> }
            </div>
            <div className={openNotif ? 'notification-open' : 'notification-closed'}>
                { openNotif && <Notifications/> }
            </div>
        </div>
    )
}
