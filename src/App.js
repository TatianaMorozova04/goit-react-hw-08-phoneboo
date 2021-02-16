import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Registration from './Registration/Registration'
import Login from './Login/Login'
import AppBar from "./AppBar";
import ContactsApp from './ContactsApp/ContactsApp'
import authOperators from "./redux/auth/authOperators";
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        this.props.OnGetCurrentUser()
    }

    render() {
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
    }
};

// const mapStateToProps = state => ({
// token:
// });

const mapDispatchToProps = dispatch => ({
    OnGetCurrentUser: () => dispatch(authOperators.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
