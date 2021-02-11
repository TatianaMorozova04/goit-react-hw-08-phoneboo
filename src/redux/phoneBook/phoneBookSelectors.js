import {createSelector} from '@reduxjs/toolkit'

const getContacts = state => state.phoneBook.contacts;
const getFilter = state => state.phoneBook.filter;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    });

export default {
    getContacts,
    getFilter,
    getVisibleContacts,
}


// const getVisibleContacts = state => {
//     const filter = getFilter(state);
//     const contacts = getContacts(state);
//     const normalizedFilter = filter.toLowerCase();
//
//     return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//     );
// };
