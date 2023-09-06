import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import data from './reducers/dataSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false, // Отключение проверки на сериализуемость
  }),
];

export const store = configureStore({
  reducer: {
   data
  },
  middleware,
});
