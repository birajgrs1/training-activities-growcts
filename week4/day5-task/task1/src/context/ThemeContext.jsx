// ThemeProvider.jsx
import React, { createContext, useContext, useEffect } from 'react';
import { useUISlice } from '../store/uiSlice';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useUISlice();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
