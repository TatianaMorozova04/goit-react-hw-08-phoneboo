import axios from 'axios'
import authActions from "./authActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const registration = (credentials) => dispatch => {
    dispatch(dispatch(authActions.registrationRequest()))

    axios
        .get('/users/signup', credentials)
        .then()
        .catch()
}

const logIn = () => dispatch => {
    dispatch()

    axios
        .post
        .then()
        .catch()
}

const logOut = () => dispatch => {
    dispatch()

    axios
        .delete
        .then()
        .catch()
}


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
