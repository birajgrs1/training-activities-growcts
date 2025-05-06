import React from "react";
import logo from "../../assets/Light.svg";
// import { Link } from "react-router-dom";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    // const navigate = useNavigate();

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
            <Link to="/products">
           
              <li className="hover:text-blue-600 cursor-pointer">Products</li>
            </Link>
            <Link to="/about">
           
              <li className="hover:text-blue-600 cursor-pointer">About</li>
            </Link>
            <Link to="/contact">
            
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </Link>
            */}
            <NavLink to="/">
              <li className=" cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/products">
              <li className=" cursor-pointer">Products</li>
            </NavLink>
            <NavLink to="/about">
              <li className="cursor-pointer">About</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="cursor-pointer">Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
      {/* <button className="myBtn" onClick={() => navigate('/about')}>Go to about page</button> */}
    </>
  );
};

export default Navbar;

/*
 Link and NavLink
Link: Creates navigational links in your application.
NavLink: Similar to Link but provides additional styling attributes when the link is active.




useNavigate hook:

React Router v6 introduces the useNavigate() hook, making it easier and more flexible to navigate 
between different pages in your app. It replaces the older useHistory() hook.

With the useNavigate() hook, you can:
-> Go to a different page in your app.
-> Navigate based on actions like button clicks.
-> Send data or parameters when moving to another page.

Syntax:
const navigate = useNavigate();
navigate('/targetpath')
navigate('/path', { replace: true }); 
*/
