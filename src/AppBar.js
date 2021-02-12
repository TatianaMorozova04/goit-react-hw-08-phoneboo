import React from 'react';
import Navigation from './Navigation';
import UserPage from './UserPage/UserPage';
import AuthNav from "./AuthNav";
import {connect} from 'react-redux';
import authSelectors from './redux/auth/authSelectors';

const AppBar = ({isAuthenticated}) => (
    <>
        <Navigation/>
        {isAuthenticated ? <UserPage/> : <AuthNav/>}
    </>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
