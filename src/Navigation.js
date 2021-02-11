import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
    <>
        <ul>
            <li>
                <NavLink
                    exact
                    to="/"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    exact
                    to="/contacts"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Contacts
                </NavLink>
            </li>
        </ul>
    </>
);

export default Navigation;
