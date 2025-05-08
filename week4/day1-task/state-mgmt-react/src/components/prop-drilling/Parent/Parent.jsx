import React, { useState, useEffect } from "react";
import ChildA from "../childs/ChildA";

const Parent = () => {
  const [fname, setFname] = useState("firstName");
  const [lname, setLname] = useState("lastName");

  useEffect(() => {
    setFname("Biraj");
    setLname("Ghorasaine");
  }, []); 

  return (
    <div>
      <h4>Hi, I am a parent component.</h4>
      <ChildA fname={fname} lname={lname} />
    </div>
  );
};

export default Parent;



/*
Prop drilling refers to the practice of passing data through several layers of nested components in
React, even though intermediate components don’t directly utilize this data. 
This means that a middle component doesn’t necessarily need the data, but it must still pass it down 
to the next component, creating an unnecessary and sometimes lengthy chain of props.

Why Prop Drilling is Problematic?
Prop drilling is problematic because:

Code Complexity: It makes the component tree overly complicated, as intermediate components receive 
and forward props without using them, cluttering your code and causing confusion.

Maintenance Overhead: Any change to the props requires updating multiple components, which can be 
time-consuming and error-prone.

Reduced Readability: It becomes difficult to trace how and where data flows through components, making 
debugging and development more challenging.

Tight Component Coupling: Components become less reusable and more tightly coupled, leading to reduced 
flexibility and difficulties in refactoring.

Scalability Issues: As your application grows, prop drilling worsens, leading to further complexity 
and making the app harder to scale effectively.


How to avoid Prop Drilling:

1. Using Context API
The React Context API provides a way to share values 
(like state, functions, or constants) between components without explicitly passing prop.

2. Using Custom Hooks
Custom hooks are reusable functions in React that encapsulate stateful logic, 
starting with use (e.g., useFetch). 
They improve code reusability, keep components clean, and allow sharing logic across components.

3. Global State Management (Redux, Zustand, MobX)
In this approach we use libraries such as Redux, Zustand, or MobX manage application state globally, 
eliminating the need for prop drilling entirely.

*/
