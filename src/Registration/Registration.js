import React, {Component} from 'react';

class Registration extends Component {
    state = {
        name: '',
        password: '',
        confirmPassword: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        event.preventDefault()
        this.reset()
    }


    reset = () => this.setState({name: "", password: "", confirmPassword: ""});

    render() {
        const {name, password, confirmPassword} = this.state;

        return (
            <>
                <h1>Register page</h1>
                <form onSubmit={this.submitForm}>
                    <p>Name</p>
                    <label>
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={this.handleChange}/>
                    </label>
                    <p>Password</p>
                    <label>
                        <input type="text"
                               name="password"
                               value={password}
                               onChange={this.handleChange}/>
                    </label>
                    <p>Confirm the password</p>
                    <label>
                        <input type="text"
                               name="confirmPassword"
                               value={confirmPassword}
                               onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Register</button>
                </form>
            </>
        )
    }
};

export default Registration;
