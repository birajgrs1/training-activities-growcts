import { useEffect, useRef } from "react";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/*
The usePrevious hook is a useful tool for tracking the previous value of a variable
in a functional component. 
This can be particularly handy in scenarios where it is necessary to compare the current value 
with the previous one, such as triggering actions or rendering based on changes.

Parameters:

Name	Type	 Description
newValue --> any--> 	  The new value to track and return the previous of.

Return Value:

Name	Type	Description
previousValue---> 	any ---> 	The previous value of the provided newValue.
*/
