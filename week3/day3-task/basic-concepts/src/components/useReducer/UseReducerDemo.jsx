import React, { useReducer } from "react";

// const initialState = 0;
const initialState ={
    firstCounterVal: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
    //   return state + 1;
    return {firstCounterVal: state.firstCounterVal+1};
    case "DECREMENT":
    //   return state - 1;
    return {firstCounterVal: state.firstCounterVal-1};
    case "RESET":
      return initialState;

    default:
      return state;
  }
};
const UseReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count: {count.firstCounterVal}</h2>

      <button className="myBtn" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className="myBtn" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button className="myBtn"  onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default UseReducerDemo;

/*
useReducer hook:

The useReducer hook is an alternative to the useState hook that is preferred when you have complex 
state logic. 
It is useful when the state transitions depend on previous state values or when you need to handle 
actions that can update the state differently.

Syntax

const [state, dispatch] = useReducer(reducer, initialState);

reducer: A function that defines how the state should be updated based on the action. 
It takes two parameters: the current state and the action.
initialState: The initial value of the state.
Statestates: The current state returned from the useReducer hook.
dispatch: A function used to send an action to the reducer to update the state.

*/
