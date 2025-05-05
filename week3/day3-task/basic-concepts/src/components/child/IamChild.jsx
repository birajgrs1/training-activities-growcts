import React, { useContext } from "react";
import DemoContext from "../useContext/DemoContext";

const IamChild = () => {
  const contextValue = useContext(DemoContext);

  return <h1>{contextValue}</h1>;
};

export default IamChild;
