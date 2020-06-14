import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'studies',
  initialState: [],
  reducers: {
    addStudy(state, action) {
      state.push({...action.payload, id: state.length});
    },
    removeStudy(state, action) {
      state.splice(state.findIndex(study => study.id === action.payload), 1);
    }
  }
});

export const {
  addStudy,
  removeStudy
} = slice.actions;

export default slice.reducer;
