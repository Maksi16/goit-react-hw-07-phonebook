import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Label, Form, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const idName = nanoid(5);
  const idNumber = nanoid(5);
  const contactId = nanoid(5);
  const { contacts } = useSelector(getContacts);
  const [nameForm, setNameForm] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handlerChangName = e => {
    setNameForm(e.target.value);
  };
  const handlerChangNumber = e => {
    setNumber(e.target.value);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === nameForm.toLowerCase()
      )
    ) {
      toast.error(`${nameForm} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: contactId, name: nameForm, phone: number }));
    reset();
  };
  const reset = () => {
    setNameForm('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handlerSubmit}>
        <Label>
          Name
          <Input
            id={idName}
            type="text"
            name="name"
            onChange={handlerChangName}
            value={nameForm}
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="">
          Number
          <Input
            id={idNumber}
            type="tel"
            name="number"
            onChange={handlerChangNumber}
            value={number}
            placeholder="Enter a phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};
