import React from 'react';
import Navigation from './Navigation';
import UserPage from './UserPage/UserPage';
import AuthNav from "./AuthNav";
import {useSelector} from 'react-redux';
import authSelectors from './redux/auth/authSelectors';

export default function AppBar () {
    const token = useSelector(authSelectors.getIsAuthenticated);

    return (
    <>
        <Navigation/>
        {token ? <UserPage/> : <AuthNav/>}
    </>
)};
