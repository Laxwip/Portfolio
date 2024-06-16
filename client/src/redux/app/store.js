import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colors/colorsSlice';
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    data: dataReducer
  },
});

export default store;
