import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getValue } from 'redux/selectors';

export const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filter = useSelector(getValue);
  const dispatch = useDispatch();

  const normalized = filter.toLocaleLowerCase();
  const contacts = contactsState.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
