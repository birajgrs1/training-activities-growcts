import React from "react";
import { useRef } from "react";

const UseRefDemo = () => {
  const myRef = useRef(0);
  const inputHandler = () => {
    console.log(myRef);
    myRef.current.focus();
    myRef.current.placeholder = "Enter your favourate word";
    myRef.current.style.color = "pink";
  };
  return (
    <>
      <input
        type="text"
        ref={myRef}
        placeholder="Enter any words"
        className="w-[300px] h-[40px] pl-[24px] text-base border-2 border-[#aaa] rounded-lg bg-[#e0f7fa] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 placeholder:text-[#00796b] transition-colors duration-300 ease-in-out"
      />

      <button className="myBtn" onClick={inputHandler}>
        Control Input Field
      </button>
    </>
  );
};

export default UseRefDemo;



/*
The useRef Hook is a built-in React Hook that returns a mutable reference object (ref) that persists 
across renders. Unlike state variables, updating a ref does not trigger a component re-render.

Syntax

const refContainer = useRef(initialValue);
useRef returns an object { current: initialValue }.
The .current property can be updated without re-rendering the component.


When to Use useRef?
You should use useRef when

Accessing and manipulating DOM elements without triggering re-renders.
Persisting values across renders without causing re-renders.
Storing previous state values to compare changes between renders.
Optimizing performance by avoiding unnecessary state updates.


useRef vs useState
While both useRef and useState can store values, they behave differently:

useRef does not trigger re-renders when updated, making it ideal for persisting values between renders.
useState triggers re-renders whenever the state value is updated.
Use useRef for storing references and preserving values, and useState for UI updates.
*/