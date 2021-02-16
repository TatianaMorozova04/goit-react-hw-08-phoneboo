import React from 'react';
import {connect} from 'react-redux';
import defaultAvatar from './avatarka.png';
import authSelectors from "../redux/auth/authSelectors";
import authOperators from "../redux/auth/authOperators";

const UserPage = ({name, avatar, onLogout}) => (
    <div>
        <span>Welcome {name}</span>
        <div>
            <img src={avatar} alt="avatar" width="48"/>
        </div>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>
);


const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperators.logOut,
};

//Выше сокращенная запись
// const mapDispatchToProps = dispatch => ({
//     onLogout: () => dispatch(authOperators.logOut)
// });

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
