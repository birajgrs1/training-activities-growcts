import { useState } from "react";

const UseStateDemo = () => {
  /*
  React hooks are a powerful feature in React that allow you to add state and other features to 
  functional components. They were introduced in React 16.8.

  useState hook: 
  The useState hook allows you to add state to a functional component. 
  It takes an initial value as an argument and returns an array with two elements: 
  the current state value and a function to update it.
  */

  /*
  // Counter example with useState
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  */

  // Using useState with objects
  const [name, setName] = useState({ fname: "", lname: "" });


  return (
    <>
      {/* Counter UI - Uncomment to test counter */}
      {/*
      <p className="text-purple-900 text-lg">Counter: {count}</p>
      <div className="flex items-center justify-center">
        <button className="myBtn" onClick={() => setCount(count + 1)}>
          Counter = {count}
        </button>
        <button className="myBtn" onClick={incrementCount}>
          Increment
        </button>
        <button className="myBtn" onClick={decrementCount}>
          Decrement
        </button>
      </div>
      */}

      {/* With objects */}
      <form>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name, fname: e.target.value })}
          className="border border-[#aaa] bg-yellow-100 p-2 m-2"
          placeholder="First Name"
        />
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
          className="border border-[#aaa] bg-yellow-100 p-2 m-2"
          placeholder="Last Name"
        />

        <h2>First Name is : {name.fname}</h2>
        <h2>Last Name is : {name.lname}</h2>
      </form>
    </>
  );
};

export default UseStateDemo;


/*
Note: 
The first element is the current value of the state, and the second element is a state setter 
function.
*/
