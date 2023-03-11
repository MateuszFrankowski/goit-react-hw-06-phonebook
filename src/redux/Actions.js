import { createAction } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
export const addContactAction = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name: name,
        number: number,
      },
    };
  }
);
export const deleteContactAction = createAction(
  'contacts/deleteContact',
  id => {
    return {
      payload: id,
    };
  }
);
export const setNameFilterAction = createAction(
  'filter/setNameFilter',
  filter => {
    return {
      payload: filter,
    };
  }
);
