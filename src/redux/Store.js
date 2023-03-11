import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './Reducer';

export const Store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
