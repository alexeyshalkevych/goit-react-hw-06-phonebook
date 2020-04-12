import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../Containers/FormContainer';
import ContactList from '../Containers/ContactListContainer';
import ContactFilter from '../Containers/ContactFilterContainer';
import { get, save } from '../../utils/helpers';
import {
  PhonebookContainer,
  PhonebookTitle,
  PhonebookSubTitle,
  Notification,
} from './Phonebook.styled';
import SlideTitle from '../../transition/popText.transition';
import 'react-toastify/dist/ReactToastify.css';

const Phonebook = ({ getAllContacts, contacts }) => {
  const [showTitle, setShowTitle] = useState(false);

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

  return (
    <PhonebookContainer>
      <SlideTitle in={showTitle}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
      </SlideTitle>
      <ContactForm />
      <PhonebookSubTitle>Contacts</PhonebookSubTitle>
      <ContactFilter />
      <ContactList />
      <Notification autoClose={1500} />
    </PhonebookContainer>
  );
};

Phonebook.propTypes = {
  getAllContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
};

export default Phonebook;
