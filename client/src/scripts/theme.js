// import { useState, useEffect } from "react";

// function useTheme() {
//   // Detectar el tema preferido del usuario
//   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   // Estado inicial basado en localStorage o preferencia del navegador
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme ? savedTheme : (prefersDarkScheme ? "dark" : "light");
//   });

//   // Actualizar el tema y guardarlo en localStorage
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // Alternar entre los temas
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return [theme, toggleTheme];
// }

// export default useTheme;
