import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getValue } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

export const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalized = filter.toLocaleLowerCase();
  const contactsFilter = contacts?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  const contactsState = contactsFilter.sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <List>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts &&
        contactsState.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>
              {name} : {phone}
            </p>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
};
