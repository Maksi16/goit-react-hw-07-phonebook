import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, SubTitle } from './App.styled';

export function App() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </>
  );
}
