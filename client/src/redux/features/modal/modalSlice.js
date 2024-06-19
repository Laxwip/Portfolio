import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    // showM_editing: false,
    // showM_edited: false,
    // showM_deleting: false,
    // showM_deleted: false,
    // showM_creating: false,
    // showM_created: false,
    showM_menu: false,
    // menuPosition: { x: 0 , y: 0 },
  },
  reducers: {
    // setShowM_editing: (state, action) => {
    //   state.showM_editing = action.payload;
    // },
    // setShowM_edited: (state, action) => {
    //   state.showM_edited = action.payload;
    // },
    // setShowM_deleting: (state, action) => {
    //   state.showM_deleting = action.payload;
    // },
    // setShowM_deleted: (state, action) => {
    //   state.showM_deleted = action.payload;
    // },
    setShowM_menu: (state, action) => {
      state.showM_menu = action.payload;
    },
    // setMenuPosition: (state, action) => {
    //   state.menuPosition = action.payload;
    // },
    // setShowM_created: (state, action) => {
    //   state.showM_created = action.payload;
    // }
  }
})

export const { setShowM_menu } = modalSlice.actions;
export default modalSlice.reducer;