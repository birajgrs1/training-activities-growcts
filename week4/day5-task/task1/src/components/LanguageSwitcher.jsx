import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      <option value="en">English</option>
      <option value="ne">नेपाली</option>
    </select>
  );
};

export default LanguageSwitcher;
