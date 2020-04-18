import { toast } from 'react-toastify';

/**
 * find data contact
 */
const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

/**
 * save to localStorage
 */
const saveToLocaleStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};

/**
 * get data from localStorage
 */
const getFromLocaleStorage = key => {
  try {
    const items = localStorage.getItem(key);

    return items ? JSON.parse(items) : null;
  } catch (err) {
    throw new Error();
  }
};

/**
 * check valid contact data
 */
const isInvalidContact = ({ name, number }) => {
  if (name.length <= 1 || name.trim() === 0) {
    toast.error(`Your name is not valid. Please enter correct information.`);
    return true;
  }

  if (number.length <= 1 || number.trim() === 0) {
    toast.error(`Your number is not valid. Please enter correct information.`);
    return true;
  }

  return false;
};

/**
 * check for availability data in state
 */
const hasStateContact = (state, contact) => {
  const stateContact = findContact(state, contact);

  if (stateContact) {
    toast.error(`${contact.name} is already in contacts.`);
    return true;
  }

  return false;
};

export {
  findContact,
  saveToLocaleStorage,
  getFromLocaleStorage,
  isInvalidContact,
  hasStateContact,
};
