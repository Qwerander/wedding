import { configureStore } from '@reduxjs/toolkit';
import data from './reducers/dataSlice';

export const store = configureStore({
  reducer: {
   data
  },
});
