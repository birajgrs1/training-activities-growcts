import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Rootlayout = () => {
  return (
    <div>
        <Navbar/> 
        <div className="container">
        <BreadCrumb/>
        <Outlet/>
        </div>
       
    </div>
  );
};

export default Rootlayout;
