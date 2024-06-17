import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colors/colorsSlice';
import dataReducer from '../features/data/dataSlice';
import conditionReducer from '../features/condition/conditionSlice';

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    data: dataReducer,
    condition: conditionReducer
  },
});

export default store;
