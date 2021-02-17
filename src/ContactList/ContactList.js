import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import appOperators from "../redux/phoneBook/phoneBookOperators";
import appSelectors from "../redux/phoneBook/phoneBookSelectors";

export default function ContactList () {
    const dispatch = useDispatch();
    const getContacts = () => dispatch(appOperators.getContacts());
    const deleteContact = id => dispatch(appOperators.deleteContact(id));
    const contacts = useSelector(appSelectors.getVisibleContacts);

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <ul>
            {contacts.map(({name, number, id}) => (
                <li key={id}>
                    <span>{name}: </span>
                    <span>{number}</span>
                    <button type="button"
                            onClick={() => deleteContact(id)}
                    >Delete
                    </button>
                </li>))}

        </ul>)
};

