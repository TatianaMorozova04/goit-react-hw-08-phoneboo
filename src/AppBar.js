import React from 'react';
import Navigation from './Navigation';
import UserPage from './UserPage/UserPage';
import AuthNav from "./AuthNav";

const AppBar = ({isAuthenticated}) => (
    <>
        <Navigation/>
        {isAuthenticated ? <UserPage/> : <AuthNav/>}
    </>
);

export default AppBar;
