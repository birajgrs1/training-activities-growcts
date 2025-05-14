import React, { createContext, useContext } from 'react';
import { useUISlice } from '../store/uiSlice';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { language, setLanguage } = useUISlice();
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
