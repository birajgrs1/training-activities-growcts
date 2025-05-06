import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../../pages/Contact"

const ContactLayout = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default ContactLayout;

/*

Nested Routes in React :::

Nested Routes in React are used to create multi level navigation. 
It allows us to build complex layouts rendering components at different levels. 
It is done with the help of Outlet component provided by react router dom.

Syntax:
// Define Nested Routes
<Route path="parent" element ={<Parent />}>
    <Route path="child" element = {<Child/>}/>
</Route >

// Define Outlet position to render child
const Parent = ()=>{
    return(<Outlet />)
}



What is React Outlet?
The <Outlet> component is a placeholder within a parent route's component that tells React Router where
to render the child routes. It acts like a dynamic container that changes its content based on the 
current URL.

This feature helps in managing complex layouts where a portion of the page remains consistent, 
such as headers or sidebars, while other parts change dynamically based on the route.

How does it work: 
When the URL matches a parent route, the React Router looks for an <Outlet> within 
that parent's component. It then renders the matching child route's component into that <Outlet>.


*/
