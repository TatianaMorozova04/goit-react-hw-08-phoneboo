import React from 'react';
import { NavLink} from 'react-router-dom';

const AuthNav = () => (
    <>
        <ul>
            <li>
                <NavLink
                    exact
                    to="/registration"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Registration
                </NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to="/login"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Login
                </NavLink>
            </li>
        </ul>
    </>
);

export default AuthNav;
