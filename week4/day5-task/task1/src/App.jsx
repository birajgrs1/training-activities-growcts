import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useStore } from './store/useStore';

const App = () => {
  const { user, login, logout } = useStore();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <header>
            <h1 className="text-xl">My App</h1>
            <div className="flex space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </header>
          <main className="p-4">
            {!user ? (
              <button
                onClick={() => login({ name: 'Ram Dahal' })}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Login
              </button>
            ) : (
              <div>
                <p>Welcome, {user.name}!</p>
                <button
                  onClick={logout}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
