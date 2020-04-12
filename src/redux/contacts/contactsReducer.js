import { GET_ALL_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actionTypes';
import { isInvalidContact, hasStateContact } from '../../utils/helpers';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTACTS: {
      return [...state, ...payload];
    }

    case ADD_CONTACT: {
      if (hasStateContact(state, payload)) {
        return state;
      }
      if (isInvalidContact(payload)) {
        return state;
      }

      return [...state, payload];
    }

    case DELETE_CONTACT: {
      const filteredState = state.filter(contact => contact.id !== payload);

      return filteredState;
    }

    default:
      return state;
  }
};

export default contactReducer;
