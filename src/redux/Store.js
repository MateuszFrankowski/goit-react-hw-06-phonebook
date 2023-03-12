import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './Reducer';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';
import { saveToLocalStorage } from 'localStorageHandlers/localStorageHandlers';
export const Store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
Store.subscribe(() => {
  const { contacts } = Store.getState();
  saveToLocalStorage(contacts);
});
