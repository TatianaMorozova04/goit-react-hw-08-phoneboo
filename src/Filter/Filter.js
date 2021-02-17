import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import appActions from "../redux/phoneBook/phoneBookActions";
import appSelectors from "../redux/phoneBook/phoneBookSelectors"

export default function Filter () {
    const dispatch = useDispatch();
    const onChange = event => dispatch(appActions.changeFilter(event.target.value));
    const value = useSelector(appSelectors.getFilter);

    return(
        <>
            <p>Find contacts by name</p>
            <label>
                <input type="text"
                       value={value}
                       onChange={onChange}/>
            </label>
        </>)
};
