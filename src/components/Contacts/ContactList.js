import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Actions';
export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const phoneBookContacts = useSelector(state => state.contacts);
  const [phoneContacts] =
    filter.length > 0
      ? phoneBookContacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : phoneBookContacts;
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css['contacts-list']}>
      {phoneContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.name}>{contact.name}</p>
          <p className={css.number}>{contact.number}</p>
          <button
            className={css.button}
            id={contact.name}
            onClick={handleDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
