import {combineReducers} from "redux";
import types from './authTypes';

const initialUserState = {name: null, email: null};

const user = (state = null, {type, payload}) => {
    switch (type) {
        case types.REGISTRATION_SUCCESS:
            return payload.user;
        case types.LOGIN_SUCCESS:
            return payload.user;
        case types.LOGOUT_SUCCESS:
            return initialUserState;
        case types.GET_CURRENT_USER_SUCCESS:
            return payload;
        default:
            return state;
    }
};

const token = (state = '', {type, payload}) => {
    switch (type) {
        case types.REGISTRATION_SUCCESS:
            return payload.token;
        case types.LOGIN_SUCCESS:
            return payload.token;
        case types.LOGOUT_SUCCESS:
            return null;
        case types.GET_CURRENT_USER_SUCCESS:
            return payload;
        default:
            return state;
    }
};

const error = (state = '', {type, payload}) => {
    switch (type) {
        case types.REGISTRATION_ERROR:
            return payload;
        case types.LOGIN_ERROR:
            return payload;
        case types.LOGOUT_ERROR:
            return payload;
        case types.GET_CURRENT_USER_ERROR:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
        user,
        token,
        error,
    }
)
