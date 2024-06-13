import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Función para obtener el tema del local storage o el tema del sistema
const getInitialTheme = () => {
  // Si el tema está guardado en el local storage, lo devolvemos
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  // Si no, devolvemos el tema del sistema
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? "dark" : "light";
};

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = colorsSlice.actions;

export default colorsSlice.reducer;