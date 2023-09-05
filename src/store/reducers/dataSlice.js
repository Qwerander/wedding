import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};



export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
