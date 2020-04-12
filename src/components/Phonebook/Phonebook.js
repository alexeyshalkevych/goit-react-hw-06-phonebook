import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../Containers/FormContainer';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import { filterContacts, get, save } from '../../utils/helpers';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookSubTitle,
  Notification,
} from './Phonebook.styled';
import 'react-toastify/dist/ReactToastify.css';
import SlideTitle from '../../transition/popText.transition';

const Phonebook = ({ getAllContacts, contacts }) => {
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [showTitle, setShowTitle] = useState(false);

  // eslint-disable-next-line no-lone-blocks
  {
    /* TODO: fix problem with locale-storage */
  }

  useEffect(() => {
    setShowTitle(true);

    const persistedContacts = get('contacts');

    if (persistedContacts) {
      getAllContacts(persistedContacts);
    }
  }, [getAllContacts]);

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const changeFilter = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <PhonebookContainer>
      <SlideTitle in={showTitle}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
      </SlideTitle>
      <ContactForm />

      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      <ContactFilter
        value={filter}
        onChangeFilter={changeFilter}
        isFiltered={contacts.length >= 2}
      />
      {/* <ContactList items={filteredContacts} onDeleteContact={deleteContact} /> */}
      <ContactList items={filteredContacts} />

      <Notification autoClose={1500} />
    </PhonebookContainer>
  );
};

Phonebook.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
};

export default Phonebook;
