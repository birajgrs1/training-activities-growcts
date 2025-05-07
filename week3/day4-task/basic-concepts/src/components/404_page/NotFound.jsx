import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return <div className="flex items-center justify-center m-[60px]">
    <h2 className="font-[800] text-[32px]"> 404 | Page not Found</h2>
    <button type="button" className=" m-[20px] myBtn" onClick={()=> navigate('/')}>Go to home</button>
  </div>;
};

export default NotFound;


/*
When you’re building a React app with routing, it’s important to handle cases where users land on a 
page that doesn’t exist. 

A 404 page is a good way to inform users that the page they’re looking for cannot be found.

Setting up a 404 page is crucial for improving user experience.

First, create a PageNotFound component.
Import this component into the app.js or where the routes are defined.
Define routing for other pages first.
In the last route component, use * as the URL path for the 404 page.
404 page.
*/
