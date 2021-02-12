import React, {Component} from 'react';
import {connect} from 'react-redux';
import authOperators from "../redux/auth/authOperators";

class Registration extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        event.preventDefault()

        this.props.onRegistration(this.state)
        this.reset()
    }


    reset = () => this.setState({name: "", password: "", email: ""});

    render() {
        const {name, password, email} = this.state;

        return (
            <>
                <h1>Register page</h1>
                <form onSubmit={this.submitForm} autoComplete="off">
                    <p>Name</p>
                    <label>
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={this.handleChange}/>
                    </label>
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
                    <button type="submit">Register</button>
                </form>
            </>
        )
    }
};


// const mapStateToProps = state => ({
//
// })

const mapDispatchToProps = dispatch => ({
    onRegistration: (data) => dispatch(authOperators.registration(data)),
})

// краткая запись
// const mapDispatchToProps = {
//     onRegistration: authOperators.registration,
// }

export default connect(null, mapDispatchToProps)(Registration);
