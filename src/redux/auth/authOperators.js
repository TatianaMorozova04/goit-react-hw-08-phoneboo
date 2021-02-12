import axios from 'axios'
import authActions from "./authActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const registration = credential => async dispatch => {
    dispatch(authActions.registrationRequest());

    try {
        const response = await axios.post('/users/signup', credential);

        token.set(response.data.token);
        dispatch(authActions.registrationSuccess(response.data));
    } catch (error) {
        dispatch(authActions.registrationError(error.message))
    }
};


const logIn = credential => async dispatch => {
    dispatch(authActions.loginRequest());

    try {
        const response = await axios.post('/users/login', credential);

        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
        dispatch(authActions.loginError(error.message))
    }
};

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try {
        await axios.post('/users/logout');

        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
};


const getCurrentUser = () => dispatch => {
    dispatch()

    axios
        .delete
        .then()
        .catch()
}

export default {
    registration,
    logIn,
    logOut,
    getCurrentUser,
}


// const registration = () => dispatch => {
//     dispatch(dispatch(authActions.registrationRequest()))
//
//     axios
//         .post('/users/signup')
//         .then(({data}) => dispatch(authActions.registrationSuccess(data.credential)))
//         .catch(error => dispatch(authActions.registrationError(error)))
// }
//
// const logIn = () => dispatch => {
//     dispatch()
//
//     axios
//         .post
//         .then()
//         .catch()
// }
//
// const logOut = () => dispatch => {
//     dispatch()
//
//     axios
//         .delete
//         .then()
//         .catch()
// }
//
//
// const getCurrentUser = () => dispatch => {
//     dispatch()
//
//     axios
//         .delete
//         .then()
//         .catch()
// }
