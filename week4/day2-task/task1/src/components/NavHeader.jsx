import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-[#f5edf5] text-[#1a011a] text-[24px]">
      <div className="nav-container mx-auto px-6 py-4 flex items-center justify-between w-full max-w-screen-xl">
        <div className="text-2xl font-bold">Todo App</div>

        <ul className="flex space-x-8 font-medium">
          <li>
            <Link to="/" className="cursor-pointer hover:text-[#8e4e8e] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="cursor-pointer hover:text-[#8e4e8e] transition-colors">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
