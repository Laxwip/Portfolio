import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colors/colorsSlice';
import dataReducer from '../features/data/dataSlice';
import conditionReducer from '../features/condition/conditionSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    data: dataReducer,
    condition: conditionReducer,
    modal: modalReducer,
  },
});

export default store;
