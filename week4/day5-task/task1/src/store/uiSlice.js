import {create} from 'zustand';

export const useUISlice = create((set) => ({
  theme: 'light',
  language: 'en',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  setLanguage: (lang) => set({ language: lang }),
}));
