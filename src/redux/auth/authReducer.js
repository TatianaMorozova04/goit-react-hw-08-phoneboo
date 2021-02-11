import {combineReducers} from "redux";
import types from './authTypes';

const user = (state = [], {type, payload}) => {
    switch (type) {

        default:
            return state;
    }
};

const token = (state = '', {type, payload}) => {
    switch (type) {

        default:
            return state;
    }
};

const error = (state = false, {type}) => {
    switch (type) {

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
