import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colors/colorsSlice';

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
  },
});

export default store;
