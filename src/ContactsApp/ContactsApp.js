import React from 'react';
import Filter from '../Filter/Filter'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'


const ContactsApp = () => (
    <>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
    </>
);

export default ContactsApp;
