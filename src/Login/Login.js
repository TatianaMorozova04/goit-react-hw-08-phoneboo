import React, {Component} from 'react';

class Login extends Component {
    state = {
        name: '',
        password: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        event.preventDefault()
        this.reset()
    }

    reset = () => this.setState({name: "", password: ""});

    render() {
        const {name, password} = this.state;

        return (
            <>
                <h1>Login page</h1>
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

                    <button type="submit">Login</button>
                </form>
            </>
        )
    }
};


export default Login;
