import React from "react";
class ClassComponentDemo extends React.Component {
  render() {
    return <div>
      <h2>Hello, World!</h2>
      <p>I, am in Class Component.</p>
      <span>Hii, i am {this.props.myName}</span>
    </div>;
  }
}
export default ClassComponentDemo;

/*
Class components are ES6 classes that extend React.Component. 
They allow state management and lifecycle methods for complex UI logic.

Used for stateful components before Hooks.
Support lifecycle methods for mounting, updating, and unmounting.
The render() method in React class components returns JSX elements describing the UI of the Application.


*/
