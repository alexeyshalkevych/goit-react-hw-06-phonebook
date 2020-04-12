import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, InputField, Button } from './ContactForm.styled';

const ContactForm = ({ addContact, changeInput, resetForm, form }) => {
  const { name, number } = form;

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    changeInput(name, value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <Label>
        Number
        <InputField
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  changeInput: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default ContactForm;
