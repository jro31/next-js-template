import { createSlice } from '@reduxjs/toolkit';

const testReducerSlice = createSlice({
  name: 'test-reducer',
  initialState: {
    testReducerState: true,
  },
  reducers: {
    setTestReducerState(state) {
      state.testReducerState = !state.testReducerState;
    },
  },
});

export const testReducerActions = testReducerSlice.actions;

export default testReducerSlice.reducer;
