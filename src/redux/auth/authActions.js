import types from './authTypes'

const registrationRequest = () => ({
    type: types.REGISTRATION_REQUEST,
});

const registrationSuccess = value => ({
    type: types.REGISTRATION_SUCCESS,
    payload: value,
});

const registrationError = error => ({
    type: types.REGISTRATION_ERROR,
    payload: error,
});


const loginRequest = () => ({
    type: types.LOGIN_REQUEST,
});

const loginSuccess = value => ({
    type: types.LOGIN_SUCCESS,
    payload: value,
});

const loginError = error => ({
    type: types.LOGIN_ERROR,
    payload: error,
});

const logoutRequest = () => ({
    type: types.LOGOUT_REQUEST,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutError = error => ({
    type: types.LOGOUT_ERROR,
    payload: error,
});


const getCurrentUserRequest = () => ({
    type: types.GET_CURRENT_USER_REQUEST,
});

const getCurrentUserSuccess = value => ({
    type: types.GET_CURRENT_USER_SUCCESS,
    payload: value,
});

const getCurrentUserError = error => ({
    type: types.GET_CURRENT_USER_ERROR,
    payload: error,
});


export default {
    registrationRequest,
    registrationSuccess,
    registrationError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
}
