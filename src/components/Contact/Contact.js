import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

const Contact = ({ item: { id, name, number }, deleteContact }) => {
  const deleteContactItem = () => {
    deleteContact(id);
  };

  return (
    <ContactContainer>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton type="button" onClick={deleteContactItem}>
        &#10006;
      </DeleteButton>
    </ContactContainer>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
