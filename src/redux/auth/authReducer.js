import {combineReducers} from "redux";
import types from './authTypes';

const user = (state = null, {type, payload}) => {
    switch (type) {
        case types.REGISTRATION_SUCCESS:
            return payload.user;
        case types.LOGIN_SUCCESS:
            return payload.user;
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
