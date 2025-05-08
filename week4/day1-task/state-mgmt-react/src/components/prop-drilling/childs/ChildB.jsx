import React from "react";
import ChildC from "./ChildC";


const ChildB = ({fname, lname}) => {
  return <>
  <p>I am a ChildB component.</p>
  <ChildC fname={fname} lname={lname}/>
  </>;
};

export default ChildB;
