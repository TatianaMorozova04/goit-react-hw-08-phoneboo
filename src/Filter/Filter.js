import React from 'react';
import {connect} from 'react-redux';
import appActions from "../redux/phoneBook/phoneBookActions";
import appSelectors from "../redux/phoneBook/phoneBookSelectors"

const Filter = ({ value, onChange }) => (
    <>
        <p>Find contacts by name</p>
        <label>
            <input type="text"
                   value={value}
                   onChange={onChange}/>
        </label>
    </>
);

const mapStateToProps = state => ({
    value: appSelectors.getFilter(state),
});

const mapDispatchFromProps = dispatch => ({
    onChange: (event) => dispatch(appActions.changeFilter(event.target.value))
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);
