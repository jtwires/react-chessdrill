import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: {
    study: undefined,
    line: undefined
  },
  reducers: {
    setLine(state, action) {
      state.line = action.payload;
    },
    setStudy(state, action) {
      state.study = action.payload;
    }
  }
});

export const {
  setLine,
  setStudy
} = slice.actions;

export default slice.reducer;
