import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Registration from './Registration/Registration'
import Login from './Login/Login'
import AppBar from "./AppBar";
import ContactsApp from './ContactsApp/ContactsApp'
import authOperators from "./redux/auth/authOperators";
import {useDispatch} from "react-redux";


export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperators.getCurrentUser());
    }, [dispatch]);

    return (
        <>
            <AppBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
                <Route path="/contacts" component={ContactsApp}/>
            </Switch>
        </>
    )
};

