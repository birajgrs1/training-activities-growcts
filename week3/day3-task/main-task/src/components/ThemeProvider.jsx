import { useReducer } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";
import ThemeContext from "../context/ThemeContext";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === "light" ? "#2a9461" : "#4CAF50" },
      secondary: { main: mode === "light" ? "#6a4c9c" : "#9c27b0" },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
  });

export const CustomThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { mode: "light" });

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  const theme = getTheme(state.mode);

  return (
    <ThemeContext.Provider value={{ mode: state.mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
