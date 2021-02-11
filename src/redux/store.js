import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import phoneBookReducer from "./phoneBook/phoneBookReducer";
import authReducer from './auth/authReducer'


const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
