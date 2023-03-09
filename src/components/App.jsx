import { ContactForm } from './Form/PhoneBookForm';
import { ContactsList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const phoneBookContacts = useSelector(state => state.contacts);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {phoneBookContacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      )}
    </div>
  );
};
