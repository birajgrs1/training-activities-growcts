import React from 'react';
import { useTheme } from '../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </button>
  );
};

export default ThemeToggle;
