import React, { useState, useEffect } from "react";
import { MyContext } from "../../../context/myContext";
// import MyContext from "../context/myContext";
import ChildA_1 from "../childs/ChildA_1";

const Parent_1 = () => {
  const [fname, setFname] = useState("firstName");
  const [lname, setLname] = useState("lastName");

  useEffect(() => {
    setFname("Biraj");
    setLname("Ghrs..");
  }, []); 
  return (
    <MyContext.Provider value={{ fname, lname }}>
      <h4>Hi, I am a parent component1.</h4>
      <ChildA_1 />
    </MyContext.Provider>
  );
};

export default Parent_1;
