import React from "react";
import { useTheme } from "../useContext/ThemeContext";

const Body = () => {
  const { theme, toggleTheme } = useTheme();

  const bodyClasses = {
    light: "bg-white text-gray-800",
    dark: "bg-gray-800 text-white",
  };
  return (
    <div
      className={`${bodyClasses[theme]} min-h-screen flex flex-col items-center justify-center transition-all`}
    >
      <h1 className="text-4xl mb-6">
        Current Theme: {theme === "light" ? "Light" : "Dark"}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Body;
