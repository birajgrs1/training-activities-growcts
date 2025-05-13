import { createSlice } from '@reduxjs/toolkit';

const errorLogSlice = createSlice({
  name: 'errorLog',
  initialState: {
    logs: [],
  },
  reducers: {
    logError: (state, action) => {
      state.logs.push({ message: action.payload, time: new Date().toISOString() });
    },
  },
});

export const { logError } = errorLogSlice.actions;
export default errorLogSlice.reducer;
