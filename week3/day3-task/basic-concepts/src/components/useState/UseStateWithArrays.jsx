import React, { useState } from "react";

const UseStateWithArrays = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  /*
  const addItems = () => {
    setItems([
      ...itmes,
      { id: itmes.length, value: Math.floor(Math.random() * 10 + 1) },
    ]);
  };
  */
  //  Inputting string as an array-lists

  const addItems = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, { id: items.length, value: inputValue }]);
    setInputValue("");
  };

  return (
    <>
      {/* 
      <button className="myBtn" onClick={addItems}>
        Add numbers
      </button>
       */}
            <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="myBtn" onClick={addItems}>
        Add Item
      </button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </>
  );
};

export default UseStateWithArrays;
