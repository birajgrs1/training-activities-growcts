import React, { useState } from "react";
import IamChild from "../child/IamChild";
// import DemoContext from "../useContext/DemoContext"; 
import DemoContext from "../useContext/DemoContext";

const IamParent = () => {
  const [value, setValue] = useState("Hey, my child!");

  return (
    <DemoContext.Provider value={value}> 
      <IamChild />
    </DemoContext.Provider>
  );
};

export default IamParent;
