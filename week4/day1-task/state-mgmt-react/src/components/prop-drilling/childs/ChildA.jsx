import React from "react";
import ChildB from "../childs/ChildB";

const ChildA = ({fname, lname}) => {
  return <>
  <p> I am a ChildA component.</p>
     <ChildB fname={fname} lname = {lname}></ChildB>
  </>;
};

export default ChildA;
