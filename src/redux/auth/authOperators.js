import axios from 'axios'
import authActions from "./authActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const TOKEN = 'token';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};


const registration = credential => dispatch => {
    dispatch(authActions.registrationRequest());

    axios
        .post('/users/signup', credential)
        .then(response => {
            const getResponse = response.data;
            token.set(getResponse.token);
            dispatch(authActions.registrationSuccess(getResponse))
        })
        .catch(error => dispatch(authActions.registrationError(error.message)))
};

const logIn = credential => dispatch => {
    dispatch(authActions.loginRequest());

    axios
        .post('/users/login', credential)
        .then(response => {
            const getResponse = response.data;
            token.set(getResponse.token);
            dispatch(authActions.loginSuccess(getResponse));
        })
        .catch(error => dispatch(authActions.loginError(error.message)))
};

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios
        .post('/users/logout')
        .then(() => {
            token.unset();
            dispatch(authActions.logoutSuccess());
        })
        .catch(error => dispatch(authActions.logoutError(error.message)));
};

// const getCurrentUser = () => dispatch => {
//     const getToken = localStorage.getItem(TOKEN);
//
//     if (!axios.defaults.headers.common.Authorization) {
//         token.set(JSON.parse(getToken));
//     }
//
//     dispatch(authActions.getCurrentUserRequest());
//
//     axios
//         .get('/users/current')
//         .then(response => {
//             console.log('log in then')
//             dispatch(authActions.getCurrentUserSuccess(response.data));
//         })
//         .catch(error => {
//             console.log('log in catch')
//             dispatch(authActions.getCurrentUserError(error.message))
//         })
// }


const getCurrentUser = () => async dispatch => {
    const getToken = localStorage.getItem(TOKEN);

    if (!axios.defaults.headers.common.Authorization) {
        token.set(JSON.parse(getToken));
    }

    dispatch(authActions.getCurrentUserRequest());

    try {
        const response = await axios.get('/users/current');
        dispatch(authActions.getCurrentUserSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(authActions.getCurrentUserError(error.message))
    }
};



export default {
    registration,
    logIn,
    logOut,
    getCurrentUser,
}


// const registration = credential => async dispatch => {
//     dispatch(authActions.registrationRequest());
//
//     try {
//         const response = await axios.post('/users/signup', credential);
//
//         token.set(response.data.token);
//         dispatch(authActions.registrationSuccess(response.data));
//     } catch (error) {
//         dispatch(authActions.registrationError(error.message))
//     }
// };

// const logIn = credential => async dispatch => {
//     dispatch(authActions.loginRequest());
//
//     try {
//         const response = await axios.post('/users/login', credential);
//
//         token.set(response.data.token);
//         dispatch(authActions.loginSuccess(response.data));
//     } catch (error) {
//         dispatch(authActions.loginError(error.message))
//     }
// };

// const logOut = () => async dispatch => {
//     dispatch(authActions.logoutRequest());
//
//     try {
//         await axios.post('/users/logout');
//
//         token.unset();
//         dispatch(authActions.logoutSuccess());
//     } catch (error) {
//         dispatch(authActions.logoutError(error.message));
//     }
// };

// const getCurrentUser = () => async dispatch => {
//     const getToken = localStorage.getItem(TOKEN);
//
//     if (!axios.defaults.headers.common.Authorization) {
//         token.set(JSON.parse(getToken));
//     }
//
//     dispatch(authActions.getCurrentUserRequest());
//
//     try {
//         const response = await axios.get('/users/current');
//
//         dispatch(authActions.getCurrentUserSuccess(response.data));
//     } catch (error) {
//         dispatch(authActions.getCurrentUserError(error.message))
//     }
// };
