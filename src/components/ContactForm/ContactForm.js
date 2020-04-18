import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, InputField, Button } from './ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const [form, setForm] = useState(initialState);
  const { name, number } = form;

  const resetForm = () => {
    setForm(initialState);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
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
};

export default ContactForm;
