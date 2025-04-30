import React from "react";

const FunctionalComponentDemo = (props) => {
  return (
    <div>
      <h2>Hello, World!</h2>
      <p>I, am in Functional Component.</p>
      <span>Hii, i am {props.myName}</span>
      
    </div>
  );
};

export default FunctionalComponentDemo;

/*
ReactJS functional components are JavaScript functions that return a JSX element, which is a 
template used to define the component’s structure. 
JSX looks similar to HTML, but it has a special syntax that lets it be converted into JavaScript code.

Stateless (before hooks): Originally, functional components were stateless and used only for rendering 
UI based on props.
Simpler Syntax: They are defined as JavaScript functions, leading to cleaner and more readable code.
Return JSX: Functional components return JSX (a syntax extension that allows HTML-like code inside
JavaScript).
No, this keyword: Unlike class components, functional components do not have a this context.
Hooks: With hooks, functional components can manage state and side effects, making them just as 
powerful as class components.
*/

/*
Props in React are the objects used to pass data/information to a Component. It is short for Properties. 
It is responsible for passing the data to components and render the dynamic content.

Passing and Accessing props
// Passing Props
<DemoComponent sampleProp = "HelloProp" />

Syntax
// Accessing props in class components
this.props.propName;

// Accessing props in functional components 
props.propName;
*/
