import React, {useCallback} from 'react';
import defaultAvatar from './defaultAvatar.png';
import authSelectors from "../redux/auth/authSelectors";
import authOperators from "../redux/auth/authOperators";
import {useDispatch, useSelector} from "react-redux";

export default function UserPage () {
    const name = useSelector(authSelectors.getUserName);

    const dispatch = useDispatch();
    const onLogout = useCallback(() => dispatch(authOperators.logOut()), [dispatch]);

    return (
    <div>
        <span>Welcome {name}</span>
        <div>
            <img src={defaultAvatar} alt="avatar" width="48"/>
        </div>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>
)};

