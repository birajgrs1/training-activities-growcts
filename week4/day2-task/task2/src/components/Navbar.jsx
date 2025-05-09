import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext"; 
import { useAuth } from "../context/AuthContext"; 

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className={`p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Tasks</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/forms" className="hover:text-gray-300">Forms</Link>
          <button onClick={toggleTheme} className="bg-gray-700 px-3 py-1 rounded-md">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          {isAuthenticated ? (
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded-md">Logout</button>
          ) : (
            <button onClick={login} className="bg-green-500 px-3 py-1 rounded-md">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
