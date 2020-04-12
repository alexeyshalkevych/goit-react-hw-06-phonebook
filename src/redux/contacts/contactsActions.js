import { v4 as uuidv4 } from 'uuid';
import { GET_ALL_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actionTypes';

export const getAllContacts = contacts => ({
  type: GET_ALL_CONTACTS,
  payload: contacts,
});

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: {
    ...contact,
    id: uuidv4(),
  },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
