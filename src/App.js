import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Contacts from './components/Contacts'
import Chats from './components/Chats'
import Settings from './components/Settings'
import Login from './components/Login'
import Register from './components/Register'
import EditProfile from './components/EditProfile'
import ChatCard from './components/ChatCard'
 
function App() {

    return (
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/me" component={Profile} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/chats" component={Chats} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/edit" component={EditProfile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} /> 
                    <Route path="/chats/:id" component={ChatCard} />
                </Switch>
    )
}

export default App;
