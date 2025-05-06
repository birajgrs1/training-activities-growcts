import React, { useState, useMemo } from "react";


const items = [
  "Apple",
  "Ball",
  "Cat",
  "Doll",
  "Egg",
  "Hat",
  "Fish",
  "Guava",
  "Knife",
];


const DemoUseMemo = () => {

//   Filtering a List of Values
  const [query, setQuery] = useState("");

  const filteredList = useMemo(() => {
    return items.filter((item) =>
      //this is to ensure our value is found regardless of case it's typed in
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]); //recalculate only if the searched value changes


  return (
    <>

      <input
        placeholder="Search Value"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </>
  );
};

export default DemoUseMemo;


/*
UseMemo is a hook that allows us to memoize, in other words cache, a value of a calculation. 
This means, we don’t need to recalculate the value, unless any of its dependencies change.

As a result, this improves performance. However, we should be careful not to overuse useMemo, as React
already has some efficient optimizations for re-renders in place. So when should we use it?

Use useMemo only when recalculating a value is a computationally expensive process which can impede 
performance.

Syntax

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
The first argument is a function that returns the computed value.
The second argument is an array of dependen


*/
