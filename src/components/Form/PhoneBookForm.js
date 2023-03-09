import PropTypes from 'prop-types';
import css from './PhoneBookForm.module.css';
import { addContact } from 'redux/Actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import React from 'react';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const phoneBookContacts = useSelector(state => state.contacts);
  const nameInputId = nanoid();
  const telInputId = nanoid();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.value;
    if (phoneBookContacts.find(element => element.name === name)) {
      return alert(name + ' is already in contacts');
    }
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form} style={{}}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={telInputId}>Number</label>
        <input
          id={telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
