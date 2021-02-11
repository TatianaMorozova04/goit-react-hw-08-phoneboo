import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Registration from './Registration/Registration'
import Login from './Login/Login'
import AppBar from "./AppBar";
import ContactsApp from './ContactsApp/ContactsApp'

const App = () => (
    <>
        <AppBar/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
            <Route path="/contacts" component={ContactsApp}/>
        </Switch>
    </>
);

export default App;
