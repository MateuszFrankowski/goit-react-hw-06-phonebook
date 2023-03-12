import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from 'localStorageHandlers/localStorageHandlers';
const contacsInitialState = loadFromLocalStorage()
  ? loadFromLocalStorage()
  : [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacsInitialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
