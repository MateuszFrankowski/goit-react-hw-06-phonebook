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
        backgroundColor: ' whitesmoke',
      }}
    >
      <ContactForm />
      {!!phoneBookContacts > 0 && (
        <div>
          <Filter />
          <ContactsList />
        </div>
      )}
    </div>
  );
};
