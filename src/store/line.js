import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'lines',
  initialState: [],
  reducers: {
    addLine(state, action) {
      state.push({...action.payload, id: state.length});
    },
    removeLine(state, action) {
      state.splice(state.findIndex(line => line.id === action.payload), 1);
    }
  }
});

export const {
  addLine,
  removeLine
} = slice.actions;

export default slice.reducer;
