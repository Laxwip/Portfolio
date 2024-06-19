import { createSlice } from "@reduxjs/toolkit";

export const conditionSlice = createSlice({
  name: 'condition',
  initialState: {
    isOpenMenubar: false,
  },
  reducers: {
    toggleMenubar: (state, action) => {
      state.isOpenMenubar = action.payload
    }
  }
})

export const { toggleMenubar } = conditionSlice.actions

export default conditionSlice.reducer
