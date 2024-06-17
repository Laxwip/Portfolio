import { createSlice } from "@reduxjs/toolkit";

export const conditionSlice = createSlice({
  name: 'condition',
  initialState: {
    isOpenMenubar: false,
  },
  reducers: {
    toggleMenubar: (state) => {
      state.isOpenMenubar = !state.isOpenMenubar
    }
  }
})

export const { toggleMenubar } = conditionSlice.actions

export default conditionSlice.reducer
