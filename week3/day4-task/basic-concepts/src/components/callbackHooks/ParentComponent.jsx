import React, { useState, useCallback } from "react";
import MyButton from "./MyButton";
import Title from "./Title";
import HandelCount from "./HandelCount";

const ParentComponent = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(30000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <>
      <Title />
      <HandelCount text={age} count={age} />
      <MyButton handleClick={incrementAge}>Increment Age</MyButton>
      <HandelCount text="Salary" count={salary} />
      <MyButton handleClick={incrementSalary}>Increment Salary</MyButton>
    </>
  );
};
export default ParentComponent;

/*
What is useCallback?

The useCallback hook is a performance optimization mechanism in React that helps prevent unnecessary 
re-renders of child components when their parent component re-renders. It achieves this by memoizing 
(caching) callback functions based on their dependencies. If the dependencies haven't changed, 
the same function reference is returned, avoiding the creation of a new function object on every render.

When to Use useCallback:

Passing callbacks as props to child components: When a parent component passes a callback function as a
prop to a child component, and the child component relies on the same callback reference across renders
(e.g., for event handlers), useCallback can prevent the child from re-rendering unnecessarily 
due to a change in the parent's state or props.

Callbacks that are expensive to create: If creating the callback function involves complex calculations 
or fetching data, using useCallback can improve performance by ensuring it's only created when 
its dependencies change.

When not to use useCallback()
While useCallback() is a powerful optimization tool, it may not be necessary in scenarios like:

For simple React components that do not re-render often.
When the callback is only used within the component and not passed as a prop or used in a dependency 
array.
If the performance gain is negligible compared to the added complexity.

Syntax

const memoizedCallback = useCallback(() => {
    // Function logic
}, [dependencies]);
The function to be memoized is passed as a parameter to useCallback.
An array of dependencies determines when the function should be recreated.


*/
