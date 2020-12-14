import axios from "axios";
import contactsActions from "./contactsActions";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => {
      dispatch(contactsActions.fetchContactsSuccess(data));
    })
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};
const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactsRequest());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(contactsActions.removeContactsSuccess(id));
    })
    .catch((error) => dispatch(contactsActions.removeContactsError(error)));
};

export default { addContact, fetchContacts, removeContact };
