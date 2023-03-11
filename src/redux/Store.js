import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './Reducer';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';
export const Store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
