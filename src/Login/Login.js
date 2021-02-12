import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperators from "../redux/auth/authOperators";

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        event.preventDefault()

        this.props.onLogin(this.state)
        this.reset()
    }

    reset = () => this.setState({email: "", password: ""});

    render() {
        const {email, password} = this.state;

        return (
            <>
                <h1>Login page</h1>
                <form onSubmit={this.submitForm}>
                    <p>Email</p>
                    <label>
                        <input type="text"
                               name="email"
                               value={email}
                               onChange={this.handleChange}/>
                    </label>
                    <p>Password</p>
                    <label>
                        <input type="text"
                               name="password"
                               value={password}
                               onChange={this.handleChange}/>
                    </label>

                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
};

// const mapStateToProps = state =>({
//
// });

const mapDispatchToProps = dispatch =>({
    onLogin: data => dispatch(authOperators.logIn(data))
});

export default connect(null, mapDispatchToProps)(Login);
