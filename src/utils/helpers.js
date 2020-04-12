import { toast } from 'react-toastify';

const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};

const get = key => {
  try {
    const items = localStorage.getItem(key);

    return items ? JSON.parse(items) : null;
  } catch (err) {
    throw new Error();
  }
};

const isInvalidContact = ({ name, number }) => {
  if (name.length <= 1 || name.trim() === 0) {
    toast.error(`Your name is not valid. Please enter correct information.`);
    return true;
  }

  if (!number.match(/^\(?([0-9]{3})\)?[- ]?([0-9]{2})[- ]?([0-9]{2})$/)) {
    toast.error(`Your number is not valid. Please enter correct information.`);
    return true;
  }

  return false;
};

const hasStateContact = (state, contact) => {
  const stateContact = findContact(state, contact);

  if (stateContact) {
    toast.error(`${contact.name} is already in contacts.`);
    return true;
  }

  return false;
};

export {
  filterContacts,
  findContact,
  save,
  get,
  isInvalidContact,
  hasStateContact,
};
