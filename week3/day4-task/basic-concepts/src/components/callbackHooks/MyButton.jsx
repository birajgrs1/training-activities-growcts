import React from "react";

const MyButton = ({ handleClick, children }) => {
  console.log("Rendering button ---->  ", children);
  return (
    <>
      <button onClick={handleClick} className="myBtn"> {children} </button>
    </>
  );
};

export default MyButton;
