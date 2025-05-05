import React from "react";

const IAmChild = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h4>Current Count: {count}</h4>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}  className="myBtn">Increment from Child</button>
      <button onClick={onDecrement}  className="myBtn">Decrement from Child</button>
    </>
  );
};
export default IAmChild;
