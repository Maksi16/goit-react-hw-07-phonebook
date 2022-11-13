import { createSlice } from '@reduxjs/toolkit';

const filtersInitialText = {
  text: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialText,
  reducers: {
    setTextFilter: {
      reducer(state, action) {
        state.text = action.payload;
      },
    },
  },
});

export const { setTextFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
