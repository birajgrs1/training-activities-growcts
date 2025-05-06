import React from "react";
import logo from "../assets/Light.svg"
import { NavLink } from "react-router-dom";
import "../index.css"

const Navbar = () => {

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between text-2xl font-semibold">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {/*  
            <Link to="/">
        
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
            </Link>

            <Link to="/about">
           
              <li className="hover:text-blue-600 cursor-pointer">About</li>
            </Link>
            */}
            <NavLink to="/">
              <li className=" cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer">About</li>
            </NavLink>
            <NavLink to="/users/1">
              <li className="cursor-pointer">User Profile</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
