import axios from 'axios'
import appActions from "./phoneBookActions";

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const getContacts = () => dispatch => {
dispatch(appActions.getContactRequest())

    axios
        .get('/contacts')
        .then(({data}) => dispatch(appActions.getContactSuccess(data)))
        .catch(error => dispatch(appActions.getContactError(error.message)))
}

const addContact = contact => dispatch => {
    dispatch(appActions.addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({data}) => dispatch(appActions.addContactSuccess(data)))
        .catch(error => dispatch(appActions.addContactError(error.message)))
}

const deleteContact = contactId => dispatch => {
    dispatch(appActions.deleteContactRequest())

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(appActions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(appActions.deleteContactError(error.message)))
}


export default {
    getContacts,
    addContact,
    deleteContact,
}
