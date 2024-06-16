import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
  'data/fetchProjects', 
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://portfolio-0zhv.onrender.com/projects');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dataProjects: [],
    dataProjectsRespald: [],
    isLoading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataProjects = action.payload;
        state.dataProjectsRespald = action.payload;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.dataProjects = [];
        state.dataProjectsRespald = [];
      })
  }
})

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;