import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import shortid from "shortid";
import appOperators from "../redux/phoneBook/phoneBookOperators";
import appSelectors from "../redux/phoneBook/phoneBookSelectors";


export default function ContactForm () {
    const dispatch = useDispatch();
    const getAddContact = (contact) => dispatch(appOperators.addContact(contact));
    const contacts = useSelector(appSelectors.getContacts);
    const isLoadingContacts = useSelector(state => (state.phoneBook.loading));
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const submitForm = (event, name, number) => {
        handleSubmit(event, name, number);
        reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name.length > 0 && number.length > 0) {
            const sameContact = contacts.find(contact => name === contact.name);

            if (!sameContact) {
                getAddContact({name, number, id: shortid.generate()})
            } else {
                alert(`${name} is already in contacts`)
            }
        }
    };

    const reset = () => {
        setName('');
        setNumber('')
    };

        return (
            <>
                {isLoadingContacts && <h2>Loading...</h2>}
                <form onSubmit={submitForm}>
                    <p>Name</p>
                    <label>
                        <input type="text"
                               name="name"
                               value={name}
                               onChange={(e) => {setName(e.currentTarget.value)}}/>
                    </label>
                    <p>Number</p>
                    <label>
                        <input type="number"
                               name="number"
                               value={number}
                               onChange={(e) => {setNumber(e.currentTarget.value)}}/>
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
};
