import React from "react";

const ChildC_1 = ({ fname, lname }) => {
  return (
    <>
      <p>This is ChildC_1 component.</p>
      <h3>Data from Parent component is as follows:</h3>
      <h4>First Name: {fname}</h4>
      <h4>Last Name: {lname}</h4>
    </>
  );
};

export default ChildC_1;
