import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContact: (state, action) => {
      return state.concat(action.payload);
    },

    deleteContact: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    prepare(text) {
      return {
        payload: {
          text,
          id: nanoid(),
        },
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const tasksReducer = contactsSlice.reducer;
