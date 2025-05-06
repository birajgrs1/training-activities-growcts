import React from "react";
import Navbar from "../../components/react-router/Navbar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <Outlet/>
        </div>
       
    </div>
  );
};

export default Rootlayout;
